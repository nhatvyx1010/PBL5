// import { useState } from 'react';
// import { FloatButton, Tooltip, Modal, Form, Input, List } from 'antd';
// import { CustomerServiceOutlined, CommentOutlined, CaretUpOutlined, HeartFilled } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom'; 

// const MyComponent = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [currentIcon, setCurrentIcon] = useState(<CommentOutlined />);
//   const [form] = Form.useForm();
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]); // State lưu trữ các tin nhắn từ server

//   const sampleMessages = [
//     "Xin chào! Làm thế nào để mua vé tàu?",
//     "Tôi cần chuẩn bị những gì trước khi lên tàu?",
//     "Tôi có cần mang theo CMND/hộ chiếu khi lên tàu không?",
//     "Tôi cần chuẩn bị những gì trước khi lên tàu?"
//   ];

//   const toggleModal = () => {
//     setIsModalVisible(prevVisible => !prevVisible);
//     setCurrentIcon(prevIcon => (prevIcon.type === CommentOutlined ? <CaretUpOutlined /> : <CommentOutlined />));
//   };

//   const handleOk = () => {
//     form
//       .validateFields()
//       .then(values => {
//         console.log('Tin nhắn đã gửi:', values.message);
//         sendMessage(values.message); // Gửi tin nhắn khi người dùng nhấn nút "Gửi"
//       })
//       .catch(info => {
//         console.log('Validate Failed:', info);
//       });
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     setCurrentIcon(<CommentOutlined />);
//   };

//   const handlePersonal = () => {
//     navigate('/personal');
//   };

//   const handleSelectMessage = (message) => {
//     form.setFieldsValue({ message });
//   };

//   const sendMessage = (message) => {
//     console.log('Đã gửi tin nhắn:', message);
//     setMessages(prevMessages => [...prevMessages, { sender: 'client', message }]); // Thêm tin nhắn của client vào state
//     form.resetFields(); // Xóa nội dung của form
//     const serverResponse = "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể.";
//     setMessages(prevMessages => [...prevMessages, { sender: 'server', message: serverResponse }]); // Thêm tin nhắn từ server vào state
//   };

//   getChat(() => {
//     fetch(`${process.env.REACT_APP_API_URL}/api/v1/token`, {
//       method: 'POST',
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.meta.status_code === 200 && data.data.result) {
//           setReqData(data.data.result);
//         } else {
//           alert('Failed to fetch order data');
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         alert('Failed to fetch order data');
//       });
//   });

//   return (
//     <>
//       <FloatButton.BackTop 
//         style={{ right: 94 }}
//       />
//       <FloatButton.Group
//         trigger="hover"
//         type="primary"
//         icon={<CustomerServiceOutlined />}
//         onClick={toggleModal}
//       >
//         <Tooltip title="Cá nhân" placement="left">
//           <FloatButton onClick={handlePersonal} />
//         </Tooltip>
//         <Tooltip title="Nhắn tin" placement="left">
//           <FloatButton icon={currentIcon} onClick={toggleModal} />
//         </Tooltip>
//       </FloatButton.Group>

//       <Modal
//         title="Gửi tin nhắn"
//         open={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         okText="Gửi"
//         cancelText="Hủy"
//         style={{ 
//           position: 'absolute', 
//           top: '10%', 
//           right: '2%', 
//           height: '600px', 
//           bodyStyle: { height: '56vh', overflowY: 'auto' } // Chuyển 'bodyStyle' vào 'style'
//         }}
//         getContainer={false} 
//       >
//         <List
//           header={<div>Tin nhắn mẫu</div>}
//           bordered
//           dataSource={sampleMessages}
//           renderItem={item => (
//             <List.Item
//               onClick={() => handleSelectMessage(item)}
//               style={{ transition: 'background-color 0.3s', cursor: 'pointer' }}
//               onMouseEnter={e => { e.target.style.backgroundColor = '#CAF8F8'; }}
//               onMouseLeave={e => { e.target.style.backgroundColor = ''; }}
//             >
//               {item}
//             </List.Item>
//           )}
//         /> 
//         <List
//           dataSource={messages} // Dữ liệu tin nhắn từ server
//           bordered
//           style={{marginTop: '10px'}}
//           renderItem={item => (
//             <List.Item 
//               style={{ textAlign: item.sender === 'server' ? 'right' : 'left', transition: 'background-color 0.3s', cursor: 'pointer' }}
//               onMouseEnter={e => { 
//                 e.currentTarget.style.color = '#F57E7A'; e.currentTarget.style.backgroundColor = '#FFF5F5'; 
//               }}
//               onMouseLeave={e => { e.target.style.color = '';  e.target.style.backgroundColor = ''; }}>
//               {item.sender === 'server' ? (
//                 <span>
//                   <HeartFilled /> BOT<br />
//                 </span>
//               ) : 'Khách hàng: '}
//               {item.message}
//             </List.Item>
//           )}
//         />

//         <Form
//           form={form}
//           layout="vertical"
//           name="messageForm"
//         >
//           <Form.Item
//             name="message"
//             label="Tin nhắn"
//             rules={[{ required: true, message: 'Vui lòng nhập tin nhắn của bạn!' }]}
//           >
//             <Input.TextArea rows={4} placeholder="Nhập tin nhắn của bạn" />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default MyComponent;
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
    "Xin chào! Làm thế nào để mua vé tàu?",
    "Tôi cần chuẩn bị những gì trước khi lên tàu?",
    "Tôi có cần mang theo CMND/hộ chiếu khi lên tàu không?",
    "Tôi cần chuẩn bị những gì trước khi lên tàu?"
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

  const sendMessage = async (message) => {
    console.log('Đã gửi tin nhắn:', message);
    setMessages(prevMessages => [...prevMessages, { sender: 'client', message }]); // Thêm tin nhắn của client vào state
    form.resetFields(); // Xóa nội dung của form

    try {
      const response = await fetch(`${process.env.REACT_APP_CHAT_URL}/api/v1/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: message
        })
      });

      const data = await response.json();

      setMessages(prevMessages => [...prevMessages, { sender: 'server', message: data.response }]); 
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch order data');
    }
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
