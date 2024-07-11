import styled from "styled-components";
import SelectBar from "@/assets/image/sidebar/selectsidebar.svg";

export const SideBarMenu = styled.div`
    position: absolute;
    display: flex;
    width: 80px;
    height: 1020px;
    padding: 8px 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
    z-index: 1;
`

export const SideBarButton = styled.button<{ $isSelected: boolean }>`
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    position: relative;
    outline: none;
    &:focus {
        outline: none;
    }
    &:last-child {
        margin-bottom: 0;
    }
    &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 4px;
        height: 100%;
        background: ${props => props.$isSelected ? `url(${SelectBar}) no-repeat center` : 'none'};
    }
`


export const SideBarImage = styled.img`
    width: 36px;
    height: 36px;
`

export const SideAvatarImgWrap = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`


export const SideAvatarImg = styled.img`
    margin-bottom: 50px;
`
