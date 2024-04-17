import React, { useState } from "react";
import { HomeOutlined, SwapOutlined, ShoppingCartOutlined, DeleteOutlined, AntCloudOutlined } from '@ant-design/icons';
import { DatePicker, Button } from 'antd';
import { AbsoluteBox, Arrow, AutoLayoutContainer, AutoLayoutContainer2, AutoLayoutContainerStyle, AutoLayoutRowStyle, Box, BuyTicket, Container, DatePickerContainer, DatePickerStyled, Destination, FlexContainer, Frame27Style, Frame32Style, Frame33Style, HomeOut, InnerDiv, InnerDivStyle, InsideAutoLayoutContainer, InsideAutoLayoutContainer2, Label, MainContainerStyle, Rectangle18, Rectangle19, Rectangle20Container, Rectangle21, RowContainer, SearchText, StyledDiv, StyledDiv2} from "./style";
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import bgFb from '../../assets/images/bg_full.jpg';

const { RangePicker } = DatePicker;

const SearchPage = () => {
    const [departDate, setDepartDate] = useState(moment());
    const [returnDate, setReturnDate] = useState(null); // Thêm state cho ngày về
    const [tripType, setTripType] = useState('oneWay'); // Khởi tạo trạng thái ban đầu là 'một chiều'

    const toggleTripType = () => {
        setTripType(prevType => prevType === 'oneWay' ? 'roundTrip' : 'oneWay'); // Đảo ngược loại chuyến bay khi người dùng bấm vào nút
    };
    const navigate = useNavigate();
    const handleBuy = () => {
        navigate('/buyticket')
    }
    const handleFind = () => {
        navigate('/')
    }
    const seatInfo = [
        { seatNumber: '1', type: 'empty' },
        { seatNumber: '2', type: 'occupied' },
        { seatNumber: '3', type: 'empty' },
        // Thêm các chỗ ngồi khác ở đây
    ];
    const SeatMarker = ({ type }) => {
        // Dựa vào loại của chỗ ngồi, áp dụng các kiểu CSS tương ứng
        const markerStyle = {
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: type === 'occupied' ? 'red' : 'green',
        };
      
        return <div style={markerStyle}></div>;
      };

    return (
        <div style={{ backgroundImage: `url(${bgFb})`}}>
            <HomeOut>
                <HomeOutlined style={{ fontSize: '20px', marginLeft: '15%', cursor: 'pointer'}} />
                <Arrow style={{cursor: 'pointer'}}>&gt;</Arrow>
                <SearchText style={{cursor: 'pointer'}} onClick={handleFind}>Tìm kiếm</SearchText>
                <Arrow style={{cursor: 'pointer'}}>&gt;</Arrow>
                <Destination style={{cursor: 'pointer'}}>DAN - HAN</Destination>
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
                            <p style={{ fontSize: '20px' }}>Đà Nẵng</p>
                        </Box>
                    </div>
                    <div>
                        <Label>Điểm đến</Label>
                        <Box>
                            <p style={{ fontSize: '20px' }}>Hà Nội</p>
                        </Box>
                    </div>
                    <div>
                        <Label>Ngày đi</Label>
                        <DatePickerContainer>
                            <DatePickerStyled
                                value={departDate}
                                format="DD/MM/YYYY"
                                onChange={(date) => setDepartDate(date)}
                            />
                        </DatePickerContainer>
                    </div>
                    {tripType === 'roundTrip' && ( 
                        <div>
                            <Label>Ngày về</Label>
                                <DatePickerStyled
                                    value={departDate}
                                    // value={returnDate}
                                    format="DD/MM/YYYY"
                                    onChange={(date) => setReturnDate(date)}
                                    style={{ width: '250px' }}
                                />
                        </div>
                    )}
                </RowContainer>
            </Container>
            <MainContainerStyle>
                <InnerDivStyle>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '70px'}}>
                    <AutoLayoutContainerStyle>
                        <AutoLayoutRowStyle>
                            <Frame33Style>
                                    <InnerDiv></InnerDiv>
                                    <Frame32Style></Frame32Style>
                                    <Frame27Style>
                                        <Rectangle18>
                                        </Rectangle18>
                                        <Rectangle19></Rectangle19>
                                    </Frame27Style>
                                </Frame33Style>
                        </AutoLayoutRowStyle>
                        <AutoLayoutContainer>
                            <Rectangle21>
                            </Rectangle21>
                            <AutoLayoutContainer2>
                                    <InsideAutoLayoutContainer></InsideAutoLayoutContainer>
                                    <InsideAutoLayoutContainer2></InsideAutoLayoutContainer2>
                                </AutoLayoutContainer2>
                            <Rectangle20Container></Rectangle20Container>
                        </AutoLayoutContainer>
                    </AutoLayoutContainerStyle>

                    <AutoLayoutContainerStyle>
                        <AutoLayoutRowStyle>
                            <Frame33Style>
                                    <InnerDiv></InnerDiv>
                                    <Frame32Style></Frame32Style>
                                    <Frame27Style>
                                        <Rectangle18>
                                        </Rectangle18>
                                        <Rectangle19></Rectangle19>
                                    </Frame27Style>
                                </Frame33Style>
                        </AutoLayoutRowStyle>
                        <AutoLayoutContainer>
                            <Rectangle21>
                            </Rectangle21>
                            <AutoLayoutContainer2>
                                    <InsideAutoLayoutContainer></InsideAutoLayoutContainer>
                                    <InsideAutoLayoutContainer2></InsideAutoLayoutContainer2>
                                </AutoLayoutContainer2>
                            <Rectangle20Container></Rectangle20Container>
                        </AutoLayoutContainer>
                    </AutoLayoutContainerStyle>

                    <AutoLayoutContainerStyle>
                        <AutoLayoutRowStyle>
                            <Frame33Style>
                                    <InnerDiv></InnerDiv>
                                    <Frame32Style></Frame32Style>
                                    <Frame27Style>
                                        <Rectangle18>
                                        </Rectangle18>
                                        <Rectangle19></Rectangle19>
                                    </Frame27Style>
                                </Frame33Style>
                        </AutoLayoutRowStyle>
                        <AutoLayoutContainer>
                            <Rectangle21>
                            </Rectangle21>
                            <AutoLayoutContainer2>
                                    <InsideAutoLayoutContainer></InsideAutoLayoutContainer>
                                    <InsideAutoLayoutContainer2></InsideAutoLayoutContainer2>
                                </AutoLayoutContainer2>
                            <Rectangle20Container></Rectangle20Container>
                        </AutoLayoutContainer>
                    </AutoLayoutContainerStyle>

                    <AutoLayoutContainerStyle>
                        <AutoLayoutRowStyle>
                            <Frame33Style>
                                    <InnerDiv></InnerDiv>
                                    <Frame32Style></Frame32Style>
                                    <Frame27Style>
                                        <Rectangle18>
                                        </Rectangle18>
                                        <Rectangle19></Rectangle19>
                                    </Frame27Style>
                                </Frame33Style>
                        </AutoLayoutRowStyle>
                        <AutoLayoutContainer>
                            <Rectangle21>
                            </Rectangle21>
                            <AutoLayoutContainer2>
                                    <InsideAutoLayoutContainer></InsideAutoLayoutContainer>
                                    <InsideAutoLayoutContainer2></InsideAutoLayoutContainer2>
                                </AutoLayoutContainer2>
                            <Rectangle20Container></Rectangle20Container>
                        </AutoLayoutContainer>
                    </AutoLayoutContainerStyle>
                    </div>
                </InnerDivStyle>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '70px' }}>
                    {seatInfo.map((seat, index) => (
                        <AbsoluteBox key={index}>
                            {/* Thêm component SeatMarker để hiển thị các cục tượng trưng */}
                            <SeatMarker type={seat.type} />
                            {/* Hiển thị số ghế */}
                            <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold' }}>{seat.seatNumber}</p>
                        </AbsoluteBox>
                    ))}
                </div>
            </MainContainerStyle>
            <StyledDiv>
                <ShoppingCartOutlined style={{ fontSize: '20px' }} />
                <span style={{ fontSize: '16px' }}>Giỏ vé</span>
            </StyledDiv>
            <StyledDiv2>
                <FlexContainer>
                    <AntCloudOutlined style={{ fontSize: '25px' }} />
                    <p style={{ margin: '0 10px', fontSize: '16px', flexGrow: 1 }}>
                        <br /> VJ512 - DAD -> HAN <br />
                            5/4/2024 16:50 <br />
                            VJ512 - Toa 9 - Chỗ 50 <br />
                    </p>
                    <DeleteOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
                </FlexContainer>
                <FlexContainer>
                    <AntCloudOutlined style={{ fontSize: '25px' }} />
                    <p style={{ margin: '0 10px', fontSize: '16px', flexGrow: 1 }}>
                        <br />VJ513 - HAN -> DAD <br />
                            8/4/2024 17:40 <br />
                            VJ513 - Toa 7 - Chỗ 40 <br />
                    </p>
                    <DeleteOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
                </FlexContainer>
                <FlexContainer>
                    <AntCloudOutlined style={{ fontSize: '25px' }} />
                    <p style={{ margin: '0 10px', fontSize: '16px', flexGrow: 1 }}>
                        <br />VJ513 - HAN -> SGN <br />
                            15/4/2024 9:20 <br />
                            VJ507 - Toa 5 - Chỗ 60 
                    </p>
                    <DeleteOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
                </FlexContainer>
                <BuyTicket onClick={handleBuy}>Mua vé</BuyTicket>
            </StyledDiv2>



        </div>
    );
};

export default SearchPage;