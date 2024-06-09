import { useState } from "react";
import { Container, WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm.jsx";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from '../../assets/images/logo-login.png'
import { Image, Spin } from "antd";
import { EyeFilled, EyeInvisibleFilled, LoadingOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slides/userSlide.js';

const SignInPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isShowPassword, setIsShowPassword] = useState(false);
    // const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
    
        console.log(username+"-"+password)
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/auth/login`, {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            setIsLoading(false);
            console.log(data.meta.error+"\n")
            if (data.meta.status_code === 401) {
                alert(data.meta.error);
            } else if (data.meta.status_code === 200 && data.data.result.accessToken) {
                dispatch(updateUser({
                    userId: data.data.result.userId,
                    // name: data.data.result.fullName,
                    // email: data.data.result.email,
                    access_token: data.data.result.accessToken,
                    // address: '',
                    // phoneNumber: data.data.result.phoneNumber,
                    // avatar: ''
                }));
                handleMe(data.data.result.accessToken);
                navigate("/");
            } else {
                alert("Đăng nhập không thành công. Vui lòng thử lại.");
            }
        })        
        .catch((error) => {
            setIsLoading(false);
            console.error('Lỗi:', error);
            alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
        });
    };

    const handleMe = (accessToken) => {    
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/me`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setIsLoading(false);
            console.log("status_code: " + data.meta.status_code);
            if (data.meta.status_code === 401) {
                alert(data.meta.error);
            } else if (data.meta.status_code === 200) {
                dispatch(updateUser({
                    name: data.data.result.fullName,
                    email: data.data.result.email,
                    phone: data.data.result.phoneNumber
                }));

                navigate("/");
            } else {
                alert("Đăng nhập không thành công. Vui lòng thử lại.");
            }
        })        
        .catch((error) => {
            setIsLoading(false);
            console.error('Lỗi:', error);
            alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
        });
    };

    const handleNavigateSignUp = () => {
        navigate('/sign-up');
    };

    // const handleOnchangeEmail = (value) => {
    //     setEmail(value);
    // };
    
    const handleOnchangeUsername = (value) => {
        setUsername(value);
    };
    const handleOnchangePassword = (value) => {
        setPassword(value);
    };
    
    return (
        <Container>
            <Spin
                spinning={isLoading}
                indicator={<LoadingOutlined style={{ fontSize: '48px', width: '48px', height: '48px', color:'#ffffff' }} spin />}
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            />
            <div style={{ position: 'relative', opacity: isLoading ? 0.3 : 1 }}>
                
                <div style={{ width: '780px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                    <WrapperContainerLeft>
                        <h1>Xin chào</h1>
                        <p style={{fontSize: '15px'}}>Đăng nhập và tạo tài khoản</p>
                        <InputForm style={{ marginBottom: '10px' }} placeholder="username" value={username} onChange={handleOnchangeUsername} />
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
                        <ButtonComponent
                            disabled={!username.length || !password.length}
                            onClick={handleLogin}
                            size={40}
                            styleButton={{ background: 'rgb(255, 57, 69)', height: '48px', width: '100%', border: 'none', borderRadius: '4px', margin: '26px 0 10px' }}
                            textButton={'Đăng nhập'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '300' }}
                        />
                        <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
                        <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight> </p>
                    </WrapperContainerLeft>
                    <WrapperContainerRight>
                        <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
                        <h4 style={{fontSize: '15px'}}>Đi cùng ViVu</h4>
                    </WrapperContainerRight>
                </div>
            </div>
        </Container>
    );
}

export default SignInPage;
