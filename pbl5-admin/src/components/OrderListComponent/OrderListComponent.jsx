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
      title: 'Order Id',
      width: 150,
      dataIndex: 'orderId',
      key: 'orderId',
      fixed: 'left',
    },
    {
      title: 'User Id',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Paid Date',
      dataIndex: 'paidDate',
      key: 'paidDate',
      render: (paidDate) => timestampToDatetime(paidDate),
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: (orderDate) => timestampToDatetime(orderDate),
    },
    {
      title: 'Status',
      dataIndex: 'status',
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
          // title={record.status === 'Pending' ? 'Bạn có chắc chắn muốn cập nhật yêu cầu lịch trình mới?' : 'Bạn có chắc chắn muốn hủy yêu cầu lịch trình?'}
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

    // Send request to update status
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
      // Assuming the server response contains the updated record
      const updatedRecord = data.data.result;
      // Update the data array with the updated record
      const dataIndex = reqData.findIndex(item => item.requestId === updatedRecord.requestId);
      if (dataIndex !== -1) {
        // Cập nhật phần tử tại vị trí dataIndex với dữ liệu mới
        const updatedData = [...reqData];
        updatedData[dataIndex] = updatedRecord;
        
        // Cập nhật mảng dữ liệu mới
        setReqData(updatedData);
        alert('Status updated successfully');
      } else {
        alert('Failed to update status: Item not found');
      }
    })
    .catch(error => {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    });
  };


  useEffect(() => {
    if (!user.access_token) {
        navigate('/');
    } else {

      console.log(`${process.env.REACT_APP_API_URL}/api/v1/orders\n${user.access_token}`);
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/orders`, {
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

