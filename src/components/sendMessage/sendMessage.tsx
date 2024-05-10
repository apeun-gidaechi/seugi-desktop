import React, { useState } from 'react';
import * as S from "../sendMessage/sendMessage.style"; 

import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/assets/image/chat-components/SendBlueArrow.svg";

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [hasText, setHasText] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setMessage(text);
    setHasText(!!text);
  };

  const handleClick = () => {
    console.log(message);
  
    setIsClicked((prevState) => !prevState);
  
    setTimeout(() => {
      setIsClicked(false);
      setMessage("");
      setHasText(false);
    }, 1000);
  };
  

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick(); 
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