import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
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
    position:relative;
    z-index:5;
    text-align: center;
    height: 447px;
    display: flex;
    flex-direction: column;
    padding: 36px 32px;
    gap: 30px;
    border-radius: 36px;
    background: ${SeugiColor.White};
`;

export const OutButton = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`

export const Selectjob = styled.p`
    color: ${SeugiColor.Black};

    ${SeugiFont.title.title1};
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
    color: ${SeugiColor.Primary700};
    cursor: pointer;
    position: relative; 
    border-radius: 12px;
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.Primary050};
`;

export const Stdimg = styled.img`
    width: 174;
    height: 120px;
`;

export const Txtstudent = styled.p`
    color: ${SeugiColor.Primary700};

   ${SeugiFont.subtitle.subtitle2};
    position: relative; 
    z-index: 1; 
`;

export const Teacherimg = styled.img`
    width: 174px;
    height: 120px;
`;

export const TxtTeacher = styled.p`
    color: ${SeugiColor.Primary700};

    ${SeugiFont.subtitle.subtitle2};
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

    color: ${SeugiColor.Primary500};

   ${SeugiFont.body.body1};

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
    border-radius: 12px;
    background: ${SeugiColor.Primary500};

    color: ${SeugiColor.White};

   ${SeugiFont.subtitle.subtitle2};

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

export const BackButton = styled.button`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position:absolute;
    border:none;
    background:none;

    cursor: pointer;
    left:0;
`

export const BackImg = styled.img`
`