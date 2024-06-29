import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const LoginMain = styled.div`
    background: linear-gradient( #1C8DF4 0%, #21B6E5 58.35%);
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const LoginFirstWrap = styled.div`
    z-index:0;
    display: flex;
    width: 485px;
    height: 581px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 36px;
    background: #FFF;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.06);
`;

export const Fheader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`;

export const Header = styled.div`
    display: flex;
    padding: 25px;
    border-radius: 20px 20px 0px 0px;
    align-items: center;
    gap: 16px;
    flex: 1 0 0;
    /* justify-content: center; */

    align-self: stretch;
    background: var(--Primary-Primary300, #7EC4FC);
`;

export const SeugiImg = styled.object`

    width: 32px;
    min-width: 32px;
    height: 32px;
    flex-shrink: 0;

    fill: var(--Gradient-Primary, linear-gradient(180deg, #1C8DF4 0%, #21B6E5 100%));
`;

export const Title2 = styled.span`
    color: #FFF;
    
    display:flex;
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 31.2px */
`;


export const Inputarea = styled.div`
    display: flex;
    padding: 36px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    align-self: stretch;
`;

export const Inputpart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;

export const Enterinfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
`;

export const Subtitle2 = styled.div`
    color: var(--Black, #000);
    
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-left: 4px;
`;

export const Redstar = styled.a`
    color: var(--Red-Red500, #F90707);
    
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`;


export const Loginbtn = styled.button`
    display: flex;
    height: 54px;
    padding: 12px 125px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    border-radius: var(--Large, 12px);
    background: var(--Primary-Primary500, #1D93F3);
    border:none;
    color: var(--Sub-White, #FFF);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;

    cursor: pointer;
`;

export const Buttonpart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;

export const Body1 = styled.div`
    color: var(--Gray-Gray600, #787878);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`;

export const Gosignup = styled.a`
    color: var(--Primary-Primary500, #1D93F3);
    
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;

    text-decoration: none;
`;

export const Caption1 = styled.div`
    color: var(--Gray-Gray500, #AAA);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 15.6px */
`;

export const Orpart = styled.div`
    display: flex;
    padding: 0px 16px 0px 16px; 
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;


export const Oauthpart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const Authlogin = styled.button`
    display: flex;
    width: 56px;
    height: 56px;
    padding: 12px 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 99px;
    border: 1.5px solid var(--Gray-Gray300, #E6E6E6);
    background: var(--Sub-White, #FFF);
    cursor: pointer;
`;

export const Btnview = styled.button`
    margin-right: 16px;
    display: flex;
    background: transparent;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none; 
    }
`;

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    border-radius: var(--Large, 12px);
    border: 1px solid var(--Gray-Gray300, #E6E6E6);
    background: var(--Sub-White, #FFF);
`;

export const LogoImg = styled.img`
    width: 25px;
    height: 25px;
    flex-shrink: 0;
`

export const Cloud1 = styled.img`
    position:absolute;
    width: 100vw;
    height: 620px;
    flex-shrink: 0;
    top: 39vh;
    fill: linear-gradient( rgba(255, 255, 255, 0.20) 0%, rgba(0, 194, 255, 0.20) 100%), #DAE8FF;
`

export const Cloud2 = styled.img`
    position:absolute;
    width: 100vw;
    height: 713px;
    flex-shrink: 0;
    top: 45vh;
    fill: #F2F7FF;
`

export const Sun = styled.img`
    position: absolute;
    width: 342px;
    height: 342px;
    top: 10%;
    left: 18%;
    flex-shrink: 0;
    border-radius: 342px;
    background: linear-gradient( rgba(255, 255, 255, 0.50) 0%, rgba(255, 199, 0, 0.50) 100%), #FFC700;
`

export const Dividerimg = styled.img`
    flex-shrink: 0;
`