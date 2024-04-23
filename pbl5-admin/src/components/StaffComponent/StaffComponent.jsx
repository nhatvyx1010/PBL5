import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table, Modal, DatePicker } from 'antd';
import moment from 'moment'; // Import moment for date manipulation

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
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

const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const [count, setCount] = useState(0);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [recordToUpdate, setRecordToUpdate] = useState(null);
  const [formAdd] = Form.useForm(); // Add this line to create the form instance
  const [formUpdate] = Form.useForm(); // Add this line to create the form instance

  useEffect(() => {
    // Set initial data source
    setDataSource([
      {
        key: '0',
        name: 'Lê Minh Duy',
        age: '20',
        address: 'Đà Nẵng',
        date: moment(), // Set default date to current date
      },
      {
        key: '1',
        name: 'Nguyễn Đức Dũng',
        age: '19',
        address: 'Thanh Hóa',
        date: moment(), // Set default date to current date
      },
      {
        key: '2',
        name: 'Nguyễn Bình Minh',
        age: '20',
        address: 'Quảng Bình',
        date: moment(), // Set default date to current date
      },
    ]);
    setCount(2);
  }, []);

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
    formAdd.resetFields(); // Clear form fields
    setOpenAddModal(false); // Close modal after successful addition
  };

  const handleUpdate = (record) => {
    setRecordToUpdate({ ...record });
    formUpdate.setFieldsValue(record); // Set form fields with current row data
    setOpenUpdateModal(true);
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
  

  const defaultColumns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      width: '30%',
      editable: true,
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'date',
      render: (text, record) => moment(text).format('DD/MM/YYYY'),
    },
    {
      title: '',
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
        Thêm nhân viên
      </Button>
      <Modal
        title="Add Employee"
        centered
        visible={openAddModal}
        onCancel={() => setOpenAddModal(false)}
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
            name="name"
            rules={[{ required: true, message: 'Please input name!' }]}
          >
            <Input />
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
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input address!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please select date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
            Thêm nhân viên
            </Button>
          </div>
        </Form>
      </Modal>

      <Modal
        title="Update Employee"
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
              name="name"
              rules={[{ required: true, message: 'Please input name!' }]}
            >
              <Input />
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
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Please input address!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: 'Please select date!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <div style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit">
                Confirm Update
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
        scroll={{ y: 'calc(100vh - 200px)' }} // Thiết lập chiều cao của thanh cuộn
      />

    </div>
  );
};

export default App;
