import React, { useState } from 'react';
import * as S from "../sendMessage/sendMessage.style"; 

import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/assets/image/chat-components/SendArrowBlue.svg";

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    console.log(message); 

    setIsClicked(prevState => !prevState);

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

        />
        <S.SendArrowButton onClick={handleClick}>
          {isClicked ? (
            <img src={SendArrowBlue} alt="Send Message" style={{width: '22.89px', height: "22.89px"}}/> 
          ) : (

            <S.SendArrow src={SendArrow} alt="Send Message" />

          )}
        </S.SendArrowButton>
    </S.SendMessageWrap>
  );
}
export default SendMessage;


