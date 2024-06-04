import { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons'
import { Form, Input, Button, Card, Spin } from 'antd';
import {useNavigate} from 'react-router-dom'
import { updateUser } from '../../redux/slides/userSlide.js';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const [form] = Form.useForm();
  const user = useSelector(state => state.user);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const onFinish = (values) => {
    console.log('Received values:', values);
    // onClose(); // Đóng form sau khi hoàn thành cập nhật
  };

  const [userTmp, setUserTmp] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleLogout = () => {
    dispatch(updateUser({
        name: '',
        email: '',
        access_token: '',
        address: '',
        phone: '',
        avatar: ''
    }));
    navigate("/");
  };

  useEffect(() => {
    setIsLoading(true);
    console.log("useEffect -- access_token: "+  user.access_token);

    fetch(`${process.env.REACT_APP_API_URL}/api/v1/me`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${user.access_token}`,
            // 'Content-Type': 'application/json'
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("status_code: " + data.meta.status_code+ "\nRoleId: "+data.data.result.roleId);
        if (data.meta.status_code === 401) {
            handleLogout();
            // alert(data.meta.error);
        } else if (data.meta.status_code === 200) {
            dispatch(updateUser({
                name: data.data.result.fullName,
                email: data.data.result.email,
                phone: data.data.result.phoneNumber
            }));
            
            setUserTmp(prevUserTmp => ({
              ...prevUserTmp,
              name: data.data.result.fullName,
              email: data.data.result.email,
              phone: data.data.result.phoneNumber
          }));
        console.log("data: ", data);
        setIsLoading(false);
        setLoading(false);
        } else {
            alert(" Vui lòng thử lại.");
        }
    })
    .catch((error) => {
        setIsLoading(false);
        console.error('Lỗi:', error);
        alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    });
  }, [user.access_token]);


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: '0px' }}>
       {loading ? (
           <Spin
              spinning={isLoading}
              indicator={<LoadingOutlined style={{ fontSize: '48px', width: '48px', height: '48px', color:'#ffffff' }} spin />}
              style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          />
            ) : (
      
      <Card title="Cập nhật thông tin cá nhân" bordered={false} style={{ width: '50%' }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ display: 'block' }}
          initialValues={userTmp} // Truyền userData vào initialValues để hiển thị sẵn thông tin
        >
          <Form.Item
            label="Tên"
            name="name"
            rules={[
                { required: true, message: 'Vui lòng nhập tên!' },
                { pattern: /^[^\d]+$/, message: 'Tên không được chứa số!' }, // Regular expression pattern to disallow numbers
            ]}
            >
            <Input />
          </Form.Item>
      {/* <Form.Item
            label="Tuổi"
            name="age"
            rules={[
                { required: true, message: 'Vui lòng nhập tuổi!' },
                { type: 'number', message: 'Tuổi phải là một số!' }, // Ensure the input is a number
                { validator: (_, value) => value >= 0 ? Promise.resolve() : Promise.reject('Tuổi không được nhỏ hơn 0!') }, // Custom validation rule
            ]}
            >
            <Input type="number" />
          </Form.Item> */}

          {/* <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
          >
            <Input />
          </Form.Item> */}
          
          <Form.Item
            label="Email"
            name="email"
            rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                { type: 'email', message: 'Email không hợp lệ!' }, // Ensure the input is a valid email format
                { pattern: /^[^\s@]+@gmail\.com$/, message: 'Email phải là địa chỉ Gmail!' }, // Regular expression pattern
            ]}
            >
            <Input />
          </Form.Item >
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại!' },
                { pattern: /^\d{10}$/, message: 'Số điện thoại phải có đúng 10 chữ số!' }, // Regular expression pattern
            ]}
            >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Card>
      )}
    </div>
  );
};

export default App;

