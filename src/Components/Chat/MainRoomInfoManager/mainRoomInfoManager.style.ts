import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
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
` 

export const NotificationSet = styled.button<NotificationSetProps>`
    color: ${(props) =>
        props.pressed ? `${SeugiColor.Gray600}` : `${SeugiColor.Black}`};

    ${SeugiFont.subtitle.subtitle2};

    padding: 8px 0px;
    text-align: left;
    background: none;
    border: none;
`;

export const OutChatRoom = styled.button<OutChatRoomProps>`
    color: ${SeugiColor.Red500};

    ${SeugiFont.subtitle.subtitle2};

    padding: 8px 0px;

    flex-direction: column;

    text-align: left;
    background: none;
    border: none;
`;