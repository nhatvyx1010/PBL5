// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { Button, Form, Input, Popconfirm, Table, Modal } from 'antd';
// import moment from 'moment'; // Import moment for date manipulation
// import PropTypes from 'prop-types'; // Import PropTypes for props validation

// const EditableContext = React.createContext(null);

// const EditableRow = ({ ...props }) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };

// const EditableCell = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   ...restProps
// }) => {
//   const [editing, setEditing] = useState(false);
//   const inputRef = useRef(null);
//   const form = useContext(EditableContext);

//   useEffect(() => {
//     if (editing) {
//       inputRef.current?.focus();
//     }
//   }, [editing]);

//   const toggleEdit = () => {
//     setEditing(!editing);
//     form.setFieldsValue({
//       [dataIndex]: record[dataIndex],
//     });
//   };

//   const save = async () => {
//     try {
//       const values = await form.validateFields();
//       toggleEdit();
//       handleSave(record.key, {
//         ...record,
//         ...values,
//       });
//     } catch (errInfo) {
//       console.log('Save failed:', errInfo);
//     }
//   };

//   let childNode = children;
//   if (editable) {
//     childNode = editing ? (
//       <Form.Item
//         style={{
//           margin: 0,
//         }}
//         name={dataIndex}
//         rules={[
//           {
//             required: true,
//             message: `${title} is required.`,
//           },
//         ]}
//       >
//         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
//       </Form.Item>
//     ) : (
//       <div
//         className="editable-cell-value-wrap"
//         style={{
//           paddingRight: 24,
//         }}
//         onClick={toggleEdit}
//       >
//         {children}
//       </div>
//     );
//   }

//   return <td {...restProps}>{childNode}</td>;
// };


// EditableCell.propTypes = {
//   title: PropTypes.string,
//   editable: PropTypes.bool,
//   children: PropTypes.node,
//   dataIndex: PropTypes.string,
//   record: PropTypes.object,
//   handleSave: PropTypes.func,
// };

// const App = () => {
//   const [dataSource, setDataSource] = useState([]);
//   const [count, setCount] = useState(0);
//   const [openAddModal, setOpenAddModal] = useState(false);
//   const [openUpdateModal, setOpenUpdateModal] = useState(false);
//   const [recordToUpdate, setRecordToUpdate] = useState(null);
//   const [formAdd] = Form.useForm(); // Add this line to create the form instance
//   const [formUpdate] = Form.useForm(); // Add this line to create the form instance
//   const [errorMessage, setErrorMessage] = useState('');

//   console.log("errorMessage: "+errorMessage);
//   const [formDataUpdate, setFormDataUpdate] = useState({
//     customerId: '',
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     position: ''
//   });

//   const { customerId, fullName, email, phoneNumber, position } = formDataUpdate;
//   console.log("customerId: "+customerId);
  
//   const handleChangeUpdate = (e) => {
//     const { name, value } = e.target;
//     setFormDataUpdate({
//       ...formDataUpdate,
//       [name]: value
//     });
//   };

  
//   const [formDataAdd, setFormDataAdd] = useState({
//     fullNameAdd: '',
//     usernameAdd: '',
//     passwordAdd: '',
//     emailAdd: '',
//   });
//   const { fullNameAdd, usernameAdd, passwordAdd, emailAdd } = formDataAdd;
  
//   const handleChangeAdd = (e) => {
//     const { name, value } = e.target;
//     setFormDataAdd({
//       ...formDataAdd,
//       [name]: value
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);
  
//   const getData = () => {
  
//     fetch(process.env.REACT_APP_API_URL + "api/v1/customers", {
//       method: "GET",
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.meta.status_code === 200) {
//         // Xử lý dữ liệu ở đây
//         setDataSource(data.data.result);
//       } else {
//         alert("Không thể lấy dữ liệu từ server. Vui lòng thử lại.");
//       }
//     })
//     .catch((error) => {
//         console.error('Lỗi:', error);
//         alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
//     });
//   };
  
//   const handleDataUpdate = (e) => {
//     if (!formDataUpdate.fullName || !formDataUpdate.email || !formDataUpdate.phoneNumber || !formDataUpdate.position) {
//         setErrorMessage("Vui lòng điền đầy đủ thông tin.");
//         return;
//     } else {
//         setErrorMessage('');
//     }

//     const isValidEmailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
//     if (!isValidEmailPattern.test(formDataUpdate.email)) {
//         setErrorMessage("Email không hợp lệ.");
//         return;
//     } else {
//         setErrorMessage('');
//     }
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("fullName", formDataUpdate.fullName);
//     formData.append("email", formDataUpdate.email);
//     formData.append("phoneNumber", formDataUpdate.phoneNumber);
//     formData.append("position", formDataUpdate.position);


//     fetch(`${process.env.REACT_APP_API_URL}api/v1/customers?customerId=${formDataUpdate.customerId}`, {
//         method: "PUT",
//         body: formData,
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         if (data.meta.status_code === 201) {
//             getData();
//             setOpenUpdateModal(false);
//         } else {
//             alert(" Cập nhật không thành công. Vui lòng thử lại.");
//         }
//     })
//     .catch((error) => {
//         console.error('Lỗi:', error);
//         alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
//     });
//   };

//   const handleDataAdd = () => {
//     if (!formDataAdd.fullNameAdd || !formDataAdd.emailAdd || !formDataAdd.usernameAdd || !formDataAdd.passwordAdd) {
//       setErrorMessage("Vui lòng điền đầy đủ thông tin.");
//       console.log(formDataAdd.fullNameAdd+ "--" + formDataAdd.emailAdd+ "--" +formDataAdd.usernameAdd+ "--" + formDataAdd.passwordAdd+ "--" + "Vui lòng điền đầy đủ thông tin.");
//       return;
//     } else {
//       setErrorMessage('');
//     }

//     const isValidEmailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
//     if (!isValidEmailPattern.test(formDataAdd.emailAdd)) {
//       console.log("Email không hợp lệ.");
//       setErrorMessage("Email không hợp lệ.");
//       return;
//     } else {
//       setErrorMessage('');
//     }

//     const formData = new FormData();
//     formData.append("username", formDataAdd.usernameAdd);
//     formData.append("password", formDataAdd.passwordAdd);
//     formData.append("email", formDataAdd.emailAdd);
//     formData.append("fullName", formDataAdd.fullNameAdd);

//     fetch(process.env.REACT_APP_API_URL + "api/v1/auth/register", {
//       method: "POST",
//       body: formData,
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.meta.status_code === 201) {
//         getData();
//         setOpenAddModal(false);

//       } else {
//         alert("Đăng ký không thành công. Vui lòng thử lại.");
//       }
//     })
//     .catch((error) => {
//       console.error('Lỗi:', error);
//       alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
//     });
//   };


//   const handleRowClick = (record) => {
//     setFormDataUpdate({ ...formDataUpdate, customerId: record.customerId });
//   };
  

//   const handleDelete = (key) => {
//     const newData = dataSource.filter((item) => item.key !== key);
//     setDataSource(newData);
//   };

//   const handleAdd = (values) => {
//     const newData = {
//       key: count.toString(),
//       ...values,
//       date: moment(values.date), // Convert date to moment object
//     };
//     setDataSource([...dataSource, newData]);
//     setCount(count + 1);
//     formDataAdd.resetFields();
//     setOpenAddModal(false); // Close modal after successful addition
//   };

//   const handleUpdate = (record) => {
//     setRecordToUpdate({ ...record });
//     formUpdate.setFieldsValue(record); // Set form fields with current row data
//     setOpenUpdateModal(true);
//   };

//   const handleCloseAddModal = () => {
//     setFormDataAdd({
//       fullNameAdd: '',
//       usernameAdd: '',
//       passwordAdd: '',
//       emailAdd: '',
//     });

//     setOpenAddModal(false);
//   };

//   const handleSave = (key, row) => {
//     const index = dataSource.findIndex((item) => item.key === key);
//     if (index !== -1) {
//       const newData = [...dataSource];
//       const item = newData[index];
//       newData.splice(index, 1, {
//         ...item,
//         ...row,
//         date: moment(row.date), // Convert date to moment object
//       });
//       setDataSource(newData);
//       setOpenUpdateModal(false);
//     }
//   };
  
//   const customSorter = (field) => (a, b) => {
//     const valueA = a[field] || '';
//     const valueB = b[field] || '';

//     if (valueA === '' && valueB === '') return 0; 
//     if (valueA === '') return 1;
//     if (valueB === '') return -1;
//     return valueA.localeCompare(valueB);
//   };

//   const defaultColumns = [
//     {
//       title: 'name',
//       dataIndex: 'fullName',
//       editable: true,
//       // sorter: (a, b) => a.name.localeCompare(b.name),
//       sorter: customSorter('fullName'),
//     },
//     {
//       title: 'email',
//       dataIndex: 'email',
//       sorter: customSorter('email'),
//     },
//     {
//       title: 'phoneNumber',
//       dataIndex: 'phoneNumber',
//       sorter: customSorter('phoneNumber'),
//     },
//     {
//       title: 'position',
//       dataIndex: 'position',
//       sorter: customSorter('position'),
//     },
//     // {
//     //   title: 'date',
//     //   dataIndex: 'date',
//     //   render: (text, record) => moment(text).format('DD/MM/YYYY'),
//     // },
//     {
//       title: 'operation',
//       dataIndex: 'operation',
//       render: (_, record) => (
//         <div>
//           <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
//             <a>Delete</a>
//           </Popconfirm>
//           <a style={{ marginLeft: 8 }} onClick={() => handleUpdate(record)}>
//             Update
//           </a>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <Button type="primary" onClick={() => setOpenAddModal(true)} style={{ marginBottom: '20px' }}>
//         Thêm khách hàng
//       </Button>
//       <Modal
//         title="Add Employee"
//         centered
//         visible={openAddModal}
//         onCancel={handleCloseAddModal}
//         footer={null}
//         style={{ textAlign: 'center' }}
//       >
//         <Form
//           layout="vertical"
//           onFinish={(values) => {
//             handleAdd(values);
//             setOpenAddModal(false);
//           }}
//           form={formAdd} // Pass the form instance to the Form component
//         >
//           <Form.Item
//             label="Name"
//             name="fullNameAdd"
//             rules={[{ required: true, message: 'Please input name!' }]}
//           >
//             <Input 
//               type="text" 
//               name="fullNameAdd" 
//               value={fullNameAdd} 
//               onChange={handleChangeAdd} 
//               placeholder="Họ và tên"
//             />
//           </Form.Item>
//           <Form.Item
//             label="Email"
//             name="emailAdd"
//             rules={[
//               { 
//                 required: true, 
//                 message: 'Please input email!' 
//               },
//               {
//                 type: 'email',
//                 message: 'The input is not valid email!',
//               },
//             ]}
//           >
//             <Input 
//               type="text" 
//               name="emailAdd" 
//               value={emailAdd} 
//               onChange={handleChangeAdd} 
//               placeholder="example@gmail.com"/>
//           </Form.Item>
//           <Form.Item
//             label="username"
//             name="usernameAdd"
//             rules={[{ required: true, message: 'Please input username!' }]}
//           >
//             <Input 
//               type="text" 
//               name="usernameAdd" 
//               value={usernameAdd} 
//               onChange={handleChangeAdd} 
//               placeholder="username"
//             />
//           </Form.Item>
//           <Form.Item
//             label="password"
//             name="passwordAdd"
//             rules={[{ required: true, message: 'Please input password!' }]}
//           >
//             <Input 
//               type="text" 
//               name="passwordAdd" 
//               value={passwordAdd} 
//               onChange={handleChangeAdd} 
//               placeholder="username"
//             />
//           </Form.Item>

//           <div style={{ textAlign: 'center' }}>
//             <Button type="primary" 
//                 onClick={handleDataAdd} 
//                 >
//               Thêm khách hàng
//             </Button>
//           </div>
//         </Form>
//       </Modal>

//       <Modal
//         title="Cập nhật"
//         centered
//         visible={openUpdateModal}
//         onCancel={() => setOpenUpdateModal(false)}
//         footer={null}
//         style={{ textAlign: 'center' }}
//       >
//         {recordToUpdate && (
//           <Form
//             layout="vertical"
//             onFinish={(values) => {
//               handleSave(recordToUpdate.key, { ...recordToUpdate, ...values });
//             }}
//             initialValues={recordToUpdate}
//             form={formUpdate} // Pass the form instance to the Form component
//           >
//             <Form.Item
//               label="Name"
//               name="fullName"
//               rules={[{ required: true, message: 'Please input name!' }]}
//             >
//               <Input 
//                 type="text" 
//                 name="fullName" 
//                 value={fullName} 
//                 onChange={handleChangeUpdate} 
//                 placeholder="Họ và tên"
//               />
//             </Form.Item>
//             <Form.Item
//               label="Email"
//               name="email"
//               rules={[
//                 { 
//                   required: true, 
//                   message: 'Please input email!' 
//                 },
//                 {
//                   type: 'email',
//                   message: 'The input is not valid email!',
//                 },
//               ]}
//             >
//               <Input 
//                 type="text" 
//                 name="email" 
//                 value={email} 
//                 onChange={handleChangeUpdate} 
//                 placeholder="example@gmail.com"/>
//             </Form.Item>
//             <Form.Item
//               label="Phone number"
//               name="phoneNumber"
//               rules={[
//                 { 
//                   required: true, 
//                   message: 'Please input Phone number!' 
//                 },
//                 {
//                   pattern: /^\d{10}$/,
//                   message: 'The input is not valid phone number!',
//                 },
//               ]}
//             >
//               <Input 
//                 type="text" 
//                 name="phoneNumber" 
//                 value={phoneNumber} 
//                 onChange={handleChangeUpdate} 
//                 placeholder="Số điện thoại"/>
//             </Form.Item>
//             <Form.Item
//               label="Position"
//               name="position"
//               rules={[{ required: true, message: 'Please input position!' }]}
//             >
//               <Input 
//                 type="text" 
//                 name="position" 
//                 value={position} 
//                 onChange={handleChangeUpdate} 
//                 placeholder="Địa chỉ"/>
//             </Form.Item>

//             <div style={{ textAlign: 'center' }}>
//               <Button 
//                 type="primary" 
//                 onClick={handleDataUpdate} >
//                 Cập nhật
//               </Button>
//             </div>
//           </Form>
//         )}
//       </Modal>

//       <Table
//         bordered
//         dataSource={dataSource}
//         columns={defaultColumns}
//         components={{
//           body: {
//             row: EditableRow,
//             cell: EditableCell,
//           },
//         }}
//         rowClassName="editable-row"
//         pagination={false}
//         style={{
//           maxHeight: '85vh', // Đặt chiều cao là 100vh
//         }}
//         scroll={{ y: 'calc(100vh - 200px)' }} // Thiết lập chiều cao của thanh cuộn
//         onRow={(record) => ({
//           onClick: () => handleRowClick(record),
//         })}
//       />

//     </div>
//   );
// };

// export default App;



// {/* <Form.Item
//               label="Age"
//               name="age"
//               rules={[
//                 { 
//                   required: true, 
//                   message: 'Please input age!' 
//                 },
//                 {
//                   validator: (_, value) => {
//                     if (!value || isNaN(value)) {
//                       return Promise.reject('Please input a valid number for age!');
//                     }
//                     const intValue = parseInt(value);
//                     if (intValue <= 0) {
//                       return Promise.reject('Age must be greater than 0');
//                     }
//                     if (!Number.isInteger(intValue)) {
//                       return Promise.reject('Age must be an integer!');
//                     }
//                     return Promise.resolve();
//                   },
//                 }
//               ]}
//             >
//               <Input type="number" />
//             </Form.Item> 
          
//             <Form.Item
//               label="Date"
//               name="date"
//               rules={[{ required: true, message: 'Please select date!' }]}
//             >
//               <DatePicker style={{ width: '100%' }} />
//             </Form.Item>


            
//           <Form.Item
//             label="Age"
//             name="age"
//             rules={[
//               { 
//                 required: true, 
//                 message: 'Please input age!' 
//               },
//               {
//                 validator: (_, value) => {
//                   if (!value || isNaN(value)) {
//                     return Promise.reject('Please input a valid number for age!');
//                   }
//                   const intValue = parseInt(value);
//                   if (intValue <= 0) {
//                     return Promise.reject('Age must be greater than 0');
//                   }
//                   if (!Number.isInteger(intValue)) {
//                     return Promise.reject('Age must be an integer!');
//                   }
//                   return Promise.resolve();
//                 },
//               }
//             ]}
//           >
//             <Input type="number" />
//           </Form.Item>
//           */}





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
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/customers`, {
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

      console.log(`${process.env.REACT_APP_API_URL}/api/v1/customers/${formDataUpdate.userId}`);
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/customers/${formDataUpdate.userId}`, {
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
