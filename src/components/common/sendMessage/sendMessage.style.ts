import styled from "styled-components";


export const Allwrap = styled.div`
`

export const SendMessageWrap = styled.div`
    height: 64px;
    display: flex;
    padding: 10px 16px;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    background: var(--Sub-White, #FFF);
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
    width: 100%;
    /* max-width: 1016px; */
    /* margin-left: 12px; */
`

export const PlustFileButton = styled.button`
    border: none;
    background: none;
`

export const PlusMessageFile = styled.img`
    width: 27px;
    height: 27px;
    padding: 0;
    display: block;
` 

export const SendMessageInput = styled.input`
    flex: 1;
    font-family: 'Pretendard-Regular', sans-serif;
    color: var(--Gray-Gray500, #AAA);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */
    border: none;
    background: none;
    outline: none;
    
    &:focus {
        color: black; 
    }
`

export const SendArrowButton = styled.button`
    border: none;
    background: none;
    position: relative; 
`

export const SendArrow = styled.img`
    width: 32px;
    height: 32px;
` 

