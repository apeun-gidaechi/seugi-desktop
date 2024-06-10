import React from 'react';
import * as S from "@/components/MessageBox/messageBox.style"
interface MessageBoxProps {
    message: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
    return (
        <S.messageBox className="message-box">
            {message}
        </S.messageBox>
    );
};

export default MessageBox;
