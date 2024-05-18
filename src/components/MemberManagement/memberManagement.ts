import styled from "styled-components";

interface OutChatRoomProps {
    pressed: boolean;
}

interface NotificationSetProps {
    pressed: boolean;
}

export const MainRoomInfoBox = styled.div`
    width: 272px;
    height: 152px;
    display: flex;
    padding: 16px;
    flex-direction: column;
    gap: 3px;
    border-radius: 16px;
    background: #FFF;
`;

export const NotificationSet = styled.button<NotificationSetProps>`
    color: ${(props) =>
        props.pressed ? "var(--Gray-Gray600, #787878)" : "var(--Sub-Black, #000)"};
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
    padding: 8px 0px;
    text-align: left;
    background: none;
    border: none;
`;

export const OutChatRoom = styled.button<OutChatRoomProps>`
    color: ${(props) =>
        props.pressed ? "var(--Red-Red500, #C20000)" : "var(--Red-Red500, #F90707)"};
    
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;

    line-height: 130%; /* 20.8px */

    padding: 8px 0px;

    flex-direction: column;

    text-align: left;

    background: none;
    border: none;
`;
