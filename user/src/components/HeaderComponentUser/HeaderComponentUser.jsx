import { useState } from 'react';
import { Col, Avatar, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom'; 
import { LogoImage, Navigation, NavigationItem, WrapperHeader } from "./style";
import logoImage from '../../assets/images/logo.png';
import {useNavigate} from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import { updateUser } from '../../redux/slides/userSlide';
import { resetSeatSelection } from '../../redux/slides/selectedSeatSlide';
import { resetSchedules } from '../../redux/slides/schedulesSlide';

import { useDispatch } from 'react-redux';

const HeaderComponentUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const handleNavigateLogin = () => {
    //     navigate('/sign-in')
    // }
    const handleSearch = () => {
        navigate('/')
    }
    const handleAboutMe = () => {
        navigate('/aboutme')
    }
    const handleBlog = () => {
        navigate('/blog')
    }
    const handleInstruct = () => {
        navigate('/instruct')
    }
    const handleInfo = () => {
        navigate('/personal')
    }
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuVisibleChange = (visible) => {
        setMenuVisible(visible);
    };

    const handleLogout = () => {
        dispatch(updateUser({
            name: '',
            email: '',
            access_token: '',
            address: '',
            phone: '',
            avatar: ''
        }));
        dispatch(resetSeatSelection());
        dispatch(resetSchedules());
        navigate("/");

    };

    const menu = (
        <Menu>
            <Menu.Item key="home" onClick={handleSearch }>Trang chủ</Menu.Item>
            <Menu.Item key="info" onClick={handleInfo}>Thông tin</Menu.Item>
            <Menu.Item key="logout" onClick={handleLogout}>Đăng xuất</Menu.Item>
        </Menu>
    );
    return (
        <div>
            <WrapperHeader>
                <Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to="/"> 
                        <LogoImage src={logoImage} alt="Logo" />
                    </Link> 
                </Col>
                <Col span={14} > 
                    <Navigation >
                        <NavigationItem onClick={handleSearch}>Tìm tàu</NavigationItem>
                        <NavigationItem onClick={handleBlog}>Blog</NavigationItem>
                        <NavigationItem onClick={handleAboutMe}>Về chúng tôi</NavigationItem>
                        <NavigationItem onClick={handleInstruct}>Hướng dẫn</NavigationItem>
                    </Navigation>
                </Col>
                <Col span={5} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Dropdown
                        overlay={menu}
                        onVisibleChange={handleMenuVisibleChange}
                        visible={menuVisible}
                    >
                        <Avatar size={40} icon={<UserOutlined />} />
                    </Dropdown>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponentUser;
