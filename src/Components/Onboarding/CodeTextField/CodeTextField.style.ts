import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'; 

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