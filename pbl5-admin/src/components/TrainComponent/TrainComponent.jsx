import { ConfigProvider, Dropdown, Menu, Modal, Form, Button, Input, Tag } from 'antd';
import moment from 'moment';
import { useState, useEffect } from "react";
import { Table, Popconfirm } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons'

import styled from 'styled-components';

const ActionButton = styled.a`
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #08979c;
  background-color: #e6fffb;
  border: 1px solid #f6ffed;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #13c2c2;
    color: #ffffff;
  }
`;

const App = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const [dataSource, setDataSource] = useState([]);

  
  const getColor = (status) => {
    if (status === 'OPERATIONAL') return 'green'; // Green color
    if (status === 'MAINTENANCE') return 'volcano'; // Red color
  };
 /////////////////       Effect             /////////////////

 
    const getData = () => {
      if (!user.access_token) {
        navigate('/');
      } else {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/trains`, {
          method: "GET",
          headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.access_token}`
          },
        })
        .then((response) => response.json())
        .then((data) => {
          console.log("data: ", data);
          if (data.meta.status_code === 401) {
            alert(data.meta.error);
          } else if (data.meta.status_code === 200 && data.data.result) {
            setDataSource(data.data.result);
          } else {
            alert("Lấy dữ liệu không thành công. Vui lòng thử lại.");
          }
        })        
        .catch((error) => {
          console.error('Error:', error);
          alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
        });
      }
    };

    useEffect(() => {
      getData(user.access_token);
    }, [user.access_token, navigate]);

const columns = [
  {
    title: 'Train ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 150,
    key: 'id',
  },
  {
    title: 'Train Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Total Carriage',
    dataIndex: 'totalCarriage',
    key: 'totalCarriage',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    fixed: 'right',
    width: 120,
    key: 'status',
    render: (status, ) => (
      <>
            {Array.isArray(status) ? (
              status.map((statu) => (
                <Tag color={getColor(statu)} key={statu} style={{ margin: '0 5px', fontSize: '14px' }}>
                  {statu}
                </Tag>
              ))
            ) : (
              <Tag color={getColor(status)} style={{ margin: '0 5px', fontSize: '14px' }}>
                {status}
              </Tag>
            )}
        </>
    ),
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 150,
    render: (record) => (
      <Dropdown
      overlay={
            <Popconfirm
              title={'Bạn có chắc chắn muốn cập nhật?'}
              okText="Đồng ý"
              cancelText="Hủy"
              onConfirm={() => handleUpdate(record)}
              placement="topLeft"
              >
              <ActionButton type="link">Update</ActionButton>
            </Popconfirm>
        // <Menu>
        //   <Menu.Item key="1">
            
        //   </Menu.Item>
        //   <Menu.Item key="2">
        //     <Popconfirm
        //       title="Bạn có chắc chắn muốn xóa tàu?"
        //       okText="Đồng ý"
        //       cancelText="Hủy"
        //       placement="topLeft"
        //       onConfirm={() => handleSecondAction(record)}
        //     >
        //       <ActionButton type="link">Delete</ActionButton>
        //     </Popconfirm>
        //   </Menu.Item>
        // </Menu>
      }
  >
        <ActionButton>
          Action 
        </ActionButton>
      </Dropdown>
      ),
    },
  ];


  /////////////////       UPDATE             /////////////////
  const [formUpdate] = Form.useForm(); // Add this line to create the form instance
  const [recordToUpdate, setRecordToUpdate] = useState(null);
  // const [errorMessage, setErrorMessage] = useState('');
  // console.log("errorMessage: "+errorMessage);

    const [formDataUpdate, setFormDataUpdate] = useState({
      id: '',
      name: '',
      totalCarriage: '',
      status: ''
    });
    const { id, name, totalCarriage, status } = formDataUpdate;

    console.log("--"+id, name, totalCarriage, status);

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
    
    const [selectedStatus, setSelectedStatus] = useState(null);

    
  const handleRowClick = (record) => {
    setFormDataUpdate({ ...formDataUpdate, id: record.id, name: record.name, totalCarriage: record.totalCarriage, status: record.status });
  };
    const handleChangeUpdate = (e) => {
        const { name, value } = e.target;
        setFormDataUpdate({
          ...formDataUpdate,
          [name]: value
        });
      };

      const handleStatusChange = (status) => {
        setSelectedStatus(status);
        setFormDataUpdate({
          ...formDataUpdate,
          status: status
        });
      };
      
    const handleUpdate = (record) => {
      setRecordToUpdate({ ...record });
      formUpdate.setFieldsValue(record); // Set form fields with current row data
      setSelectedStatus(record.status);
      setOpenUpdateModal(true);
    };

    const [openUpdateModal, setOpenUpdateModal] = useState(false);

    const handleDataUpdate = () => {
      console.log("formDataUpdate:  id"+  formDataUpdate.id + " Point" + formDataUpdate.name + " total" + formDataUpdate.totalCarriage + " Point" + formDataUpdate.status);
      
      const formData = new FormData();
      formData.append("name", formDataUpdate.name);
      formData.append("totalCarriage", formDataUpdate.totalCarriage);
      formData.append("status", formDataUpdate.status);
      console.log("FINAL: \nid: "+  recordToUpdate.id + " Point: " + formDataUpdate.name + "status"+ formDataUpdate.status);

      console.log(`${process.env.REACT_APP_API_URL}/api/v1/trains/${recordToUpdate.id}`);
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/trains/${recordToUpdate.id}`, {
          method: "PUT",
          headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.access_token}`
          },
          body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
            console.log("update: ", data);
            if (data.meta.status_code === 200) {
            console.log("update: ", data);
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

  /////////////////       ADD             /////////////////
  const [count, setCount] = useState(0);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [formAdd] = Form.useForm(); // Add this line to create the form instance
  const [errorMessage, setErrorMessage] = useState('');

  const [formDataAdd, setFormDataAdd] = useState({
    nameA: '',
    totalCarriageA: '',
    statusA: ''
  });
  const { nameA, totalCarriageA, statusA } = formDataAdd;
  console.log("--"+nameA, totalCarriageA, statusA);
  
  const handleChangeAdd = (e) => {
    const { name, value } = e.target;
    setFormDataAdd({
      ...formDataAdd,
      [name]: value
    });
  };
  
    const handleCloseAddModal = () => {
      setFormDataAdd({
        nameA: '',
        totalCarriageA: '',
        statusA: ''
      });

      setOpenAddModal(false);
    };

    const handleDataAdd = () => {
        if (!formDataAdd.nameA || !formDataAdd.totalCarriageA ) {
          setErrorMessage("Vui lòng điền đầy đủ thông tin.");
          return;
        } else {
          setErrorMessage('');
        }

        console.log("--name: " + formDataAdd.nameA + "--total: " + formDataAdd.totalCarriageA +" -- msg: "+errorMessage);

        const formData = new FormData();
        formData.append("name", formDataAdd.nameA);
        formData.append("totalCarriage", formDataAdd.totalCarriageA);
    
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/trains`, {
          method: "POST",
          headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.access_token}`
          },
          body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
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


      const handleAdd = (values) => {
        const newData = {
          key: count.toString(),
          ...values,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
        formDataAdd.resetFields();
        setOpenAddModal(false); // Close modal after successful addition
      };

 

  return (
    <>
         <Button type="primary" onClick={() => setOpenAddModal(true)} style={{ marginBottom: '20px' }}>
           Thêm Station
         </Button>
         <Modal
            title="Add Station"
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
                name="nameA"
                rules={[{ required: true, message: 'Please input station name!' }]}
              >
                <Input 
                  type="text" 
                  name="nameA" 
                  value={nameA} 
                  onChange={handleChangeAdd} 
                  placeholder="Train Name"
                />
              </Form.Item>
              <Form.Item
              label="Total Carriage"
              name="totalCarriageA"
              rules={[{ required: true, message: 'Please input Total Carriage name!' }]}
            >
              <Input 
                type="text" 
                name="totalCarriageA" 
                value={totalCarriageA} 
                onChange={handleChangeAdd} 
                placeholder="Total Carriage"
              />
            </Form.Item>
              <div style={{ textAlign: 'center' }}>
                <Button type="primary" 
                    onClick={handleDataAdd} 
                    >
                  Add Station
                </Button>
              </div>
            </Form>
          </Modal>

      <ConfigProvider>
        {dataSource.length > 0 ? (
          <Table
            columns={columns}
            pagination={{ pageSize: 6 }}
            dataSource={dataSource}
            // scroll={{ x: 1300 }}
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
            })}
          />
        ) : (
          <p>Loading...</p>
        )}
      </ConfigProvider>

      
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
              name="name"
              rules={[{ required: true, message: 'Please input Train name!' }]}
            >
              <Input 
                type="text" 
                name="name" 
                value={name} 
                onChange={handleChangeUpdate} 
                placeholder="Train Name"
              />
            </Form.Item>
            <Form.Item
              label="Total Carriage"
              name="totalCarriage"
              rules={[{ required: true, message: 'Please input Total Carriage name!' }]}
            >
              <Input 
                type="text" 
                name="totalCarriage" 
                value={totalCarriage} 
                onChange={handleChangeUpdate} 
                placeholder="Total Carriage"
              />
            </Form.Item>
            <Form.Item
                label="Status"
                name="status"
                rules={[{ required: true, message: 'Please select status!' }]}
              >
                <Dropdown
                  overlay={
                    <Menu>                    
                      {['OPERATIONAL', 'MAINTENANCE'].map((status) => (
                        <Menu.Item key={status}>
                          <span onClick={() => handleStatusChange(status)}>
                            {status}
                          </span>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  trigger={['click']}
                >
                  {/* <ActionButton>
                    Action <DownOutlined />
                  </ActionButton> */}
                  
                  <ActionButton>
                    {selectedStatus ? selectedStatus : 'Select Status'} <DownOutlined />
                  </ActionButton>
                </Dropdown>
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
    </>
  );
};

export default App;
