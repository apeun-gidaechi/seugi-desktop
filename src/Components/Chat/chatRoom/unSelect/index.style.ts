import styled from "styled-components";

export const AllWrapContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    background: var(--Sub-White, #FFF);
    width: 100%;
    height: 100%;
`;

export const SelectChatRoomImgWrap = styled.div`
    display: flex;
    height: 100%; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const SelectChatRoomImg = styled.img`
    width: 4rem;
    height: auto;
`;

export const SelectChatRoomMessage = styled.div`
    color: #000;

    /* Title1 */
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 36.4px */
    padding: 20px; 
`;