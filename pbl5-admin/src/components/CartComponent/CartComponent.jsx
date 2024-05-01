import React, { useState } from 'react';
import { Button, Table } from 'antd';
import CartDetail from '../CartDetailComponent/CartDetailComponent'; // Import CartDetail component

const App = () => {
  const [dataSource] = useState([
    {
      key: '0',
      orderCode: 'DH001',
      passengerName: 'Đàm Lê Na',
      ticketInfo: 'XYZ456',
      tickets: [
        { ticketCode: 'ABC123', ticketType: 'Economy', quantity: 2, price: '$100' },
        { ticketCode: 'DEF456', ticketType: 'Business', quantity: 1, price: '$300' }
      ],
      totalTickets: 3,
      totalPayment: '$400',
      dateTime: '2024-04-25 10:00',
      status: 'Đã đặt vé'
    },
    {
      key: '1',
      orderCode: 'DH002',
      passengerName: 'Đặng Thu Phương',
      ticketInfo: 'XYZ456, Business, 1, $300',
      totalTickets: 1,
      totalPayment: '$300',
      dateTime: '2024-04-26 09:30',
      status: 'Đã thanh toán',
      tickets: [
        { ticketCode: 'XYZ456', ticketType: 'Business', quantity: 1, price: '$300' }
      ]
    },
    {
      key: '2',
      orderCode: 'DH003',
      passengerName: 'Lê Trần Bảo Uyên',
      ticketInfo: 'DEF789, Economy, 3, $150',
      totalTickets: 3,
      totalPayment: '$450',
      dateTime: '2024-04-27 14:45',
      status: 'Đang xử lý',
      tickets: [
        { ticketCode: 'DEF789', ticketType: 'Economy', quantity: 3, price: '$150' }
      ]
    },
  ]);
  const [recordToDetail, setRecordToDetail] = useState(null);

  const handleShowDetail = (record) => {
    setRecordToDetail({ ...record });
  };

  const handleBack = () => {
    setRecordToDetail(null); // Clear recordToDetail to return to the table view
  };

  const defaultColumns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'orderCode',
    },
    {
      title: 'Tên hành khách',
      dataIndex: 'passengerName',
    },
    {
      title: 'Thông tin vé',
      dataIndex: 'ticketInfo',
    },
    {
      title: 'Tổng số lượng vé đặt',
      dataIndex: 'totalTickets',
    },
    {
      title: 'Tổng cộng phải thanh toán',
      dataIndex: 'totalPayment',
    },
    {
      title: 'Thời gian và trạng thái đặt vé',
      dataIndex: 'dateTime',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
    },
    {
      title: 'Chi tiết',
      dataIndex: 'detail',
      render: (_, record) => (
        <Button type="link" onClick={() => handleShowDetail(record)}>Xem chi tiết</Button>
      ),
    },
  ];

  return (
    <div>
      {recordToDetail ? (
        <CartDetail record={recordToDetail} onBack={handleBack} />
      ) : (
        <Table
          bordered
          dataSource={dataSource}
          columns={defaultColumns}
          pagination={false}
          scroll={{ y: 'calc(100vh - 200px)' }}
        />
      )}
    </div>
  );
};

export default App;
