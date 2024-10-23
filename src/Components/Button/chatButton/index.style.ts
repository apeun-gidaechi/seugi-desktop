import styled from "styled-components";

export const ButtonWrap = styled.div`
    display: flex;
    gap: 16px;
`

export const TopButton = styled.button`
    outline: none;
    border: none;
    background: none;
    
    &:hover {
        cursor: pointer;
    }
`;

export const TopButtonIconImg = styled.img`
    width: 32px;
    height: 32px;
`