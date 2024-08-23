import { SeugiColor } from "@/design/color/SeugiColor";
import { SeugiFont } from "@/design/text/SeugiFont";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const TxtField = styled.input`    
    &::placeholder{
        color:${SeugiColor.Gray500};

        ${SeugiFont.subtitle.subtitle2};
    }
    flex-grow: 1;
    padding: 17px 16px; 
    border: none;

    ${SeugiFont.subtitle.subtitle2};

    &:focus {
        outline: none;
    }

    box-sizing: border-box;

    width: 421px;
    height: 52px;

    background: ${SeugiColor.White};
    border-radius: 12px;

`;

