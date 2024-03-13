import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: white;
`

export const LogoImage = styled.img`
    width: 100px;
    height: 100px;
`

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavigationItem = styled.div`
    margin-right: 20px;
    margin-top: 45px;
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


export const LogButton = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-end;
    margin-top: 39px;
    
`
