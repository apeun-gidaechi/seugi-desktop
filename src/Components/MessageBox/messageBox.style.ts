import styled from "styled-components";

export const messageContainer = styled.div`
    display: flex;
    clear: both;
    float: right;
    align-items: flex-end; 
    z-index: 100;
`;

export const messageBox = styled.div`
    border-radius: 5px;
    margin: 5px 0;
    width: fit-content;
    padding: 12px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px 0px 8px 8px;
    background: var(--Primary-Primary500, #1D93F3);
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
    color: var(--Sub-White, #FFF);

    /* Body1 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 18.2px */
`;

export const messageTime = styled.div`
    text-align: right;
    margin-top: auto;

    padding: 2px 8px;

    color: var(--Gray-Gray600, #787878);
    /* Caption2 */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 15.6px */
`;
