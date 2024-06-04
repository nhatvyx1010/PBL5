import { Container, Wrapper, WrapperIcon, WrapperTitle } from "./style";
import { CaretRightOutlined } from '@ant-design/icons';
import bgFb from '../../assets/images/bg_full.jpg';
import { Collapse, theme } from 'antd';

const RegulationsPage = () => {
    const comments = [
        "Quý khách vui lòng có mặt tại bến tàu trước thời gian khởi hành ít nhất là 30 phút để thực hiện các thủ tục cần thiết trước khi lên tàu.",
        "Quý khách vui lòng đặt vé ít nhất 24 giờ trước thời gian khởi hành của tàu. Điều này giúp đảm bảo rằng chỗ của quý khách được xác nhận và tiện lợi cho việc tổ chức lịch trình du lịch.",
        "Đối với người lớn: Quý khách vui lòng cung cấp thông tin chính xác về CMND (Chứng minh nhân dân) hoặc hộ chiếu khi mua vé.",
        "Đối với trẻ em dưới 14 tuổi: Quý khách vui lòng cung cấp thông tin chính xác về Giấy khai sinh hoặc hộ chiếu khi mua vé.",
        "Những thông tin trên cần được cung cấp khi mua vé và sẽ được sử dụng trong quá trình thực hiện thủ tục lên tàu.",
    ];

    const getItems = (panelStyle) => [
        {
            key: '1',
            label: 'Thời gian đi',
            children: <p style={{ fontWeight: 'normal' }}>{comments[0]}</p>,
            style: {
                ...panelStyle,
                fontWeight: 'bold'
            },
        },
        {
            key: '2',
            label: 'Thời gian đặt vé',
            children: <p style={{ fontWeight: 'normal' }}>{comments[1]}</p>,
            style: {
                ...panelStyle,
                fontWeight: 'bold'
            },
        },
        {
            key: '3',
            label: 'Quy định khi mua vé',
            children: [
                <ul key="3-1" style={{ fontWeight: 'normal' }}><li>{comments[2]}</li></ul>,
                <ul key="3-2" style={{ fontWeight: 'normal' }}><li>{comments[3]}</li></ul>,
                <ul key="3-3" style={{ fontWeight: 'normal' }}><li>{comments[4]}</li></ul>,
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
    );
}

export default RegulationsPage;
