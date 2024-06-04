import { ConfigProvider, Dropdown, Menu, Modal, Form, Button, Input } from 'antd';
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
  const [customerData, setCustomerData] = useState([]);


  /////////////////       UPDATE             /////////////////
  const [formUpdate] = Form.useForm(); // Add this line to create the form instance
  const [recordToUpdate, setRecordToUpdate] = useState(null);
  // const [errorMessage, setErrorMessage] = useState('');
  // console.log("errorMessage: "+errorMessage);

  

    const [formDataUpdate, setFormDataUpdate] = useState({
      userId: '',
      fullName: '',
      email: '',
      phoneNumber: '',
      position: ''
    });
    const { fullName, email, phoneNumber, position } = formDataUpdate;
    const handleSave = (key, row) => {
      const index = customerData.findIndex((item) => item.key === key);
      if (index !== -1) {
        const newData = [...customerData];
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
          date: moment(row.date), // Convert date to moment object
        });
        setCustomerData(newData);
        setOpenUpdateModal(false);
      }
    };
    
  const handleRowClick = (record) => {
    setFormDataUpdate({ ...formDataUpdate, userId: record.userId });
  };
    const handleChangeUpdate = (e) => {
        const { name, value } = e.target;
        setFormDataUpdate({
          ...formDataUpdate,
          [name]: value
        });
      };
    const handleUpdate = (record) => {
      setRecordToUpdate({ ...record });
      formUpdate.setFieldsValue(record); // Set form fields with current row data
      setOpenUpdateModal(true);
    };

    const getData = () => {
      if (!user.access_token) {
        navigate('/');
      } else {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/providers`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${user.access_token}`
          },
        })
        .then((response) => response.json())
        .then((data) => {
          console.log("data: ", data);
          if (data.meta.status_code === 401) {
            alert(data.meta.error);
          } else if (data.meta.status_code === 200 && data.data.result) {
            setCustomerData(data.data.result);
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
  

  const [openUpdateModal, setOpenUpdateModal] = useState(false);

    const handleDataUpdate = () => {


      console.log("id"+  formDataUpdate.userId + " -- "+ formDataUpdate.fullName + " " + formDataUpdate.email + " " + formDataUpdate.phoneNumber)
      const formData = new FormData();
      formData.append("fullName", formDataUpdate.fullName);
      formData.append("email", formDataUpdate.email);
      formData.append("phoneNumber", formDataUpdate.phoneNumber);

      console.log(`${process.env.REACT_APP_API_URL}/api/v1/providers/${formDataUpdate.userId}`);
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/providers/${formDataUpdate.userId}`, {
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

  

  useEffect(() => {
    getData(user.access_token);
  }, [user.access_token, navigate]);

  const timestampToDatetime = (timestamp) => {
    return moment.unix(timestamp).format('DD-MM-YYYY HH:mm:ss');
  };

  const columns = [
    {
      title: 'User ID',
      dataIndex: 'userId',
      fixed: 'left',
      key: 'userId',
    },{
      title: 'User ID',
      dataIndex: 'userId',
      fixed: 'left',
      key: 'userId',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => timestampToDatetime(createdAt),
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (updatedAt) => timestampToDatetime(updatedAt),
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 150,
      render: (record) => (
        <Dropdown
      overlay={
        <Menu>
          <Menu.Item key="1">
            <Popconfirm
              title='Bạn có chắc chắn muốn cập nhật?'
              okText="Đồng ý"
              cancelText="Hủy"
              onConfirm={() => handleUpdate(record)}
            >
              <ActionButton type="link">Update</ActionButton>
            </Popconfirm>
          </Menu.Item>
          <Menu.Item key="2">
            <Popconfirm
              title="Bạn có chắc chắn muốn xóa?"
              okText="Đồng ý"
              cancelText="Hủy"
              onConfirm={() => handleSecondAction(record)}
            >
              <ActionButton type="link">Delect</ActionButton>
            </Popconfirm>
          </Menu.Item>
        </Menu>
      }
    >
      <ActionButton>
        Action <DownOutlined />
      </ActionButton>
    </Dropdown>
        ),
      },
    ];

  const handleSecondAction = (record) => {
    console.log("record2", record);
  }
  // const handleStatusChange = (record) => {
  //   let newStatus;
  //   if (record.status === 'Approved') {
  //     newStatus = 'Pending';
  //   } else if (record.status === 'Pending') {
  //     newStatus = 'Approved';
  //   }

  //   const formData = new FormData();
  //   formData.append("status", newStatus);

  //   fetch(`${process.env.REACT_APP_API_URL}/api/v1/schedule_requests/${record.requestId}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Authorization': `Bearer ${user.access_token}`
  //     },
  //     body: formData,
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     const updatedRecord = data.data.result;
  //     const updatedData = customerData.map(item => item.requestId === updatedRecord.requestId ? updatedRecord : item);
  //     setCustomerData(updatedData);
  //     alert('Status updated successfully');
  //   })
  //   .catch(error => {
  //     console.error('Error updating status:', error);
  //     alert('Failed to update status');
  //   });
  // };

  const rowStyle = { height: '20px' };
  const cellStyle = { padding: '0' };

  return (
    <>
      <ConfigProvider>
        {customerData.length > 0 ? (
          <Table
            columns={columns}
            pagination={{ pageSize: 7 }}
            dataSource={customerData}
            scroll={{ x: 1300 }}
            rowStyle={() => rowStyle}
            cellStyle={() => cellStyle}
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
    </>
  );
};

export default App;
