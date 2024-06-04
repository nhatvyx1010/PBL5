import { useState, useEffect } from "react";
import { ShoppingCartOutlined, DeleteOutlined, AntCloudOutlined } from '@ant-design/icons';
import { List, Pagination } from 'antd';
import { BuyTicket, FlexContainer, MainContainerStyle, StyledDiv, StyledDiv2, WrapBorder } from "./style";
import { useNavigate } from "react-router-dom";
import bgFb from '../../assets/images/bg_full.jpg';
import WrapComponent from '../WrapComponent/WrapComponent';
import TrainComponent from '../TrainComponent/TrainComponent';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectSeat, deselectSeat } from '../../redux/slides/selectedSeatSlide';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SearchComponent = () => {
    const dispatch = useDispatch();
    const seatSelection = useSelector(state => state.seatSelection);
    const station = useSelector(state => state.station);
    const user = useSelector(state => state.user);
    
    const navigate = useNavigate();
    const [carriageId, setCarriageId] = useState(null);
    const [selectedScheduleId, setSelectedScheduleId] = useState(null);
    // const [selectedScheduleItems, setSelectedScheduleItems] = useState(null);


    const [lastClickedScheduleId, setLastClickedScheduleId] = useState(null);
    // const [selectedScheduleValue, setSelectedScheduleValue] = useState(null);
    const [clickedButtonsData, setClickedButtonsData] = useState([]);
    const [carriageList, setCarriageList] = useState([]);
    const [trainName, setTrainName] = useState('');

    const [wrapList, setWrapList] = useState([]);

    
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    // const [itemsPerPage, setItemsPerPage] = useState(null);
    
    const [itemsPerPage] = useState(1); // Số lượng phần tử trên mỗi trang

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = carriageList.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        const indexOfLastCarriage = page * itemsPerPage;
        const indexOfFirstCarriage = indexOfLastCarriage - itemsPerPage;
        setCarriageId(carriageList[indexOfFirstCarriage]?.id);

    };

    
    useEffect(() => {
        if (carriageList.length > 0) {
            setCarriageId(carriageList[0]?.id);
        }
    }, [carriageList]);

    useEffect(() => {
        const selectedSeats = seatSelection.selectedSeats[selectedScheduleId] || [];
        const seatsInCarriage = selectedSeats.filter(seat => seat.carriageId === carriageId);
        const seatNumbers = seatsInCarriage.map(seat => seat.seatNumber);
        setWrapList(seatNumbers);
    }, [seatSelection, selectedScheduleId, carriageId]);

    
    // useEffect(() => {
    //     console.log("Carriage List: ", carriageList);
    //     console.log("handle carriageId: ", carriageId);
    //     console.log("selectedScheduleId: ", selectedScheduleId);
    //     console.log("seatSelection: ", seatSelection);
    //     console.log("ClickedButtonsData: ", clickedButtonsData);
    //     console.log("Wrap List: ", wrapList);
    //     console.log("trainName:" + trainName);
    // }, [carriageList, carriageId, selectedScheduleId, seatSelection, clickedButtonsData, wrapList, trainName]);

    const schedules = useSelector(state => state.schedule.schedules);

    const handleBuy = () => {
        navigate('/buyticket');
    }

    const handleScheduleSelect = async (scheduleId) => {
        setSelectedScheduleId(scheduleId);
        const selectedSchedule = schedules.find(schedule => schedule.scheduleId === scheduleId);
        if (selectedSchedule) {
            setCarriageId(scheduleId);
            await getCarrData(scheduleId);
            // set setSelectedScheduleItems = so luong ghe ngoi ban dau 
            // setSelectedScheduleValue(trainList[scheduleId - 1]);
            // setSelectedScheduleItems(totalItems);
        }
        setLastClickedScheduleId(scheduleId);
        setCurrentPage(1);
    };

    const handleButtonSelect = async (itemIndex) => {
        try {        
            // Kiểm tra xem vị trí index mới đã tồn tại trong clickedButtonsData hay chưa
            const existingIndex = clickedButtonsData.findIndex(button => button.itemIndex === itemIndex && button.selectedScheduleId === selectedScheduleId && button.carriageId === carriageId);
        
            const carriageIndex = carriageList.findIndex(carriage => carriage.id === carriageId) + 1;
            if (existingIndex === -1) {
                // Nếu không tồn tại, thêm mới vào clickedButtonsData
                setClickedButtonsData([...clickedButtonsData, { itemIndex, selectedScheduleId, carriageId, carriageIndex, trainName }]);
                dispatch(selectSeat({ scheduleId: selectedScheduleId, seatNumber: itemIndex, carriageId: carriageId, trainName: trainName, carriageIndex: carriageIndex }));    
            } else {
                // Nếu tồn tại, loại bỏ khỏi clickedButtonsData
                const newClickedButtonsData = clickedButtonsData.filter(button => !(button.itemIndex === itemIndex && button.selectedScheduleId === selectedScheduleId && button.carriageId === carriageId));
                setClickedButtonsData(newClickedButtonsData);
                dispatch(deselectSeat({ scheduleId: selectedScheduleId, seatNumber: itemIndex, carriageId: carriageId }));
            }
        } catch (error) {
            console.error('Lỗi:', error);
        }
    };
    




    const handleDeleteFlexContainer = (scheduleId, itemIndex, carriageId) => {
        // Xóa ghế khỏi seatSelection
        dispatch(deselectSeat({ scheduleId: scheduleId, seatNumber: itemIndex, carriageId: carriageId }));
        // Cập nhật clickedButtonsData: loại bỏ ghế được xóa khỏi danh sách
        const newClickedButtonsData = clickedButtonsData.filter(button => !(button.itemIndex === itemIndex && button.selectedScheduleId === scheduleId && button.carriageId === carriageId));
        setClickedButtonsData(newClickedButtonsData);
    };

    const getCarrData = async (scheduleId) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/schedules/${scheduleId}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user.access_token}`
                }
            });
            const data = await response.json();
    
            if (data.meta.status_code === 200) {
                setCarriageList(data.data.result.carriages);
                setTrainName(data.data.result.trainId);
            } else {
                alert("Đăng nhập không thành công. Vui lòng thử lại.");
            }
        } catch (error) {
            console.error('Lỗi:', error);
            alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
        }
    };

    return (
        <div style={{ backgroundImage: `url(${bgFb})` }}>
            <MainContainerStyle>
                <List
                    style={{ overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', paddingLeft: '20px', paddingRight: '20px' }}
                    dataSource={schedules}
                    renderItem={schedule => (
                        <List.Item style={{ display: 'inline-block', width: '200px' }}>
                            <TrainComponent
                                key={schedule.scheduleId} 
                                id={schedule.scheduleId} 
                                value={schedule}
                                totalItems={schedule.totalItems}
                                onSelect={handleScheduleSelect}
                                isSelected={selectedScheduleId === schedule.scheduleId}
                                disabled={lastClickedScheduleId !== null && lastClickedScheduleId !== schedule.scheduleId}
                            />
                        </List.Item>
                    )}
                />

                {/* <WrapBorder style={{ display: 'flex', position: 'absolute', marginLeft: '30px' }}>
                    <WrapComponent
                        selectedScheduleId={selectedScheduleId}
                        totalItems={40}
                        // onSelect={handleButtonSelect}
                    ></WrapComponent>
                    <PaginationContainer style={{maxWidth: '300px'}}>
                        <Pagination
                        defaultCurrent={1}
                        onChange={handlePageChange}
                        />
                    </PaginationContainer>
                </WrapBorder> */}
                <WrapBorder style={{  marginTop: '20px' }}>
                    {currentItems.map((carriage, index) => (
                        <WrapComponent
                            key={index}
                            totalItems={carriage.totalSeats}
                            itemsPerPage={carriage.totalSeats}
                            onSelect={(itemIndex) => handleButtonSelect(itemIndex)}
                            carriageId={carriageId}
                            selectedButtons={wrapList}
                        // Truyền các props cho WrapComponent tùy thuộc vào carriage
                        />
                    ))}
                </WrapBorder>
                <PaginationContainer>
                    <Pagination
                        // defaultCurrent={1}
                        defaultCurrent={currentPage}
                        current={currentPage}
                        total={carriageList.length}
                        pageSize={itemsPerPage}
                        onChange={handlePageChange}
                    />
                </PaginationContainer>
            </MainContainerStyle>

            <StyledDiv>
                <ShoppingCartOutlined style={{ fontSize: '20px' }} />
                <span style={{ fontSize: '16px' }}>Giỏ vé</span>
            </StyledDiv>
            <StyledDiv2>
                 <div style={{ maxHeight: '400px', overflowY: 'auto' }}> 
                    {seatSelection && Object.keys(seatSelection.selectedSeats).length !== 0 && (
                        Object.entries(seatSelection.selectedSeats).map(([scheduleId, seats]) => (
                            seats.map((seat, index) => (
                                <FlexContainer key={index} style={{ display: 'flex', alignItems: 'center', margin: '10px', paddingLeft: '10px', paddingRight: '10px', border: '1px solid #CAF8F8', borderRadius: '10px' }}>
                                    <AntCloudOutlined style={{ fontSize: '20px', marginRight: '10px', color: '#1890ff' }} />
                                    <div style={{ marginLeft: '10px', flex: 1 }}>
                                        <p style={{ marginBottom: '5px', fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                                            {station.start} - {station.arrival}
                                        </p>
                                        <p style={{ marginBottom: '5px', fontSize: '14px', color: '#666' }}>
                                            Tàu: {scheduleId}, Toa: <strong>{seat.carriageIndex}</strong>, Chỗ: <strong>{seat.seatNumber}</strong>
                                        </p>
                                    </div>
                                    <DeleteOutlined
                                        style={{ fontSize: '18px', cursor: 'pointer', color: '#999' }}
                                        onClick={() => handleDeleteFlexContainer(scheduleId, seat.seatNumber, seat.carriageId)}
                                    />
                                </FlexContainer>
                            ))
                        ))
                    )}
                </div>

{/* <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
  {clickedButtonsData &&
    clickedButtonsData.map((seat, index) => (
      <FlexContainer key={index}>
        <AntCloudOutlined style={{ fontSize: '25px' }} />
        <div style={{ margin: '0 10px', fontSize: '16px', flexGrow: 1 }}>
          <p>
            <br /> {station.start} to {station.arrival} <br />
            - Tàu: {seat.trainName} <br />
            - Toa: {seat.carriageIndex} 
            - Chỗ: {seat.itemIndex} <br />
          </p>
        </div>
        <DeleteOutlined
          style={{ fontSize: '25px', cursor: 'pointer' }}
          onClick={() => handleDeleteFlexContainer(seat.selectedScheduleId, seat.itemIndex, seat.carriageId)}
        />
      </FlexContainer>
    ))
  }
</div> */}


                <BuyTicket onClick={handleBuy}>Mua vé</BuyTicket>
            </StyledDiv2>
        </div>
    );
};

export default SearchComponent;