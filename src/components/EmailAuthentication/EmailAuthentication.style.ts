import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const AuthenticationMain = styled.div`
    background: linear-gradient( #1C8DF4 0%, #21B6E5 58.35%);
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const AuthenticationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px 32px;
    gap: 32px;

    position: absolute;
    width: 485px;
    height: 378px;
    left: calc(50% - 485px/2 + 0.5px);
    top: calc(50% - 378px/2);

    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
    border-radius: 36px;
    z-index:10;
`
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 421px;
    height: 36px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const Title = styled.span`
    width: 128px;
    height: 36px;
    font-family: 'Pretendard-Regular', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 130%;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const CodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    gap: 16px;
    width: 421px;
    height: 126px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const CodeInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    width: 421px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* padding: 0px 0px 0px 4px; */
    gap: 10px;

    width: 80px;
    height: 18px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const Subtitle = styled.p`    
    color: var(--Black, #000);
    
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-left: 4px;
`

export const Redstar = styled.a`
    color: var(--Red-Red500, #F90707);
    
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
`;

export const InputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`

export const CodeTextInput = styled.input`
    display: flex;
    width: 52px;
    height: 52px;
    padding: 17px 0px 14px 0px;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;

    border-radius: var(--Large, 12px);
    border: 1px solid var(--Gray-Gray300, #E6E6E6);
    background: var(--Sub-White, #FFF);
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
    text-align:center;
`

export const CodeSpan = styled.button`
    display: flex;
    height: 36px;
    padding: var(--Large, 12px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: var(--Large, 12px);
    background: var(--Primary-Primary500, #1D93F3);
    border:none;

    color: var(--Sub-White, #FFF);
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */

    cursor: pointer;
`

export const ContinueContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const Sun = styled.img`
    position: absolute;
    width: 342px;
    height: 342px;
    top: 2%;
    left: 48%;
    flex-shrink: 0;
    border-radius: 342px;
    background: linear-gradient( rgba(255, 255, 255, 0.50) 0%, rgba(255, 199, 0, 0.50) 100%), #FFC700;
    z-index:4;
`

export const Cloud1 = styled.img`
    position: absolute;
    width: 100vw;
    height: 759px;
    flex-shrink: 0;
    top: 19vh;
    fill: linear-gradient(rgba(255, 251, 251, 0.20) 5.93%, rgba(29, 185, 255, 0.20) 100%), #CAE4FF;
    z-index:1;
`

export const Cloud2 = styled.img`
position: absolute;
   width: 100vw;
    height: 625px;
    flex-shrink: 0;
    top: 39vh;
    fill: linear-gradient(rgba(255, 255, 255, 0.20) -10.24%, rgba(0, 194, 255, 0.20) 88.96%, rgba(235, 248, 255, 0.20) 88.96%), #F3F8FF;
    z-index:2;
`

export const Cloud3 = styled.img`   
    position: absolute;
    width: 100vw;
    height: 687px;
    flex-shrink: 0;
    fill: #F2F7FF;
    top: 49vh;
    z-index:3;
`