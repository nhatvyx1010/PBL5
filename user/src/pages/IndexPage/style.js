import { Radio } from 'antd';
import styled from 'styled-components';

export const CustomRadioGroup = styled(Radio.Group)`
    .ant-radio-checked .ant-radio-inner {
        border-color: #CAF8F8;
        background-color: #CAF8F8;
    }

    .ant-radio-inner::after {
        background-color: #CAF8F8;
    }
`;

export const StyledVideo = styled.video`
    margin-top: 10px;
    width: 86%;
    height: 720px;
    border-radius: 50px;
    video::-webkit-media-controls;
`;

export const BackgroundFB = styled.img`
    margin-top: 100px;
    width: 1500px;
    height: 500px;
`;

export const CommentButton = styled.button`
    color: black;
    transition: color 0.3s;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
        color: #3C7363;
    }
    margin-right: 8px;
    box-sizing: border-box;
    width: 150px; 
    height: 45px;
    background: #FFFFFF;
    border: 3px solid #CAF8F8;
    flex: none;
    order: 0 ;
    flex-grow: 0;
`;

export const RectangleStyle = {
    boxSizing: 'border-box',
    margin: '-50px',
    width: '1100px',
    height: '420px',
    left: '213px',
    top: '600px',
    background: '#FFFFFF',
    border: '7px solid #CAF8F8',
    backdropFilter: 'blur(2px)',
    borderRadius: '50px',
    textAlign: 'center',
};

export const SearchButton = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 50px;
    gap: 10px;
    width: 250px;
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

    /* Màu nền và màu chữ khi hover */
    &:hover {
        background-color: #3C7363;
        color: white;
    }
`;

export const SelectStyle = {
    boxSizing: 'border-box', 
    width: '450px', 
    height: '45px', 
    background: '#FFFFFF', 
    border: '3px solid #CAF8F8', 
    borderRadius: '0px', 
    flex: 'none', 
    order: '0', 
    flexGrow: '0'
};

export const DatePickerStyle = {
    boxSizing: 'border-box', 
    width: '450px', 
    height: '45px', 
    background: '#FFFFFF', 
    border: '3px solid #CAF8F8'
};

export const InputMember ={
    boxSizing: 'border-box', 
    width: '300px', 
    height: '45px', 
    background: '#FFFFFF', 
    border: '3px solid #CAF8F8', 
    flex: 'none', 
    order: '0', 
    flexGrow: '0'
};

export const FeedBack = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    text-align: center;
    color: white;
    z-index: 1;
`

export const ContainerFeedBack = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`

