import React from 'react';
import * as S from "@/components/MessageBox/messageBox.style";

interface MessageBoxProps {
  message: string;
  time: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, time }) => {
  const date = new Date(time);
  
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <S.messageContainer>
      <S.messageTime>{formattedTime}</S.messageTime>
      <S.messageBox className="message-box">
        {message}
      </S.messageBox>
    </S.messageContainer>
  );
};

export default MessageBox;