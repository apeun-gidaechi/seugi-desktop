import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const SuccessMain = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    flex: 1 0 0;
    align-self: stretch;
`;

export const SchoolImg = styled.img`
    width: 180px;
    height: 180px;

    fill: url(<path-to-image>) lightgray 50% / cover no-repeat;
    filter: drop-shadow(0px 3px 9px rgba(0, 0, 0, 0.04));
`;

export const SchoolInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`;

export const SchoolName = styled.span`
    color: var(--Black, #000);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 36.4px */
`;

export const SchoolInfo = styled.span`
    color: var(--Gray-Gray600, #787878);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
`