import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const MyProfileDialog = styled.div`
    position:absolute;

    z-index: 990;

    bottom:3rem;
    left: 3rem;

    display: flex;
    width: 360px;
    padding: 16px 0px;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    border-radius: 16px;
    background: ${SeugiColor.White};

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const MyinfoDiv = styled.div`
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const MyProfileDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ProfileImg = styled.img`
    width: 32px;
    height: 32px;

    border-radius: 100000000px;
`

export const ProfileName = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};
`

export const SettingButton = styled.button`
    width: 32px;
    height: 32px;

    cursor: pointer;

    background:none;
    border:none;
`

export const SettingButtonImg = styled.img`
`

export const DividerImg = styled.img`
    display: flex;
    height: 8px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`

export const STitle = styled.span`
    color: ${SeugiColor.Gray500};

    ${SeugiFont.body.body1};
`

export const CorrectionButton = styled.button`
    width: 20px;
    height: 20px;
    
    cursor: pointer;

    background:none;
    border:none;
`

export const CorrectionButtonImg = styled.img`
`

export const ContentDiv = styled.div`
    display: flex;
    width: 360px;
    height: 56px;
    padding: 17px 20px;
    align-items: center;
    gap: 8px;
`

export const ScontentTextBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const SContent = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};
`

export const DividerDiv = styled.div`
    display: flex;
    padding: 0px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const ComponentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`


export const TitleDiv = styled.div`
    display: flex;
    padding: 0px 20px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const SettingWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`