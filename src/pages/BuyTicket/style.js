import { Radio } from 'antd';
import styled from 'styled-components';

export const ButtonNext = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 50px;
    width: 100px;
    height: 40px;
    background: #77DADA;
    border: 3px solid #CAF8F8;
    border-radius: 50px;
    flex: none;
    order: 3;
    flex-grow: 0;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 0px;
    

    /* Màu nền và màu chữ khi hover */
    &:hover {
        background-color: #3C7363;
        color: white;
    }
`;

export const ButtonPrevious = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 50px;
    width: 100px;
    height: 40px;
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
        background-color: white;
    }
` 
export const ButtonDone = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 50px;
    width: 100px;
    height: 40px;
    background: #77DADA;
    border: 3px solid #CAF8F8;
    border-radius: 50px;
    flex: none;
    order: 3;
    flex-grow: 0;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 0px;

    /* Màu nền và màu chữ khi hover */
    &:hover {
        background-color: #3C7363;
        color: white;
    }
`

export const ButtonAdd = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 50px;
    width: 100px;
    height: 40px;
    background: #77DADA;
    border: 3px solid #CAF8F8;
    border-radius: 50px;
    flex: none;
    order: 3;
    flex-grow: 0;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 0px;
    

    /* Màu nền và màu chữ khi hover */
    &:hover {
        background-color: #3C7363;
        color: white;
    }
`

export const Container = styled.div`
    /* Frame 114 */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 47px;

    position: absolute;
    width: 1330px;
    height: 1008px;
    left: 57px;
    top: 158px;
`

export const InfoCart = styled.div`
    /* Frame 81 */

    box-sizing: border-box;
    display: flex;
    alignItems: center;
    margin-bottom: 10px;
    margin-top: 10px;

    width: 200px;
    height: 40px;

    background: rgba(202, 248, 248, 0.6);
    border: 3px solid rgba(202, 248, 248, 0.6);
    border-radius: 20px;
    cursor: pointer;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

`

export const NameUser = styled.div`
/* Frame 115 */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

width: 450px;
height: 40px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
`;

export const PNameUser = styled.p`
/* Họ và tên * */
width: 150px;
height: 19px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
position: none;
color: #000000; /* Màu chữ đen */

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

/* Dấu '*' đỏ */
&::before {
  content: '*';
  color: red; /* Màu đỏ */
  margin-right: 4px; /* Khoảng cách giữa dấu '*' và chữ */
}
`;



export const WrapperText = styled.div`
/* Rectangle 4 */

box-sizing: border-box;

width: 300px;
height: 40px;

background: #FFFFFF;
border: 3px solid #CAF8F8;
border-radius: 50px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

`

export const EmailUser = styled.div`
    /* Frame 100 */

    width: 450px;
    height: 40px;


    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;

`
export const CustomRadioGroup = styled(Radio.Group)`
    .ant-radio-checked .ant-radio-inner {
        border-color: #CAF8F8;
        background-color: #CAF8F8;
    }

    .ant-radio-inner::after {
        background-color: #CAF8F8;
    }
`;

export const EmailText = styled.p`
    /* Email * */

    width: 150px;
    height: 19px;
    left: 0px;
    top: 10.5px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;


`

export const WrapperEmail = styled.div`
/* Rectangle 4 */

box-sizing: border-box;

width: 300px;
height: 40px;
left: 150px;
top: 0px;

background: #FFFFFF;
border: 3px solid #CAF8F8;
border-radius: 50px;

`

export const User = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-start;
align-content: flex-start;
padding: 0px;
gap: 10px 100px;





`
 export const InfoUser = styled.div`
 /* Frame 103 */
left: 0px;
top: 293px;


 `
export const ContainerDetail = styled.div`
/* Frame 112 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 34px;

position: absolute;
width: 1240px;
height: 871px;
left: 43px;
top: 25px;


`

export const TotalUer = styled.div`
/* Frame 113 */

box-sizing: border-box;

width: 1326px;
height: 921px;

background: #FFFFFF;
border: 3px solid rgba(202, 248, 248, 0.6);
border-radius: 20px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

`

export const ViVu = styled.div`
/* Frame 112 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 34px;

position: absolute;


`

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