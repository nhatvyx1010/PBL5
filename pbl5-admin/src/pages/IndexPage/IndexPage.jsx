import { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
  TeamOutlined,
  InfoCircleFilled,
  DotChartOutlined,
  ScheduleFilled,
  ShoppingCartOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import StatisticalComponent from '../../components/StatisticalComponent/StatisticalComponent';
import CustomerComponent from '../../components/CustomerComponent/CustomerComponent';
// import EmployeeComponent from '../../components/EmployeeComponent/EmployeeComponent';
import ProviderComponent from '../../components/ProviderComponent/ProviderComponent';
import BookingInfoComponent from '../../components/BookingInfoComponent/BookingInfoComponent';
import OrderListComponent from '../../components/OrderListComponent/OrderListComponent.jsx';
import ScheduleRequest from '../../components/ScheduleRequest/ScheduleRequest';
import CalendarComponent from '../../components/CalendarComponent/CalendarComponent';
import CalendarComponentList from '../../components/CalendarComponentList/CalendarComponentList';
import StationComponent from '../../components/StationComponent/StationComponent';
import TrainComponent from '../../components/TrainComponent/TrainComponent';
import ChatComponent from '../../components/testChatComponent/chatComponent';
import { useNavigate } from "react-router-dom";
import { updateUser } from '../../redux/slides/userSlide.js';
import { useSelector, useDispatch } from 'react-redux';

const { Header, Sider, Content } = Layout;

const IndexPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  useEffect(() => {
    if(!user.access_token){
      navigate('/')
    }
  }, [user.access_token, navigate]);

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
    if (key === '11') {
      handleLogout(); 
    }
  };

  const renderComponent = () => {
    switch (selectedMenuItem) {
      case '1':
        return <StatisticalComponent />;
      case '2':
        return <CustomerComponent />;
      case '3':
        return <ProviderComponent />;
      case '4':
        return <StationComponent />;
      case '5':
        return <TrainComponent />;
      case '6':
        return <BookingInfoComponent />;
      case '7':
          return <CalendarComponentList />;
      case '8':
          return <CalendarComponent />;
      case '9':
        return <OrderListComponent />;
      case '10':
        return <ScheduleRequest />;
      case '12':
        return <ChatComponent />;
      default:
        return null;
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#CAF8F8' }}>
        <div className="demo-logo-vertical" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '64px' }}>
          <HomeOutlined style={{ fontSize: '16px', color: '#3C7363' }} onClick={() => handleMenuItemClick('home')} />
        </div>
        <Menu
          theme="light" // Đổi theme thành light
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ backgroundColor: '#CAF8F8' }} // Đổi màu nền của menu
          items={[
            {
              key: '1',
              icon: <DotChartOutlined />,
              label: 'Thống kê',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Khách hàng',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '3',
              icon: <TeamOutlined />,
              label: 'Nhà cung cấp',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '4',
              icon: <InfoCircleFilled />,
              label: 'Station',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '5',
              icon: <InfoCircleFilled />,
              label: 'Train',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '6',
              icon: <InfoCircleFilled />,
              label: 'Thông tin đặt vé',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '7',
              icon: <ScheduleFilled />,
              label: 'Danh sách lịch trình',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '8',
              icon: <ScheduleFilled />,
              label: 'Lịch trình',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '9',
              icon: <ShoppingCartOutlined />,
              label: 'Đơn hàng',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '10',
              icon: <ScheduleFilled />,
              label: 'Đăng ký lịch trình',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '11',
              icon: <LogoutOutlined />,
              label: 'Đăng xuất',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '12',
              icon: <LogoutOutlined />,
              label: 'chat',
              style: { 
                fontWeight: 500,
              }
            },
          ]}
          onSelect={({ key }) => handleMenuItemClick(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: '#3C7363',
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            maxHeight: '85vh', // Đặt chiều cao là 100vh
          }}
        >
           {renderComponent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default IndexPage;
