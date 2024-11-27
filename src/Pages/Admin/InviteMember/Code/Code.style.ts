import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const CodeMain = styled.div`
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

export const CodeDiv = styled.div`
    display: flex;
    width: 328px;
    padding: 18px;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;

    border-radius: 16px;
    background: ${SeugiColor.White};

    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.06);
`

export const titleDiv = styled.div`
    display: flex;
    padding: 4px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const title = styled.span`
    color: ${SeugiColor.Black};
    ${SeugiFont.subtitle.subtitle1};
`

export const ButtonDiv = styled.div`
    display: flex;
    width: 293px;
    align-items: flex-start;
    gap: 8px;
`

export const CancelButton = styled.button`
    display: flex;
    width: 125px;
    height: 54px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 12px;
    background: ${SeugiColor.Gray100};

    border: none;

    cursor: pointer;
`

export const CopyButton = styled.button`
    display: flex;
    width: 125px;
    height: 54px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
    border-radius: 12px;
    background: ${SeugiColor.Primary500};

    border: none;

    cursor: pointer;
`

export const Cancel = styled.span`
    color: ${SeugiColor.Gray600};
    ${SeugiFont.subtitle.subtitle2};
`

export const Copy = styled.span`
    color: ${SeugiColor.White};
    ${SeugiFont.subtitle.subtitle2};
`

export const CopyImg = styled.img`
    width: 24px;
    height: 24px;
`