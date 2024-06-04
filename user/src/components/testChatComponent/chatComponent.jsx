import { useState } from 'react';
import { FloatButton, Tooltip, Modal, Form, Input, List } from 'antd';
import { CustomerServiceOutlined, CommentOutlined, CaretUpOutlined, HeartFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; 

const MyComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(<CommentOutlined />);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]); // State lưu trữ các tin nhắn từ server

  const sampleMessages = [
    "Xin chào! Tôi có thể giúp gì cho bạn?",
    "Tôi có thể trợ giúp bạn với vấn đề gì?",
    "Bạn cần hỗ trợ gì từ chúng tôi?"
  ];

  const toggleModal = () => {
    setIsModalVisible(prevVisible => !prevVisible);
    setCurrentIcon(prevIcon => (prevIcon.type === CommentOutlined ? <CaretUpOutlined /> : <CommentOutlined />));
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        console.log('Tin nhắn đã gửi:', values.message);
        sendMessage(values.message); // Gửi tin nhắn khi người dùng nhấn nút "Gửi"
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentIcon(<CommentOutlined />);
  };

  const handlePersonal = () => {
    navigate('/personal');
  };

  const handleSelectMessage = (message) => {
    form.setFieldsValue({ message });
  };

  const sendMessage = (message) => {
    // Đây là nơi bạn có thể gửi tin nhắn đến máy chủ và nhận lại tin nhắn từ server
    // Ở đây chỉ là ví dụ giả định, bạn cần thay thế với phương thức thực tế của bạn
    console.log('Đã gửi tin nhắn:', message);
    setMessages(prevMessages => [...prevMessages, { sender: 'client', message }]); // Thêm tin nhắn của client vào state
    form.resetFields(); // Xóa nội dung của form
    // Giả sử server trả về một tin nhắn ngẫu nhiên
    const serverResponse = "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể.";
    setMessages(prevMessages => [...prevMessages, { sender: 'server', message: serverResponse }]); // Thêm tin nhắn từ server vào state
    // setIsModalVisible(false); // Đóng modal sau khi gửi tin nhắn thành công
    // setCurrentIcon(<CommentOutlined />); // Đặt lại biểu tượng khi modal đóng
  };

  return (
    <>
      <FloatButton.BackTop 
        style={{ right: 94 }}
      />
      <FloatButton.Group
        trigger="hover"
        type="primary"
        icon={<CustomerServiceOutlined />}
        onClick={toggleModal}
      >
        <Tooltip title="Cá nhân" placement="left">
          <FloatButton onClick={handlePersonal} />
        </Tooltip>
        <Tooltip title="Nhắn tin" placement="left">
          <FloatButton icon={currentIcon} onClick={toggleModal} />
        </Tooltip>
      </FloatButton.Group>

      <Modal
        title="Gửi tin nhắn"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Gửi"
        cancelText="Hủy"
        style={{ 
          position: 'absolute', 
          top: '10%', 
          right: '2%', 
          height: '600px', 
          bodyStyle: { height: '56vh', overflowY: 'auto' } // Chuyển 'bodyStyle' vào 'style'
        }}
        getContainer={false} 
      >
        <List
          header={<div>Tin nhắn mẫu</div>}
          bordered
          dataSource={sampleMessages}
          renderItem={item => (
            <List.Item
              onClick={() => handleSelectMessage(item)}
              style={{ transition: 'background-color 0.3s', cursor: 'pointer' }}
              onMouseEnter={e => { e.target.style.backgroundColor = '#CAF8F8'; }}
              onMouseLeave={e => { e.target.style.backgroundColor = ''; }}
            >
              {item}
            </List.Item>
          )}
        /> 
        <List
          dataSource={messages} // Dữ liệu tin nhắn từ server
          bordered
          style={{marginTop: '10px'}}
          renderItem={item => (
            <List.Item 
              style={{ textAlign: item.sender === 'server' ? 'right' : 'left', transition: 'background-color 0.3s', cursor: 'pointer' }}
              onMouseEnter={e => { 
                e.currentTarget.style.color = '#F57E7A'; e.currentTarget.style.backgroundColor = '#FFF5F5'; 
              }}
              onMouseLeave={e => { e.target.style.color = '';  e.target.style.backgroundColor = ''; }}>
              {item.sender === 'server' ? (
                <span>
                  <HeartFilled /> BOT<br />
                </span>
              ) : 'Khách hàng: '}
              {item.message}
            </List.Item>
          )}
        />

        <Form
          form={form}
          layout="vertical"
          name="messageForm"
        >
          <Form.Item
            name="message"
            label="Tin nhắn"
            rules={[{ required: true, message: 'Vui lòng nhập tin nhắn của bạn!' }]}
          >
            <Input.TextArea rows={4} placeholder="Nhập tin nhắn của bạn" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MyComponent;
