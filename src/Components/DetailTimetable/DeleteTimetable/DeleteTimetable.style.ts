import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const DeleteDiv = styled.div`
    display: flex;
    width: 360px;
    padding: 18px;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    border-radius: 16px;
    background: ${SeugiColor.White};

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const TitleDiv = styled.div`
    display: flex;
    padding: 4px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const Title = styled.span`
    color:${SeugiColor.Black};
    ${SeugiFont.subtitle.subtitle1};
`

export const ButtonDiv = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const CancleButton = styled.button`
    border:none;
    display: flex;
    height: 54px;
    padding: 12px 65px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 12px;
    background: ${SeugiColor.Gray100};
    cursor: pointer;
`

export const CancleButtonSpan = styled.span`
    color:${SeugiColor.Gray600};
    ${SeugiFont.subtitle.subtitle2};
    width:28px;
`

export const DeleteButton = styled.button`
    border:none;
    display: flex;
    height: 54px;
    padding: 12px 65px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 12px;
    background: ${SeugiColor.Primary500};
    cursor: pointer;
`

export const DeleteButtonSpan = styled.span`
    color:${SeugiColor.White};
    ${SeugiFont.subtitle.subtitle2};
    width:28px;
`