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
            "Bước 1: Tìm kiếm du thuyền phù hợp với yêu cầu của quý khách",
            "Bước 2: Nhập phòng và du thuyền cần đặt cùng với họ và tên, số điện thoại, địa chỉ email để nhân viên tư vấn của Mixivivu liên hệ.",
            "Bước 3: Chọn 'Đặt ngay' để đặt dịch vụ",
            "Bước 4: Thông tin của khách hàng được gửi về trung tâm xử lý dữ liệu của website.",
            "Bước 5: Nhân viên tư vấn sẽ kiểm tra tính có sẵn của dịch vụ và tính hợp lệ của đơn hàng sau đó gọi điện liên hệ với khách để yêu cầu chuyển tiền.",
            "Bước 6: Sau khi khách hàng chuyển tiền, nhân viên tư vấn sẽ tiến hành đặt dịch vụ với các bên đối tác.",
            "Bước 7: Nhân viên tư vấn sẽ gửi phiếu xác nhận dịch vụ bao gồm mã đơn hàng, thông tin khách hàng, thông tin dịch vụ và tổng giá trị dịch vụ.",
            "Khách hàng liên hệ để hủy đơn hàng với Mixivivu bằng 1 trong các hình thức:",
            "Gửi yêu cầu theo form “liên hệ” trên website",
            "Gửi thông tin tới địa chỉ email: info@mixivivu.com",
            "Gọi điện thoại tới số điện thoại: 0922 222 016",
            "Liên hệ với nhân viên phụ trách đơn hàng của quý khách.",
            "Mixivivu luôn có trách nhiệm tiếp nhận và xử lý khiếu nại của khách hàng liên quan đến giao dịch tại: mixivivu.com",
            "Khi có tranh chấp xảy ra, quý khách hàng liên hệ ngay với Mixivivu theo số hotline: 0922 222 016 hoặc gửi email theo địa chỉ email: info@mixivivu.com. Chúng tôi sẽ liên hệ lại ngay với quý khách hàng để giải quyết các phát sinh.",
            "Mọi tranh chấp phát sinh giữa Mixivivu và thành viên sẽ được giải quyết trên cơ sở thương lượng. Trường hợp không đạt được thỏa thuận như mong muốn, một trong hai bên có quyền đưa vụ việc ra Tòa án kinh tế để giải quyết.",
            "Khi tranh chấp phát sinh giữa khách hàng với nhà cung cấp dịch vụ trực tiếp, ban quản lý website sẽ có trách nhiệm cung cấp cho khách hàng thông tin về người bán, tích cực hỗ trợ khách hàng hoặc đại diện khách hàng bảo vệ quyền lợi và lợi ích hợp pháp của mình.",
            "Khi thực hiện các giao dịch trên website, bắt buộc các thành viên phải thực hiện đúng theo các quy trình hướng dẫn.",
        ];
        const getItems = (panelStyle) => [
            {
                key: '1',
                label: '1. Dành cho người khách hàng cá nhân: đặt vé tàu',
                children: [
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[0]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[1]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[2]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[3]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[4]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[5]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[6]}</li></ul>,
                ],
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            {
                key: '2',
                label: 'Quy trình hủy vé',
                children: [
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[7]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[8]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[9]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[10]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[11]}</li></ul>,
                ],
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            {
                key: '3',
                label: 'Giải quyết các phát sinh trong quá trình giao dịch',
                children: [
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[12]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[13]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[14]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[15]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[16]}</li></ul>,
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
                    <WrapperTitle>Hướng dẫn và sử dụng</WrapperTitle>
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
