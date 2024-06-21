import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const CreateSchoolMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 193px;
    flex: 1 0 0;
    align-self: stretch;
    margin-top:20vh;
`;

export const CreateSchoolContainer = styled.div`
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

export const InputImg = styled.img`
    width: 128px;
    height: 128px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;


export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
`;

export const SubtitleContainer = styled.div`
    display: flex;
    padding-left: 4px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`;

export const Subtitle = styled.span`
    margin-left:4px;
    color: var(--Black, #000);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 18.2px */
`;

export const RedStar = styled.a`
    color: var(--Red-Red500, #F90707);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`;

export const Button = styled.input.attrs({ type: 'file' })`
    width: 180px;
    height: 180px;
    background-color: transparent;
    border: none;
    position: relative;
    display: inline-block;
    z-index: 5;

    &::file-selector-button {
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-color: transparent;
        border: none;
        /* display:none;  */
    }
`;

export const ButtonImg = styled.img`
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    position: absolute;
    display: inline-block;
    z-index:4;
`

export const PlusButton = styled.img`
    width: 60px;
    height: 60px;
    position: absolute;
    right: 43.5vw;
    top: auto;
    z-index:4;
    display: inline-block;
`;