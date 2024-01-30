import React, { useState } from "react";
import {Badge, Button, Col, Popover} from 'antd'
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall, WrapperContentPopup } from "./style";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import * as UserService from '../../services/UserService'
import {resetUser} from '../../redux/slices/userSlice'

const HeaderComponent = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
    }
    const content = (
        <div>
            <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
            <WrapperContentPopup onClick={() => navigate('/profile-user')} >Thông tin người dùng</WrapperContentPopup>
        </div>
    )
    return (
        <div style={{width: '100%', background: '#84D9BA', display: 'flex', justifyContent: 'center'}}>
            <WrapperHeader>
                <Col span={5}>
                    <WrapperTextHeader>Nhat Vy</WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <ButtonInputSearch 
                        size="large"
                        bordered={false}
                        textButton="Tìm kiếm"
                        placeholder="input search text" 
                        //onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{display: 'flex', gap: '54px', alignItems: 'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{fontSize: '30px'}}  />
                        {!user?.access_token ? (
                            <>
                                <Popover content={content} trigger="click">
                                    <div style={{cursor: 'pointer'}}>{user.name.length > 2 ? user.name : 'User'}</div>
                                </Popover>
                            </>
                        ) : (
                            <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                                <WrapperTextHeaderSmall>Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
                                <div>
                                    <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                    <CaretDownOutlined />
                                </div>
                            </div>
                        )}
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{fontSize: '30px', color:'#fff'}} />
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    );
}

export default HeaderComponent;
