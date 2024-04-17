import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 0px 140px;
    background-color: #CAF8F8;
    height: 96px;
`

export const LogoImage = styled.img`
    width: 80px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    width: 72%;
    height: 100%;
    left: 0px;

    background: #CAF8F8;
    transform: rotate(0deg);
`

export const NavigationItem = styled.div`
    margin-right: 0px;
    marginTop: 25%;
    font-size: 18px;
    color: black;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 2px;
        background-color: #079DD9;
        transition: width 0.3s;
    }

    &::before {
        left: 50%;
        transform: translateX(-50%); 
    }

    &:hover::before,
    &:hover::after {
        width: 100%; 
        transition: width 0.3s, left 0.3s; 
    }

    &:hover {
        color: #079DD9;
    }
`


export const LogButton = styled.button`
    box-sizing: border-box;
    margin-top: 31px;
    margin-bottom: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 20px;
    gap: 15px;
    width: 60%;
    height: 40%;
    background: #77DADA;
    border: 2px solid #F9FAFB;
    border-radius: 30px;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: #000000;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #3C7363;
        color: white;
    }
`;