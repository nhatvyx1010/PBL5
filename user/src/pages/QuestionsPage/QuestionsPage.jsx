import { Container, Wrapper, WrapperIcon, WrapperTitle } from "./style";
import { CaretRightOutlined } from '@ant-design/icons';
import bgFb from '../../assets/images/bg_full.jpg';
import { Collapse, theme } from 'antd';

const QuestionsPage = () => {
    const comments = [
        "Dịch vụ xe đưa đón 2 chiều không bao gồm trong giá vé. Quý khách có thể đặt thêm dịch vụ này.",
        "Thực đơn của nhà hàng trên tàu sẽ phục vụ các món ăn theo phong cách Việt và Âu. Nếu quý khách có yêu cầu riêng, vui lòng thông báo trước ít nhất 03 ngày với tàu.",
        "Thú cưng không được phép mang lên tàu.",
        "Có. Tàu cung cấp dịch vụ massage chuyên nghiệp và có tính phí (không bao gồm trong giá vé).",
        "Nếu ngày sinh nhật của quý khách trùng với ngày đi tàu, tàu sẽ tặng quý khách 01 bánh sinh nhật nhỏ. Ngoài ra, tàu còn nhận đặt dịch vụ (tính phí) với các yêu cầu đặc biệt như: trang trí giường, phòng hay chuẩn bị bàn ăn riêng. Quý khách vui lòng liên hệ nhân viên của chúng tôi để có thêm thông tin chi tiết.",
        "Tín hiệu Wifi trên tàu sẽ không ổn định khi tàu đi qua một số khu vực trên biển.",
        "Tàu có thể áp dụng phụ thu vào dịp cuối tuần. Quý khách sẽ được thông báo về phụ thu khi đặt vé cụ thể.",
    ];

    const getItems = (panelStyle) => [
        {
            key: '1',
            label: 'Dịch vụ xe đưa đón có bao gồm trong giá vé không?',
            children: [
                <ul key="1-1" style={{ fontWeight: 'normal' }}><li>{comments[0]}</li></ul>,
            ],
            style: {
                ...panelStyle,
                fontWeight: 'bold'
            },
        },
        {
            key: '2',
            label: 'Nhà hàng của tàu phục vụ bữa ăn theo phong cách nào?',
            children: [
                <ul key="2-1" style={{ fontWeight: 'normal' }}><li>{comments[1]}</li></ul>,
            ],
            style: {
                ...panelStyle,
                fontWeight: 'bold'
            },
        },
        {
            key: '3',
            label: 'Tôi có được phép mang thú cưng lên tàu không?',
            children: [
                <ul key="3-1" style={{ fontWeight: 'normal' }}><li>{comments[2]}</li></ul>,
            ],
            style: {
                ...panelStyle,
                fontWeight: 'bold'
            },
        },
        {
            key: '4',
            label: 'Tàu có dịch vụ massage không?',
            children: [
                <ul key="4-1" style={{ fontWeight: 'normal' }}><li>{comments[3]}</li></ul>,
            ],
            style: {
                ...panelStyle,
                fontWeight: 'bold'
            },
        },
        {
            key: '5',
            label: 'Nếu ngày đi tàu của tôi đúng vào sinh nhật thì có ưu đãi gì không?',
            children: [
                <ul key="5-1" style={{ fontWeight: 'normal' }}><li>{comments[4]}</li></ul>,
            ],
            style: {
                ...panelStyle,
                fontWeight: 'bold'
            },
        },
        {
            key: '6',
            label: 'Trên tàu có WIFI không?',
            children: [
                <ul key="6-1" style={{ fontWeight: 'normal' }}><li>{comments[5]}</li></ul>,
            ],
            style: {
                ...panelStyle,
                fontWeight: 'bold'
            },
        },
        {
            key: '7',
            label: 'Tàu có phụ thu vào cuối tuần không?',
            children: [
                <ul key="7-1" style={{ fontWeight: 'normal' }}><li>{comments[6]}</li></ul>,
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
                    <WrapperTitle>Câu hỏi thường gặp</WrapperTitle>
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

export default QuestionsPage;
