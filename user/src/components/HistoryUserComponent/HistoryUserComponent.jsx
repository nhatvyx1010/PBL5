

import { Table, Tag, ConfigProvider } from 'antd';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    }
  ];

  return (
    <>
      <ConfigProvider theme={tagTheme}>
        {reqData.length > 0 ? (
          <Table
            columns={columns}
            pagination={{ pageSize: 7 }}
            dataSource={reqData}
            scroll={{ x: 1000 }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </ConfigProvider>
    </>
  );
};
export default HistoryUser;

