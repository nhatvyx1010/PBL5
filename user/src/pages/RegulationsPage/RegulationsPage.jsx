import React, { useState } from "react";
import { Container, NavigateItem, Navigation, Wrapper, WrapperContent, WrapperIcon, WrapperText, WrapperTitle } from "./style";
import { MinusOutlined, PlusOutlined, CaretRightOutlined  } from '@ant-design/icons';
import bgFb from '../../assets/images/bg_full.jpg';
import { Collapse, theme } from 'antd';

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
            "Giờ nhận phòng từ 12h15-12h30. Nếu quý khách không sủ dụng dịch vụ xe đưa đón của tàu và tự di chuyển, vui lòng có mặt tại bến tàu muộn nhất là 11h45 để làm thủ tục trước khi lên tàu.",
            "Giờ trả phòng từ 9h30-10h30 tùy thuộc vào lịch trình của tàu. Sau khi trả phòng, quý khách sẽ được phục vụ bữa trưa trên tàu trước khi tàu cập bến.",
            "Đối với người lớn: quý khách vui lòng gửi ảnh chụp CCCD hoặc CMT hoặc Hộ chiếu.",
            "Đối với trẻ em dưới 14 tuổi: quý khách vui lòng gửi ảnh chụp Giấy khai sinh hoặc Hộ chiếu.",
            "Những giấy tờ trên, quý khách vui lòng gửi trước ít nhất 03 ngày trước khi đi tàu và sẽ được yêu cầu xuất trình khi làm thủ tục lên tàu.",
        ];
        const getItems = (panelStyle) => [
            {
                key: '1',
                label: 'Thời gian nhận phòng',
                children: <p style={{ fontWeight: 'normal' }}>{comments[0]}</p>,
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            
            
            {
                key: '2',
                label: 'Thời gian trả phòng',
                children: <p style={{ fontWeight: 'normal' }}>{comments[1]}</p>,
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            {
                key: '3',
                label: 'Quy định nhận phòng',
                children: [
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[2]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[3]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[4]}</li></ul>,
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
    return (
        <div style={{ backgroundImage: `url(${bgFb})`, backgroundSize: 'cover', height: '700px' }}>
            <Container>
                <Wrapper>
                    <WrapperTitle>Quy định chung và lưu ý</WrapperTitle>
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
