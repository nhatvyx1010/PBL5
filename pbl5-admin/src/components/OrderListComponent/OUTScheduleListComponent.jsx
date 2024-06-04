import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types'; // Add PropTypes import
import { Button, Form, Input, Popconfirm, Table, Modal } from 'antd';
import moment from 'moment'; // Import moment for date manipulation

const EditableContext = React.createContext(null);

// const EditableRow = ({ index, ...props }) => {
const EditableRow = ({ ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

// Add PropTypes for EditableRow
EditableRow.propTypes = {
  index: PropTypes.number.isRequired,
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave(record.key, {
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

EditableCell.propTypes = {
  title: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  dataIndex: PropTypes.string.isRequired,
  record: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired,
};

const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const [count, setCount] = useState(0);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [recordToUpdate, setRecordToUpdate] = useState(null);
  const [formAdd] = Form.useForm(); // Add this line to create the form instance
  const [formUpdate] = Form.useForm(); // Add this line to create the form instance
  const [errorMessage, setErrorMessage] = useState('');

  console.log(errorMessage);
  
  const [formDataUpdate, setFormDataUpdate] = useState({
    customerId: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    position: ''
  });

  const { fullName, email, phoneNumber, position } = formDataUpdate;
  // const { customerId, fullName, email, phoneNumber, position } = formDataUpdate;
  
  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;
    setFormDataUpdate({
      ...formDataUpdate,
      [name]: value
    });
  };

  
  const [formDataAdd, setFormDataAdd] = useState({
    fullNameAdd: '',
    usernameAdd: '',
    passwordAdd: '',
    emailAdd: '',
  });
  const { fullNameAdd, usernameAdd, passwordAdd, emailAdd } = formDataAdd;
  
  const handleChangeAdd = (e) => {
    const { name, value } = e.target;
    setFormDataAdd({
      ...formDataAdd,
      [name]: value
    });
  };

  useEffect(() => {
    getData();
  }, []);
  
  const getData = () => {
  
    fetch(process.env.REACT_APP_API_URL + "api/v1/customers", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.meta.status_code === 200) {
        // Xử lý dữ liệu ở đây
        setDataSource(data.data.result);
      } else {
        alert("Không thể lấy dữ liệu từ server. Vui lòng thử lại.");
      }
    })
    .catch((error) => {
      alert("Có lỗi xảy ra. Vui lòng thử lại sau.\n"+error);
    });
  };
  
  const handleDataUpdate = (e) => {
    if (!formDataUpdate.fullName || !formDataUpdate.email || !formDataUpdate.phoneNumber || !formDataUpdate.position) {
        setErrorMessage("Vui lòng điền đầy đủ thông tin.");
        return;
    } else {
        setErrorMessage('');
    }

    const isValidEmailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!isValidEmailPattern.test(formDataUpdate.email)) {
        setErrorMessage("Email không hợp lệ.");
        return;
    } else {
        setErrorMessage('');
    }
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", formDataUpdate.fullName);
    formData.append("email", formDataUpdate.email);
    formData.append("phoneNumber", formDataUpdate.phoneNumber);
    formData.append("position", formDataUpdate.position);


    fetch(`${process.env.REACT_APP_API_URL}api/v1/customers?customerId=${formDataUpdate.customerId}`, {
        method: "PUT",
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.meta.status_code === 201) {
            getData();
            setOpenUpdateModal(false);
        } else {
            alert(" Cập nhật không thành công. Vui lòng thử lại.");
        }
    })
    .catch((error) => {
        console.error('Lỗi:', error);
        alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    });
  };

  const handleDataAdd = () => {
    if (!formDataAdd.fullNameAdd || !formDataAdd.emailAdd || !formDataAdd.usernameAdd || !formDataAdd.passwordAdd) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin.");
      console.log(formDataAdd.fullNameAdd+ "--" + formDataAdd.emailAdd+ "--" +formDataAdd.usernameAdd+ "--" + formDataAdd.passwordAdd+ "--" + "Vui lòng điền đầy đủ thông tin.");
      return;
    } else {
      setErrorMessage('');
    }

    const isValidEmailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!isValidEmailPattern.test(formDataAdd.emailAdd)) {
      console.log("Email không hợp lệ.");
      setErrorMessage("Email không hợp lệ.");
      return;
    } else {
      setErrorMessage('');
    }

    const formData = new FormData();
    formData.append("username", formDataAdd.usernameAdd);
    formData.append("password", formDataAdd.passwordAdd);
    formData.append("email", formDataAdd.emailAdd);
    formData.append("fullName", formDataAdd.fullNameAdd);

    fetch(process.env.REACT_APP_API_URL + "api/v1/auth/register", {
      method: "POST",
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.meta.status_code === 201) {
        getData();
        setOpenAddModal(false);

      } else {
        alert("Đăng ký không thành công. Vui lòng thử lại.");
      }
    })
    .catch((error) => {
      console.error('Lỗi:', error);
      alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    });
  };


  const handleRowClick = (record) => {
    setFormDataUpdate({ ...formDataUpdate, customerId: record.customerId });
  };
  

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleAdd = (values) => {
    const newData = {
      key: count.toString(),
      ...values,
      date: moment(values.date), // Convert date to moment object
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
    formDataAdd.resetFields();
    setOpenAddModal(false); // Close modal after successful addition
  };

  const handleUpdate = (record) => {
    setRecordToUpdate({ ...record });
    formUpdate.setFieldsValue(record); // Set form fields with current row data
    setOpenUpdateModal(true);
  };

  const handleCloseAddModal = () => {
    setFormDataAdd({
      fullNameAdd: '',
      usernameAdd: '',
      passwordAdd: '',
      emailAdd: '',
    });

    setOpenAddModal(false);
  };

  const handleSave = (key, row) => {
    const index = dataSource.findIndex((item) => item.key === key);
    if (index !== -1) {
      const newData = [...dataSource];
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
        date: moment(row.date), // Convert date to moment object
      });
      setDataSource(newData);
      setOpenUpdateModal(false);
    }
  };
  
  const customSorter = (field) => (a, b) => {
    const valueA = a[field] || '';
    const valueB = b[field] || '';

    if (valueA === '' && valueB === '') return 0; 
    if (valueA === '') return 1;
    if (valueB === '') return -1;
    return valueA.localeCompare(valueB);
  };

  const defaultColumns = [
    {
      title: 'name',
      dataIndex: 'fullName',
      editable: true,
      // sorter: (a, b) => a.name.localeCompare(b.name),
      sorter: customSorter('fullName'),
    },
    {
      title: 'email',
      dataIndex: 'email',
      sorter: customSorter('email'),
    },
    {
      title: 'phoneNumber',
      dataIndex: 'phoneNumber',
      sorter: customSorter('phoneNumber'),
    },
    {
      title: 'position',
      dataIndex: 'position',
      sorter: customSorter('position'),
    },
    // {
    //   title: 'date',
    //   dataIndex: 'date',
    //   render: (text, record) => moment(text).format('DD/MM/YYYY'),
    // },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => (
        <div>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
          <a style={{ marginLeft: 8 }} onClick={() => handleUpdate(record)}>
            Update
          </a>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setOpenAddModal(true)} style={{ marginBottom: '20px' }}>
        Thêm khách hàng
      </Button>
      <Modal
        title="Add Employee"
        centered
        visible={openAddModal}
        onCancel={handleCloseAddModal}
        footer={null}
        style={{ textAlign: 'center' }}
      >
        <Form
          layout="vertical"
          onFinish={(values) => {
            handleAdd(values);
            setOpenAddModal(false);
          }}
          form={formAdd} // Pass the form instance to the Form component
        >
          <Form.Item
            label="Name"
            name="fullNameAdd"
            rules={[{ required: true, message: 'Please input name!' }]}
          >
            <Input 
              type="text" 
              name="fullNameAdd" 
              value={fullNameAdd} 
              onChange={handleChangeAdd} 
              placeholder="Họ và tên"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="emailAdd"
            rules={[
              { 
                required: true, 
                message: 'Please input email!' 
              },
              {
                type: 'email',
                message: 'The input is not valid email!',
              },
            ]}
          >
            <Input 
              type="text" 
              name="emailAdd" 
              value={emailAdd} 
              onChange={handleChangeAdd} 
              placeholder="example@gmail.com"/>
          </Form.Item>
          <Form.Item
            label="username"
            name="usernameAdd"
            rules={[{ required: true, message: 'Please input username!' }]}
          >
            <Input 
              type="text" 
              name="usernameAdd" 
              value={usernameAdd} 
              onChange={handleChangeAdd} 
              placeholder="username"
            />
          </Form.Item>
          <Form.Item
            label="password"
            name="passwordAdd"
            rules={[{ required: true, message: 'Please input password!' }]}
          >
            <Input 
              type="text" 
              name="passwordAdd" 
              value={passwordAdd} 
              onChange={handleChangeAdd} 
              placeholder="username"
            />
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            <Button type="primary" 
                onClick={handleDataAdd} 
                >
              Thêm khách hàng
            </Button>
          </div>
        </Form>
      </Modal>

      <Modal
        title="Cập nhật"
        centered
        visible={openUpdateModal}
        onCancel={() => setOpenUpdateModal(false)}
        footer={null}
        style={{ textAlign: 'center' }}
      >
        {recordToUpdate && (
          <Form
            layout="vertical"
            onFinish={(values) => {
              handleSave(recordToUpdate.key, { ...recordToUpdate, ...values });
            }}
            initialValues={recordToUpdate}
            form={formUpdate} // Pass the form instance to the Form component
          >
            <Form.Item
              label="Name"
              name="fullName"
              rules={[{ required: true, message: 'Please input name!' }]}
            >
              <Input 
                type="text" 
                name="fullName" 
                value={fullName} 
                onChange={handleChangeUpdate} 
                placeholder="Họ và tên"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { 
                  required: true, 
                  message: 'Please input email!' 
                },
                {
                  type: 'email',
                  message: 'The input is not valid email!',
                },
              ]}
            >
              <Input 
                type="text" 
                name="email" 
                value={email} 
                onChange={handleChangeUpdate} 
                placeholder="example@gmail.com"/>
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="phoneNumber"
              rules={[
                { 
                  required: true, 
                  message: 'Please input Phone number!' 
                },
                {
                  pattern: /^\d{10}$/,
                  message: 'The input is not valid phone number!',
                },
              ]}
            >
              <Input 
                type="text" 
                name="phoneNumber" 
                value={phoneNumber} 
                onChange={handleChangeUpdate} 
                placeholder="Số điện thoại"/>
            </Form.Item>
            <Form.Item
              label="Position"
              name="position"
              rules={[{ required: true, message: 'Please input position!' }]}
            >
              <Input 
                type="text" 
                name="position" 
                value={position} 
                onChange={handleChangeUpdate} 
                placeholder="Địa chỉ"/>
            </Form.Item>

            <div style={{ textAlign: 'center' }}>
              <Button 
                type="primary" 
                onClick={handleDataUpdate} >
                Cập nhật
              </Button>
            </div>
          </Form>
        )}
      </Modal>

      <Table
        bordered
        dataSource={dataSource}
        columns={defaultColumns}
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        rowClassName="editable-row"
        pagination={false}
        style={{
          maxHeight: '85vh', // Đặt chiều cao là 100vh
        }}
        scroll={{ y: 'calc(100vh - 200px)' }} // Thiết lập chiều cao của thanh cuộn
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />

    </div>
  );
};

export default App;



{/* <Form.Item
              label="Age"
              name="age"
              rules={[
                { 
                  required: true, 
                  message: 'Please input age!' 
                },
                {
                  validator: (_, value) => {
                    if (!value || isNaN(value)) {
                      return Promise.reject('Please input a valid number for age!');
                    }
                    const intValue = parseInt(value);
                    if (intValue <= 0) {
                      return Promise.reject('Age must be greater than 0');
                    }
                    if (!Number.isInteger(intValue)) {
                      return Promise.reject('Age must be an integer!');
                    }
                    return Promise.resolve();
                  },
                }
              ]}
            >
              <Input type="number" />
            </Form.Item> 
          
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: 'Please select date!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>


            
          <Form.Item
            label="Age"
            name="age"
            rules={[
              { 
                required: true, 
                message: 'Please input age!' 
              },
              {
                validator: (_, value) => {
                  if (!value || isNaN(value)) {
                    return Promise.reject('Please input a valid number for age!');
                  }
                  const intValue = parseInt(value);
                  if (intValue <= 0) {
                    return Promise.reject('Age must be greater than 0');
                  }
                  if (!Number.isInteger(intValue)) {
                    return Promise.reject('Age must be an integer!');
                  }
                  return Promise.resolve();
                },
              }
            ]}
          >
            <Input type="number" />
          </Form.Item>
          */}