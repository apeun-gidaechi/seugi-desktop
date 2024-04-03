import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
 

export const SendMessageWrap = styled.div`
    height: 64px;
    display: flex;
    padding: 10px 16px;
    gap: 10px;
    justify-content: space-between;
    align-items: center;

    

    border-radius: 12px;
    background: var(--Sub-White, #FFF);
    /* ev1 */
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);

    width: 70vw;
    max-width: 1016px;

    margin-left: 12px;
    margin-top: 871px;
`
export const PlustFileButton = styled.button`
    border: none;
    background: none;
`

export const PlusMessageFile = styled.img`
    width: 27px;
    height: 27px;
    padding: 0;
    display: block;
`

export const SendMessage = styled.input`
    flex: 1;

    font-family: 'Pretendard-Regular', sans-serif;
    color: var(--Gray-Gray500, #AAA);

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */

    border: none;
    background: none;
    outline: none;
    
    &:focus {
        color: black; 
    }
`

export const SendArrow = styled.img`
    width: 25.75px;
    height: 25.75px;
`

export const SendArrowWrap = styled.div`

`