// import { Input, Radio, Space, Table, Popconfirm } from 'antd';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { ShoppingCartOutlined, UserOutlined, DollarOutlined  } from '@ant-design/icons';
// import { CustomRadioGroup, InfoCart, InfoUser, InputMember, NameUser, PNameUser, User } from './style';
// import { useSelector } from 'react-redux';

// const ActionButton = styled.a`
//   display: inline-block;
//   padding: 4px 8px;
//   font-size: 14px;
//   font-weight: bold;
//   text-align: center;
//   text-transform: uppercase;
//   color: #08979c;
//   background-color: #e6fffb;
//   border: 1px solid #f6ffed;
//   border-radius: 4px;
//   transition: background-color 0.3s, border-color 0.3s;

//   &:hover {
//     background-color: #13c2c2;
//     color: #ffffff;
//   }
// `;
// // dataSource,
// const Content1 = ({ dataSource, handleBuyTicketChange, handleDelete, handleInputValidation }) => {

    
//     const seatSelection = useSelector(state => state.seatSelection);
//     console.log("seatSelection: ", seatSelection);

//     // const [paymentMethod, setPaymentMethod] = useState(1);

//     // const onChangePaymentMethod = (e) => {
//     //     setPaymentMethod(parseInt(e.target.value));
//     // };
//     // const updateDataSource = (newDataSource) => {
//     //     handleDataSourceChange(newDataSource);
//     // };

//     const validateInput = (value, dataIndex) => {
//         // Kiểm tra dữ liệu có rỗng không
//         if (!value.trim()) {
//             handleInputValidation(false); // Gửi kết quả validate về
//             return;
//         }
    
//         // Kiểm tra định dạng email
//         if (dataIndex === 'email') {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(value)) {
//                 handleInputValidation(false); // Gửi kết quả validate về
//                 return;
//             }
//         }
    
//         // Kiểm tra số điện thoại có đúng định dạng không (10 ký tự)
//         if (dataIndex === 'phone') {
//             const phoneRegex = /^\d{10}$/;
//             if (!phoneRegex.test(value)) {
//                 handleInputValidation(false); // Gửi kết quả validate về
//                 return;
//             }
//         }
    
//         // Nếu dữ liệu hợp lệ, gửi kết quả validate về
//         handleInputValidation(true);
//     };

//     // const columns = [
//     //     {
//     //       title: 'Schedule Id',
//     //       width: 150,
//     //       dataIndex: 'scheduleId',
//     //       key: 'scheduleId',
//     //       fixed: 'left',
//     //     },
//     //     {
//     //         title: "Thông tin chuyến đi",
//     //         dataIndex: "infoTrain",
//     //         key: "infoTrain",
//     //         // render={(text, record) => (
//     //         render: () => (
//     //             <div>
//     //                 <div>SP4 Đông Anh - Hà Nội</div>
//     //                 <div>18/04/2024 04:27</div>
//     //             </div>
//     //         )
//     //     },
//     //     {
//     //         title: "Thông tin chỗ",
//     //         dataIndex: "info",
//     //         key: "info",
//     //         // render={(text, record) => (
//     //         render: () => (
//     //             <div>
//     //                 <div>Toa 1 chỗ 22</div>
//     //                 <div>Nằm khoang 4 điều hòa T1</div>
//     //             </div>
//     //         )
//     //     },
//     //     {
//     //         title: "Giá vé",
//     //         dataIndex: "price",
//     //         key: "price",
//     //         // render={(text, record) => (
//     //         render: () => (
//     //             <div>75000</div>
//     //         )
//     //     },
//     //     {
//     //         title: "Khuyến mãi",
//     //         dataIndex: "tags",
//     //         key: "tags",
//     //         render: () => (
//     //             <div>Không có khuyến mại cho vé này</div>
//     //         )
//     //     },
//     //     {
//     //         title: "Thành tiền",
//     //         dataIndex: "total",
//     //         key: "total",
//     //         render: () => (
//     //             <div>75000</div>
//     //         )
//     //     },
//     //     {
//     //         title: "Xóa",
//     //         dataIndex: "operation",
//     //         width: 100,
//     //         fixed: 'right',
//     //         render: (record, index) =>
//     //             dataSource.length >= 1 ? (
//     //                 <Popconfirm
//     //                   title="Bạn có chắc chắn muốn duyệt yêu cầu này?"
//     //                   okText="Duyệt"
//     //                   cancelText="Hủy"
//     //                   onConfirm={() => handleDelete(index.key)}
//     //                   placement="topLeft"
//     //                   >
//     //                   <ActionButton type="link" >Xóa</ActionButton>
//     //                   {/* <ActionButton type="link" onClick={() => handleDelete(record)}>Xóa</ActionButton> */}
//     //                 </Popconfirm>
//     //             ) : null
//     //     },
//     //   ];

//       const columns = [
//         {
//           title: 'Schedule Id',
//           width: 150,
//           dataIndex: 'scheduleId',
//           key: 'scheduleId',
//           fixed: 'left',
//         },
//         {
//             title: "Thông tin chuyến đi",
//             dataIndex: "infoTrain",
//             key: "infoTrain",
//             // render={(text, record) => (
//             render: () => (
//                 <div>
//                     <div>SP4 Đông Anh - Hà Nội</div>
//                     <div>18/04/2024 04:27</div>
//                 </div>
//             )
//         },
//         {
//             title: "Thông tin chỗ",
//             dataIndex: "info",
//             key: "info",
//             // render={(text, record) => (
//             render: () => (
//                 <div>
//                     <div>Toa 1 chỗ 22</div>
//                     <div>Nằm khoang 4 điều hòa T1</div>
//                 </div>
//             )
//         },
//         {
//             title: "Giá vé",
//             dataIndex: "price",
//             key: "price",
//             // render={(text, record) => (
//             render: () => (
//                 <div>75000</div>
//             )
//         },
//         {
//             title: "Khuyến mãi",
//             dataIndex: "tags",
//             key: "tags",
//             render: () => (
//                 <div>Không có khuyến mại cho vé này</div>
//             )
//         },
//         {
//             title: "Thành tiền",
//             dataIndex: "total",
//             key: "total",
//             render: () => (
//                 <div>75000</div>
//             )
//         },
//         {
//             title: "Xóa",
//             dataIndex: "operation",
//             width: 100,
//             fixed: 'right',
//             render: (record, index) =>
//                 seatSelection.length >= 1 ? (
//                     <Popconfirm
//                       title="Bạn có chắc chắn muốn duyệt yêu cầu này?"
//                       okText="Duyệt"
//                       cancelText="Hủy"
//                       onConfirm={() => handleDelete(index.key)}
//                       placement="topLeft"
//                       >
//                       <ActionButton type="link" >Xóa</ActionButton>
//                       {/* <ActionButton type="link" onClick={() => handleDelete(record)}>Xóa</ActionButton> */}
//                     </Popconfirm>
//                 ) : null
//         },
//       ];

//     return (
//         <div style={{ border: '3px solid #CAF8F8', marginTop: '10px', padding: '20px' }}>
//             <InfoCart>
//                 <ShoppingCartOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px' }} />
//                 <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px' }}>Thông tin giỏ vé</p>
//             </InfoCart>
//             {/* <Table dataSource={dataSource} pagination={false}>
                
//             </Table> */}
//             <Table
//                 columns={columns}
//                 pagination={false}
//                 dataSource={dataSource}
//                 scroll={{ x: 1700 }}
//             />
//     </div>
//     );
// };
// Content1.propTypes = {
//     dataSource: PropTypes.array.isRequired,
//     handleInputChange: PropTypes.func.isRequired,
//     handleBuyTicketChange: PropTypes.func.isRequired,
//     handleDelete: PropTypes.func.isRequired,
//     handleDataSourceChange: PropTypes.func.isRequired,
//     handleInputValidation: PropTypes.func.isRequired,
// };
// export default Content1;



///////////////////////////////////////////////////////////////////////////////////


import { useState } from "react";
import { Input, Table, Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ShoppingCartOutlined, UserOutlined, DollarOutlined  } from '@ant-design/icons';
import { InfoCart, InfoUser, InputMember, NameUser, PNameUser, User } from './style';
import moment from 'moment';

import { useSelector } from 'react-redux';

const ActionButton = styled.a`
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #08979c;
  background-color: #e6fffb;
  border: 1px solid #f6ffed;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #13c2c2;
    color: #ffffff;
  }
`;

const Content1 = ({ handleDelete, handleInputValidation }) => {
    const station = useSelector(state => state.station);
    const seatSelection = useSelector(state => state.seatSelection);
    const schedules = useSelector(state => state.schedule.schedules);
    const user = useSelector(state => state.user);
    console.log("1\nstation: ", station + "\nseatSelection: ", seatSelection +"\nschedules: ", schedules);

    function getArrivalStartTimesByScheduleId(schedules, scheduleId) {
        const foundSchedule = schedules.find(schedule => schedule.scheduleId === scheduleId);
        return foundSchedule ? { arrivalAt: foundSchedule.arrivalAt, startAt: foundSchedule.startAt } : null;
    }
    
    // Duyệt qua từng cặp (scheduleId, seats) trong selectedSeats
    const dataSource = Object.entries(seatSelection.selectedSeats).flatMap(([scheduleId, seats]) => {
        const times = getArrivalStartTimesByScheduleId(schedules, scheduleId);

        return seats.map((seat) => ({
            key: `${scheduleId}`, 
            scheduleId: scheduleId,
            carriageId: seat.carriageId,
            seatNumber: seat.seatNumber,
            infoTrain: `SP4 ${station.start} - ${station.arrival}`,
            infoTime: `SP4 ${moment.unix(times.startAt).format('DD-MM. HH:mm')} - ${moment.unix(times.arrivalAt).format('DD-MM. HH:mm')}`,
            info: `Toa ${seat.carriageIndex} chỗ ${seat.seatNumber}`,
            price: 75000, 
            tags: 'Không có khuyến mại cho vé này',
            total: 75000, 
        }));
    });

    const columns = [
        {
            title: 'Schedule Id',
            dataIndex: 'scheduleId',
            key: 'scheduleId',
            fixed: 'left',
        },
        {
            title: 'Thông tin chuyến đi',
            dataIndex: 'infoTrain',
            key: 'infoTrain',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Thời gian di chuyển',
            dataIndex: 'infoTime',
            key: 'infoTime',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Thông tin chỗ',
            dataIndex: 'info',
            key: 'info',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Giá vé',
            dataIndex: 'price',
            key: 'price',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Khuyến mãi',
            dataIndex: 'tags',
            key: 'tags',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Thành tiền',
            dataIndex: 'total',
            key: 'total',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Xóa',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, record) => (
                <Popconfirm
                    title="Bạn có chắc chắn muốn xóa vé này?"
                    okText="Xóa"
                    cancelText="Hủy"
                    onConfirm={() => handleDelete(record)}
                >
                    <ActionButton type="link">Xóa</ActionButton>
                </Popconfirm>
            ),
        },
    ];


    
    const [clicked, setClicked] = useState(false);
    const handleCheckboxChange = () => {
        setClicked(!clicked);
        console.log("inputValid-content1: "+!clicked);
        handleInputValidation(!clicked);
    };

    return (
        <div style={{ border: '3px solid #CAF8F8', marginTop: '10px', padding: '20px' }}>
            <InfoCart>
                <ShoppingCartOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px' }} />
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px' }}>Thông tin giỏ vé</p>
            </InfoCart>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                scroll={{ x: 1700 }}
            />
            
        <InfoUser>
            <InfoCart style={{ width: '230px' }}>
                <UserOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px', color: 'red' }} />
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px', color: 'red' }}>Thông tin người đặt vé</p>
            </InfoCart>
            <p style={{ fontSize: '15px' }}>Quý khách vui lòng điền đẩy đủ và chính xác các thông tin về người mua vé dưới đây. Các thông tin này sẽ được sử dụng để xác minh người mua vé và lấy vé tại ga trước khi lên tàu theo đúng các quy định của Tổng công ty Đường sắt Việt Nam.</p>
            <User>
                <NameUser>
                    <PNameUser>Họ và tên</PNameUser>
                    <div style={{ position: 'relative' }}>
                        <Input
                            name='username'
                            placeholder="Họ và tên"
                            style={InputMember}
                            value={user.name}
                            readOnly
                            // onChange={(e) => handleBuyTicketChange('username', e.target.value)}
                            // onBlur={(e) => validateInput(e.target.value, '', 'username')}
                        />
                    </div>
                </NameUser>
                <NameUser>
                    <PNameUser>Email</PNameUser>
                    <div style={{ position: 'relative' }}>
                        <Input
                            name='email'
                            placeholder="Email"
                            style={InputMember}
                            value={user.email}
                            readOnly
                            // onChange={(e) => handleBuyTicketChange('email', e.target.value)}
                            // onBlur={(e) => validateInput(e.target.value, '', 'email')}
                        />
                    </div>
                </NameUser>
                {/* <NameUser>
                    <PNameUser>Số CMND/CCCD</PNameUser>
                    <div style={{ position: 'relative' }}>
                        <Input
                            name='cccd'
                            placeholder="Số CMND/CCCD"
                            style={InputMember}
                            readOnly
                            // onChange={(e) => handleBuyTicketChange('cccd', e.target.value)}
                            // onBlur={(e) => validateInput(e.target.value, '', 'cccd')}
                        />
                    </div>
                </NameUser> */}
                <NameUser>
                    <PNameUser>Số điện thoại</PNameUser>
                    <div style={{ position: 'relative' }}>
                        <Input
                            name='phone'
                            placeholder="Số điện thoại"
                            style={InputMember}
                            value={user.phone}
                            readOnly
                            // onChange={(e) => handleBuyTicketChange('phone', e.target.value)}
                            // onBlur={(e) => validateInput(e.target.value, '', 'phone')}
                        />
                    </div>
                </NameUser>
            </User>
        </InfoUser>
        <InfoUser>
            <InfoCart style={{ width: '230px' }}>
                <DollarOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px', color: 'red' }} />
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px', color: 'red' }}>Xác nhận</p>
            </InfoCart>
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





        </InfoUser>
        </div>
    );
};

Content1.propTypes = {
    handleBuyTicketChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleInputValidation: PropTypes.func.isRequired,
};

export default Content1;
