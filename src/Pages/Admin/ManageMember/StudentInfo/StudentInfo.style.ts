import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const StudentInfoMain = styled.div`
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

export const StudentInfoDiv = styled.div`
    display: flex;
    width: 439px;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    border-radius: 16px;
    background: ${SeugiColor.White};

    box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.04);
`

export const InfoHeader = styled.div`
    display: flex;
    padding: 0px 4px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const StudentInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const Title = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle1};
`

export const Button = styled.button`
    display: flex;
    height: 36px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    border-radius: 12px;
    background: ${SeugiColor.Primary500};
    cursor: pointer;

    color: ${SeugiColor.White};

    ${SeugiFont.body.body2};
`

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
`

export const SubtitleDiv = styled.div`
    display: flex;
    padding-left: 4px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`

export const Subtitle = styled.span`
    color: ${SeugiColor.Black};
    ${SeugiFont.body.body1};
`