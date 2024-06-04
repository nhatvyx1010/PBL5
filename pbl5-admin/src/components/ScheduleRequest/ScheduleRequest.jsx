import { Tag, ConfigProvider, Dropdown, Menu } from 'antd';
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
  const [reqData, setReqData] = useState([]);

  const timestampToDatetime = (timestamp) => {
    return moment.unix(timestamp).format('DD-MM-YYYY HH:mm:ss');
  };


  const handleApprovedChange = (record, index) => {
    console.log("handleApprovedChange changed for record: ", record + "\n"+"Approved");
    handleStatusChange(record, index, "Approved")
  };
  
  const handlePendingChange = (record, index) => {
    console.log("handlePendingChange changed for record: ", record + "\n"+"Pending");
    handleStatusChange(record, index, "Pending")
  };
  
  const handleRejectChange = (record, index) => {
    console.log("handleRejectChange changed for record: ", record + "\n"+"Reject");
    handleStatusChange(record, index, "Reject")
  };

  const getColor = (status) => {
    if (status === 'Approved') return 'green'; // Green color
    if (status === 'Pending') return 'volcano'; // Red color
    // Add more colors here if needed
    return 'geekblue'; // Default color
  };

  // const handleStatusChange = (record, index) => {
  //   console.log("Status changed for record: ", record);
  //   console.log("Index: ", index);
  // };

  const getGradientColors = (colors) => {
    return `linear-gradient(to right, ${colors.join(', ')})`;
  };

  const tagTheme = {
    components: {
      Tag: {
        color: getGradientColors(['#6253E1', '#04BEFE']),
        fontSize: '14px',
        padding: '0 10px',
        borderRadius: '16px',
      },
    },
  };

  const columns = [
    {
      title: 'requestId',
      width: 150,
      dataIndex: 'requestId',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'scheduleId',
      dataIndex: 'scheduleId',
      key: 'age',
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
                    {statu.toUpperCase()}
                  </Tag>
                ))
              ) : (
                <Tag color={getColor(status)} style={{ margin: '0 5px', fontSize: '14px' }}>
                  {status.toUpperCase()}
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
      render: (record, index) => (
        <Dropdown
          overlay={
            <Menu>
              {record.status === 'Pending' && (
                <Menu.Item key="approve">
                  <Popconfirm
                    title="Bạn có chắc chắn muốn duyệt yêu cầu này?"
                    okText="Duyệt"
                    cancelText="Hủy"
                    onConfirm={() => handleApprovedChange(record, index)}
                    placement="topLeft"
                  >
                    <ActionButton type="link">Approve</ActionButton>
                  </Popconfirm>
                </Menu.Item>
              )}
              {record.status === 'Pending' && (
                <Menu.Item key="reject">
                  <Popconfirm
                    title="Bạn có chắc chắn muốn từ chối yêu cầu này?"
                    okText="Từ chối"
                    cancelText="Hủy"
                    onConfirm={() => handleRejectChange(record, index)}
                    placement="topLeft"
                  >
                    <ActionButton type="link">Reject</ActionButton>
                  </Popconfirm>
                </Menu.Item>
              )}
              {record.status === 'Approved' && (
                <Menu.Item key="pending">
                  <Popconfirm
                    title="Bạn có chắc chắn muốn đặt lại trạng thái thành chờ duyệt?"
                    okText="Đồng ý"
                    cancelText="Hủy"
                    onConfirm={() => handlePendingChange(record, index)}
                    placement="topLeft"
                  >
                    <ActionButton type="link">Pending</ActionButton>
                  </Popconfirm>
                </Menu.Item>
              )}
              {record.status === 'Approved' && (
                <Menu.Item key="reject">
                  <Popconfirm
                    title="Bạn có chắc chắn muốn từ chối yêu cầu này?"
                    okText="Từ chối"
                    cancelText="Hủy"
                    onConfirm={() => handleRejectChange(record, index)}
                    placement="topLeft"
                  >
                    <ActionButton type="link">Reject</ActionButton>
                  </Popconfirm>
                </Menu.Item>
              )}
              {record.status === 'Reject' && (
                <Menu.Item key="approve">
                  <Popconfirm
                    title="Bạn có chắc chắn muốn duyệt yêu cầu này?"
                    okText="Duyệt"
                    cancelText="Hủy"
                    onConfirm={() => handleApprovedChange(record, index)}
                    placement="topLeft"
                  >
                    <ActionButton type="link">Approve</ActionButton>
                  </Popconfirm>
                </Menu.Item>
              )}
              {record.status === 'Reject' && (
                <Menu.Item key="pending">
                  <Popconfirm
                    title="Bạn có chắc chắn muốn đặt lại trạng thái thành chờ duyệt?"
                    okText="Đồng ý"
                    cancelText="Hủy"
                    onConfirm={() => handlePendingChange(record, index)}
                    placement="topLeft"
                  >
                    <ActionButton type="link">Pending</ActionButton>
                  </Popconfirm>
                </Menu.Item>
              )}
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

  const handleStatusChange = (record, index, newStatus) => {
    console.log("Status changed for record: ", record);
    console.log("Index: ", index);

    console.log(" -- new status: ", newStatus);

    const formData = new FormData();
    formData.append("status", newStatus);

    fetch(`${process.env.REACT_APP_API_URL}/api/v1/schedule_requests/${record.requestId}`, {
      method: 'PUT',
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.access_token}`
      },
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      const updatedRecord = data.data.result;
      const dataIndex = reqData.findIndex(item => item.requestId === updatedRecord.requestId);
      if (dataIndex !== -1) {
        const updatedData = [...reqData];
        updatedData[dataIndex] = updatedRecord;
        
        // Cập nhật mảng dữ liệu mới
        setReqData(updatedData);
        // alert('Status updated successfully');
      } else {
        getData();
        // alert('Failed to update status: Item not found');
      }
    })
    .catch(error => {
      console.error('Error updating status:', error);
        getData();
        // alert('Failed to update status');
    });
  };


  const getData = () => {
    if (!user.access_token) {
        navigate('/');
    } else {

      console.log(`${process.env.REACT_APP_API_URL}/api/v1/schedule_requests\n${user.access_token}`);
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/schedule_requests`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${user.access_token}`
          },
      })
      .then((response) => response.json())
      .then((data) => {
          if (data.meta.status_code === 401) {
              alert(data.meta.error);
          } else if (data.meta.status_code === 200 && data.data.result) {
              setReqData(data.data.result);
          } else {
              alert("Đăng nhập không thành công. Vui lòng thử lại.");
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


  const rowStyle = { height: '20px' };
  const cellStyle = { padding: '0' };
  return (
    <>
      <ConfigProvider theme={tagTheme}>
        {reqData.length > 0 ? (
          <Table
            columns={columns}
            pagination={{ pageSize: 7 }}
            dataSource={reqData}
            scroll={{ x: 1300 }}
            
            rowStyle={() => rowStyle}
            cellStyle={() => cellStyle}
          />
        ) : (
          <p>Loading...</p>
        )}
      </ConfigProvider>
    </>
  );
};
export default App;









// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { Button, Form, Input, Popconfirm, Table, Modal, DatePicker } from 'antd';
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

// EditableRow.propTypes = {
//   index: PropTypes.number.isRequired,
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

//   useEffect(() => {
//     // Set initial data source
//     setDataSource([
//       {
//         key: '0',
//         name: 'Nguyễn Phạm Nhật Vỹ',
//         age: '20',
//         address: 'Đà Nẵng',
//         date: moment(), // Set default date to current date
//       },
//       {
//         key: '1',
//         name: 'Ngô Mậu Trường',
//         age: '22',
//         address: 'Quảng Bình',
//         date: moment(), // Set default date to current date
//       },
//     ]);
//     setCount(2);
//   }, []);

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
//     formAdd.resetFields(); // Clear form fields
//     setOpenAddModal(false); // Close modal after successful addition
//   };

//   const handleUpdate = (record) => {
//     setRecordToUpdate({ ...record });
//     formUpdate.setFieldsValue(record); // Set form fields with current row data
//     setOpenUpdateModal(true);
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
  

//   const defaultColumns = [
//     {
//       title: 'name',
//       dataIndex: 'name',
//       width: '30%',
//       editable: true,
//       sorter: (a, b) => a.name.localeCompare(b.name),
//     },
//     {
//       title: 'age',
//       dataIndex: 'age',
//       sorter: (a, b) => a.age - b.age,
//     },
//     {
//       title: 'address',
//       dataIndex: 'address',
//       sorter: (a, b) => a.address.localeCompare(b.address),
//     },
//     {
//       title: 'date',
//       dataIndex: 'date',
//       render: (text) => moment(text).format('DD/MM/YYYY'),
//     },
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
//       {/* <Button type="primary" onClick={() => setOpenAddModal(true)} style={{ marginBottom: '20px' }}>
//         Add Employee
//       </Button> */}
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
//         scroll={{ y: 'calc(100vh - 200px)' }} // Thiết lập chiều cao của thanh cuộn
//       />

//     </div>
//   );
// };

// export default App;



