import { SeugiColor } from "@/Design/color/SeugiColor"
import { SeugiFont } from "@/Design/text/SeugiFont"
import styled from "styled-components"

export const CreateDiv = styled.div`
    position:absolute;
    display: inline-flex;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    background: ${SeugiColor.White};

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
    right:0%;
    z-index:999;
`

export const TitleDiv = styled.div`
    display: flex;
    padding: 0px 4px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const TitleSpan = styled.span`
    color:${SeugiColor.Black};
    ${SeugiFont.subtitle.subtitle1};
`

export const CompleteButton = styled.span`
    display: flex;
    height: 36px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background:${SeugiColor.Primary500};

    color:${SeugiColor.White};
    ${SeugiFont.body.body2};
    cursor: pointer;
`

export const InputDiv = styled.div`
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    border-radius: 12px;
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.White};
`

export const InputTag = styled.input`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    outline:none;

    border:none;
    box-sizing: border-box;

    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};
    &::placeholder{
        color: ${SeugiColor.Gray500};

        ${SeugiFont.subtitle.subtitle2};
    }
`

export const CancleButton = styled.button`
    border: none;
    display: flex;
    width:28px;
    height:28px;
    background:none;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 12px;
    cursor: pointer;
`

export const ButtonImg = styled.img`
`

export const ButtonDiv = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
`

export const DropDown = styled.div`
    display: flex;
    width: 128px;
    padding: 12px;
    justify-content: space-between;
    align-items: center;

    border-radius: 12px;
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.White};
`

export const MinusButton = styled.button`
    background:none;
    border: none;
    cursor: pointer;
`

export const MinusImg = styled.img`
`

export const PlusButton = styled.button`
    background:none;
    border: none;
    cursor: pointer;
`

export const PlusButtonImg = styled.img`
`

export const TimeSpan = styled.span`
    color: ${SeugiColor.Black};
    ${SeugiFont.subtitle.subtitle2}
`

export const DateDiv = styled.div`
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.White};
`

export const DateInput = styled.input`
display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    outline:none;

    border:none;
    box-sizing: border-box;

    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};
    &::placeholder{
        color: ${SeugiColor.Gray500};

        ${SeugiFont.subtitle.subtitle2};
    }
`

export const CalendarButton = styled.button`
    border: none;
    display: flex;
    width:28px;
    height:28px;
    background:none;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 12px;
    cursor: pointer;
`

export const CalendarImg = styled.img`

`