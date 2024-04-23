import React from "react";
import { WrapperTitle, WrapperTitle_1, WrapperTitle_0, WrapperTitle_2, Container, CardStyle, WrapperCard, WrapperDay, WrapperDetails, CardTitle, TitleDetails, CardDetails, Card, WrapCard, BlogStyle, Contentt } from "./style";
import bgFb from '../../assets/images/bg_full.jpg';
import HaLong from '../../assets/images/HaLong.jpg';
import QuangNinh from '../../assets/images/QuangNinh.jpg';
import DiaDiemCheckIn from '../../assets/images/DiaDiemCheckIn.jpg';
import { Pagination } from 'antd';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const BlogPage = () => {
    // Tạo một mảng chứa dữ liệu cho các card
    const cardsData = [
        { title: "Top 5 resort nổi tiếng ở Hạ Long", details: "Nếu bạn chưa tìm được khu nghỉ dưỡng sang xịn tại Hạ Long, hãy để ViVu gợi ý giúp bạn 6 resort Hạ Long đáng để trải nghiệm trong chuyến du lịch khám phá vùng đất tươi đẹp nơi đây nhé!", src: HaLong },
        { title: "Khám phá 3 ngôi chùa nổi tiếng ở Bắc Ninh", details: "Không chỉ được biết đến là một địa điểm du lịch nổi tiếng bao gồm: Vịnh Hạ Long, đảo Tuần Châu, …Ngoài ra, thành phố du lịch Quảng Ninh còn thu hút du khách bởi những địa điểm du lịch tâm linh.", src: QuangNinh },
        { title: "5 địa điểm check in không thể bỏ qua khi đến Hạ Long", details: "Được mệnh danh là thiên đường sống ảo bởi khung cảnh “nghiêng nước nghiêng thành”. Vậy đến Hạ Long nên đi đâu check-in? Hãy để MixiVivu giới thiệu cho bạn 5 địa điểm check in sống ảo không thể bỏ qua khi đến Hạ Long nhé!", src: DiaDiemCheckIn  },
        { title: "Top 5 resort nổi tiếng ở Hạ Long", details: "Hạ Long: Bí mật và Cuộc sống trong Vịnh - Khám phá và Cập nhật những tin tức hấp dẫn từ điểm đến tuyệt vời này.", src: 0  },
        { title: "Top 5 resort nổi tiếng ở Hạ Long", details: "Hạ Long: Bí mật và Cuộc sống trong Vịnh - Khám phá và Cập nhật những tin tức hấp dẫn từ điểm đến tuyệt vời này.", src: 0  },
        { title: "Top 5 resort nổi tiếng ở Hạ Long", details: "Hạ Long: Bí mật và Cuộc sống trong Vịnh - Khám phá và Cập nhật những tin tức hấp dẫn từ điểm đến tuyệt vời này.", src: 0  }
    ];

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
      };

    const navigate = useNavigate()
    const handleBlog = () => {
        navigate('/blogdetail')
    }

    

    return (
        <div style={{ backgroundImage: `url(${bgFb})`, backgroundSize: 'cover', height: '1200px', margin: '60px' }}>
                <BlogStyle>
                    <WrapperTitle_0>
                        <WrapperTitle>Khám phá sự đặc sắc và Cập nhật tin tức mới nhất</WrapperTitle>
                        <WrapperTitle_1>Bí mật và Cuộc sống trong Vịnh - Khám phá và Cập nhật những tin tức hấp dẫn từ điểm đến tuyệt vời này.</WrapperTitle_1>
                        <WrapperTitle_2>`````````````</WrapperTitle_2>
                    </WrapperTitle_0>
                    <Container>
                        {/* Sử dụng map để tạo ra các phần tử CardStyle từ mảng cardsData */}
                        {cardsData.map((data, index) => (
                                <CardStyle key={index} style={{cursor: 'pointer'}} onClick={handleBlog}>
                                    <WrapCard>
                                        <Card>
                                            <WrapperCard >
                                                <img src={data.src} alt="img" style={{ width: '100%', height: '100%', borderRadius: '32px' }}></img>
                                            </WrapperCard>
                                            <CardDetails>
                                                <TitleDetails>
                                                    <CardTitle>{data.title}</CardTitle>
                                                    <WrapperDetails>{data.details}</WrapperDetails>
                                                </TitleDetails>
                                                <WrapperDay>{data.date}</WrapperDay>
                                            </CardDetails>
                                        </Card>
                                    </WrapCard>
                                </CardStyle>
                        ))}
                    </Container>
                </BlogStyle>
            
        </div>
    )
}

export default BlogPage;



                            {/* <Link to={`/blog/${index}`} key={index}> */}
                            {/* </Link> */}