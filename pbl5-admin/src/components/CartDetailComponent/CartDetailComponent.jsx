import React from 'react';
import { Button, Table } from 'antd';

const CartDetail = ({ record, onBack }) => {
  const columns = [
    {
      title: 'Mã vé',
      dataIndex: 'ticketCode',
    },
    {
      title: 'Loại vé',
      dataIndex: 'ticketType',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
    },
    {
      title: 'Giá vé',
      dataIndex: 'price',
    },
  ];

  const data = record.tickets.map((ticket, index) => ({
    key: index,
    ticketCode: ticket.ticketCode,
    ticketType: ticket.ticketType,
    quantity: ticket.quantity,
    price: ticket.price,
  }));

  return (
    <div>
      <h2>Thông tin chi tiết đơn hàng</h2>
      <p>Mã đơn hàng: {record.orderCode}</p>
      <p>Tên hành khách: {record.passengerName}</p>
      <Table columns={columns} dataSource={data} />
      <p>Tổng số lượng vé đặt: {record.totalTickets}</p>
      <p>Tổng cộng phải thanh toán: {record.totalPayment}</p>
      <p>Thời gian và trạng thái đặt vé: {record.dateTime}</p>
      <p>Trạng thái: {record.status}</p>

      <Button onClick={onBack} type="primary" htmlType="submit" style={{ marginTop: '20px' }}>Quay lại</Button>
    </div>
  );
};

export default CartDetail;

