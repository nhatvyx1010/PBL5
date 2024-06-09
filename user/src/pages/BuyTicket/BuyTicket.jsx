// // import React, { useState } from 'react';
// // import { CSSProperties } from 'react';
// // import { RadioChangeEvent } from 'antd';
// // import { Button, Input, message, Radio, Select, Space, Steps, Table } from 'antd';
// // import { ShoppingCartOutlined, UserOutlined, DollarOutlined, CaretRightOutlined  } from '@ant-design/icons';
// // import { ButtonDone, ButtonNext, ButtonPrevious, CustomRadioGroup, InfoCart, InfoUser, InputMember, NameUser, PNameUser, User } from './style';

// // const { Column } = Table;
// // const { Option } = Select;

// // const text = `
// // - Tại các nhà ga, các điểm bưu cục VNPost, ngân hàng VIB, Payoo, Internet Banking
// // - Tại các nhà ga, các điểm bưu cục VNPost, ngân hàng VIB, Payoo, Internet Banking
// // `;
// // const getRadioItems = () => [
// // {
// //   key: '1',
// //   label: 'Thanh toán trả sau bằng tiền mặt, internet banking tại các điểm giao dịch:',
// // },
// // {
// //   key: '2',
// //   label: 'Chuyển khoản',
// // },
// // ].map(item => (
// // <Radio key={item.key} value={item.key}>
// //   {item.label}
// // </Radio>
// // ));

// // const BuyTicket = () => {
// //     const [current, setCurrent] = useState(0);
// //     const [dataSource, setDataSource] = useState([
// //         {
// //             key: '1',
// //             name: '',
// //             type: '',
// //             documentNumber: '',
// //             age: 0,
// //             address: '',
// //             tags: [],
// //             info: '',
// //         },
// //     ]);
    

// //     const handleInputChange = (value, key, dataIndex) => {
// //         const newData = [...dataSource];
// //         const index = newData.findIndex((item) => key === item.key);
// //         if (index > -1) {
// //             const item = newData[index];
// //             newData.splice(index, 1, { ...item, [dataIndex]: value });
// //             setDataSource(newData);
// //         }
// //     };

// //     const handleDelete = (key) => {
// //         const newData = [...dataSource];
// //         setDataSource(newData.filter((item) => item.key !== key));
// //     };

// //     const handleAddNewRow = () => {
// //         const newData = [...dataSource];
// //         newData.push({
// //             key: (dataSource.length + 1).toString(),
// //             name: '',
// //             type: '',
// //             documentNumber: '',
// //             age: 0,
// //             address: '',
// //             tags: [],
// //             info: '',
// //         });
// //         setDataSource(newData);
// //     };

// //     const next = () => {
// //         const isValid = validateInformation();
// //         if (isValid) {
// //             setCurrent(current + 1);
// //         }
// //     };

// //     const prev = () => {
// //         setCurrent(current - 1);
// //     };

// //     const steps = [
// //         {
// //             title: 'Nhập thông tin khách hàng',
// //             content: 'First-content',
// //         },
// //         {
// //             title: 'Xác nhận thông tin',
// //             content: 'Second-content',
// //         },
// //         {
// //             title: 'Thanh toán',
// //             content: 'Last-content',
// //         },
// //         {
// //             title: 'Hoàn tất',
// //             content: 'Last-content',
// //         },
// //     ];

// //     const items = steps.map((item) => ({ key: item.title, title: item.title }));
// //     const [paymentMethod, setPaymentMethod] = useState(1);
// //     const onChangePaymentMethod = (e) => {
// //         setPaymentMethod(parseInt(e.target.value));
// //     };
   
// //     const validateInformation = () => {
// //         // Kiểm tra các trường thông tin ở step hiện tại
// //         // Ví dụ: Kiểm tra xem tất cả các trường đã được nhập chưa
// //         const currentStepInfo = dataSource.filter(item => {
// //             return item.name !== '' && item.type !== '' && item.documentNumber !== '';
// //         });
    
// //         if (currentStepInfo.length !== dataSource.length) {
// //             // Hiển thị thông báo nếu thông tin chưa đầy đủ
// //             message.error('Vui lòng điền đầy đủ thông tin trước khi chuyển sang bước tiếp theo');
// //             return false;
// //         }
    
// //         // Các logic kiểm tra thông tin khác nếu cần
    
// //         return true;
// //     };
    
// //     return (
// //         <div style={{ padding: '3% 8%' }}>
// //             <Steps current={current} items={items} />
// //                 <div style={{ border: '3px solid #CAF8F8', marginTop: '10px', padding: '20px' }}>
// //                     <InfoCart>
// //                         <ShoppingCartOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px' }} />
// //                         <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px', fontWeight: '400' }}>Thông tin giỏ vé</p>
// //                     </InfoCart>
// //                     <Table dataSource={dataSource} pagination={false}>
// //                         <Column
// //                             title="Họ và tên"
// //                             dataIndex="name"
// //                             key="name"
// //                             width="25%"
// //                             render={(text, record) => (
// //                                 <div>
// //                                     <Input
// //                                         style={{ marginBottom: '8px', width: '100%' }}
// //                                         value={record.name}
// //                                         onChange={(e) => handleInputChange(e.target.value, record.key, 'name')}
// //                                         placeholder="Họ và tên"
// //                                     />
// //                                     <Select
// //                                         style={{ marginBottom: '8px', width: '100%' }}
// //                                         value={record.type}
// //                                         onChange={(value) => handleInputChange(value, record.key, 'type')}
// //                                         placeholder="Đối tượng"
// //                                     >
// //                                         <Option value="nguoiLon">Người lớn</Option>
// //                                         <Option value="treEm">Trẻ em</Option>
// //                                         <Option value="emBe">Em bé</Option>
// //                                     </Select>
// //                                     <Input
// //                                         style={{ marginBottom: '8px', width: '100%' }}
// //                                         value={record.documentNumber}
// //                                         onChange={(e) => handleInputChange(e.target.value, record.key, 'documentNumber')}
// //                                         placeholder="Số giấy tờ"
// //                                     />
// //                                 </div>
// //                             )}
// //                         />
// //                         <Column
// //                             title="Thông tin chỗ"
// //                             dataIndex="info"
// //                             key="info"
// //                             render={(text, record) => (
// //                                 <div>
// //                                     <div>SP4 Đông Anh - Hà Nội</div>
// //                                     <div>18/04/2024 04:27</div>
// //                                     <div>Toa 1 chỗ 22</div>
// //                                     <div>Nằm khoang 4 điều hòa T1</div>
// //                                 </div>
// //                             )}
// //                         />
// //                         <Column
// //                             title="Giá vé"
// //                             dataIndex="price"
// //                             key="price"
// //                             render={(text, record) => (
// //                                 <div>75000</div>
// //                             )}
// //                         />
// //                         <Column
// //                             title="Khuyến mãi"
// //                             dataIndex="tags"
// //                             key="tags"
// //                             render={(text, record) => (
// //                                 <div>Không có khuyến mại cho vé này</div>
// //                             )}
// //                         />
// //                         <Column
// //                             title="Thành tiền"
// //                             dataIndex="total"
// //                             key="total"
// //                             render={(text, record) => (
// //                                 <div>75000</div>
// //                             )}
// //                         />
// //                         <Column
// //                             title="Xóa"
// //                             dataIndex="operation"
// //                             render={(text, record) =>
// //                                 dataSource.length >= 1 ? (
// //                                     <Button onClick={() => handleDelete(record.key)}>Xóa</Button>
// //                                 ) : null
// //                             }
// //                         />
// //                     </Table>
// //                     <InfoUser>
// //                         <InfoCart style={{ width: '230px' }}>
// //                             <UserOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px', color: 'red' }} />
// //                             <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px', fontWeight: '400', color: 'red' }}>Thông tin người đặt vé</p>
// //                         </InfoCart>
// //                         <p style={{ fontSize: '15px' }}>Quý khách vui lòng điền đẩy đủ và chính xác các thông tin về người mua vé dưới đây. Các thông tin này sẽ được sử dụng để xác minh người mua vé và lấy vé tại ga trước khi lên tàu theo đúng các quy định của Tổng công ty Đường sắt Việt Nam.</p>
// //                         <User>
// //                             <NameUser>
// //                                 <PNameUser>Họ và tên</PNameUser>
// //                                 <div style={{ position: 'relative' }}>
// //                                     <Input
// //                                         placeholder="Họ và tên"
// //                                         style={InputMember}
// //                                     />
// //                                 </div>
// //                             </NameUser>
// //                             <NameUser>
// //                                 <PNameUser>Email</PNameUser>
// //                                 <div style={{ position: 'relative' }}>
// //                                     <Input
// //                                         placeholder="Email"
// //                                         style={InputMember}
// //                                     />
// //                                 </div>
// //                             </NameUser>
// //                             <NameUser>
// //                                 <PNameUser>Số CMND/CCCD</PNameUser>
// //                                 <div style={{ position: 'relative' }}>
// //                                     <Input
// //                                         placeholder="Số CMND/CCCD"
// //                                         style={InputMember}
// //                                     />
// //                                 </div>
// //                             </NameUser>
// //                             <NameUser>
// //                                 <PNameUser>Số điện thoại</PNameUser>
// //                                 <div style={{ position: 'relative' }}>
// //                                     <Input
// //                                         placeholder="Số điện thoại"
// //                                         style={InputMember}
// //                                     />
// //                                 </div>
// //                             </NameUser>
// //                         </User>
// //                     </InfoUser>
// //                     <InfoUser>
// //                         <InfoCart style={{ width: '230px' }}>
// //                             <DollarOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px', color: 'red' }} />
// //                             <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px', fontWeight: '400', color: 'red' }}>Phương thức thanh toán</p>
// //                         </InfoCart>
// //                         <CustomRadioGroup onChange={onChangePaymentMethod} value={paymentMethod}>
// //                             <Space direction="vertical">
// //                                 <Radio value={1}>Thanh toán trả sau bằng tiền mặt, internet banking tại các điểm giao dịch: tại các nhà ga, các điểm bưu cục VNPost, ngân hàng VIB, Payoo, Internet Banking</Radio>
// //                                 <Radio value={2}>Chuyển khoản</Radio>
// //                             </Space>
// //                         </CustomRadioGroup>
// //                     </InfoUser>
// //                 </div>
// //             <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// //                 {current > 0 && (
// //                     <ButtonPrevious style={{ margin: '8px' }} onClick={() => prev()}>
// //                         Previous
// //                     </ButtonPrevious>
// //                 )}
// //                 {current < steps.length - 1 && (
// //                     <ButtonNext type="primary" onClick={() => next()}>
// //                         Next
// //                     </ButtonNext>
// //                 )}
// //                 {current === steps.length - 1 && (
// //                     <ButtonDone type="primary" onClick={() => message.success('Processing complete!')}>
// //                         Done
// //                     </ButtonDone>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default BuyTicket;





// // Main.tsx
// import { useState } from 'react';
// import Content1 from './Content1';
// import Content2 from './Content2';
// import Content3 from './Content3';
// import Content4 from './Content4';
// import { Steps, message } from 'antd';
// import { ButtonDone, ButtonNext, ButtonPrevious } from './style';
// import FooterComponent from '../../components/FooterComponent/FooterComponent'
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import { deselectSeat, resetSeatSelection } from '../../redux/slides/selectedSeatSlide';

// const { Step } = Steps;

// const BuyTicket = () => {
//     const [current, setCurrent] = useState(0);
//     const [paymentMethod, setPaymentMethod] = useState(1);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const seatSelection = useSelector(state => state.seatSelection);
//     // const station = useSelector(state => state.station);
//     // const schedules = useSelector(state => state.schedule.schedules);

//     console.log("seatSelection: ", seatSelection);

//     // const [dataSource, setDataSource] = useState([]);
//     const [dataSource, setDataSource] = useState([
//         {
//             key: '1',
//             name: 'HoaiBao',
//             type: '1',
//             documentNumber: '09009',
//             info: '',
//             price: '75000',
//             tags: 'Không có khuyến mại cho vé này',
//             total: '75000',
//         },
//         {
//             key: '2',
//             name: 'NhatVy',
//             type: '2',
//             documentNumber: '003923',
//             info: '',
//             price: '75000',
//             tags: 'Không có khuyến mại cho vé này',
//             total: '75000',
//         },
//     ]);
//     const [userBuyTicket, setUserBuyTicket] = useState({
//         id: '',
//         username: '',
//         email: '',
//         cccd: '',
//         phone: '',
//         phuongthuc: '',
//     });
//     const [inputValid, setInputValid] = useState(false); 

//     const handleInputChange = (value, key, dataIndex) => {
//         const newData = [...dataSource];
//         const index = newData.findIndex((item) => key === item.key);
//         if (index > -1) {
//             const item = newData[index];
//             newData.splice(index, 1, { ...item, [dataIndex]: value });
//             setDataSource(newData);
//         }
//     };

//     const handleBuyTicketChange = (field, value) => {
//         setUserBuyTicket(prevState => ({
//             ...prevState,
//             [field]: value
//         }));
//     };    

//     const handleDelete = (key) => {
//         dispatch(deselectSeat({ scheduleId: key.scheduleId, seatNumber: key.seatNumber, carriageId: key.carriageId }));

//         const newData = [...dataSource];
//         setDataSource(newData.filter((item) => item.key !== key));
//     };

//     // const handleAddNewRow = () => {
//     //     const newData = [...dataSource];
//     //     newData.push({
//     //         key: (dataSource.length + 1).toString(),
//     //         name: '',
//     //         type: '',
//     //         documentNumber: '',
//     //         age: 0,
//     //         address: '',
//     //         tags: [],
//     //         info: '',
//     //     });
//     //     setDataSource(newData);
//     // };

//     const handleDataSourceChange = (newDataSource) => {
//         setDataSource(newDataSource);
//     };
    
//     const onChangePaymentMethod = (e) => {
//         setPaymentMethod(parseInt(e.target.value));
//     };
    

//     const next = () => {
//         if (!inputValid) {
//             message.error('Vui lòng xác nhận thông tin trước khi chuyển sang bước tiếp theo');
//             return;
//         } else {
//             setCurrent(current + 1);
//             setInputValid(false);
//         }
//     };
    
//     const prevSearch = () => {
//         navigate("/search");
//     };

//     const prev = () => {
//         setInputValid(false);
//         setCurrent(current - 1);
//     };

//     const handleInputValidation = (isValid) => {
//         setInputValid(isValid);
//     };

//     const steps = [
//         {
//             title: 'Nhập thông tin khách hàng',
//             content: <Content1 dataSource={dataSource} 
//                                 handleInputChange={handleInputChange} 
//                                 handleBuyTicketChange={handleBuyTicketChange} 
//                                 handleDelete={handleDelete} 
//                                 handleDataSourceChange={handleDataSourceChange} 
//                                 handleInputValidation={handleInputValidation}
//             />, 
//         },
//         {
//             title: 'Xác nhận thông tin',
//             content: <Content2 paymentMethod={paymentMethod} 
//                                 onChangePaymentMethod={onChangePaymentMethod} 
//                                 dataSource={dataSource} 
//                                 handleInputValidation={handleInputValidation}
//                                 userBuyTicket={userBuyTicket} />,
            
//         },
//         {
//             title: 'Thanh toán',
//             content: <Content3
//                                 handleInputValidation={handleInputValidation}
//                                 handleClickChange={handleClickChange}
//                                 />,
//         },
//         {
//             title: 'Hoàn tất',
//             content: <Content4/>,
//         },
//     ];

//     return (
//         <div>
//             <div style={{ padding: '3% 10%', height: 'auto', minHeight: '50vh'}}>
//                 <Steps current={current}>
//                     {steps.map((item, index) => (
//                         <Step key={item.title} title={item.title} className={index} />
//                     ))}
//                 </Steps>
//                 <div className="steps-content">{steps[current].content}</div>
//                 <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                     {current == 0 && (
//                         <ButtonPrevious style={{ margin: '8px' }} onClick={() => prevSearch()}>
//                             Previous
//                         </ButtonPrevious>
//                     )}
//                     {current > 0 && (
//                         <ButtonPrevious style={{ margin: '8px' }} onClick={() => prev()}>
//                             Previous
//                         </ButtonPrevious>
//                     )}
//                     {current < steps.length - 1 && (
//                         <ButtonNext type="primary" onClick={() => next()}>
//                             Next
//                         </ButtonNext>
//                     )}
//                     {current === steps.length - 1 && (
//                         <ButtonDone type="primary" 
//                             onClick={() => {
//                                 dispatch(resetSeatSelection());
//                                 message.success('Processing complete!')}}>
//                             Done
//                         </ButtonDone>
//                     )}
//                 </div>
//             </div>
//             <FooterComponent></FooterComponent>
//         </div>
//     );
// };

// export default BuyTicket;


import { useState, useEffect } from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import { Steps, message } from 'antd';
import { ButtonDone, ButtonNext, ButtonPrevious } from './style';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deselectSeat, resetSeatSelection } from '../../redux/slides/selectedSeatSlide';

const { Step } = Steps;

const BuyTicket = () => {
    const [current, setCurrent] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(1);
    const [inputValid, setInputValid] = useState(false);
    const [content3Clicked, setContent3Clicked] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const seatSelection = useSelector(state => state.seatSelection);

    console.log("seatSelection: ", seatSelection);

    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            name: 'HoaiBao',
            type: '1',
            documentNumber: '09009',
            info: '',
            price: '75000',
            tags: 'Không có khuyến mại cho vé này',
            total: '75000',
        },
        {
            key: '2',
            name: 'NhatVy',
            type: '2',
            documentNumber: '003923',
            info: '',
            price: '75000',
            tags: 'Không có khuyến mại cho vé này',
            total: '75000',
        },
    ]);

    const [userBuyTicket, setUserBuyTicket] = useState({
        id: '',
        username: '',
        email: '',
        cccd: '',
        phone: '',
        phuongthuc: '',
    });

    const handleInputChange = (value, key, dataIndex) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, { ...item, [dataIndex]: value });
            setDataSource(newData);
        }
    };

    const handleBuyTicketChange = (field, value) => {
        setUserBuyTicket(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleDelete = (key) => {
        dispatch(deselectSeat({ scheduleId: key.scheduleId, seatNumber: key.seatNumber, carriageId: key.carriageId }));

        const newData = [...dataSource];
        setDataSource(newData.filter((item) => item.key !== key));
    };

    const handleDataSourceChange = (newDataSource) => {
        setDataSource(newDataSource);
    };

    const onChangePaymentMethod = (e) => {
        setPaymentMethod(parseInt(e.target.value));
    };

    const next = () => {
        if (!inputValid) {
            message.error('Vui lòng xác nhận thông tin trước khi chuyển sang bước tiếp theo');
            return;
        } else {
            setCurrent(current + 1);
            setInputValid(false);
        }
    };

    const prevSearch = () => {
        navigate("/search");
    };

    const prev = () => {
        setInputValid(false);
        setCurrent(current - 1);
    };

    const handleInputValidation = (isValid) => {
        setInputValid(isValid);
    };

    const handleClickChange = (isClicked) => {
        setContent3Clicked(isClicked);
    };

    useEffect(() => {
        if (content3Clicked) {
            setCurrent(current + 1);
            setInputValid(false);
        }
    }, [content3Clicked]);

    const steps = [
        {
            title: 'Nhập thông tin khách hàng',
            content: <Content1 
                        dataSource={dataSource} 
                        handleInputChange={handleInputChange} 
                        handleBuyTicketChange={handleBuyTicketChange} 
                        handleDelete={handleDelete} 
                        handleDataSourceChange={handleDataSourceChange} 
                        handleInputValidation={handleInputValidation} 
                    />,
        },
        {
            title: 'Xác nhận thông tin',
            content: <Content2 
                        paymentMethod={paymentMethod} 
                        onChangePaymentMethod={onChangePaymentMethod} 
                        dataSource={dataSource} 
                        handleInputValidation={handleInputValidation} 
                        userBuyTicket={userBuyTicket} 
                    />,
        },
        {
            title: 'Thanh toán',
            content: <Content3 
                        handleInputValidation={handleInputValidation} 
                        handleClickChange={handleClickChange} 
                    />,
        },
        {
            title: 'Hoàn tất',
            content: <Content4 />,
        },
    ];

    return (
        <div>
            <div style={{ padding: '3% 10%', height: 'auto', minHeight: '50vh' }}>
                <Steps current={current}>
                    {steps.map((item, index) => (
                        <Step key={item.title} title={item.title} className={index} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {current === 0 && (
                        <ButtonPrevious style={{ margin: '8px' }} onClick={() => prevSearch()}>
                            Previous
                        </ButtonPrevious>
                    )}
                    {current > 0 && (
                        <ButtonPrevious style={{ margin: '8px' }} onClick={() => prev()}>
                            Previous
                        </ButtonPrevious>
                    )}
                    {current < steps.length - 1 && (
                        <ButtonNext type="primary" onClick={() => next()}>
                            Next
                        </ButtonNext>
                    )}
                    {current === steps.length - 1 && (
                        <ButtonDone type="primary" 
                            onClick={() => {
                                dispatch(resetSeatSelection());
                                message.success('Processing complete!');
                            }}>
                            Done
                        </ButtonDone>
                    )}
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default BuyTicket;
