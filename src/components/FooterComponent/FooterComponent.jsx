import React from "react";
import { Button } from 'antd';

const FooterComponent = () => {
    return (
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

    )
}

export default FooterComponent;
