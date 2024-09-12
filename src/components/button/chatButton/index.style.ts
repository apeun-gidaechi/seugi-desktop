import styled from "styled-components";

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;

    padding: 64px 32px 0 0;
    z-index: 200;
`

export const TopButton = styled.button`
    outline: none;
    border: none;
    background: none;
    
    padding-left: 16px;

    &:hover{
        cursor: pointer;
    }
  
`

export const TopButtonIconImg = styled.img`
    width: 32px;
    height: 32px;
`