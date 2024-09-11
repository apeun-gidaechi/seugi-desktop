import styled from "styled-components";

export const Container = styled.div`
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);
    display: inline-flex;
    min-width: 220px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 220px;
    height: 120px;
    gap: 8px;
`

export const ButtonText = styled.div`
    color: var(--Sub-Black, #000);
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    line-height: 130%;
    display: flex;
    padding: 8px 0px;
    align-items: flex-start;
    gap: var(--Corner-Small, 10px);
`

export const UploadButton = styled.button`
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
`

export const IconImg = styled.img`
    width: 24px;
    height: auto;
    margin-right: 8px;
`