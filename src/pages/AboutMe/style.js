import styled from 'styled-components';

export const Container = styled.div`
    /* Frame 52 */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 0px;

    position: absolute;
    width: 80%;
    height: 620.75px;
    left: 8%;
    right: 8%;
    top: 171px;
`

export const Wrapper = styled.div`
    /* Frame 10 */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    width: 100%;
    height: 110px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const WrapperTitle = styled.h1`

    width: 582px;
    height: 44px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;

    color: #000000;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px;
`

export const WrapperIcon = styled.h1`

    width: 159px;
    height: 46px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 58px;

    color: #77DADA;

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px;
`

export const Navigation = styled.div`
    /* Frame 51 */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex;
    padding: 0px;
    gap: 20px;

    width: 100%;
    height: 449.75px;
    ${'' /* margin: 0px; */}

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    marginBottom: '5px'
`

export const NavigateItem = styled.div`


    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 36px;
    gap: 13px;

    width: 100%;
    min-width: 400px;
    height: 140px;

    background: #FFFFFF;
    border: 5px solid #CAF8F8;
    backdrop-filter: blur(2px);
    border-radius: 50px;
    flex: none;
    order: 0;
    flex-grow: 0;

`
export const WrapperText = styled.p`

    width: 100%;
    height: 15.58px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 19px;

    color: #000000;
    margin-right: -36px;

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const WrapperContent = styled.p`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
    margin: 0px;

    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;

`

export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #31294C;
    color: white;
    padding: 20px;
    text-align: center;
`;
