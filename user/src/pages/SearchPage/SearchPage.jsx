import { useState, useEffect } from "react";
import { HomeOutlined, SwapOutlined } from '@ant-design/icons';
// import { DatePicker } from 'antd';
import { Arrow,  Box, Container, DatePickerContainer, DatePickerStyled, Destination, HomeOut, Label,SearchText, RowContainer} from "./style";
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import bgFb from '../../assets/images/bg_full.jpg';
import SearchComponent from '../../components/SearchComponent/SearchComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

import { useSelector } from 'react-redux';

// const { RangePicker } = DatePicker;

const SearchPage = () => {
    const [departDate, setDepartDate] = useState(moment());
    const [returnDate, setReturnDate] = useState(null); // Thêm state cho ngày về
    const [tripType, setTripType] = useState('oneWay'); // Khởi tạo trạng thái ban đầu là 'một chiều'
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    // const [authenticated, setAuthenticated] = useState(false);

    const user = useSelector(state => state.user);    
    const station = useSelector(state => state.station);

    const [params, setParams] = useState({
        return: '',
        startAt: '',
        arrivalAt: '',
        start: '',
        arrival: ''
    });

    // const scheduleData = useSelector((state) => state.dataSchedule.scheduleData);

    // const departurePoint = station && station.start ? station.start  : '';
    // const arrivalPoint = station && station.arrival ? station.arrival : '';

    // const [point, setPoint] = useState(null); 

    useEffect(() => {
        setParams((prevParams) => ({
            ...prevParams,
            return: station.returnAt,
            startAt: station.startAt,
            arrivalAt: station.arrivalAt,
            start: station.start,
            arrival: station.arrival
        }));
    
    }, [station]);
    
    // useEffect(() => {
    //     setParams({
    //         return: station.returnAt,
    //         startAt: station.startAt,
    //         arrivalAt: station.arrivalAt,
    //         start: station.start,
    //         arrival: station.arrival
    //     });
    //     setDeparturePoint(station.start);
    //     setArrivalPoint(station.arrival);
    // }, [station]);

    const handleStation = (depId, arrId) => {
        console.log("point;" + depId+ "point;" + arrId);
        // handleGetStation(depId);
        // setDeparturePoint(point);
        // handleGetStation(arrId);
        // setArrivalPoint(point);
        setLoading(false);
    }

    // const handleGetStation = (id) => {
    //     const url = `${process.env.REACT_APP_API_URL}/api/v1/stations?name=${id}`;
    //     fetch(url, {
    //         method: "GET",
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         // console.log("stations: ", data);
    //         if (data.meta.status_code === 200) {
    //             setPoint(data.data.result.stationPoint);
    //             console.log("point;" + data.data.result.stationPoint);
    //         } else {
    //             alert("GET stations không thành công. Vui lòng thử lại.");
    //         }
    //     })
    //     .catch((error) => {
    //         console.error('Lỗi:', error);
    //         alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    //     });
    // }
    

    useEffect(() => {
        if (user.access_token){
            if(params.return && params.startAt && params.arrivalAt && params.start && params.arrival) {
                let url = `${process.env.REACT_APP_API_URL}/api/v1/schedules?`;
                url += `return=${params.return}&`;
                url += `startAt=${params.startAt}&`;
                url += `arrivalAt=${params.arrivalAt}&`;
                url += `start=${encodeURIComponent(params.start)}&`;
                url += `arrival=${encodeURIComponent(params.arrival)}`;

                fetch(url, {
                    method: "GET",
                })
                .then((response) => response.json())
                .then((data) => {
                    if (data.meta.status_code === 200) {
                        if(data.data.result && data.data.result.length > 0){
                            handleStation(data.data.result[0].departurePoint, data.data.result[0].arrivalPoint);
                        }else{
                            alert("GET schedules is none.");
                        }
                    } else {
                        alert("GET schedules không thành công. Vui lòng thử lại.");
                    }
                })
                .catch((error) => {
                    console.error('Lỗi:', error);
                    alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
                });
            }            
        }else{
            navigate('/sign-in')
        }
    }, [params, user.access_token, navigate]);

    
    // useEffect(() => {
    //     if(scheduleData && scheduleData.result){
    //         // setIsLoading(true);
    //         fetch("http://localhost:8080/api/v1/stations", {
    //             method: "GET",
    //             headers: {
    //                 // 'Authorization': `Bearer ${token}`
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // setIsLoading(false);
    //             if (data.meta.status_code === 200) {
    //                 setStations(data.data.result);
    //             } else {
    //                 alert("Đăng nhập không thành công. Vui lòng thử lại.");
    //             }
    //         })        
    //         .catch((error) => {
    //             // setIsLoading(false);
    //             console.error('Lỗi:', error);
    //             alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    //         });
    //     }
    // }, []);


    const toggleTripType = () => {
        setTripType(prevType => prevType === 'oneWay' ? 'roundTrip' : 'oneWay'); // Đảo ngược loại chuyến bay khi người dùng bấm vào nút
    };

    // const handleBuy = () => {
    //     navigate('/buyticket')
    // }
    
    const handleFind = () => {
        navigate('/')
    }
   
    return (
        <div>
            {loading ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
            <div style={{ backgroundImage: `url(${bgFb})`, height: '110vh'}}>
                <HomeOut>
                    <HomeOutlined style={{ fontSize: '20px', marginLeft: '15%', cursor: 'pointer'}} />
                    <Arrow style={{cursor: 'pointer'}}>&gt;</Arrow>
                    <SearchText style={{cursor: 'pointer'}} onClick={handleFind}>Tìm kiếm</SearchText>
                    <Arrow style={{cursor: 'pointer'}}>&gt;</Arrow>
                    <Destination style={{cursor: 'pointer'}}>{params.start} - {params.arrival}</Destination>
                </HomeOut>
                <Container>
                    <div style={{ display: 'flex', alignItems: 'center'}} onClick={toggleTripType}>
                        <SwapOutlined style={{ fontSize: '15px', cursor: 'pointer'}}/>
                        <p style={{fontSize: '15px', cursor: 'pointer'}}>{tripType === 'oneWay' ? 'Một chiều' : 'Khứ hồi'}</p> 
                    </div>
                    <RowContainer>
                        <div>
                            <Label>Điểm đi</Label>
                            <Box>
                                <p style={{ fontSize: '20px' }}>{params.start}</p>
                            </Box>
                        </div>
                        <div>
                            <Label>Điểm đến</Label>
                            <Box>
                                <p style={{ fontSize: '20px' }}>{params.arrival}</p>
                            </Box>
                        </div>
                        <div>
                            <Label>Ngày đi</Label>
                            <DatePickerContainer>
                                <DatePickerStyled
                                    value={departDate ? moment.unix(params.startAt) : null} // Chuyển đổi giá trị Unix timestamp sang moment
                                    format="DD/MM/YYYY"
                                    onChange={(date) => setDepartDate(date)}
                                    disabled
                                />
                            </DatePickerContainer>
                        </div>
                        {tripType === 'roundTrip' && ( 
                            <div>
                                <Label>Ngày về</Label>
                                    <DatePickerStyled
                                        value={returnDate}
                                        format="DD/MM/YYYY"
                                        onChange={(date) => setReturnDate(date)}
                                        style={{ width: '250px' }}
                                    />
                            </div>
                        )}
                    </RowContainer>
                </Container>
                <SearchComponent></SearchComponent>
            </div>
            )}
                <FooterComponent></FooterComponent>
        </div>
    );
};

export default SearchPage;














// <MainContainerStyle>
// <InnerDivStyle>
//     <div style={{display: 'flex', flexWrap: 'wrap', gap: '70px'}}>
//         <TrainComponent></TrainComponent>
//         <TrainComponent></TrainComponent>
//         <TrainComponent></TrainComponent>
//         <TrainComponent></TrainComponent>
//     </div>
// </InnerDivStyle>
// <WrapBorder style={{display: 'flex', position: 'absolute', marginLeft: '30px'}}>
//     <WrapComponent >
//     </WrapComponent>
// </WrapBorder>
// </MainContainerStyle>
// <StyledDiv>
// <ShoppingCartOutlined style={{ fontSize: '20px' }} />
// <span style={{ fontSize: '16px' }}>Giỏ vé</span>
// </StyledDiv>
// <StyledDiv2>
// <FlexContainer>
//     <AntCloudOutlined style={{ fontSize: '25px' }} />
//     <p style={{ margin: '0 10px', fontSize: '16px', flexGrow: 1 }}>
//         <br /> VJ512 - DAD -> HAN <br />
//             5/4/2024 16:50 <br />
//             VJ512 - Toa 9 - Chỗ 50 <br />
//     </p>
//     <DeleteOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
// </FlexContainer>
// <FlexContainer>
//     <AntCloudOutlined style={{ fontSize: '25px' }} />
//     <p style={{ margin: '0 10px', fontSize: '16px', flexGrow: 1 }}>
//         <br />VJ513 - HAN -> DAD <br />
//             8/4/2024 17:40 <br />
//             VJ513 - Toa 7 - Chỗ 40 <br />
//     </p>
//     <DeleteOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
// </FlexContainer>
// <FlexContainer>
//     <AntCloudOutlined style={{ fontSize: '25px' }} />
//     <p style={{ margin: '0 10px', fontSize: '16px', flexGrow: 1 }}>
//         <br />VJ513 - HAN -> SGN <br />
//             15/4/2024 9:20 <br />
//             VJ507 - Toa 5 - Chỗ 60 
//     </p>
//     <DeleteOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
// </FlexContainer>
// <BuyTicket onClick={handleBuy}>Mua vé</BuyTicket>
// </StyledDiv2>