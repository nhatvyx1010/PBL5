import { Table } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import moment from 'moment';

const { Column } = Table;

const Content2 = ({ userBuyTicket, handleInputValidation }) => {
    const station = useSelector(state => state.station);
    const seatSelection = useSelector(state => state.seatSelection);
    const schedules = useSelector(state => state.schedule.schedules);
    const user = useSelector(state => state.user);
    console.log("station: ", station + "\nseatSelection: ", seatSelection +"\nschedules: ", schedules);

    const [isDataLoaded, setIsDataLoaded] = useState(false); 
    const [dataWithTotal, setDataWithTotal] = useState([]); 

    function getArrivalStartTimesByScheduleId(schedules, scheduleId) {
        const foundSchedule = schedules.find(schedule => schedule.scheduleId === scheduleId);
        return foundSchedule ? { arrivalAt: foundSchedule.arrivalAt, startAt: foundSchedule.startAt } : null;
    }

    console.log("content2: ", seatSelection);
    useEffect(() => {
        if (Object.keys(seatSelection.selectedSeats).length > 0) {
            const newDataWithTotal = Object.entries(seatSelection.selectedSeats).flatMap(([scheduleId, seats]) => {
                // Check if seats is an array before mapping
                if (Array.isArray(seats)) {
                    const times = getArrivalStartTimesByScheduleId(schedules, scheduleId);                
                    return seats.map((seat) => ({
                        // key: `${scheduleId}`,
                        'Tên khách hàng': user.name,
                        'Loại vé': 'Loại vé', // Update with appropriate information
                        'Thông tin liên lạc': user.email, // Update with appropriate information
                        'Thông tin chuyến tàu': (
                            <div>
                                SP4 {station.start} - {station.arrival}
                                <br />
                                Toa {seat.carriageIndex} chỗ {seat.seatNumber}<br />Nằm khoang 4 điều hòa T1
                                <br />
                            </div>
                        ),
                        'Thời gian khởi hành': (
                            <div>
                                Thời gian đi: {moment.unix(times.startAt).format('DD-MM. HH:mm')}
                                <br />
                                Thời gian đến: {moment.unix(times.arrivalAt).format('DD-MM. HH:mm')}
                                <br />
                            </div>
                        ),
                        price: parseFloat(seat.price).toLocaleString('en-US'),
                        tags: 'Khuyến mãi', // Update with appropriate information
                        total: parseFloat(seat.price).toLocaleString('en-US'),
                    }));
                } else {
                    return []; // Return an empty array if seats is not iterable
                }
            });
    
            setDataWithTotal(newDataWithTotal);
            setIsDataLoaded(true);
        } else {
            setDataWithTotal([]);
            setIsDataLoaded(true);
        }
    }, [seatSelection, userBuyTicket, station, schedules, user]);
    

    const [clicked, setClicked] = useState(false);
    const handleCheckboxChange = () => {
        setClicked(!clicked);
        console.log("inputValid-content1: "+!clicked);
        handleInputValidation(!clicked);
    };
    
    const TicketInfo = ({ label, value }) => (
        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
            <span style={{ textTransform: 'lowercase', fontWeight: 'normal' }}>{label}:  </span>
            <span style={{ fontWeight: 'bold' }}>{value}</span>
        </p>
    );
    TicketInfo.propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    };

    return (
        <div style={{ border: '3px solid #CAF8F8', marginTop: '10px', padding: '20px' }}>
            {/* Kiểm tra xem dữ liệu đã được load hay chưa */}
            {isDataLoaded ? (
                <>
                    <div style={{ marginLeft: '12px' }}>
                        <p style={{ fontSize: '26px', fontWeight: 'bold' }}>Xác nhận thông tin đặt mua vé tàu</p>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#dd5600' }}>Thông tin người mua vé:</p>
                        <TicketInfo label="Fullname" value={user.name} />
                        <TicketInfo label="Email" value={user.email} />
                        <TicketInfo label="Số điện thoại" value={user.phone} />
                        <TicketInfo label="Phương thức thanh toán" value={user.phuongthuc} />
                    </div>

                    <hr style={{ margin: '0', border: '0', borderTop: '1px solid black' }} />

                    <div style={{ marginLeft: '12px' }}>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#dd5600' }}>Thông tin vé mua:</p>
                    </div>
                    
                    <Table dataSource={dataWithTotal} pagination={false}>
                        {dataWithTotal.length > 0 && Object.keys(dataWithTotal[0]).map(key => (
                            <Column
                                title={key}
                                dataIndex={key}
                                key={key}
                            />
                        ))}
                    </Table>

            

                    <div style={{ marginLeft: '12px' }}>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#dd5600' }}>Quý khách vui lòng kiểm tra kỹ và xác nhận các thông tin đã nhập trước khi thực hiện giao dịch mua vé. Sau khi thực hiện giao dịch thanh toán ở trang tiếp theo quý khách sẽ không thể thay đổi được thông tin mua vé trên.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 20px 0 20px' }}>
                        <label style={{ fontSize: '16px', marginBottom: '10px' }}>
                            Tôi đã đọc kỹ và đồng ý tuân thủ tất cả các quy định mua vé trực tuyến, các chương trình khuyến mại của Tổng công ty đường sắt Việt Nam và chịu trách nhiệm về tính xác thực của các thông tin trên.
                        </label>
                        <label style={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                checked={clicked}
                                onChange={handleCheckboxChange}
                                style={{ marginRight: '5px' }}
                            />
                            <span style={{ color: clicked ? 'green' : 'red', fontWeight: 'bold' }}>{clicked ? 'Đã xác nhận' : 'Chưa xác nhận'}</span>
                        </label>
                    </div>
                </>
            ) : (
                <p>Loading...</p> // Hiển thị thông báo khi đang tải dữ liệu
            )}
        </div>
    );
};

Content2.propTypes = {
    userBuyTicket: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        cccd: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        phuongthuc: PropTypes.string.isRequired,
    }).isRequired,
    handleInputValidation: PropTypes.func.isRequired,
};


export default Content2;




















// -----------------------------------------------------------------------------------------
// import { Table } from 'antd';
// import PropTypes from 'prop-types';

// const { Column } = Table;

// const Content2 = ({ dataSource, userBuyTicket }) => {
//     const totalAmount = dataSource.reduce((acc, cur) => acc + parseFloat(cur.total), 0);

//     const TicketInfo = ({ label, value }) => (
//         <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
//             <span style={{ textTransform: 'lowercase', fontWeight: 'normal' }}>{label}:  </span>
//             <span style={{ fontWeight: 'bold' }}>{value}</span>
//         </p>
//     );

//     TicketInfo.propTypes = {
//         label: PropTypes.string.isRequired,
//         value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     };
    
//     // Thêm dòng mới cho totalAmount
//     const dataWithTotal = [...dataSource, { key: 'Total', total: totalAmount }];

//     return (
//         <div style={{ border: '3px solid #CAF8F8', marginTop: '10px', padding: '20px' }}>
//             <div style={{ marginLeft: '12px' }}>
//                 <p style={{ fontSize: '26px', fontWeight: 'bold' }}>Xác nhận thông tin đặt mua vé tàu</p>
//                 <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#dd5600' }}>Thông tin người mua vé:</p>
//                 <TicketInfo label="Username" value={userBuyTicket.username} />
//                 <TicketInfo label="Email" value={userBuyTicket.email} />
//                 <TicketInfo label="CCCD" value={userBuyTicket.cccd} />
//                 <TicketInfo label="Số điện thoại" value={userBuyTicket.phone} />
//                 <TicketInfo label="Phương thức thanh toán" value={userBuyTicket.phuongthuc} />
//             </div>

//             <hr style={{ margin: '0', border: '0', borderTop: '1px solid black' }} />

//             <div style={{ marginLeft: '12px' }}>
//                 <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#dd5600' }}>Thông tin vé mua:</p>
//             </div>
//             <Table dataSource={dataWithTotal} pagination={false}>
//                 <Column
//                     title="STT"
//                     dataIndex="key"
//                     key="key"
//                     render={(text, record) => record.key === 'Total' ? null : <span>{record.key}</span>}
//                 />
//                 <Column
//                     title="Họ và tên"
//                     dataIndex="name"
//                     key="name"
//                     render={(text, record) => record.key === 'Total' ? null : (
//                         <div>
//                             <p>{record.name}</p>
//                             <p>Đối tượng: {record.type}</p>
//                             <p>Số giấy tờ: {record.documentNumber}</p>
//                         </div>
//                     )}
//                 />
//                 <Column
//                     title="Thông tin chỗ"
//                     dataIndex="info"
//                     key="info"
//                     render={(text, record) => record.key === 'Total' ? null : (
//                         <div>
//                             <div>SP4 Đông Anh - Hà Nội</div>
//                             <div>18/04/2024 04:27</div>
//                             <div>Toa 1 chỗ 22</div>
//                             <div>Nằm khoang 4 điều hòa T1</div>
//                         </div>
//                     )}
//                 />
//                 <Column
//                     title="Giá vé"
//                     dataIndex="price"
//                     key="price"
//                 />
//                 <Column
//                     title="Khuyến mãi"
//                     dataIndex="tags"
//                     key="tags"
//                     render={(text, record) => record.key === 'Total' ? <span style={{ fontWeight: 'bold' }}>{record.key}</span> : <span>{record.tags}</span>}
//                 />
//                 <Column
//                     title="Thành tiền"
//                     dataIndex="total"
//                     key="total"
//                     render={(text, record) => record.key === 'Total' ? <span style={{ fontWeight: 'bold' }}>{parseFloat(record.total).toLocaleString('en-US')}</span> : <span>{parseFloat(record.total).toLocaleString('en-US')}</span>}
//                 />
//             </Table>
            
//             <div style={{ marginLeft: '12px' }}>
//                 <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#dd5600' }}>Quý khách vui lòng kiểm tra kỹ và xác nhận các thông tin đã nhập trước khi thực hiện giao dịch mua vé. Sau khi thực hiện giao dịch thanh toán ở trang tiếp theo quý khách sẽ không thể thay đổi được thông tin mua vé trên.</p>
//             </div>
//         </div>
//     );
// };

// Content2.propTypes = {
//     dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
//     userBuyTicket: PropTypes.shape({
//         username: PropTypes.string.isRequired,
//         email: PropTypes.string.isRequired,
//         cccd: PropTypes.string.isRequired,
//         phone: PropTypes.string.isRequired,
//         phuongthuc: PropTypes.string.isRequired,
//     }).isRequired,
// };


// export default Content2;
