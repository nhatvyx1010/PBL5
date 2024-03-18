import React from "react";
import { Button, Col } from 'antd';
import { Link } from 'react-router-dom'; // Thêm dòng này
import { LogoImage, Navigation, NavigationItem, WrapperHeader, LogButton } from "./style";
import logoImage from '../../assets/images/logo.jpg';
import {useNavigate} from 'react-router-dom'

const HeaderComponent = () => {
    const navigate = useNavigate()
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }
    const handleNavigateRegister = () => {
        navigate('/sign-up')
    }
    return (
        <div>
            <WrapperHeader>
                <Col span={4}>
                    <Link to="/"> 
                        <LogoImage src={logoImage} alt="Logo" />
                    </Link> 
                </Col>
                <Col span={14}>
                    <Navigation>
                        <NavigationItem>Tìm tàu</NavigationItem>
                        <NavigationItem>Blog</NavigationItem>
                        <NavigationItem>Quy định</NavigationItem>
                        <NavigationItem>Hướng dẫn</NavigationItem>
                    </Navigation>
                </Col>
                <Col span={6}>
                    <LogButton>
                        <Button onClick={handleNavigateLogin} style={{cursor: 'pointer'}} type="dashed">Đăng nhập</Button>
                        <Button onClick={handleNavigateRegister} style={{cursor: 'pointer'}} type="dashed">Đăng ký</Button>
                    </LogButton>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent;
