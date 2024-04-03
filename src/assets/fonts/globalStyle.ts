import { createGlobalStyle } from 'styled-components';
import Pretendard from '../fonts/Pretendard-Medium.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'Pretendard';
        src: local('Pretendard'), local('Pretendard');
        font-style: normal;
        src: url(${Pretendard}) format('truetype');
  }
`;