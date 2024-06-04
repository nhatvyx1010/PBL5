
import { useState, useEffect } from "react";
import { AutoLayoutContainer, AutoLayoutContainer2, AutoLayoutContainerStyle, AutoLayoutRowStyle, Frame27Style, Frame32Style, Frame33Style, InfoRow, InnerDiv, InsideAutoLayoutContainer, InsideAutoLayoutContainer2, Rectangle18, Rectangle19, Rectangle20Container, Rectangle21} from "./style";
import PropTypes from 'prop-types';
import moment from 'moment';


const TrainComponent = ({ id, value, totalItems, onSelect, isSelected }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { startAt, arrivalAt, estimatedTravelTime, train } = value;
    const [trainName, setTrainName] = useState('');
    const [loading, setLoading] = useState(true);
    
    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        onSelect(id, totalItems);
    };

    useEffect(() => {
        setTrainName(train);
        setLoading(false);
    });


    return (
        <button 
            className="buttonStyle hoverEffect"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer'
            }}>
                
            {loading ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
            <AutoLayoutContainerStyle>
                <AutoLayoutRowStyle>
                    <Frame33Style>
                        <InnerDiv style={{ background: isSelected ? '#ffcccc' : (isHovered ? '#ffcc99' : '#fff') }}>{trainName}</InnerDiv>
                        <Frame32Style>
                            <InfoRow>
                                <p style={{margin: '0px'}}>TG đi:</p>
                                <p style={{margin: '0px'}}>{moment.unix(startAt).format('DD-MM. HH:mm')}</p>
                            </InfoRow>
                            <InfoRow>
                                <p style={{margin: '0px'}}>TG đến:</p>
                                <p style={{margin: '0px'}}>{moment.unix(arrivalAt).format('DD-MM. HH:mm')}</p>
                            </InfoRow>
                            <InfoRow>
                                <p style={{ fontSize: 10, margin: '0px'}}>SL chỗ đặt</p>
                                <p style={{ fontSize: 10, margin: '0px'}}>SL chỗ trống</p>
                            </InfoRow>
                            <InfoRow>
                                <p style={{ fontSize: 16, fontWeight: 'bold', margin: '0px'}}>{estimatedTravelTime}</p>
                                <p style={{ fontSize: 16, fontWeight: 'bold', margin: '0px'}}>{estimatedTravelTime}</p>
                            </InfoRow>
                        </Frame32Style>
                        <Frame27Style>
                            <Rectangle18 style={{ background: isSelected ? '#ffcccc' : (isHovered ? '#ffcc99' : '#fff') }}></Rectangle18>
                            <Rectangle19 style={{ background: isSelected ? '#ffcccc' : (isHovered ? '#ffcc99' : '#fff') }}></Rectangle19>
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
            )}
        </button>
    );
};
TrainComponent.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.shape({
        startAt: PropTypes.string.isRequired,
        arrivalAt: PropTypes.string.isRequired,
        // departurePoint: PropTypes.string.isRequired,
        // arrivalPoint: PropTypes.string.isRequired,
        estimatedTravelTime: PropTypes.number.isRequired,
        // trainId: PropTypes.string.isRequired,
        train: PropTypes.string.isRequired,
        // tripCode: PropTypes.string.isRequired,
    }).isRequired,
    totalItems: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
};
export default TrainComponent;











// import React, { useState } from "react";
// import { AutoLayoutContainer, AutoLayoutContainer2, AutoLayoutContainerStyle, AutoLayoutRowStyle, Frame27Style, Frame32Style, Frame33Style, HomeOut, InnerDiv, InsideAutoLayoutContainer, InsideAutoLayoutContainer2, Rectangle18, Rectangle19, Rectangle20Container, Rectangle21} from "./style";

// const TrainComponent = ({ id, totalItems, onSelect }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [isClicked, setIsClicked] = useState(false);

//     const handleHover = () => {
//         setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };

//     const handleClick = () => {
//         onSelect(id, totalItems);
//         setIsClicked(!isClicked); // Toggle the clicked state
//     };

//     return (
//         <button 
//             className="buttonStyle hoverEffect"
//             onMouseEnter={handleHover}
//             onMouseLeave={handleMouseLeave}
//             onClick={handleClick}
//             style={{
//                 border: 'none',
//                 background: 'none',
//                 padding: 0,
//                 cursor: 'pointer'
//             }}>
//             <AutoLayoutContainerStyle>
//                 <AutoLayoutRowStyle>
//                     <Frame33Style>
//                         <InnerDiv style={{ background: isClicked ? '#ffcccc' : (isHovered ? '#ffcc99' : '#fff') }}></InnerDiv>
//                         <Frame32Style></Frame32Style>
//                         <Frame27Style>
//                             <Rectangle18 style={{ background: isClicked ? '#ffcccc' : (isHovered ? '#ffcc99' : '#fff') }}></Rectangle18>
//                             <Rectangle19 style={{ background: isClicked ? '#ffcccc' : (isHovered ? '#ffcc99' : '#fff') }}></Rectangle19>
//                         </Frame27Style>
//                     </Frame33Style>
//                 </AutoLayoutRowStyle>
//                 <AutoLayoutContainer>
//                     <Rectangle21>
//                     </Rectangle21>
//                     <AutoLayoutContainer2>
//                             <InsideAutoLayoutContainer></InsideAutoLayoutContainer>
//                             <InsideAutoLayoutContainer2></InsideAutoLayoutContainer2>
//                         </AutoLayoutContainer2>
//                     <Rectangle20Container></Rectangle20Container>
//                 </AutoLayoutContainer>
//             </AutoLayoutContainerStyle>
//         </button>
//     );
// };

// export default TrainComponent;

