import { useState } from "react";
import { Container, WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowComfirmPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSignUp = (e) => {

        if (!fullname || !email || !username || !password || !confirmPassword) {
            setErrorMessage("Vui lòng điền đầy đủ thông tin.");
            return;
        } else if (password !== confirmPassword) {
            setErrorMessage("Mật khẩu xác nhận không khớp.");
            return;
        } else {
            setErrorMessage('');
        }

        const isValidEmailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        if (!isValidEmailPattern.test(email)) {
            setErrorMessage("Email không hợp lệ.");
            return;
        } else {
            setErrorMessage('');
        }
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("fullName", fullname);
    
        // fetch(process.env.REACT_APP_API_URL + "api/v1/auth/register", {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/auth/register`, {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.meta.status_code === 201) {
                navigate("/sign-in");
            } else {
                alert(" Đăng ký không thành công. Vui lòng thử lại.");
            }
        })
        .catch((error) => {
            console.error('Lỗi:', error);
            alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
        });
    };

    const handleOnchangeFullname = (value) => {
        setFullname(value);
    };

    const handleOnchangeUsername = (value) => {
        setUsername(value);
    };


    const handleOnchangeEmail = (value) => {
        setEmail(value);
        if (!/^[\w-]+(\.[\w-]+)*@gmail\.com$/i.test(value)) {
            setEmailError('Email không hợp lệ');
        } else {
            setEmailError('');
        }
    };

    const handleOnchangePassword = (value) => {
        setPassword(value);
    };

    const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value);
        if (password !== value) {
            setErrorMessage('Mật khẩu xác nhận không khớp.');
        } else {
            setErrorMessage('');
        }
    };

    const handleNavigateSignIn = () => {
        navigate('/sign-in');
    };

    return (
        <Container>
            <div style={{ width: '800px', height: '500px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p style={{fontSize: '15px'}}>Đăng nhập và tạo tài khoản</p>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        {fullname === '' && <span style={{ color: 'red', marginRight: '5px' }}>*</span>}
                        <InputForm placeholder="Nguyễn Văn B" value={fullname} onChange={handleOnchangeFullname} />
                    </div>


                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        {email === '' && <span style={{ color: 'red', marginRight: '5px' }}>*</span>}
                        <InputForm placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
                        {emailError && <span style={{ color: 'red', marginLeft: '5px' }}>{emailError}</span>}
                    </div>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        {username === '' && <span style={{ color: 'red', marginRight: '5px' }}>*</span>}
                        <InputForm placeholder="username" value={username} onChange={handleOnchangeUsername} />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >
                            {isShowPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
                        </span>
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            {password === '' && <span style={{ color: 'red', marginRight: '5px' }}>*</span>}
                            <InputForm placeholder="password" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword} />
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowComfirmPassword(!isShowConfirmPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >
                            {isShowConfirmPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
                        </span>
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            {confirmPassword === '' && <span style={{ color: 'red', marginRight: '5px' }}>*</span>}
                            <InputForm placeholder="confirm password" type={isShowConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleOnchangeConfirmPassword} />
                        </div>
                    </div>
                    {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
                    <ButtonComponent
                        disabled={!email.length || !password.length || !confirmPassword.length}
                        onClick={handleSignUp}
                        size={40}
                        styleButton={{ background: 'rgb(255, 57, 69)', height: '48px', width: '100%', border: 'none', borderRadius: '4px', margin: '26px 0 10px' }}
                        textButton={'Đăng ký'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '300' }}>
                    </ButtonComponent>
                    <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}>Đăng nhập</WrapperTextLight> </p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
                    <h4 style={{fontSize: '15px'}}>Đi cùng ViVu</h4>
                </WrapperContainerRight>
            </div>
        </Container>
    );
}

export default SignUpPage;
