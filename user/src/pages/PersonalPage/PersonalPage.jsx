import React, { useState, useEffect } from 'react';
import { Layout, Avatar, Typography, Space, Card, Tooltip, Row, Col, Menu } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { siderStyle, contentStyle, layoutStyle } from './style';
import UpdateUserInfo from '../../components/UpdateUserComponent/UpdateUserComponent';
import HistoryUser from '../../components/HistoryUserComponent/HistoryUserComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateUser } from '../../redux/slides/userSlide.js';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const labels = ["Cập nhật", "Lịch sử mua vé", "Đăng xuất"];
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: labels[index],
  }),
);

const App = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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

  const handleMenuItemClick = (key) => {
      setSelectedMenuItem(key);
  };

  useEffect(() => {
    console.log("access_token: "+  user.access_token);
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
            alert(data.meta.error);
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

        } else {
            alert(" Vui lòng thử lại.");
        }
    })
    .catch((error) => {
        console.error('Lỗi:', error);
        alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    });
  }, [user.access_token]);


  const renderComponent = () => {
    switch (selectedMenuItem) {
      case '1':
        return <UpdateUserInfo />;
      case '2':
        return <HistoryUser />;
      case '3':
        handleLogout();
        return null;
      default:
        return null;
    }
  };

  return (
    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Card style={{ width: '75%', height: '90%' }}>
            <Space direction="vertical" align="start">
              <div style={{ textAlign: 'center' }}>
                <Avatar size={64} src="https://i.pravatar.cc/150?img=68" />
                {/* <Title level={4} style={{ textAlign: 'center' }}>ABO</Title> */}
                <Title level={4} style={{ textAlign: 'center' }}>{userTmp.name}</Title>
              </div>
              <Text style={{ textAlign: 'left' }}>Tuổi: 30</Text>
              <Text style={{ textAlign: 'left' }}>Địa chỉ: 123 Street, City, Country</Text>
              <Text style={{ textAlign: 'left' }}>Số điện thoại: {userTmp.phone}</Text>
              <Text style={{ textAlign: 'left' }}>Email: {userTmp.email}</Text>
              <Row gutter={[16, 16]} justify="center">
                <Col>
                  <Tooltip title="Facebook">
                    <FacebookOutlined style={{ fontSize: 24 }} />
                  </Tooltip>
                </Col>
                <Col>
                  <Tooltip title="Twitter">
                    <TwitterOutlined style={{ fontSize: 24 }} />
                  </Tooltip>
                </Col>
                <Col>
                  <Tooltip title="Instagram">
                    <InstagramOutlined style={{ fontSize: 24 }} />
                  </Tooltip>
                </Col>
              </Row>
            </Space>
            <div style={{ width: '100%', marginTop: '50px' }}>
              <Menu mode="inline" defaultSelectedKeys={['1']} items={items} onSelect={({ key }) => handleMenuItemClick(key)} />
            </div>
          </Card>
        </div>
      </Sider>
      <Content style={contentStyle}>
        {renderComponent()}
      </Content>
    </Layout>
  );
};

export default App;
