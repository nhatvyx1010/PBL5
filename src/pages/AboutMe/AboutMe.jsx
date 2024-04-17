import React, { useState } from "react";
import { Container, Footer, Wrapper, WrapperIcon, WrapperTitle } from "./style";
import { CaretRightOutlined  } from '@ant-design/icons';
import bgFb from '../../assets/images/bg_full.jpg';
import { Button, Collapse, theme } from 'antd';
import { useNavigate } from "react-router-dom";

const RegulationsPage = () => {
    const [expandStates, setExpandStates] = useState({
        item1: true,
        item2: true,
    });

    const toggleExpand = (itemName) => {
        setExpandStates(prevState => ({
            ...prevState,
            [itemName]: !prevState[itemName]
        }));
    };
        const comments = [
            "Mixivivu.com là sản phẩm chính thức của Công ty TNHH Du lịch và dịch vụ Mixi Vivu. Với niềm đam mê du lịch, ưa khám phá, chúng tôi đã cùng nhau xây dựng một website – nơi mà khách hàng sẽ dễ dàng lựa chọn cho mình cũng như những người thân yêu chuyến nghỉ dưỡng đáng nhớ. Mixi Vivu chọn lọc các du thuyền, khách sạn và liên kết với các hãng hàng không nhằm cung cấp những dịch vụ đa dạng và tốt nhất cho du khách.",
            "Chúng tôi mong muốn du khách tận hưởng các dịch vụ du lịch chất lương bằng sự trải nghiệm thực tế của chính đội ngũ của Mixi Vivu. Các video về du thuyền, khách sạn hay những chuyến bay mà chúng tôi đã ghi lại cũng sẽ được chúng tôi giới thiệu tới du khách. Chính từ những hình ảnh này, quý khách có thể chọn lựa cho mình hay gia đình, bạn bè, đồng nghiệp những chuyến đi ý nghĩa nhất. Chúng tôi chắc chắn sẽ mang lại cho du khách những kỳ nghĩ đáng nhớ với:",
            "Đội ngũ chuyên nghiệp, tâm huyết: Chúng tôi có đội ngũ nhân viên kinh nghiệm, tâm huyết, luôn lắng nghe những thắc mắc, ý kiến của khách hàng thông qua hotline, fanpage được kết nối liên tục. Với vốn kiến thức quý giá tích lũy qua nhiều năm, chúng tôi sẽ tư vấn cho du khách những sản phẩm du lịch phù hợp nhất cũng như những vấn đề phát sinh trong chuyến nghỉ dưỡng. Ngoài ra, chúng tôi còn có những nhân viên mới trẻ trung, năng động hứa hẹn sẽ giới thiệu nhiều điểm đến mới hấp dẫn cho du khách.",
            "Sản phẩm phong phú: Tại địa chỉ website: https://vivu.com của chúng tôi, du khách có thể dễ dàng tìm thấy một du thuyền sang trọng, một chuyến bay khứ hồi hay một khu nghỉ dưỡng tuyệt đẹp trên mảnh đất hình chữ S. Chúng tôi cũng đưa ra những thông tin đầy đủ, hình ảnh thực tế của các dịch vụ chất lượng. Qua đó, du khách sẽ chon lựa được một dịch vụ phù hợp cho chuyến đi cùng gia đình, bạn bè hay đồng nghiệp.",
            "Mức giá hấp dẫn: Mixi Vivu luôn cam kết sẽ đem đến các dịch vụ chất lượng với các mức giá tốt nhất. Chúng tôi tin chắc rằng chi phí mà quý khách thanh toán là hoàn toàn xứng đáng. Bên cạnh đó, quý khách cũng có thể tìm thấy nhiều món quà hấp dẫn trong những đợt khuyến mại trên website của chúng tôi.",
            "Bảo mật thông tin: Chúng tôi cam kết toàn bộ mọi thông tin cá nhân của khách hàng sẽ được giữ bí mật tuyệt đối. Quý khách có thể yên tâm trải nghiệm dịch vụ thực sự thoải mái và riêng tư. Hi vọng, mixivivu.com sẽ là một địa chỉ tin cậy trong mỗi chuyến đi , mỗi kỳ nghỉ của quý khách.",
            "Mixi Vivu cung cấp nhiều dịch vụ du lịch phong phú và đa dạng giúp du khách có nhiều lựa chọn:",
            "Vé máy bay của các hãng hàng không trong và ngoài nước",
            "Du thuyền Hạ Long với đa dạng du thuyền, phù hợp với từng nhu cầu của du khách",
            "Đặt phòng khách sạn và resort",
            "Ngoài ra, chúng tôi cũng cung cấp nhiều dịch vụ khác như: thuê xe du lịch chất lượng cao, thuê hướng dẫn viên du lịch, visa, vé tàu…giúp du khách thoải mái và dễ dàng cho những chuyến du lịch.",
            "CÔNG TY TNHH DU LỊCH VÀ DỊCH VỤ VIVU",
            "VIVU TRAVEL AND SERVICE COMPANY LIMITED",
            "Mã số thuế: 0110376372",
            "Giấy phép kinh doanh số: 0110376372",
            "Nơi cấp: Sở KH & ĐT TP Hà Nội.",
            "Hà Nội: Số 25 - Ngõ 38 Phố Yên Lãng - Quận Đống Đa - Hà Nội",
            "Điện thoại: 0922222016",
            "Địa chỉ email: info@vivu.com",
        ];
        const getItems = (panelStyle) => [
            {
                key: '1',
                label: '1. Chúng tôi là ViVu',
                children: <p style={{ fontWeight: 'normal' }}>{comments[0]}</p>,
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            
            
            {
                key: '2',
                label: '2. Tại sao chọn chúng tôi?',
                children: [
                    <p style={{ fontWeight: 'normal' }}>{comments[1]}</p>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[2]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[3]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[4]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[5]}</li></ul>,
                ],
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            {
                key: '3',
                label: '3. Sản phẩm dịch vụ',
                children: [
                    <p style={{ fontWeight: 'normal' }}>{comments[6]}</p>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[7]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[8]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[9]}</li></ul>,
                    <p style={{ fontWeight: 'normal' }}>{comments[10]}</p>,
                ],
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            {
                key: '4',
                label: '4. Liên hệ với chúng tôi',
                children: [
                    <h1 style={{fontSize: '17px'}}>{comments[11]}</h1>,
                    <h3 style={{ fontWeight: 'normal'}}>{comments[12]}</h3>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[13]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[14]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[15]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[16]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[17]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[13]}</li></ul>,
                ],
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
        ];
    const { token } = theme.useToken();
    const panelStyle = {
      marginBottom: 24,
      background: token.colorBgContainer,
      borderRadius: '20px',
      border: '3px solid #CAF8F8',

    };
    const navigate = useNavigate();
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
    return (
        <div style={{ backgroundImage: `url(${bgFb})`, backgroundSize: 'cover', height: '700px' }}>
            <Container>
                <Wrapper>
                    <WrapperTitle>Về chúng tôi</WrapperTitle>
                    <WrapperIcon>`````````````</WrapperIcon>
                </Wrapper>
                <Collapse
                    bordered={false}
                    defaultActiveKey={['0']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={{
                        background: token.colorBgContainer,
                        width: '100%',
                    }}
                    items={getItems(panelStyle)}
                />
            </Container>
        </div>
    )
}

export default RegulationsPage;

