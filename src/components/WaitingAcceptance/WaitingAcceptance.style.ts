import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'; 
// 'Pretendard-Regular', sans-serif

export const WaitingAcceptanceFrame = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`
export const WaitingAcceptanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 36px;
    background: #FFF;

`

export const SchoolInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 36px;
    width: 421px;
    height: 334.19px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const SchoolImg = styled.img`
    width: 145px;
    height: 145px;
    flex-shrink: 0;
`

export const SchoolName = styled.span`
    color: var(--white-black-black-000, #101112);
    text-align: center;

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
`

export const MentContainer = styled.div`
    display: inline-flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const MentImg = styled.img`
    margin-left: 7.5vw;
    margin-top:-50.19px;
    margin-bottom:36px;
`;

export const CheckButton = styled.button`
    display: flex;
    height: 54px;
    padding: 12px 125px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: var(--Large, 12px);
    background: var(--Gray-Gray100, #F4F5F9);
    border:none;

    color: var(--Gray-Gray600, #787878);
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */

    cursor: pointer;
`;



