import { SeugiFont } from "@/design/text/SeugiFont";
import { SeugiColor } from "@/design/color/SeugiColor";
import styled from "styled-components";

export const Continuebtn = styled.button`
    display: flex;
    width: 100%;
    height: 54px;
    padding: 12px 180px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    border:none;
    border-radius: var(--Large, 12px);
    background: ${SeugiColor.Primary500};

    color: ${SeugiColor.White};
    ${SeugiFont.subtitle.subtitle1};

    cursor: pointer;

`;