import React from 'react';
import * as S from "@/components/MessageBox/messageBox.style";

interface MessageBoxProps {
    message: string;
    time: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, time }) => {
    return (
        <S.messageContainer>
            <S.messageTime>{time}</S.messageTime>
            <S.messageBox className="message-box">
                {message}
            </S.messageBox>
        </S.messageContainer>
    );
};

export default MessageBox;
