import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components"; 
import { createGlobalStyle } from 'styled-components'; 

export const SchoolCodeMain = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const SchoolCode = styled.div`
    display: flex;
    padding: 24px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
`;

export const SchoolCodeContainer =styled.div`
    display: flex;
    width: 485px;
    padding: 36px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-radius: 12px;
`;

export const Header = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`;

export const Title = styled.div`
    color: ${SeugiColor.Black};

    ${SeugiFont.title.title1};
`;

export const InputCodeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`;

export const InputCode = styled.input`
    display: flex;
    width: 52px;
    height: 52px;
    padding: 17px 0px 14px 0px;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    text-align:center;

    border-radius: 12px;
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.White};

    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`;

export const BackButton = styled.button`
    left:0;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position:absolute;
    border:none;
    background:none;

    cursor: pointer;
`

export const BackImg = styled.img`
`