import React from "react";
import { Button, Col } from 'antd';
import { Link } from 'react-router-dom'; 
import { LogoImage, Navigation, NavigationItem, WrapperHeader, LogButton } from "./style";
import logoImage from '../../assets/images/logo.png';
import {useNavigate} from 'react-router-dom'

const HeaderComponent = () => {
    const navigate = useNavigate()
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }
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
                    <LogButton onClick={handleNavigateLogin}>Đăng nhập</LogButton>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent;
