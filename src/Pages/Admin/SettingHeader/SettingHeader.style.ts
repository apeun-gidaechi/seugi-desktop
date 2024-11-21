import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const SettingHeader = styled.div`
    width: 1200px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`

export const OutFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`

export const OutImg = styled.img`
    width: 44px;
    height: 44px;
`

export const OutSpan = styled.span`
    color: ${SeugiColor.Gray400};

    ${SeugiFont.subtitle.subtitle2};
`

export const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`