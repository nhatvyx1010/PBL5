import { useState } from 'react';
import { FloatButton, Tooltip, Modal, Form, Input } from 'antd';
import { CustomerServiceOutlined, CommentOutlined } from '@ant-design/icons';

const MyComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Tin nhắn đã gửi:', values.message);
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  
  const handlePersonal = () => {
    console.log('personal')
}

  return (
    <>
      <FloatButton.BackTop 
          style={{
              right: 94,
          }}
      />
      <FloatButton.Group
          trigger="hover"
          type="primary"
          icon={<CustomerServiceOutlined />}
      >
        <Tooltip title="Cá nhân" placement="left">
          <FloatButton 
              onClick={handlePersonal} 
          />
        </Tooltip>
        <Tooltip title="Bình luận" placement="left">
          <FloatButton icon={<CommentOutlined />} onClick={showModal} />
        </Tooltip>
      </FloatButton.Group>

      <Modal
        title="Gửi tin nhắn"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Gửi"
        cancelText="Hủy"
      >
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
