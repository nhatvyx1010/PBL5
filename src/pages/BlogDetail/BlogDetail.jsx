import React from "react";
import { WrapperTitle, WrapperTitle_1, WrapperTitle_0, WrapperTitle_2, WrapperDay, BlogStyle, HomeOut, Arrow, SearchText, Destination, Content, ConTent } from "./style";
import bgFb from '../../assets/images/bg_full.jpg';
import { HomeOutlined} from '@ant-design/icons';
import imgHaLong from '../../assets/images/HaLong.jpg';
import {useNavigate} from 'react-router-dom'

const BlogPage = () => {
    const currentDate = new Date(); // Lấy ngày hiện tại
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const navigate = useNavigate()
    const handleBlog = () => {
        navigate('/blog')
    }
    return (
        <div style={{ backgroundImage: `url(${bgFb})`, backgroundSize: 'cover', height: '1000px' }}>
            <HomeOut>
                <HomeOutlined style={{ fontSize: '20px', marginLeft: '10%', cursor: 'pointer'}} />
                <Arrow style={{cursor: 'pointer'}}>&gt;</Arrow>
                <SearchText style={{cursor: 'pointer'}} onClick={handleBlog}>Blogs</SearchText>
                <Arrow style={{cursor: 'pointer'}}>&gt;</Arrow>
                <Destination style={{cursor: 'pointer'}}>Top 5 resort nổi tiếng ở Hạ Long</Destination>
            </HomeOut>
            <BlogStyle>
                <WrapperTitle_0>
                    <WrapperTitle>Top 5 resort nổi tiếng ở Hạ Long</WrapperTitle>
                    <WrapperDay>{formattedDate}</WrapperDay>
                    <WrapperTitle_2>`````````````</WrapperTitle_2>
                    <WrapperTitle_1>Nếu bạn chưa tìm được khu nghỉ dưỡng sang xịn tại Hạ Long, hãy để ViVu gợi ý giúp bạn 6 resort Hạ Long đáng để trải nghiệm trong chuyến du lịch khám phá vùng đất tươi đẹp nơi đây nhé!</WrapperTitle_1>
                </WrapperTitle_0>
                <div style={{ textAlign: 'center'}}>
                    <img src={imgHaLong} alt="img" style={{ width: '70%', borderRadius: '32px' }}></img>
                </div>
                <Content>
                    <h1>1.     FLC Grand Hạ Long (FLC Hạ Long Bay Golf Club & Luxury Resort)</h1>
                    <ul>
                        <ConTent>Địa chỉ: Đường Nguyễn Văn Cừ, phường Hồng Hải, Thành phố Hạ Long</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Giá phòng tham khảo: 3.300.000 – 7.600.000 VNĐ/đêm/villa</ConTent>
                    </ul>
                    <h1 style={{fontWeight: '400', width: '90%'}}>Flc Hạ Long, các tòa căn hộ khách sạn đẳng cấp 5 sao tọa lạc trên đỉnh đồi trung tâm thành phố. Đây là nơi đẹp nhất để chiêm ngưỡng trọn vẹn kỳ quan thiên nhiên Vịnh Hạ Long. Sở hữu những tiện ích đẳng cấp hàng đầu như sân golf 18 hố dạng links, trung tâm hội nghị quốc tế 1500 chỗ, bể bơi bốn mùa 1000m2 và Skybar view vịnh cao nhất thành phố.</h1>
                </Content>
                <Content>
                    <h1>2.     Vinpearl Ha Long</h1>
                    <ul>
                        <ConTent>Địa chỉ: Đảo Rều, Thành phố Hạ Long, Quảng Ninh</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Giá phòng tham khảo: từ 2.600.000 – 5.000.000Đ/người</ConTent>
                    </ul>
                    <h1 style={{fontWeight: '400', width: '90%'}}>Lấy cảm hứng từ các tác phẩm nghệ thuật và kiến ​​trúc Pháp, Vinpearl Hạ Long Resort mang đến cho du khách nơi nghỉ dưỡng sang trọng với thiết kế hình cánh cung trang nhã. Nhìn từ xa, khu nghỉ dưỡng như một vương quốc thu nhỏ, nguy nga và xinh đẹp sừng sững giữa trung tâm Vịnh Hạ Long – kỳ quan thiên nhiên thế giới.</h1>
                    <ul>
                        <ConTent>Với diện tích lên đến 47 000m2, khu nghỉ dưỡng có đến 384 phòng nghỉ với nhiều hạng phòng khác nhau, phù hợp cho nhiều nhu cầu và nhiều đối tượng.</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Vinpearl Hạ Long không chỉ phù hợp để nghỉ dưỡng, nơi đây còn là địa điểm lý tưởng để bạn có thể trải nghiệm những tiện ích dịch vụ cao cấp, chuẩn 5 sao quốc tế.</ConTent>
                    </ul>
                </Content>
                <Content>
                    <h1>3.     Premier Village Ha Long Bay Resort</h1>
                    <ul>
                        <ConTent> Địa chỉ: số 9 đường Hạ Long, Thành phố Hạ Long</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Giá phòng tham khảo: từ 3.200.000 – 15.300.000 VNĐ/đêm/villa</ConTent>
                    </ul>
                    <h1 style={{fontWeight: '400', width: '90%'}}>Với không gian và thiết kế đón gió biển trong lành cùng với những tiện ích như hồ bơi riêng, biệt thự nghỉ dưỡng sang trọng sẽ đem đến cho bạn và gia đình cảm giác được hòa mình vào sự tươi mát của cỏ cây, hoa lá và đắm mình thư giãn trong tiếng sóng biển rì rào.</h1>
                    <ul>
                        <ConTent>Những căn biệt thự sang trọng của Premier Village Ha Long Bay được thiết kế tràn đầy cảm hứng để hòa nhịp trọn vẹn với vẻ đẹp nhiệt đới bên bờ vịnh</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Trải nghiệm những màn trình diễn ẩm thực sống động và tương tác trực tiếp với các đầu bếp hàng đầu</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Cung cấp phòng các phòng massage trị liệu đôi và đơn. Đặc quyền sử dụng bể bơi và spa với trang thiết bị tiện nghi.</ConTent>
                    </ul>
                </Content>
                <Content>
                    <h1>4.     Royal Lotus Ha Long Resort & Villas</h1>
                    <ul>
                        <ConTent>Địa chỉ: Bán Đảo 2, Đường Hùng Thắng, Thành phố Hạ Long</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Giá phòng tham khảo: từ 1.500.000đ – 2.000.000đ</ConTent>
                    </ul>
                    <h1 style={{fontWeight: '400', width: '90%'}}>Phong cách thiết kế của Resort Royal Lotus Hạ Long được lấy cảm hứng từ xu hướng sống xanh toàn cầu. Công trình là sự kết hợp độc đáo và hoàn hảo giữa vẻ đẹp hiện đại của những khu biệt thự, phòng nghỉ và sự trong lành, tươi mát của phong cảnh thiên nhiên xung quanh.</h1>
                    <ul>
                        <ConTent>Royal Villas Hạ Long là khu nghỉ dưỡng duy nhất sở hữu hệ thống phòng khách sạn vừa có phòng nghỉ dưỡng dành cho gia đình. Chính vì vậy resort luôn là sự lựa chọn hàng đầu dành cho những chuyến du lịch nghỉ dưỡng của các đại gia đình hoặc những nhóm du khách đông người.</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Không chỉ dừng lại ở đó, nằm trên mảnh đất nhô ra sát bờ biển nên Royal Lotus Hạ Long sở hữu 3 mặt tiền giáp biển. Chính ưu điểm này đã giúp đem tới cảm giác thoáng đãng, bình yên nhưng cũng vô cùng riêng tư cho du khách khi đặt chân tới mảnh đất này.</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Với dịch vụ chuyên nghiệp cùng khung cảnh thiên nhiên hữu tình, nên thơ của Hạ Long, Lotus Hạ Long đang là resort được đánh giá cao, hàng năm thu hút một lượng lớn du khách tới đây lưu trú, nghỉ dưỡng.</ConTent>
                    </ul>
                </Content>
                <Content>
                    <h1>5.     Tuan Chau Resort Ha Long (La Paz Tuan Chau)</h1>
                    <ul>
                        <ConTent> Địa chỉ: Đường Ngọc Châu, đảo Tuần Châu, Thành phố Hạ Long</ConTent>
                    </ul>
                    <ul>
                        <ConTent> Giá phòng tham khảo: từ 900.000Đ/phòng/đêm</ConTent>
                    </ul>
                    <h1 style={{fontWeight: '400', width: '90%'}}>Tuan Chau Resort Ha Long sở hữu quy mô rộng lớn lên đến 220 ha bao gồm 247 phòng nghỉ và biệt thự sang trọng. Các căn biệt thự được thiết kế biệt lập với nhau, tạo sự riêng tư, thoải mái cho các du khách.</h1>
                    <ul>
                        <ConTent>Resort được bao quanh bởi số lượng cây xanh khổng lồ của rừng thông, của những rặng dừa, rặng cọ, những bụi hoa giấy,...Tất cả tạo nên một không gian sống trong lành, mát mẻ và đẹp đẽ nhất.</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Tuan Chau Resort Ha Long lấy cảm hứng thiết kế từ các công trình địa phương của miền Bắc nước Pháp kết hợp cùng với những nét truyền thống của phong cách Việt. Các căn biệt thự ở đây nổi bật với thiết kế đối xứng đặc trưng của các công trình Châu Âu. Thiết kế này không chỉ tạo được tính đồ sộ cho công trình mà đâu đó vẫn mang vẻ đẹp tinh tế, lãng mạn của chất Pháp. </ConTent>
                    </ul>
                    <ul>
                        <ConTent>Điểm nhấn ở phần không gian ngoài trời tại Tuan Chau Resort Ha Long chính là thiết kế bể bơi ngoài trời rộng lớn được đặt ngay trước khu vực sảnh lễ tân. Bể bơi có hướng nhìn ra phía biển, tại đây, du khách hoàn toàn có thể vừa ngâm mình trong làn nước mát, vừa thưởng thức cảnh đẹp thiên nhiên hùng vĩ một cách chân thực nhất.</ConTent>
                    </ul>
                    <ul>
                        <ConTent>Tuan Chau Resort Ha Long cung cấp hơn 200 phòng ở với 3 loại biệt thự chính. Các phòng tại Tuan Chau Resort Ha Long đều được thiết kế rộng rãi với vẻ đẹp sang trọng, gồm đầy đủ các tiện ích. </ConTent>
                    </ul>
                    <ul>
                        <ConTent>Các nhà hàng được thiết kế khác nhau nhưng tổng thể vẫn mang vẻ sang trọng, tinh tế của lối kiến trúc Pháp. Nội thất nhà hàng sử dụng nhiều các vật liệu bằng gỗ từ bàn ghế, sàn nhà, hệ thống cửa…tạo vẻ đẹp giản dị, gần gũi. Bên cạnh đó, ánh sáng vàng được dùng để chiếu sáng phần không gian nhà hàng còn đem đến cho du khách không gian ẩm thực ấm cúng, nhẹ nhàng trong mỗi bữa ăn.</ConTent>
                    </ul>
                </Content>
            </BlogStyle>
        </div>
    )
}

export default BlogPage;
