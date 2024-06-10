import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import * as S from "../sendMessage/sendMessage.style";
import MessageBox from '@/components/MessageBox/messageBox'; 

import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/assets/image/chat-components/sendBlueArrow.svg";

const socket = io('http://localhost:3000'); 

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [hasText, setHasText] = useState(false);
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]); 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setMessage(text);
    setHasText(!!text);
  };

  const handleClick = () => {
    if (message.trim() !== '') {
      socket.emit('message', message); 
      setReceivedMessages(prevMessages => [...prevMessages, message]); 
      setMessage('');
      setHasText(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (message.trim() !== '') {
        socket.emit('message', message); 
        sendToken();
        setReceivedMessages(prevMessages => [...prevMessages, message]); 
        setMessage('');
        setHasText(false);
      }
    }
  };

  const sendToken = () => {
    socket.emit('token', "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZW1haWwiOiJ0ZXN0QHRlc3QiLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzE1ODQ2NDU5LCJleHAiOjE3MTY0NTEyNTl9.MqmdEJT1cRwgMDduNZKiw52Y5USKETstEgYDL0_LxNg");
  };

  useEffect(() => {
    socket.on('message', (newMessage: string) => {
      setReceivedMessages(prevMessages => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('message'); 
    };
  }, []);

  return (
    <div>
      <S.SendMessageWrap>
        <S.PlustFileButton>
          <S.PlusMessageFile src={PlusMessageFile} />
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
      <div>
        {receivedMessages.map((msg, index) => (
          <MessageBox key={index} message={msg} />
        ))}
      </div>
    </div>
  );
};

export default SendMessage;
