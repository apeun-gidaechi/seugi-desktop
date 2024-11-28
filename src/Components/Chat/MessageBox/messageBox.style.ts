import styled from "styled-components";
import {SeugiFont} from "@/Design/text/SeugiFont";
import { SeugiColor } from "@/Design/color/SeugiColor";

export const messageContainer = styled.div`
    display: flex;
    justify-self: stretch;
    justify-content: flex-end;
`;

export const messageBox = styled.div`
    display: flex;   
    padding: 12px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px 0 8px 8px;
    background: ${SeugiColor.Primary500};
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
    color: ${SeugiColor.White};
    ${SeugiFont.body.body1};
`;

export const messageTime = styled.div`
    text-align: right;
    margin-top: auto;

    padding: 2px 8px;

    color: ${SeugiColor.Gray600};
    ${SeugiFont.caption.caption2};
`;
