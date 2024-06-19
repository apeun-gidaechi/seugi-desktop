import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const SideBarMenu = styled.div`
    position: absolute;

    display: flex;
    width: 80px;
    height: 971px;
    padding: 8px 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background: #FFF;

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);

    z-index: 1;
`

export const SideBarChat = styled.div`
    display: flex;
    width: 320px;
    height: 971px;
    padding: 8px 0px;
    flex-direction: column;
    /* align-items: center;  */

    background: #FFF; 

    margin-left: 80px;

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const ChatingPage = styled.div`
    /* background: var(--Primary-Primary050, #F8FCFF);
    display:flex; */
`

export const SideBarButton = styled.button`
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    margin-bottom: 50px;

    &:focus {
        outline: none;
    }

    &:last-child {
        margin-bottom: 0;
    }
`

export const SideBarImage = styled.img`
    width: 36px;
    height: 36px;
`

export const SideAvatarImgWrap = styled.div`
    margin-top: auto;
`

export const SideAvatarImg = styled.img`
    position: relative; 
    margin-bottom: 50px;
`

export const SideFinder = styled.div`
    display: flex;
    height: 44px;
    width: 264px;

    margin-left: 12px;

    border-radius: 12px;
    border: 1px solid #E6E6E6;
    background: #FFF;
`

export const FindChatingRoom = styled.input`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 208px;
    margin-left: 16px;
    outline: none;
    color: var(--Gray-Gray500, #AAA);

    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;

    &:focus {
        color: black; 
    }
`

export const PlusButtonImg = styled.img`
    width: 26.667px;
    height: 26.667px;
`

export const SearchIcon = styled.img`

`

export const PlusButton = styled.button`
    background: none; 
    border: none; 

    display: inline; 

    position: absolute;
    margin-left: 282px;
    margin-top: 10px; 
`
