import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'; 

export const EditProfile = styled.div`
    display: flex;
    width: 360px;
    padding: 20px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
`

export const CorrectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

export const CorrectionBox = styled.div`
    display: flex;
    width: 320px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
`

export const CorrectionTitleDiv = styled.div`
    display: flex;
    padding-left: 4px;
    justify-content: center;
    align-items: flex-start;
    gap: var(--Corner-Small, 10px);
`

export const CorrectionTitle = styled.span`
    color: var(--Sub-Black, #000);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    
    margin-left: 2px;
`

export const InputDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 

    border-radius: var(--Large, 12px);
    border: 1px solid var(--Gray-Gray300, #E6E6E6);
    background: var(--Sub-White, #FFF);
    box-sizing: border-box; 
    overflow: hidden;
`

export const CorrectionInputField = styled.input`
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    outline:none;

    border:none;
    box-sizing: border-box;

    color: var(--Black, #000);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; 
    &::placeholder{
        color: var(--Gray-Gray500, #AAA);

        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%;
    }
`

export const CancleImg = styled.img`
`

export const SaveButton = styled.button`
    display: flex;
    width: 320px;
    height: 54px;
    padding: 12px 125px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: var(--Large, 12px);
    background: var(--Primary-Primary500, #1D93F3);

    border:none;

    cursor: pointer;
`

export const ButtonText = styled.span`
    color: var(--Sub-White, #FFF);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`

export const CancleButton = styled.button`
    margin-right: 10px;
    background:none;
    border:none;

    cursor: pointer;
`