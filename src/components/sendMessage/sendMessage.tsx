import React, { useState } from 'react';
import * as S from "../sendMessage/sendMessage.style"; 

import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/assets/image/chat-components/SendArrowBlue.svg";

const SendMessage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(prevState => !prevState);
  };

  return (
    <S.SendMessageWrap>
        <S.PlustFileButton>
            <S.PlusMessageFile src={PlusMessageFile}/>
        </S.PlustFileButton>
        <S.SendMessageInput type="text" placeholder="메세지 보내기"/>
        <S.SendArrowButton onClick={handleClick}>
          {isClicked ? (
            <img src={SendArrowBlue} alt="error" /> 
          ) : (
            <img src={SendArrow} alt="error" /> 
          )}
        </S.SendArrowButton>
    </S.SendMessageWrap>
  );
}
export default SendMessage 
//