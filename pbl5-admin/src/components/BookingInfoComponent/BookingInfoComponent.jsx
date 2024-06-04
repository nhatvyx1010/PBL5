import { Table, Tag, Popconfirm, ConfigProvider } from 'antd';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

const HistoryUser = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  // const [requestData, setRequestData] = useState([]);
  const [reqData, setReqData] = useState([]);

  const timestampToDatetime = timestamp => {
    return moment.unix(timestamp).format('DD-MM-YYYY HH:mm:ss');
  };

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

  useEffect(() => {
    if (!user.access_token) {
      navigate('/');
    } else {
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/orders`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.access_token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.meta.status_code === 200 && data.data.result) {
            setReqData(data.data.result);
          } else {
            alert('Failed to fetch order data');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Failed to fetch order data');
        });
    }
  }, [user.access_token, navigate]);

  const columns = [
    {
      title: 'Request ID',
      dataIndex: 'orderId',
      fixed: 'left',
      width: 150,
      key: 'orderId'
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: 'Paid Date',
      dataIndex: 'paidDate',
      key: 'paidDate',
      render: paidDate => timestampToDatetime(paidDate)
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: orderDate => timestampToDatetime(orderDate)
    },
    {
      title: 'Confirm Url ID',
      dataIndex: 'confirmUrlId',
      key: 'confirmUrlId'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 100,
      key: 'status',
      render: status => (
        <Tag color={status === 'Pending' ? 'volcano' : 'green'}>
          {status.toUpperCase()}
        </Tag>
      )
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      fixed: 'right',
      render: (text, record) => (
        <Popconfirm
          title={
            record.status === 'Pending'
              ? 'Are you sure you want to approve this request?'
              : 'Are you sure you want to cancel this request?'
          }
          onConfirm={() => handleStatusChange(record)}
          okText="Yes"
          cancelText="No"
        >
          <ActionButton>
            {record.status === 'Pending' ? 'Approve' : 'Cancel'}
          </ActionButton>
        </Popconfirm>
      )
    }
  ];

  const handleStatusChange = record => {
    // Your code to update the status of the order
    console.log('Status changed for record:', record);
  };
  return (
    <>
      <ConfigProvider theme={tagTheme}>
        {reqData.length > 0 ? (
          <Table
            columns={columns}
            pagination={{ pageSize: 7 }}
            dataSource={reqData}
            scroll={{ x: 1300 }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </ConfigProvider>
    </>
  );
};
export default HistoryUser;

