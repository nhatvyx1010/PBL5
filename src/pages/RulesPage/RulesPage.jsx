import React, { useState } from "react";
import { Container, Wrapper, WrapperIcon, WrapperTitle, WrapperTitle_1 } from "./style";
import { CaretRightOutlined  } from '@ant-design/icons';
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
            "1.1. Đồng ý với các điều khoản sử dụng:",
            "Khi sử dụng Website Thương mại Điện tử Mixivivu.com (sau đây gọi tắt là “Website”), Quý khách đã mặc nhiên chấp thuận các điều khoản và điều kiện sử dụng (sau đây gọi tắt là “Điều kiện Sử dụng”) được quy định dưới đây. Để biết được các sửa đổi mới nhất, Quý khách nên thường xuyên kiểm tra lại “Điều kiện Sử dụng”. Chúng tôi có quyền thay đổi, điều chỉnh, thêm hay bớt các nội dung của “Điều kiện Sử dụng” tại bất kỳ thời điểm nào. Nếu Quý khách vẫn tiếp tục sử dụng Website sau khi có các thay đổi như vậy thì có nghĩa là Quý khách đã chấp thuận các thay đổi đó.",
            "1.2 Các thông tin hiển thị:",
            "Các nội dung hiển thị trên Website nhằm mục đích cung cấp thông tin về du thuyền Hạ Long, chuyến bay, giờ bay, lịch bay và giá vé của các hãng hàng không trong nước và quốc tế, về dịch vụ vận chuyển hành khách, hành lý và hàng hóa của hãng, dịch vụ khách sạn, cũng như các dịch vụ bổ trợ khác liên quan đến du lịch, lữ hành của nhiều nhà cung cấp khác nhau (sau đây được gọi chung là “Nhà Cung Cấp”).",
            "Sản phẩm giao dịch giữa Mixiviu.com và khách hàng là dịch vụ, nên không áp dụng chính sách bảo hành/bảo trì.",
            "Mixivivu.com và các nhà cung cấp khác cũng từ chối trách nhiệm hay đưa ra đảm bảo tằng website sẽ không có lỗi vận hành, an toàn, không bị gián đoạn hay bất cứ đảm bảo nào về tính chính xác, đầy đủ và đúng hạn của các thông tin hiển thị.",
            "Khi truy cập vào website này, quý khách mặc nhiên đồng ý rằng Mixivivu, các nhà cung cấp khác cũng với đối tác liên kết không chịu bất cứ trách nhiệm nào liên quan đến thương tật, mất mát, khiếu kiên, thiện hại trực tiếp hoặc gián tiếp do không lường trước dưới bất kỳ hình thức nào phát sinh hay có liên quan đến việc",
            "Sử dụng các thông tin trên website này",
            "Các truy cập kết nối từ website này",
            "Đăng ký thành viên, đăng ký nhận thư điện tự hay tham gia chương trình khách hàng thường xuyên",
            "Các hạn chế liên quan đến đặt chỗ trực tuyến mô tả tại đây.",
            "Các điều kiện và hạn chế nêu trên chỉ có hiệu lực trong khuôn khổ pháp luật hiện hành.",
            "Vé tàu",
            "Sau khi quý khách thanh toán, vé máy bay của quý khách sẽ được gửi tới địa chỉ email mà quý khách đăng ký. Trường hợp, quý khách không nhận được vé như đã thanh toán, quý khách vui lòng liên hệ số hotline: 0922 222 016 hoặc gửi email: info@mixivivu.com để yêu cầu sự hỗ trợ.",
            "Mọi yêu cầu về thay đổi vé, hoàn vé, quý khách vui lòng liên hệ với chúng tôi theo số hotline và email được công bố trên website để được trợ giúp nhanh nhất.",
            "Cam kết cung cấp cho khách hàng nội dung, thông tin đúng như các nhà cung cấp đã đưa ra.",
            "Tư vấn, giải đáp các thắc mắc của quý khách một cách chính xác và nhanh nhất.",
            "Bảo mật thông tin của quý khách hàng.",
            "Tuân thủ các quy định của pháp luật về thanh toán, quảng cáo, khuyến mại và bảo vệ quyền lợi của người tiêu dùng và các quy định của pháp luật có liên quan khác khi bán hàng hóa hoặc cung ứng dịch vụ trên sàn giao dịch thương mại điện tử.",
            "Quý khách vui lòng cung cấp đầy đủ thông tin khi đặt dịch vụ trên website: họ và tên, số điện thoại, địa chỉ email. Chúng tôi không chịu trách nhiệm nếu quý khách cung cấp sai thông tin khi đặt dịch vụ hay đặt vé máy bay và thanh toán trực tuyến.",
            "Tuyệt đối không sử dụng các hình thức hoặc công cụ nào nhằm làm thay đổi dữ liệu hay mục đích phá hoại website. Mọi vi phạm sẽ bị xử lý theo pháp luật.",
        ];
        const getItems = (panelStyle) => [
            {
                key: '1',
                label: '1.Điều khoản chung',
                children: [
                    <p style={{ fontWeight: 'normal' }}>{comments[0]}</p>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[1]}</li></ul>,
                    <p style={{ fontWeight: 'normal' }}>{comments[2]}</p>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[3]}</li></ul>,
                ],
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            
            
            {
                key: '2',
                label: '2.Chính sách bảo hành/bảo trì',
                children: [
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[4]}</li></ul>,
                ],
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            {
                key: '3',
                label: '3. Miễn trừ trách nhiệm',
                children: [
                    <p style={{ fontWeight: 'normal' }}>{comments[5]}</p>,
                    <p style={{ fontWeight: 'normal' }}>{comments[6]}</p>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[7]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[8]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[9]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[10]}</li></ul>,
                    <p style={{ fontWeight: 'normal' }}>{comments[11]}</p>,
                ],
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            {
                key: '4',
                label: '4. Thông tin về các sản phẩm dịch vụ',
                children: [
                    <p style={{ fontWeight: 'normal' }}>{comments[12]}</p>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[13]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[14]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[15]}</li></ul>,
                ],
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            {
                key: '5',
                label: '5. Trách nhiệm của Ban quản lý website',
                children: [
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[13]}</li></ul>,
                    <ul style={{ fontWeight: 'normal' }}><li>{comments[14]}</li></ul>,
                ],
                style: {
                    ...panelStyle,
                    fontWeight: 'bold'
                },
            },
            {
                key: '6',
                label: '6. Nghĩa vụ của khách hàng khi sử dụng website',
                children: [
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
                    <WrapperTitle>Điều khoản và điều kiện</WrapperTitle>
                    <WrapperIcon>`````````````</WrapperIcon>
                </Wrapper>
                <div>
                    <h1 style={{fontWeight: '400'}}>Website này thuộc quyền sở hữu và quản lý của Công ty TNHH Du lịch và dịch vụ Mixi Vivu. Khi truy cập và sử dụng website này, bạn đồng ý rằng đã đọc, hiểu các điều kiện và điều khoản dưới đây. Chính vì vậy, bạn cần đọc rõ và sử dụng tiếp.</h1>
                    <h1 style={{fontWeight: '400'}}>Điều khoản và điều kiện trên Mixivivu.com bao gồm những nội dung sau:</h1>
                </div>
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
