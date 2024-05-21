import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const SelectMain = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const SelectFirstWrap = styled.div`
    z-index:5;
    /* width: 443px; */
    text-align: center;
    height: 447px;
    display: flex;
    flex-direction: column;
    padding: 36px 32px;
    gap: 30px;
    border-radius: 36px;
    background: #FFF;
`;

export const OutButton = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`

export const Selectjob = styled.p`
    color: var(--Black, #000);
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
`;

export const PickContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 5px;
`;

export const PickJob = styled.button`
    display: flex;
    width: 187px;
    height: 187px;
    padding: 16px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 20px;
    color: var(--Primary900, #020202);
    cursor: pointer;
    position: relative; 
`;

export const Stdimg = styled.img`
    width: 174;
    height: 120px;
`;

export const Txtstudent = styled.p`
    color: var(--Primary900, #020202);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
    position: relative; 
    z-index: 1; 
`;

export const Teacherimg = styled.img`
    width: 174px;
    height: 120px;
`;

export const TxtTeacher = styled.p`
    color: var(--Primary900, #020202);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
    position: relative; 
    z-index: 1; 
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 379px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;

export const Haveemail = styled.a`
    margin-left:4px;
    display: flex;
    padding-left: 4px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    color: var(--Primary-Primary500, #1D93F3);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; 

    text-decoration:none;
`;

export const Button = styled.button`
    display: flex;
    width: 100%;
    height: 54px;
    padding: 12px 125px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    border:none;
    border-radius: var(--Large, 12px);
    background: var(--Primary-Primary500, #1D93F3);

    color: var(--Sub-White, #FFF);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;

    cursor: pointer;
`

export const Cloud1 = styled.img`
    z-index:2;
    position:absolute;
    width: 100vw;
    height: 659px;
    flex-shrink: 0;
    fill: #F2F7FF;
    z-index:2;
    top:39vh;
`

export const Cloud2 = styled.img`
    z-index :3;
    position:absolute;
    z-index:1;
    width: 100vw;
    height: 633px;
    flex-shrink: 0;
    top:33vh;

    fill: linear-gradient( rgba(255, 255, 255, 0.20) 3.48%, rgba(0, 194, 255, 0.20) 101.42%), #DAE8FF;
`

export const Sun = styled.img`
    position: absolute;
    z-index:4;
    width: 342px;
    height: 342px;
    flex-shrink: 0;
    top: 2%;
    left: 58%;
    border-radius: 342px;
    background: linear-gradient( rgba(255, 255, 255, 0.50) 0%, rgba(255, 199, 0, 0.50) 100%), #FFC700;
`

export const StdCheckLine = styled.img`
    width: 24px;
    height: 24px;
    display:flex;
    position: absolute; 
    top: 45%; 
    right: -12px; 
    transform: translateY(-50%); 
    margin-left:4px;
`

export const TchCheckLine = styled.img`
    width: 24px;
    height: 24px;
    display:flex;
    position: absolute; 
    top: 45%; 
    right: -18px; 
    transform: translateY(-50%); 
    margin-left:4px;
`

export const SubtitleContainer = styled.div`
    width: 56px;
    height: 24px;
`