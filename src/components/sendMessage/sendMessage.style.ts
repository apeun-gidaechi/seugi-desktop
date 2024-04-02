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
    height: 44px;
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

`

