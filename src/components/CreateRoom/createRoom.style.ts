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

export const chatFormWrap = styled.div`
    width: 443px;
    height: 148px;

    border-radius: 16px;
    background: #FFF; 

    display: flex;
    width: 443px;
    padding: 24px;
    /* gap: 12px;   */
    flex-direction: column;
`

export const ChatRoomName = styled.div`
    color: var(--Black, #000);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */

    /* margin-top: 20px;
    margin-left: 20px;  */
    flex: 1;
`

export const ChatRoomButton = styled.button`
    display: flex;
    height: 36px;
    padding: var(--Large, 12px);
    justify-content: center;
    align-items: center;
    gap: 10px;  

    border: none;
    color: #fff;

    border-radius: var(--Large, 12px);
    background: var(--Primary-Primary500, #1D93F3);
    /* margin-top: 20px;
    margin-right: 20px; */
`

export const InputRoomName = styled.div`
    width: 395px;
    height: 52px;
    
    border-radius: var(--Large, 12px);
    border: 1px solid var(--Gray-Gray300, #E6E6E6);
    background: var(--Sub-White, #FFF);
`