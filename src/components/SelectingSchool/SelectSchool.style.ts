import styled from "styled-components"; 
import { createGlobalStyle } from 'styled-components'; 

export const SelectschoolMain = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const SelectschoolFirstWrap = styled.div`
    display: flex;
    padding: 24px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
`;

export const ContainerBox = styled.div`
    display: flex;
    width: 485px;
    padding: 36px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`;

export const Title = styled.span`
    color: var(--Black, #000);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 36.4px */
`;

export const ButtonContainer1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export const Button = styled.button`
    width: 180px;
    height: 180px;

    cursor: pointer;
    background-color:transparent;
    border:none;
`;

export const ButtonImg = styled.img`
    width: 180px;
    height: 180px;
    flex-shrink: 0;

    /* box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04); */
`;

export const Subtitle = styled.span`
    color: var(--Gray-Gray700, #333);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */
`