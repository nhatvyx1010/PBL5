import { Container, Wrapper, WrapperIcon, WrapperTitle } from "./style";
import { CaretRightOutlined  } from '@ant-design/icons';
import bgFb from '../../assets/images/bg_full.jpg';
import { Collapse, theme } from 'antd';

const RegulationsPage = () => {
    const comments = [
        "Chúng tôi đánh giá cao sự tin tưởng của quý khách trong việc chọn ViVu cho dịch vụ đặt phòng và vé tàu trực tuyến của bạn. Chính vì vậy, chúng tôi sẽ giữ gìn và bảo vệ sự riêng tư và kín đáo của các chi tiết cá nhân cho quý khách một cách kịp thời và cẩn trọng.",
        "Mục đích: website vivu.com thu thập thông tin khách hàng phục vụ cho việc cung cấp dịch vụ, tour du lịch, vé tàu cho khách hàng. Đặc biệt, việc thu thập thông tin này rất cần thiết để hỗ trợ sau mua cho khách hàng.",
        "Chúng tôi thu thập các thông tin cá nhân của Khách hàng như Họ tên, số điện thoại, email theo yêu cầu cung cấp thông tin của các hãng hàng không khi tiến hành đặt và xuất vé tàu.",
        "Website ViVu sử dụng các thông tin của khách hàng như sau:",
        "Đặt vé, cung cấp thông tin khách hàng cho các hãng hàng không.",
        "Cung cấp thông tin khách hàng cho đơn vị cung cấp vé tàu.",
        "Liên lạc và giải quyết các vấn đề phát sinh như: thay đổi chuyến tàu, giờ đi của các hãng tàu.",
        "Trao đổi thông tin về dịch vụ du lịch khi khách hàng đặt dịch vụ",
        "Chăm sóc khách hàng, tư vấn thông tin du lịch cho khách hàng khi có yêu cầu",
        "Việc lưu trữ thông tin là không có giới hạn nhằm phục vụ công việc kiểm tra lại dữ liệu chuyến bay hoặc dữ liệu đi tàu khi có yêu cầu của các hãng hàng không.",
        "Quản lý website.",
        "Các hãng tàu",
        "Theo yêu cầu của cơ quan nhà nước có thẩm quyền",
        "Đơn vị thu thập thông tin: Công ty TNHH Du lịch và dịch vụ ViVu",
        "Địa chỉ: Tầng 2, Nguyễn Lương Bằng, Quận Liên Chiểu, Thành phố Đà Nẵng",
        "Điện thoại: 0922 222 016",
        "Email: info@vivu.com",
        "Trường hợp, cá nhân quý khách phát hiện những thông tin cá nhân của mình bị sử dụng sai mục đích, quý khách có thể gọi điện trực tiếp đến số hotline của website là 0922222016 hoặc gửi email khiếu nại cùng chứng cứ liên quan về địa chỉ: info@vivu.com cho chúng tôi. Chúng tôi cam kết sẽ phản hồi thật thỏa đáng sớm nhất trong vòng 24h kể từ thời điểm nhận được những khiếu nại.",
        "Thông tin cá nhân của khách hàng chỉ được lưu trữ trong hệ thống máy chủ nội bộ của công ty và không được thể hiện trên website, nên website không có chức năng chỉnh sửa thông tin cá nhân. Khách hàng có thể liên lạc trực tiếp với ban quản trị để tiếp cận và chỉnh sửa thông tin cá nhân của mình qua số điện thoại hotline: 0922222016 hoặc email: info@ViVu.com để được hỗ trợ.",
        "Thông tin cá nhân của Khách hàng Ban quản trị cam kết bảo mật tuyệt đối theo chính sách bảo mật thông tin cá nhân được đăng tải trên website: ViVu.com.",
        "Không sử dụng, không chuyển giao, cung cấp hoặc tiết lộ cho bên thứ 3 về thông tin cá nhân của Khách hàng khi không có sự đồng ý của Khách hàng ngoại trừ các trường hợp được quy định tại quy định này hoặc quy định của pháp luật.",
        "Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân của Khách hàng, Ban quản trị có trách nhiệm thông báo và làm việc với cơ quan chức năng điều tra và xử lý kịp thời, đồng thời thông báo cho Khách hàng được biết về vụ việc.",
        "Cookie là một file thông tin nhỏ yêu cầu được lưu trữ trên ổ cứng máy tính của bạn. Một khi bạn đồng ý, file này sẽ được lưu trữ và giúp phân tích lưu lượng truy cập website hoặc cho bạn biết khi bạn truy cập một website cụ thể.",
        "Các cookie cho phép các ứng dụng website phản hồi thông tin đến bạn trên phương diện cá nhân. Website có thể điều chỉnh các hoạt động nhằm đáp ứng các nhu cầu, thích và không thích của bạn bằng cách thu thập và lưu thông tin về của bạn.",
        "Chúng tôi sử dụng các cookie lưu lượng nhằm xác định các trang nào hiện đang được sử dụng. Điều này giúp chúng tôi phân tích dữ liệu về lưu lượng website và nâng cấp website của chúng tôi nhằm đáp ứng nhu cầu của khách hàng. Chúng tôi chỉ sử dụng thông tin này cho mục đích phân tích thống kê và sau đó sẽ xóa dữ liệu khỏi hệ thống. Bên cạnh đó, các cookies còn giúp chúng tôi mang lại cho bạn một website tốt hơn bằng cách tạo điều kiện cho chúng tôi theo dõi các trang mà bạn nhận thấy hữu ích hoặc không hữu ích. Một cookie không thể nào giúp chúng tôi truy cập vào máy tính của bạn hoặc bất kỳ thông tin nào về bạn ngoài các dữ liệu mà bạn chọn để chia sẻ với chúng tôi.",
        "Bạn có thể lựa chọn chấp nhận hoặc từ chối các cookie. Hầu hết các trình duyệt web tự động chấp nhận các cookie, nhưng bạn có thể thường xuyên thay đổi setting trình duyệt của bạn để từ chối các cookie nếu bạn muốn. Điều này có thể gây cản trở đến việc bạn nhận được lợi ích tối đa từ website.",
        "Website ViVu của chúng tôi có thể có các đường link với các website khác. Khi bạn click vào các đường link này có nghĩa là bạn đã truy cập vào một website khác. Vì thế cho nên chúng tôi không thể chịu trách nhiệm bảo vệ quyền riêng tư đối với bất cứ thông tin nào mà bạn đã cung cấp trong khi truy cập các website khác và các website ấy không chịu sự điều chỉnh theo Chính sách về Quyền riêng tư này. Bạn nên đọc kỹ và xem xét Chính sách về Quyền riêng tư của họ bởi vị các chính sách về Quyền riêng tư của họ có thể khác so với chính sách của chúng tôi. Các điều khoản khác",
        "Hiệu lực áp dụng: Trong trường hợp không thống nhất giữa các Điều khoản và Điều kiện và Chính sách Quyền riêng tư này, thì các quy định trong Chính sách Quyền riêng tư này sẽ được ưu tiên áp dụng.",
    ];

    const getItems = () => [
        {
            key: '1',
            label: 'I. Chính sách quuyền riêng tư',
            children: [
                <p key="p1" style={{ fontWeight: 'normal' }}>{comments[0]}</p>,
                <label key="label1">1. Mục đích thu thập thông tin của khách hàng</label>,
                <ul key="ul1" style={{ fontWeight: 'normal' }}><li>{comments[1]}</li></ul>,
                <label key="label2">2. Phạm vi thu thập thông tin của khách hàng</label>,
                <ul key="ul2" style={{ fontWeight: 'normal' }}><li>{comments[2]}</li></ul>,
                <label key="label3">3. Phạm vi sử dụng thông tin</label>,
                <p key="p2" style={{ fontWeight: 'normal' }}>{comments[3]}</p>,
                <ul key="ul3" style={{ fontWeight: 'normal' }}><li>{comments[4]}</li></ul>,
                <ul key="ul4" style={{ fontWeight: 'normal' }}><li>{comments[5]}</li></ul>,
                <ul key="ul5" style={{ fontWeight: 'normal' }}><li>{comments[6]}</li></ul>,
                <ul key="ul6" style={{ fontWeight: 'normal' }}><li>{comments[7]}</li></ul>,
                <ul key="ul7" style={{ fontWeight: 'normal' }}><li>{comments[8]}</li></ul>,
                <label key="label4">4. Thời gian lưu trữ thông tin</label>,
                <ul key="ul8" style={{ fontWeight: 'normal' }}><li>{comments[9]}</li></ul>,
                <label key="label5">5. Những người hoặc tổ chức được tiếp cận với thông tin</label>,
                <ul key="ul9" style={{ fontWeight: 'normal' }}><li>{comments[10]}</li></ul>,
                <ul key="ul10" style={{ fontWeight: 'normal' }}><li>{comments[11]}</li></ul>,
                <ul key="ul11" style={{ fontWeight: 'normal' }}><li>{comments[12]}</li></ul>,
                <label key="label6">6. Đơn vị thu thập thông tin và quản lý thông tin</label>,
                <p key="p3" style={{ fontWeight: 'normal' }}>{comments[13]}</p>,
                <p key="p4" style={{ fontWeight: 'normal' }}>{comments[14]}</p>,
                <p key="p5" style={{ fontWeight: 'normal' }}>{comments[15]}</p>,
                <label key="label7">7. Phương thức và công cụ để khách hàng tiếp cận và chỉnh sửa thông tin cá nhân</label>,
                <p key="p6" style={{ fontWeight: 'normal' }}>{comments[16]}</p>,
                <label key="label8">8. Cam kết bảo mật thông tin cá nhân khách hàng</label>,
                <p key="p7" style={{ fontWeight: 'normal' }}>{comments[17]}</p>,
                <ul key="ul12" style={{ fontWeight: 'normal' }}><li>{comments[18]}</li></ul>,
                <p key="p8" style={{ fontWeight: 'normal' }}>{comments[19]}</p>,
                <p key="p9" style={{ fontWeight: 'normal' }}>{comments[20]}</p>,
                <p key="p10" style={{ fontWeight: 'normal' }}>{comments[21]}</p>,
                <p key="p11" style={{ fontWeight: 'normal' }}>{comments[22]}</p>,
                <p key="p12" style={{ fontWeight: 'normal' }}>{comments[23]}</p>,
                <label key="label9">9. Cơ chế tiếp nhận và giải quyết khiếu nại của khách hàng</label>,
                <p key="p13" style={{ fontWeight: 'normal' }}>{comments[24]}</p>,
                <label key="label10">10. Sử dụng cookie</label>,
                <p key="p14" style={{ fontWeight: 'normal' }}>{comments[25]}</p>,
                <p key="p15" style={{ fontWeight: 'normal' }}>{comments[26]}</p>,
                <p key="p16" style={{ fontWeight: 'normal' }}>{comments[27]}</p>,
                <p key="p17" style={{ fontWeight: 'normal' }}>{comments[28]}</p>,
                <p key="p18" style={{ fontWeight: 'normal' }}>{comments[29]}</p>,
                <label key="label11">11. Những liên kết đến website khác</label>,
                <p key="p19" style={{ fontWeight: 'normal' }}>{comments[30]}</p>,
                <p key="p20" style={{ fontWeight: 'normal' }}>{comments[31]}</p>,
                <p key="p21" style={{ fontWeight: 'normal' }}>{comments[32]}</p>,
                <label key="label12">12. Điều khoản khác</label>,
                <p key="p22" style={{ fontWeight: 'normal' }}>{comments[33]}</p>,
                <label key="label13">13. Hiệu lực áp dụng</label>,
                <p key="p23" style={{ fontWeight: 'normal' }}>{comments[34]}</p>
            ]
        },
        {
            key: '2',
            label: 'II. Điều khoản',
            children: [
                <label key="label14">1. Chính sách về quyền riêng tư</label>,
                <p key="p24" style={{ fontWeight: 'normal' }}>{comments[0]}</p>
            ]
        }
    ];

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none'
    };

    return (
        <Container>
            <Wrapper bgUrl={bgFb}>
                <WrapperIcon>
                    <CaretRightOutlined style={{ fontSize: '32px' }} />
                </WrapperIcon>
                <WrapperTitle>Điều khoản dịch vụ</WrapperTitle>
            </Wrapper>
            <Wrapper>
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIconPosition='end'
                    style={{ background: token.colorBgContainer }}
                    items={getItems(panelStyle)}
                />
            </Wrapper>
        </Container>
    );
};

export default RegulationsPage;
