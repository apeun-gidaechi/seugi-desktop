import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const PopUpDiv = styled.div`
    display: inline-flex;
    min-width: 220px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    border-radius: 16px;
    background: ${SeugiColor.White};

    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);
`

export const Button = styled.button`
    display: flex;
    padding: 8px 0;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    border:none;
    background:none;

    cursor: pointer;
`

export const ModitySpan = styled.span`
    color:${SeugiColor.Black};
    ${SeugiFont.subtitle.subtitle2};
`

export const DeleteSpan = styled.span`
    ${SeugiFont.subtitle.subtitle2};
    color:${SeugiColor.Red500};
`