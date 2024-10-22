import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const ModifyDiv = styled.div`
    display: flex;
    width: 360px;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    border-radius: 16px;
    background: ${SeugiColor.White};

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const TitleDiv = styled.div`
    display: flex;
    padding: 0px 4px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const Title = styled.span`
    ${SeugiFont.subtitle.subtitle1};
    color:${SeugiColor.Black};
`

export const CompleteButton = styled.button`
    border:none;
    display: flex;
    height: 36px;
    padding: var(--Large, 12px);
    justify-content: center;
    align-items: center;
    gap: var(--Corner-Small, 10px);

    border-radius: var(--Large, 12px);
    background: ${SeugiColor.Primary500};

    cursor: pointer;
`

export const subtitle = styled.span`
    ${SeugiFont.body.body2};
    color:${SeugiColor.White};
`

export const InputDiv = styled.div`
    display: flex;
    padding: var(--Corner-Medium, 12px);
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    border-radius: var(--Large, 12px);
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.White};
`

export const InputTag = styled.input`
    outline:none;

    border:none;
    box-sizing: border-box;
    ${SeugiFont.subtitle.subtitle2};
    color:${SeugiColor.Black};
    
    &::placeholder{
        color: ${SeugiColor.Gray500};
        ${SeugiFont.subtitle.subtitle2};
    }
`

export const CancleButton = styled.button`
    cursor: pointer;
    border:none;
    background:none;
`

export const ButtonImg = styled.img`
`