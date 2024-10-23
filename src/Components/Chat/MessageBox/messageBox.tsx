import React from 'react';
import * as S from "./messageBox.style";
import {Message} from "@/Hooks/Common/SendMessage/useChatMessages";

interface MessageBoxProps {
  message: Message;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
  const date = new Date(message.timestamp ?? "");

  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (  
    <S.messageContainer>
      <S.messageTime>{formattedTime}</S.messageTime>
      <S.messageBox className="message-box">
        {message.message}
      </S.messageBox>
    </S.messageContainer>
  );
};

export default MessageBox;