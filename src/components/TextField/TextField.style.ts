import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const TxtField = styled.input`    
    &::placeholder{
        color: var(--Gray-Gray500, #AAA);

        font-family: 'Pretendard-Regular', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%;
    }
    flex-grow: 1;
    padding: 17px 16px; 
    border: none;

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /*  20.8px */

    &:focus {
        outline: none;
    }

    box-sizing: border-box;

    width: 421px;
    height: 52px;

    background: #FFFFFF;
    border-radius: 12px;

`;

