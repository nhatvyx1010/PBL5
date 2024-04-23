import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
  TeamOutlined,
  InfoCircleFilled,
  DotChartOutlined,
  ScheduleFilled,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import EmployeeComponent from '../../components/EmployeeComponent/EmployeeComponent';
import ProviderComponent from '../../components/ProviderComponent/ProviderComponent';
import BookingInfoComponent from '../../components/BookingInfoComponent/BookingInfoComponent';
import SimpleCalendar from '../../components/SimpleCalendarComponent/SimpleCalendarComponent';
// import BookingInfoComponent from './SupplierComponent';
// import TicketInfoComponent from './TicketInfoComponent';
// import ScheduleComponent from './ScheduleComponent';
// import OrderComponent from './OrderComponent';
// import LogoutComponent from './LogoutComponent';

const { Header, Sider, Content } = Layout;

const IndexPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');

  const handleMenuItemClick = (key: string) => {
    setSelectedMenuItem(key);
  };

  const renderComponent = () => {
    switch (selectedMenuItem) {
      case '1':
        return <EmployeeComponent />;
      case '2':
        return <EmployeeComponent />;
      case '3':
        return <ProviderComponent />;
      case '4':
        return <BookingInfoComponent />;
      case '5':
        return <SimpleCalendar />;
      case '6':
        return <EmployeeComponent />;
      case '7':
        return <EmployeeComponent />;
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
        <div className="demo-logo-vertical" />
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
              label: 'Thông tin đặt vé',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '5',
              icon: <ScheduleFilled />,
              label: 'Lịch trình',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '6',
              icon: <ShoppingCartOutlined />,
              label: 'Đơn hàng',
              style: { 
                fontWeight: 500,
              }
            },
            {
              key: '7',
              icon: <LogoutOutlined />,
              label: 'Đăng xuất',
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
            minHeight: '100vh', // Đặt chiều cao là 100vh
          }}
        >
           {renderComponent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default IndexPage;
