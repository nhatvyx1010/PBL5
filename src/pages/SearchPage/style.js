import { DatePicker } from 'antd';
import styled from 'styled-components';
import { SwapOutlined } from '@ant-design/icons';

export const itemStyle = {
    flex: 'none',
    order: '0',
    flexGrow: '0',
    width: '250px',
    height: '40px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '16px 50px 16px 30px',
    gap: '10px',
    borderRadius: '50px',
    background: '#FFFFFF',
    border: '1px solid rgba(217, 217, 217, 0.5)',
    backdropFilter: 'blur(2px)'
};

export const boxStyle = {
    boxSizing: 'border-box',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    width: '100%',
    height: '100%',
    marginBottom: '-5px' 
};

export const labelStyle = {
    display: 'block',
    fontSize: '15px',
    marginBottom: '-5px' 
};

export const HomeOut = styled.div`
    display: flex;
    align-items: center;
`;

export const Arrow = styled.p`
    font-size: 25px;
    color: #888888;
    margin-left: 1%;
    margin-top: 2%;
`;

export const SearchText = styled.span`
    font-size: 20px;
    margin-right: 10px;
    margin-left: 1%;
    margin-top: 5px;
`;

export const Destination = styled.span`
    font-size: 18px;
    margin-right: 10px;
    margin-left: 1%;
    margin-top: 5px;
`;

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 50px;
    gap: 13px;
    border-radius: 50px;
    position: absolute;
    width: 1204px;
    height: 160px;
    left: 160px;
    top: 160px;
    background: #FFFFFF;
    border: 5px solid #CAF8F8;
    backdrop-filter: blur(2px);
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const Box = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px 50px 16px 30px;
    gap: 10px;
    border-radius: 50px;
    flex: none;
    order: 0;
    flex-grow: 0;
    width: 250px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(2px);
`;

export const Label = styled.label`
    display: block;
    font-size: 15px;
`;

export const DatePickerContainer = styled.div`
    position: relative;
`;

export const DatePickerStyled = styled(DatePicker)`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px 50px 16px 30px;
    gap: 10px;
    border-radius: 50px;
    flex: none;
    order: 0;
    flex-grow: 0;
    width: 250px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid rgba(217, 217, 217, 0.5);
    backdrop-filter: blur(2px);
`;

export const BoxWithPosition = styled(Box)`
    position: relative;
`;

export const StyledDatePicker = styled(DatePicker)`
    ${boxStyle}
    width: 250px;
`;

export const ArrowContainer = styled.p`
    font-size: 15px;
`;

export const SwapIcon = styled(SwapOutlined)`
    font-size: 15px;
`;

export const DestinationText = styled.p`
    font-size: 20px;
`;

// -------------------------------------------------------------------------
export const MainContainerStyle = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 833px;
    height: 523px;
    left: 62px;
    top: 330px;
    background: #FFFFFF;
    border: 7px solid #CAF8F8;
    backdrop-filter: blur(2px);
    border-radius: 50px;
`;

export const InnerDivStyle = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 767px;
    height: 187px;
    left: 27px;
    top: 20px;
    background: #FFFFFF;
    border-radius: 10px;
`;

export const AutoLayoutContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    width: 139px;
    height: 174px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const AutoLayoutRowStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px 5px;
    gap: 10px;
    width: 100%;
    height: 139px;
    background: #DEE6F8;
    border-radius: 30px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Frame33Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 6px;
    width: 100%;
    height: 131px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const InnerDiv = styled.div`
    width: 60px;
    height: 18px;
    background: #FFFFFF;
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Frame32Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 0px;
    margin-left: 0px;
    gap: 10px;
    width: 129px;
    height: 85px;
    background: #FFFFFF;
    border-radius: 10px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const Frame27Style = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 25px;
    width: 65px;
    height: 16px;
    flex: none;
    order: 2;
    flex-grow: 0;
`;

export const Rectangle18 = styled.div`
    width: 20px;
    height: 16px;
    background: #FFFFFF;
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Rectangle19 = styled.div`
    width: 20px;
    height: 16px;
    background: #FFFFFF;
    border-radius: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const AutoLayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 98.24px;
    height: 35px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const Rectangle21 = styled.div`
    width: 8px;
    height: 34px;
    background: #D9D9D9;
    border-radius: 5px;
    transform: rotate(25deg);
    flex: none;
    order: 0;
    flex-grow: 0;
`;
export const AutoLayoutContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 0px;
    gap: 5px;
    width: 80%;
    height: 35px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const InsideAutoLayoutContainer = styled.div`
    width: 40px;
    height: 10px;
    background: #D9D9D9;
    border-radius: 5px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const InsideAutoLayoutContainer2 = styled.div`
    width: 55px;
    height: 10px;
    background: #D9D9D9;
    border-radius: 5px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const Rectangle20Container = styled.div`
    width: 8px;
    height: 34px;
    background: #D9D9D9;
    border-radius: 5px;
    transform: rotate(-25deg);
    flex: none;
    order: 2;
    flex-grow: 0;
`;

export const AbsoluteBox = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 767px;
    height: 187px;
    left: 27px;
    top: 300px;
    background: #FFFFFF;
    border: 7px solid #CAF8F8;
    backdrop-filter: blur(2px);
    border-radius: 50px;
`;

export const StyledDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center; 
    padding: 12px 14px;
    gap: 10px;
    position: absolute;
    width: 448px;
    height: 48px;
    left: 922px;
    top: 330px;
    background: #F2F4F7;
    border: 3px solid #CAF8F8;
    backdrop-filter: blur(2px);
    border-radius: 15px;
`;

export const StyledDiv2 = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 448px;
    height: 473px;
    left: 922px;
    top: 380px;
    background: #FFFFFF;
    border: 3px solid #CAF8F8;
    backdrop-filter: blur(2px);
    border-radius: 15px;
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BuyTicket = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 50px;
    gap: 10px;
    width: 160px;
    height: 56px;
    background: #77DADA;
    border: 3px solid #CAF8F8;
    border-radius: 50px;
    flex: none;
    order: 3;
    flex-grow: 0;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 10px;
    font-size: 18px;

    &:hover {
        background-color: #3C7363;
        color: white;
    }
`