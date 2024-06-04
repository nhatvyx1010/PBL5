import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { DatePicker, Radio, Row, Col, Select, Modal } from 'antd'; // Import Radio component
// import moment from 'moment';
import { Option } from "antd/es/mentions";
import { CustomRadioGroup, SelectStyle, StyledVideo, RectangleStyle, BackgroundFB, CommentButton, SearchButton, DatePickerStyle, FeedBack, ContainerFeedBack } from "./style";
import VideoIndex from '../../assets/Video/VideoIndex.mp4';
import bgFb from '../../assets/images/bg_full.jpg';
import { useNavigate } from "react-router-dom";
import FooterComponent from '../../components/FooterComponent/FooterComponent'
// import SearchableSelect from '../../components/SearchableSelect/SearchableSelect'
import ChatComponent from '../../components/testChatComponent/chatComponent'
import { useSelector, useDispatch } from 'react-redux';
import { addSchedule, resetSchedules } from '../../redux/slides/schedulesSlide';
import { updateStation } from '../../redux/slides/findStationSlide';

const IndexPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [departDate, setDepartDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    // const [adults, setAdults] = useState(0);
    // const [children, setChildren] = useState(0);
    // const [infants, setInfants] = useState(0);
    const [tripType, setTripType] = useState(1);
    const [commentIndex, setCommentIndex] = useState(0);
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
    const [authenticated, setAuthenticated] = useState(false);
    const user = useSelector(state => state.user);
    // const station = useSelector(state => state.station);

    const [stations, setStations] = useState([]);
    const [departStation, setDepartStation] = useState(null);
    const [destinationStation, setDestinationStation] = useState(null);
    
    const [stationInitialized, setStationInitialized] = useState(false);

    
  
    // const schedule = useSelector(state => state.schedule);
    //  console.log("schedule - index: ", schedule );

    // const station = useSelector(state => state.station);
    // console.log("station: ", station );

    useEffect(() => {
        dispatch(updateStation({ returnAt: 'False', arrivalAt: '234',}));  
        if (!stationInitialized) {
        // Thiết lập giá trị ban đầu cho station
        dispatch(updateStation({ start: '', arrival: '' }));
        setStationInitialized(true);
    }
    }, [dispatch, stationInitialized]);


    const navigate = useNavigate();

    const [params, setParams] = useState({
        return: 'False',
        startAt: '',
        arrivalAt: '234',
        start: '',
        arrival: ''
    });


    const comments = useMemo(() => [    
        "Cô vừa về đến nhà. Chuyến bay tốt lắm cháu ạ! Chuẩn giờ, bay máy bay to. Con cô bảo đặt được vé giá tốt mà giờ bay cũng rất đẹp.",
        "Chuyến bay của chị và gia đình đi chơi rất thuận lợi em ạ. Bên em tư vấn chọn chuyến cho chị xong lại check in online cho chị nữa nên cả nhà được ngồi gần nhau.",
        "Mọi khi anh hay đi Vietnamairlines. Chất lượng dịch vụ tốt, làm thủ tục nhanh. Với lại, đợt rồi cũng máy bay Bamboo vì nhà anh nhiều vali.",
        "Lần đầu chị đặt vé bay đi nước ngoài bên em và cảm thấy vô cùng hài lòng!",
        "Alo, mình và gia đình vừa về. Cảm ơn bên bạn đặt vé cho mình nhé! Cả nhà đi vui lắm bạn ạ.",
        "Cô bị đau chân nên hay phải chọn chỗ ngồi thoải mái. Bên cháu tư vấn tốt lắm! Bạn đặt vé chọn cho cô máy bay to, thân rộng."
    ], []);

    const handleChangeComment = (index) => {
        setCommentIndex(index);
    };

    const nextComment = useCallback(() => {
        setCommentIndex((prevIndex) => (prevIndex === comments.length - 1 ? 0 : prevIndex + 1));
    }, [comments]);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            nextComment();
        }, 3000);
    
        // Nếu có token, đánh dấu là đã đăng nhập
        // console.log("gettoken: "+user.access_token);
        if (user.access_token) {
          setAuthenticated(true); 
        }else{
          setAuthenticated(false); 
        }

        return () => clearTimeout(timer);
    }, [commentIndex, nextComment, user.access_token]);
    

    useEffect(() => {
        setCurrentCommentIndex(commentIndex);
    }, [commentIndex]);
    
    useEffect(() => {
        dispatch(resetSchedules());
        if (!stationInitialized) {
            fetch(`${process.env.REACT_APP_API_URL}/api/v1/stations`, {
                method: "GET",
            })
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                if (data.meta.status_code === 200) {
                    setStations(data.data.result);
                    setStationInitialized(true);
                } else {
                    alert("Đăng nhập không thành công. Vui lòng thử lại.");
                }
            })
            .catch((error) => {
                setIsLoading(false);
                console.error('Lỗi:', error);
                alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
            });
        }
    }, [stationInitialized]);

    // const prevComment = () => {
    //     setCommentIndex((prevIndex) => (prevIndex === 0 ? comments.length - 1 : prevIndex - 1));
    // };

    const handleGetSchedule = (e) => {
        if(authenticated){
            e.preventDefault();
        
            // const queryString = new URLSearchParams(params).toString();
            // const url = `http://localhost:8080/api/v1/schedules?${queryString}`;
            let url = `${process.env.REACT_APP_API_URL}/api/v1/schedules?`;
                url += `return=${params.return}&`;
                url += `startAt=${params.startAt}&`;
                url += `arrivalAt=${params.arrivalAt}&`;
                url += `start=${encodeURIComponent(params.start)}&`;
                url += `arrival=${encodeURIComponent(params.arrival)}`;

            // console.log("--params.return: "+params.return+ "params.startAt"+params.startAt+"params.arrivalAt"+params.arrivalAt+"params.start"+params.start);
            // console.log("url : "+url);
            fetch(url, {
                method: "GET",
                // headers: {
                //     'Authorization': `Bearer ${user.access_token}`
                // },
            })
            .then((response) => response.json())
            .then((data) => {
            // console.log("url handleGetSchedule: "+url);
            // console.log(data);
                if (data.meta.status_code === 200) {
                    if(data.data.result && data.data.result.length > 0){
                        console.log("GET schedules thành công."+data.data.result);
                        dispatch(addSchedule(data.data.result));
                        navigate('/search')
                    }else{
                        console.log("GET schedules is none.");
                        // alert("GET schedules is none.");
                        countDown(1);
                    }
                } else {
                    countDown(2);
                }
            })
            .catch((error) => {
                console.error('Lỗi:', error);
                alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
            });            
        }else{
            navigate('/sign-in')
        }
    };

    
    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
        // console.log(e.target.value);

        const updatedParams = { ...params, return: e.target.value==1 ? 'False' : 'True' };
        setParams(updatedParams);

        if(e.target.value==1){
            dispatch(updateStation({ returnAt: 'False'}));  
        } else {
            dispatch(updateStation({ returnAt: 'True'}));
        }
    };
    
    const handleDepartDateChange = (date) => {
        setDepartDate(date);
        console.log(date.unix());

        const updatedParams = { ...params, startAt: date.unix() };
        setParams(updatedParams);
        
        dispatch(updateStation({ startAt: date.unix()}));
    };
    
    const handleReturnDateChange = (date) => {
        setReturnDate(date);
        console.log(date.unix());

        const updatedParams = { ...params, arrivalAt: date.unix() };
        setParams(updatedParams);
        
        dispatch(updateStation({ arrivalAt: date.unix()}));
    };

    const handleDepartStationChange = value => {
        setDepartStation(value);
        const selectedStation = stations.find(station => station.stationId === value);
        // console.log(selectedStation.stationPoint);
        
        const updatedParams = { ...params, start: selectedStation.stationPoint };
        setParams(updatedParams);
    
        dispatch(updateStation({ start: selectedStation.stationPoint}));
    };
    
    const handleDestinationStationChange = value => {
        setDestinationStation(value);
        const selectedStation = stations.find(station => station.stationId === value);
        // console.log(selectedStation.stationPoint);
        
        const updatedParams = { ...params, arrival: selectedStation.stationPoint };
        setParams(updatedParams);
        
        dispatch(updateStation({ arrival: selectedStation.stationPoint }));
    };
    

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.controls = false;
        }
    };

    const [modal, contextHolder] = Modal.useModal();
    const countDown = (val) => {
        let secondsToGo = 5;

        const instance = modal.error({
        title: val == 1 ? 'Không tìm thấy lịch trình phù hợp' : 'Xin vui lòng chọn lịch trình mong muốn',
        content: `Thông báo này sẽ đóng sau ${secondsToGo} giây.`,
        });

        const timer = setInterval(() => {
        secondsToGo -= 1;
        instance.update({
            content: `Thông báo này sẽ đóng sau ${secondsToGo} giây.`,
        });
        }, 1000);

        setTimeout(() => {
        clearInterval(timer);
        instance.destroy();
        }, secondsToGo * 1000);
    };

    return (
        <div>
            {isLoading ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <ChatComponent/>
                <StyledVideo
                    ref={videoRef}
                    onMouseEnter={handleMouseEnter}
                    controls={false}
                    autoPlay
                    muted
                    loop>
                    <source src={VideoIndex} type="video/mp4" />
                </StyledVideo>
                <div style={RectangleStyle}>
                    <h2 style={{ fontSize: '24px' }}>Mở cánh cửa khám phá cùng ViVu</h2>
                    <h3 style={{ fontSize: '20px' }}>ViVu - Tàu di chuyển bạn đến những vùng đất mới với một hành trình bất tận</h3>
                    <div>
                        <CustomRadioGroup onChange={handleTripTypeChange} value={tripType} >
                            <Radio value={1} style={{ fontSize: '17px' }}>Một chiều</Radio>
                            <Radio value={2} style={{ fontSize: '17px' }}>Khứ Hồi</Radio>
                        </CustomRadioGroup>
                    </div>

                    <Row gutter={[16, 16]} 
                        
                        style={{ marginTop: '14px' }}>
                        <Col xs={24} sm={12}>
                            <Select
                                placeholder="Chọn điểm đi"
                                style={SelectStyle}
                                // onChange={(value) => console.log(value)}
                                onChange={handleDepartStationChange}
                                value={departStation}   
                            >
                                {stations
                                    .filter(station => station.stationId !== destinationStation)
                                    .map(station => (
                                        <Option key={station.stationId} value={station.stationId}>{station.stationPoint}</Option>
                                    ))}
                            </Select>
                            {/* <SearchableSelect
                                style={SearchableStyle}
                                options={stations}
                                onSelect={handleDepartStationChange}
                                placeholder="Chọn điểm đi hoặc nhập mới"
                                value={departStation}
                                
                            >
                                {stations
                                    .filter(station => station.stationId !== destinationStation)
                                    .map(station => (
                                        <Option key={station.stationId} value={station.stationId}>{station.stationPoint}</Option>
                                    ))}
                            </SearchableSelect> */}
                        </Col>
                        <Col xs={24} sm={12}>
                            {/* <SearchableSelect
                                options={stations}
                                onSelect={handleDestinationStationChange}
                                placeholder="Chọn điểm đến hoặc nhập mới"
                                value={destinationStation}
                            >
                                {stations
                                    .filter(station => station.stationId !== departStation)
                                    .map(station => (
                                        <Option key={station.stationId} value={station.stationId}>{station.stationPoint}</Option>
                                    ))}
                            </SearchableSelect> */}
                            <Select
                                placeholder="Chọn điểm đến"
                                style={SelectStyle}
                                // onChange={(value) => console.log(value)}
                                onChange={handleDestinationStationChange}
                                value={destinationStation}
                            >
                                {stations
                                    .filter(station => station.stationId !== departStation)
                                    .map(station => (
                                        <Option key={station.stationId} value={station.stationId}>{station.stationPoint}</Option>
                                    ))}
                            </Select>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} style={{ marginTop: '14px' }} >
                        <Col xs={24} sm={12}>
                            <label style={{ marginBottom: '10px', display: 'block' }}>Ngày đi</label>
                            <div style={{ position: 'relative' }}>
                                <DatePicker
                                    value={departDate}
                                    format="DD/MM/YYYY"
                                    onChange={handleDepartDateChange}
                                    style={DatePickerStyle}
                                />
                            </div>
                        </Col>
                        {tripType === 2 && (
                            <Col xs={24} sm={12}>
                                <label style={{ marginBottom: '10px', display: 'block' }}>Ngày về</label>
                                <div style={{ position: 'relative' }}>
                                    <DatePicker
                                        value={returnDate}
                                        format="DD/MM/YYYY"
                                        onChange={handleReturnDateChange}
                                        style={DatePickerStyle}
                                    />
                                </div>
                            </Col>
                        )}
                    </Row>

                    {/* <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={8}>
                            <label style={{ marginBottom: '10px', display: 'block' }}>Người lớn</label>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    type="number"
                                    placeholder="Người lớn"
                                    value={adults}
                                    onChange={(e) => setAdults(Math.max(0, parseInt(e.target.value)))}
                                    style={InputMember}
                                    min={0}
                                />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                            <label style={{ marginBottom: '10px', display: 'block' }}>Trẻ em</label>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    type="number"
                                    placeholder="Trẻ em"
                                    value={children}
                                    onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value)))}
                                    style={InputMember}
                                    min={0}
                                />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                            <label style={{ marginBottom: '10px', display: 'block' }}>Em bé</label>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    type="number"
                                    placeholder="Em bé"
                                    value={infants}
                                    onChange={(e) => setInfants(Math.max(0, parseInt(e.target.value)))}
                                    style={InputMember}
                                    min={0}
                                />
                            </div>
                        </Col>
                    </Row> */}

                    <SearchButton onClick={handleGetSchedule}
                        style={{ marginTop: '24px', display: 'block' }}
                        >Tìm chuyến tàu</SearchButton>
                </div>
                <div style={{ position: 'relative', marginTop: '30px' }}>
                    <BackgroundFB src={bgFb} alt="background"></BackgroundFB>
                    <FeedBack>
                        <ContainerFeedBack>
                            <div>
                                <h1 style={{ fontSize: '40px', color:'#3C7363'}}>Đánh giá từ người trải nghiệm</h1>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '25px', width: '1000px', color: '#3C7363', height: '100px' }}>{comments[commentIndex]}</p>
                                <div>
                                <CommentButton
                                    onClick={() => handleChangeComment(0)}
                                    style={{borderRadius: '30px', fontWeight: currentCommentIndex === 0 ? 'bold' : 'normal'}}
                                >
                                    CHỊ LÊ THỦY
                                </CommentButton>
                                <CommentButton
                                    onClick={() => handleChangeComment(1)}
                                    style={{borderRadius: '30px', fontWeight: currentCommentIndex === 1 ? 'bold' : 'normal'}}
                                >
                                    CÔ MINH HÒA
                                </CommentButton>
                                <CommentButton
                                    onClick={() => handleChangeComment(2)}
                                    style={{borderRadius: '30px', fontWeight: currentCommentIndex === 2 ? 'bold' : 'normal'}}
                                >
                                    ANH QUANG ANH
                                </CommentButton>
                                <CommentButton
                                    onClick={() => handleChangeComment(3)}
                                    style={{borderRadius: '30px', fontWeight: currentCommentIndex === 3 ? 'bold' : 'normal'}}
                                >
                                    CHỊ GIANG
                                </CommentButton>
                                <CommentButton
                                    onClick={() => handleChangeComment(4)}
                                    style={{borderRadius: '30px', fontWeight: currentCommentIndex === 4 ? 'bold' : 'normal'}}
                                >
                                    BẠN CHU HUYỀN
                                </CommentButton>
                                <CommentButton
                                    onClick={() => handleChangeComment(5)}
                                    style={{borderRadius: '30px', fontWeight: currentCommentIndex === 5 ? 'bold' : 'normal'}}
                                >
                                    CÔ GIANG
                                </CommentButton>
                                </div>
                            </div>
                        </ContainerFeedBack>
                    </FeedBack>
                    {contextHolder}
                </div>
                <FooterComponent></FooterComponent>
            </div>
            )}
        </div>
    );
};

export default IndexPage;
