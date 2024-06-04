import { Container, Wrapper, WrapperIcon, WrapperTitle } from "./style";
import { CaretRightOutlined } from '@ant-design/icons';
import bgFb from '../../assets/images/bg_full.jpg';
import { Collapse, theme } from 'antd';

const RegulationsPage = () => {
    const comments = [
        "Bước 1: Tìm kiếm chuyến tàu phù hợp với yêu cầu của quý khách trên trang web của ViVu.",
        "Bước 2: Điền thông tin đặt vé bao gồm họ và tên, số điện thoại, địa chỉ email để nhân viên tư vấn của ViVu liên hệ.",
        "Bước 3: Chọn 'Đặt vé' để tiến hành đặt dịch vụ.",
        "Bước 4: Thông tin đặt vé của khách hàng được gửi về trung tâm xử lý dữ liệu của website và hệ thống tự động xác nhận và xử lý đơn hàng.",
        "Bước 5: Sau khi thanh toán thành công, khách hàng sẽ nhận được phiếu xác nhận đặt vé cùng với mã đơn hàng và thông tin chi tiết về vé qua email hoặc tin nhắn trên trang web.",
        "Bước 6: Quá trình đặt vé hoàn tất và khách hàng có thể yên tâm chuẩn bị cho chuyến đi của mình.",
        "Khách hàng liên hệ để hủy đơn hàng với ViVu bằng một trong các hình thức sau:",
        "Gửi yêu cầu qua form 'Liên hệ' trên website của ViVu.",
        "Gửi thông tin hủy vé tới địa chỉ email: info@vivu.com.",
        "Gọi điện thoại tới số hotline: 0922 222 016 để thông báo việc hủy vé.",
        "Liên hệ trực tiếp với nhân viên phụ trách đơn hàng của quý khách.",
        "ViVu luôn có trách nhiệm tiếp nhận và xử lý khiếu nại của khách hàng liên quan đến giao dịch tại vivu.com. Khi có tranh chấp xảy ra, khách hàng có thể liên hệ ngay với ViVu qua số hotline: 0922 222 016 hoặc gửi email đến địa chỉ: info@vivu.com. Chúng tôi cam kết sẽ liên hệ lại ngay với khách hàng để giải quyết các phát sinh.",
        "Mọi tranh chấp phát sinh giữa ViVu và khách hàng sẽ được giải quyết trên cơ sở thương lượng. Trong trường hợp không đạt được thỏa thuận như mong muốn, một trong hai bên có quyền đưa vụ việc ra Tòa án kinh tế để giải quyết.",
        "Khi tranh chấp phát sinh giữa khách hàng và nhà cung cấp dịch vụ trực tiếp, ban quản lý website sẽ cung cấp cho khách hàng thông tin về người bán và tích cực hỗ trợ khách hàng hoặc đại diện khách hàng để bảo vệ quyền lợi và lợi ích hợp pháp của mình.",
        "Khi tranh chấp phát sinh giữa khách hàng với nhà cung cấp dịch vụ trực tiếp, ban quản lý website sẽ có trách nhiệm cung cấp cho khách hàng thông tin về người bán, tích cực hỗ trợ khách hàng hoặc đại diện khách hàng bảo vệ quyền lợi và lợi ích hợp pháp của mình.",
    ];

    const getItems = (panelStyle) => [
        {
            key: '1',
            label: '1. Dành cho người khách hàng cá nhân: đặt vé tàu',
            children: comments.slice(0, 6).map((comment, index) => <ul style={{ fontWeight: 'normal' }} key={index}><li>{comment}</li></ul>),
            style: {
                ...panelStyle,
                fontWeight: 'bold'
            },
        },
        {
            key: '2',
            label: 'Quy trình hủy vé',
            children: comments.slice(6, 11).map((comment, index) => <ul style={{ fontWeight: 'normal' }} key={index}><li>{comment}</li></ul>),
            style: {
                ...panelStyle,
                fontWeight: 'bold'
            },
        },
        {
            key: '3',
            label: 'Giải quyết các phát sinh trong quá trình giao dịch',
            children: comments.slice(11).map((comment, index) => <ul style={{ fontWeight: 'normal' }} key={index}><li>{comment}</li></ul>),
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
    );
}

export default RegulationsPage;
