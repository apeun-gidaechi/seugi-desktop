import styled from "styled-components";

interface OutChatRoomProps {
    hovered: boolean;
}

export const MainRoomInfoBox = styled.div`
    width: 272px;
    height: 112px;

    display: flex;
    padding: 16px;
    flex-direction: column;
    gap: 8px;

    border-radius: 16px;
    background: #FFF;
`;

export const NotificationSet = styled.div`
    color: var(--Sub-Black, #000);
    /* Subtitle2 */
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */

    padding: 8px 0px;
`;

export const OutChatRoom = styled.button<OutChatRoomProps>`
    color: ${(props) =>
        props.hovered ? "var(--Red-Red500, #C20000)" : "var(--Red-Red500, #F90707)"};
    /* Subtitle2 */
    font-family: "Pretendard-Regular", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */

    padding: 8px 0px;

    flex-direction: column;

    border: none;
    background: none;
`;