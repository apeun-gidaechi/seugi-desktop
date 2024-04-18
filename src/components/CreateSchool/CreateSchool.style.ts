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

export const TextField = styled.input`
    &::placeholder{
        color: var(--Gray-Gray500, #AAA);

        font-family: 'Pretendard-Regular', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%; /* 20.8px */
    }
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
    display: flex;
    height: 52px;
    padding: 15px 245px 16px 16px;
    align-items: center;
    align-self: stretch;

    border-radius: var(--Large, 12px);
    border: 1px solid var(--Gray-Gray300, #E6E6E6);
    background: var(--Sub-White, #FFF);
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