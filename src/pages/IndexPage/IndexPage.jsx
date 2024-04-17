import React, { useState, useEffect, useRef } from "react";
import { Button, Input, DatePicker, Radio, Row, Col, Select } from 'antd'; // Import Radio component
import moment from 'moment';
import { Option } from "antd/es/mentions";
import { CustomRadioGroup, StyledVideo, RectangleStyle, BackgroundFB, CommentButton, SearchButton, SelectStyle, DatePickerStyle, InputMember, FeedBack, ContainerFeedBack } from "./style";
import VideoIndex from '../../assets/Video/VideoIndex.mp4';
import bgFb from '../../assets/images/bg_full.jpg';
import { useNavigate } from "react-router-dom";

const IndexPage = () => {
    const [departDate, setDepartDate] = useState(moment());
    const [returnDate, setReturnDate] = useState(null);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [tripType, setTripType] = useState(1);
    const [commentIndex, setCommentIndex] = useState(0);
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

    const navigate = useNavigate();
    const handleSearch = () => {
        navigate('/search')
    }
    const handleInstruct = () => {
        navigate('/instruct')
    }
    const handleBlog = () => {
        navigate('/blog')
    }
    const handleRegulations = () => {
        navigate('/regulations')
    }
    const handleAboutMe = () => {
        navigate('/aboutme')
    }
    const handleRules = () => {
        navigate('/rules')
    }
    const handlePolicy = () => {
        navigate('/policy')
    }
    const handleQuestion = () => {
        navigate('/questions')
    }


    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
    };

    const comments = [
        "Cô vừa về đến nhà. Chuyến bay tốt lắm cháu ạ! Chuẩn giờ, bay máy bay to. Con cô bảo đặt được vé giá tốt mà giờ bay cũng rất đẹp.",
        "Chuyến bay của chị và gia đình đi chơi rất thuận lợi em ạ. Bên em tư vấn chọn chuyến cho chị xong lại check in online cho chị nữa nên cả nhà được ngồi gần nhau.",
        "Mọi khi anh hay đi Vietnamairlines. Chất lượng dịch vụ tốt, làm thủ tục nhanh. Với lại, đợt rồi cũng máy bay Bamboo vì nhà anh nhiều vali.",
        "Lần đầu chị đặt vé bay đi nước ngoài bên em và cảm thấy vô cùng hài lòng!",
        "Alo, mình và gia đình vừa về. Cảm ơn bên bạn đặt vé cho mình nhé! Cả nhà đi vui lắm bạn ạ.",
        "Cô bị đau chân nên hay phải chọn chỗ ngồi thoải mái. Bên cháu tư vấn tốt lắm! Bạn đặt vé chọn cho cô máy bay to, thân rộng."
    ];

    const handleChangeComment = (index) => {
        setCommentIndex(index);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            nextComment();
        }, 3000);

        return () => clearTimeout(timer);
    }, [commentIndex]);

    useEffect(() => {
        setCurrentCommentIndex(commentIndex);
    }, [commentIndex]);
    

    const nextComment = () => {
        setCommentIndex((prevIndex) => (prevIndex === comments.length - 1 ? 0 : prevIndex + 1));
    };

    const prevComment = () => {
        setCommentIndex((prevIndex) => (prevIndex === 0 ? comments.length - 1 : prevIndex - 1));
    };

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.controls = false;
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <StyledVideo
                ref={videoRef}
                onMouseEnter={handleMouseEnter}
                controls={false}
                autoPlay
                muted
                loop>
                <source src={VideoIndex} type="video/mp4" />
            </StyledVideo>
            <div style={RectangleStyle}>
                <h2 style={{ fontSize: '24px' }}>Mở cánh cửa khám phá cùng ViVu</h2>
                <h3 style={{ fontSize: '20px' }}>ViVu - Tàu di chuyển bạn đến những vùng đất mới với một hành trình bất tận</h3>
                <div>
                    <CustomRadioGroup onChange={handleTripTypeChange} value={tripType} >
                        <Radio value={1} style={{ fontSize: '17px' }}>Một chiều</Radio>
                        <Radio value={2} style={{ fontSize: '17px' }}>Khứ Hồi</Radio>
                    </CustomRadioGroup>
                </div>

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                        
                        <Select
                            placeholder="Chọn điểm đi"
                            style={SelectStyle}
                            onChange={(value) => console.log(value)}
                        >
                            <Option value="hanoi">Hà Nội</Option>
                            <Option value="hcm">TP. Hồ Chí Minh</Option>
                        </Select>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Select
                            placeholder="Chọn điểm đến"
                            style={SelectStyle}
                            onChange={(value) => console.log(value)}
                        >
                            <Option value="danang">Đà Nẵng</Option>
                            <Option value="nhatrang">Nha Trang</Option>
                        </Select>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                        <label style={{ marginBottom: '10px', display: 'block' }}>Ngày đi</label>
                        <div style={{ position: 'relative' }}>
                            <DatePicker
                                value={departDate}
                                format="DD/MM/YYYY"
                                onChange={(date) => setDepartDate(date)}
                                style={DatePickerStyle}
                            />
                        </div>
                    </Col>
                    {tripType === 2 && (
                        <Col xs={24} sm={12}>
                            <label style={{ marginBottom: '10px', display: 'block' }}>Ngày về</label>
                            <div style={{ position: 'relative' }}>
                                <DatePicker
                                    value={departDate}
                                    // value={returnDate}
                                    format="DD/MM/YYYY"
                                    onChange={(date) => setReturnDate(date)}
                                    style={DatePickerStyle}
                                />
                            </div>
                        </Col>
                    )}
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={8}>
                        <label style={{ marginBottom: '10px', display: 'block' }}>Người lớn</label>
                        <div style={{ position: 'relative' }}>
                            <Input
                                type="number"
                                placeholder="Người lớn"
                                value={adults}
                                onChange={(e) => setAdults(Math.max(0, parseInt(e.target.value)))}
                                style={InputMember}
                                min={0}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <label style={{ marginBottom: '10px', display: 'block' }}>Trẻ em</label>
                        <div style={{ position: 'relative' }}>
                            <Input
                                type="number"
                                placeholder="Trẻ em"
                                value={children}
                                onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value)))}
                                style={InputMember}
                                min={0}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <label style={{ marginBottom: '10px', display: 'block' }}>Em bé</label>
                        <div style={{ position: 'relative' }}>
                            <Input
                                type="number"
                                placeholder="Em bé"
                                value={infants}
                                onChange={(e) => setInfants(Math.max(0, parseInt(e.target.value)))}
                                style={InputMember}
                                min={0}
                            />
                        </div>
                    </Col>
                </Row>

                <SearchButton onClick={handleSearch}>Tìm chuyến bay</SearchButton>
            </div>
            <div style={{ position: 'relative', marginTop: '30px' }}>
                <BackgroundFB src={bgFb} alt="background"></BackgroundFB>
                <FeedBack>
                    <ContainerFeedBack>
                        <div>
                            <h1 style={{ fontSize: '40px', color:'#3C7363'}}>Đánh giá từ người trải nghiệm</h1>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '25px', width: '1000px', color: '#3C7363', height: '100px' }}>{comments[commentIndex]}</p>
                            <div>
                            <CommentButton
                                onClick={() => handleChangeComment(0)}
                                style={{borderRadius: '30px', fontWeight: currentCommentIndex === 0 ? 'bold' : 'normal'}}
                            >
                                CHỊ LÊ THỦY
                            </CommentButton>
                            <CommentButton
                                onClick={() => handleChangeComment(1)}
                                style={{borderRadius: '30px', fontWeight: currentCommentIndex === 1 ? 'bold' : 'normal'}}
                            >
                                CÔ MINH HÒA
                            </CommentButton>
                            <CommentButton
                                onClick={() => handleChangeComment(2)}
                                style={{borderRadius: '30px', fontWeight: currentCommentIndex === 2 ? 'bold' : 'normal'}}
                            >
                                ANH QUANG ANH
                            </CommentButton>
                            <CommentButton
                                onClick={() => handleChangeComment(3)}
                                style={{borderRadius: '30px', fontWeight: currentCommentIndex === 3 ? 'bold' : 'normal'}}
                            >
                                CHỊ GIANG
                            </CommentButton>
                            <CommentButton
                                onClick={() => handleChangeComment(4)}
                                style={{borderRadius: '30px', fontWeight: currentCommentIndex === 4 ? 'bold' : 'normal'}}
                            >
                                BẠN CHU HUYỀN
                            </CommentButton>
                            <CommentButton
                                onClick={() => handleChangeComment(5)}
                                style={{borderRadius: '30px', fontWeight: currentCommentIndex === 5 ? 'bold' : 'normal'}}
                            >
                                CÔ GIANG
                            </CommentButton>
                            </div>
                        </div>
                    </ContainerFeedBack>
                </FeedBack>
            </div>

            <div style={{ width: '97.4%', marginTop: '30px', backgroundColor: '#31294C', padding: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ flex: '0 0 auto', width: '32%', marginRight: '1%' }}>
                    <h2 style={{ fontSize: '15px', color: 'grey' }}>Thông tin liên hệ</h2>
                    <p style={{ fontSize: '16px', color: 'white' }}>Công ty TNHH Du Lịch và Dịch Vụ ViVu</p>
                    <p style={{ fontSize: '16px', color: 'white' }}>Tầng 2, 54 Nguyễn Lương Bằng, quận Liên Chiểu, TP. Đà Nẵng</p>
                    <p style={{ fontSize: '16px', color: 'white' }}>Mã số doanh nghiệp: 0110376372 do Sở Kế hoạch và Đầu tư Thành phố Đà Nẵng cấp ngày 05/06/2023</p>
                    <p style={{ fontSize: '16px', color: 'white' }}>Hotline: 0922222016</p>
                    <p style={{ fontSize: '16px', color: 'white' }}>Email: info@vivu.com</p>
                </div>

                <div style={{ flex: '0 0 auto', width: '32%', marginRight: '1%' }}>
                    <h2 style={{ fontSize: '15px', color: 'grey' }}>Giới thiệu</h2>
                    <Button type="text" style={{ color: 'white', marginBottom: '10px' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'} onClick={handleAboutMe}>Về chúng tôi</Button>
                    <Button type="text" style={{ color: 'white', marginBottom: '10px' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'} onClick={handleRules}>Điều khoản và điều kiện</Button>
                    <Button type="text" style={{ color: 'white', marginBottom: '10px' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'} onClick={handlePolicy}>Chính sách riêng tư</Button>
                    <Button type="text" style={{ color: 'white' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'} onClick={handleInstruct}>Hướng dẫn sử dụng</Button>
                </div>

                <div style={{ flex: '0 0 auto', width: '32%' }}>
                    <h2 style={{ fontSize: '15px', color: 'grey' }}>Tàu</h2>
                    <Button type="text" style={{ color: 'white', marginBottom: '10px' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'} onClick={handleBlog}>Blog</Button>
                    <Button type="text" style={{ color: 'white', marginBottom: '10px' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'} onClick={handleRegulations}>Quy định chung</Button>
                    <Button type="text" style={{ color: 'white' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'} onClick={handleQuestion}>Các câu hỏi thường gặp</Button>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
