import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const DialogMain = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;

    background: rgba(0, 0, 0, 0.30);
    
    z-index: 999;

    top: 0;
    left: 0;

    display: flex; 
    justify-content: center; 
    align-items: center;
`

export const Dialog = styled.div`
    display: flex;
    width: 271px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    border-radius: 16px;
    background: ${SeugiColor.White};

    position: absolute;

    z-index: 999;
`

export const FrameDialog = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`

export const ComponentsDiv = styled.div`
    display: flex;
    padding: 8px 0px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    cursor: pointer;
`

export const Span = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};
`

export const KickSpan = styled.span`
    color: ${SeugiColor.Red500};

    ${SeugiFont.subtitle.subtitle2};
`