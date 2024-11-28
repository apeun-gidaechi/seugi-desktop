import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const SettingMain = styled.div`
    position: absolute;
    width: 400px;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const LeftSetting = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 180px;
    flex-shrink: 0;
    align-self: stretch;
    background: ${SeugiColor.Primary050};
`

export const SettingContainer = styled.div`
    align-items: center;
    display: flex;
    padding: 128px 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
    background: ${SeugiColor.Primary050};
`

export const SettingBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ImgBox = styled.div`
    display: flex;
    width: 200px;
    height: 44px;
    padding: 8px 164px 8px 8px;
    align-items: center;
`

export const Box = styled.div<{ isclicked: boolean }>`
    display: flex;
    width: 200px;
    padding: 12px 124px 11px 16px;
    align-items: center;

    background-color: ${({ isclicked }) => isclicked ? `${SeugiColor.Primary100}` : "fff"};
    border-radius: ${({ isclicked }) => isclicked ? `4px` : "0"};

`

export const SettingImg = styled.img`
`

export const Font = styled.span`
    color: ${SeugiColor.Black};
    ${SeugiFont.subtitle.subtitle2};
`