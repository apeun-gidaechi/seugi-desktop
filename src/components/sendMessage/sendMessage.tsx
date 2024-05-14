import React, { useState } from 'react';
import * as S from "../sendMessage/sendMessage.style";
import { socketService } from '../sendMessage/socketService'; 

import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/assets/image/chat-components/SendBlueArrow.svg";

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [hasText, setHasText] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setMessage(text);
    setHasText(!!text);
  };

  const handleClick = () => {
    if (message.trim() !== '') {
      socketService.sendMessage(message);
      setMessage('');
      setHasText(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      socketService.connect("eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZW1haWwiOiJ0ZXN0QHRlc3QiLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzE1Njg0OTI1LCJleHAiOjE3MTU2OTA5MjV9.N918hrR8Q9sc39QNVX2A-CfeIpG2GolpHQ32dASTpkA")
      // handleClick();
    }
  };

  return (
    <S.SendMessageWrap>
        <S.PlustFileButton>
            <S.PlusMessageFile src={PlusMessageFile}/>
        </S.PlustFileButton> 
        <S.SendMessageInput 
          type="text" 
          placeholder="메세지 보내기"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress} 
        />
        <S.SendArrowButton onClick={handleClick}>
          {hasText ? (
            <S.SendArrow src={SendArrowBlue} alt="Send Message"/> 
          ) : (
            <S.SendArrow src={SendArrow} alt="Send Message" />
          )}
        </S.SendArrowButton>
    </S.SendMessageWrap>
  );
}

export default SendMessage; 