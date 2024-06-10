import React from 'react';
import * as S from "@/components/MessageBox/messageBox.style"
interface MessageBoxProps {
    message: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
    return (
        <S.messageContainer>
            <S.messageBox className="message-box">
                {message}
            </S.messageBox>
        </S.messageContainer>
    );
};

export default MessageBox;