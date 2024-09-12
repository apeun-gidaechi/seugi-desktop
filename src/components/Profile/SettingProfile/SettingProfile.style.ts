import { SeugiColor } from "@/design/color/SeugiColor";
import { SeugiFont } from '@/design/text/SeugiFont';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const SettingProfile = styled.div`
    position:absolute;

    bottom:19.05rem;
    left: 25.7rem;

    display: flex;
    width: 360px;
    padding: 16px 0px;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    border-radius: 16px;
    background:${SeugiColor.White};

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);

    z-index: 999;
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`

export const ProfileImgContainer = styled.div`
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const ProfileImg = styled.img`
    width: 64px;
    height: 64px;
`

export const NameBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
`

export const Name = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};
`

export const CorrectionButton = styled.button`
    cursor: pointer;

    border:none;
    background:none;
`

export const CorrectionButtonImg = styled.img`
`

export const ProfileNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`

export const ListItem = styled.div`
    display: flex;
    padding: 16px 20px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    cursor: pointer;
`

export const ComponentDiv = styled.div`
    display: flex;
    padding: 16px 20px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const Text = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2}  
`

export const ArrowButton = styled.button`
    width: 24px;
    height: 24px;

    cursor: pointer;

    background:none;
    border:none;
`

export const ArrowButtonImg = styled.img`
`

export const RText = styled.span`
    color: ${SeugiColor.Red500};

    ${SeugiFont.subtitle.subtitle2};
`

export const Divider = styled.img`
`

export const ProfileImgButton = styled.button`
    width:64px;
    height:64px;

    background:none;

    border:none;

    cursor: pointer;
`