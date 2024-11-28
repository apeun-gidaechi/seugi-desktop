import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const AdminGeneralMain = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

export const SettingMain = styled.div`
    display: flex;
    padding: 56px 16px 0px 416px;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;

    background: ${SeugiColor.White};
`

export const SettingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`

export const TitleDiv = styled.div`
    display: flex;
    padding: 8px 4px;
    align-items: flex-start;
    gap: 24px;
`

export const Title = styled.span`
    color: ${SeugiColor.Black};
    ${SeugiFont.subtitle.subtitle1};
`

export const Right = styled.div`
    width: 180px;
    flex-shrink: 0;
    align-self: stretch;
`

export const OutSchoolDiv = styled.div`
    width: 50vw;
    display: flex;
    padding: 16px 20px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    
    cursor: pointer;
`

export const OutSchool = styled.span`
    color: ${SeugiColor.Red500};

    ${SeugiFont.subtitle.subtitle2};
`

export const RightImg = styled.img`
`