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

export const ChatRoomForm = styled.div`
    width: 272px;
    height: 69px;

    border-radius: 16px;
    background: #FFF; 

    display: flex;
    width: 272px;
    padding: 16px;
    gap: 8px;
`

export const FileUpload = styled.div`
    color: var(--Sub-Black, #000);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */

    display: flex;
    justify-content: center;

    padding: 8px;
`