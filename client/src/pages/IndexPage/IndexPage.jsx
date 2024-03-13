import React, { useState, useEffect  } from "react";
import { Button, Input, DatePicker, Radio, Row, Col, Select } from 'antd'; // Import Radio component
import moment from 'moment';
import { Option } from "antd/es/mentions";
import { CustomRadioGroup } from "./style";


const IndexPage = () => {
    const [departDate, setDepartDate] = useState(moment());
    const [returnDate, setReturnDate] = useState(null);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [tripType, setTripType] = useState(1);
    const [commentIndex, setCommentIndex] = useState(0);

    const handleSearch = () => {
    };

    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
    };

    const comments = [
        "Cô vừa về đến nhà. Chuyến bay tốt lắm cháu ạ! Chuẩn giờ, bay máy bay to. Con cô bảo đặt được vé giá tốt mà giờ bay cũng rất đẹp. Lần sau lại đặt vé cho cô nhé!",
        "Chuyến bay của chị và gia đình đi chơi rất thuận lợi em ạ. Bên em tư vấn chọn chuyến cho chị xong lại check in online cho chị nữa nên cả nhà được ngồi gần nhau. Nhà chị cũng thường xuyên đi chơi nên chị sẽ đặt vé bên em nhiều nhiều!",
        "Mọi khi anh hay đi Vietnamairlines. Chất lượng dịch vụ tốt, làm thủ tục nhanh. Với lại, đợt rồi cũng máy bay Bamboo vì nhà anh nhiều vali. Bamboo tính cân nên cũng tiện. Anh hài lòng về chuyến bay!",
        "Lần đầu chị đặt vé bay đi nước ngoài bên em và cảm thấy vô cùng hài lòng! Chị rất cảm ơn bên em tư vấn cho chị chuyến bay, giờ bay đẹp, thời gian nối chuyến hợp lý, không bị mệt. Chắc chắn chị sẽ đặt vé bên em nhiều nhiều.",
        "Alo, mình và gia đình vừa về. Cảm ơn bên bạn đặt vé cho mình nhé! Cả nhà đi vui lắm bạn ạ. May là bạn tư vấn cho mình giờ vì nhà mình có trẻ nhỏ. Chuyến bay chuẩn giờ, chỗ ngồi đẹp. Lần sau, mình lại nhờ bạn đặt vé nhé!",
        "Cô bị đau chân nên hay phải chọn chỗ ngồi thoải mái. Bên cháu tư vấn tốt lắm! Bạn đặt vé chọn cho cô máy bay to, thân rộng. Cô rất ưng í! Mấy hôm nữa cô lại bay tiếp nên nhờ bên cháu kiểm tra vé và đặt chỗ cho cô nhé!"
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

    const nextComment = () => {
        setCommentIndex((prevIndex) => (prevIndex === comments.length - 1 ? 0 : prevIndex + 1));
    };

    const prevComment = () => {
        setCommentIndex((prevIndex) => (prevIndex === 0 ? comments.length - 1 : prevIndex - 1));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '70%', textAlign: 'center', border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
                <h2 style={{ fontSize: '24px'}}>Mở cánh cửa khám phá cùng ViVu</h2>
                <h3 style={{ fontSize: '20px' }}>ViVu - Tàu di chuyển bạn đến những vùng đất mới với một hành trình bất tận</h3>
                <div>
                    <CustomRadioGroup onChange={handleTripTypeChange} value={tripType} >
                        <Radio value={1} style={{fontSize: '17px'}}>Một chiều</Radio>
                        <Radio value={2} style={{fontSize: '17px'}}>Khứ Hồi</Radio>
                    </CustomRadioGroup>
                </div>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                        <label style={{ marginBottom: '10px'}}>Điểm đi</label>
                        <Select
                            placeholder="Chọn điểm đi"
                            style={{ width: '100%', marginBottom: '10px' }}
                            onChange={(value) => console.log(value)}
                        >
                            <Option value="hanoi">Hà Nội</Option>
                            <Option value="hcm">TP. Hồ Chí Minh</Option>
                        </Select>
                    </Col>
                    <Col xs={24} sm={12}>
                        <label style={{ marginBottom: '10px' }}>Điểm đến</label>
                        <Select
                            placeholder="Chọn điểm đến"
                            style={{ width: '100%', marginBottom: '10px' }}
                            onChange={(value) => console.log(value)}
                        >
                            <Option value="danang">Đà Nẵng</Option>
                            <Option value="nhatrang">Nha Trang</Option>
                        </Select>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                        <label style={{ marginBottom: '10px' }}>Ngày đi</label>
                        <DatePicker
                            value={departDate}
                            format="DD/MM/YYYY"
                            onChange={(date) => setDepartDate(date)}
                            style={{ marginBottom: '10px', width: '100%' }}
                        />
                    </Col>
                    {tripType === 2 && (
                        <Col xs={24} sm={12}>
                            <label style={{ marginBottom: '10px' }}>Ngày về</label>
                            <DatePicker
                                value={returnDate} 
                                format="DD/MM/YYYY"
                                onChange={(date) => setReturnDate(date)} 
                                style={{ marginBottom: '10px', width: '100%' }}
                            />
                        </Col>
                    )}
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={8}>
                        <label style={{ marginBottom: '10px' }}>Người lớn</label>
                        <Input
                            type="number"
                            placeholder="Người lớn"
                            value={adults}
                            onChange={(e) => setAdults(Math.max(0, parseInt(e.target.value)))}
                            style={{ marginBottom: '10px' }}
                            min={0}
                        />
                    </Col>
                    <Col xs={24} sm={8}>
                        <label style={{ marginBottom: '10px' }}>Trẻ em</label>
                        <Input
                            type="number"
                            placeholder="Trẻ em"
                            value={children}
                            onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value)))}
                            style={{ marginBottom: '10px' }}
                            min={0}
                        />
                    </Col>
                    <Col xs={24} sm={8}>
                        <label style={{ marginBottom: '10px' }}>Em bé</label>
                        <Input
                            type="number"
                            placeholder="Em bé"
                            value={infants}
                            onChange={(e) => setInfants(Math.max(0, parseInt(e.target.value)))}
                            style={{ marginBottom: '10px' }}
                            min={0}
                        />
                    </Col>
                </Row>


                <Button type="primary" onClick={handleSearch} style={{background: '#079DD9'}}>Tìm chuyến bay</Button>

            </div>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '25px' }}>Đánh giá từ người trải nghiệm</h1>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{fontSize: '20px', width: '1000px'}}>{comments[commentIndex]}</p>
                        <div>
                            <Button onClick={() => handleChangeComment(0)} style={{ marginRight: '8px' }}>CHỊ LÊ THỦY</Button>
                            <Button onClick={() => handleChangeComment(1)} style={{ marginRight: '8px' }}>CÔ MINH HÒA</Button>
                            <Button onClick={() => handleChangeComment(2)} style={{ marginRight: '8px' }}>ANH QUANG ANH</Button>
                            <Button onClick={() => handleChangeComment(3)} style={{ marginRight: '8px' }}>CHỊ GIANG</Button>
                            <Button onClick={() => handleChangeComment(4)} style={{ marginRight: '8px' }}>BẠN CHU HUYỀN</Button>
                            <Button onClick={() => handleChangeComment(5)} style={{ marginRight: '8px' }}>CÔ GIANG</Button>
                        </div>
                    </div>
                </div>
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
                    <Button type="text" style={{ color: 'white', marginBottom: '10px' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'}>Về chúng tôi</Button>
                    <Button type="text" style={{ color: 'white', marginBottom: '10px' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'}>Điều khoản và điều kiện</Button>
                    <Button type="text" style={{ color: 'white', marginBottom: '10px' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'}>Chính sách riêng tư</Button>
                    <Button type="text" style={{ color: 'white' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'}>Hướng dẫn sử dụng</Button>
                </div>

                <div style={{ flex: '0 0 auto', width: '32%' }}>
                    <h2 style={{ fontSize: '15px', color: 'grey' }}>Tàu</h2>
                    <Button type="text" style={{ color: 'white', marginBottom: '10px' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'}>Blog</Button>
                    <Button type="text" style={{ color: 'white', marginBottom: '10px' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'}>Quy định chung</Button>
                    <Button type="text" style={{ color: 'white' }} onMouseEnter={e => e.target.style.fontWeight = 'bold'} onMouseLeave={e => e.target.style.fontWeight = 'normal'}>Các câu hỏi thường gặp</Button>
                </div>
            </div>


       
        </div>
    );
};

export default IndexPage;
