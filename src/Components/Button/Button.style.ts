import { SeugiFont } from "@/Design/text/SeugiFont";
import { SeugiColor } from "@/Design/color/SeugiColor";
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
    border-radius: 12px;
    background: ${SeugiColor.Primary500};

    color: ${SeugiColor.White};
    ${SeugiFont.subtitle.subtitle2};

    cursor: pointer;

`;