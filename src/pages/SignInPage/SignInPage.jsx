import React, { useState } from "react";
import { Container, WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm.jsx";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNavigateSignUp = () => {
        navigate('/sign-up');
    };

    const handleOnchangeEmail = (value) => {
        setEmail(value);
    };

    const handleOnchangePassword = (value) => {
        setPassword(value);
    };

    const handleSignIn = () => {
        console.log("Signing in with:", email, password);
    };
    
    return (
        <Container>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p style={{fontSize: '15px'}}>Đăng nhập và tạo tài khoản</p>
                    <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: ' 8px'
                            }}
                        >
                            {isShowPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
                        </span>
                        <InputForm placeholder="password" type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword} />
                    </div>
                    {/* Error message display */}
                    {/* <span style={{ color: 'red' }}>Error message</span> */}
                    <ButtonComponent
                        disabled={!email.length || !password.length}
                        onClick={handleSignIn}
                        size={40}
                        styleButton={{ background: 'rgb(255, 57, 69)', height: '48px', width: '100%', border: 'none', borderRadius: '4px', margin: '26px 0 10px' }}
                        textButton={'Đăng nhập'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '300' }}>
                    </ButtonComponent>
                    <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
                    <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight> </p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
                    <h4 style={{fontSize: '15px'}}>Đi cùng ViVu</h4>
                </WrapperContainerRight>
            </div>
        </Container>
    );
}

export default SignInPage;
