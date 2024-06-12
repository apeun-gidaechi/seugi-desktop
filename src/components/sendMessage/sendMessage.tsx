import React, { useState, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import * as S from "../sendMessage/sendMessage.style";
import MessageBox from '@/components/MessageBox/messageBox'; 

import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/assets/image/chat-components/sendBlueArrow.svg";

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [hasText, setHasText] = useState(false);
  const [receivedMessages, setReceivedMessages] = useState<{message: string, time: string}[]>([]);
  const [stompClient, setStompClient] = useState<Client | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setMessage(text);
    setHasText(!!text);
  };

  const sendMessage = (message: string) => {
    if (stompClient && stompClient.connected) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMessage = { message, time };
      stompClient.publish({ destination: '/app/chat', body: JSON.stringify(newMessage) });
      setReceivedMessages(prevMessages => [...prevMessages, newMessage]);
      setMessage('');
      setHasText(false);
    }
  };

  const handleClick = () => {
    if (message.trim() !== '') {
      sendMessage(message);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && message.trim() !== '') {
      sendMessage(message);
    }
  };

  useEffect(() => {
    const client = new Client({
      brokerURL: 'wss://hoolc.me/stomp/chat',
      connectHeaders: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZW1haWwiOiJ0ZXN0QHRlc3QiLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzE4MTYyMzE4LCJleHAiOjE3MTkwMjYzMTh9.FEbPDhGTCpVmiZTVfkkzG93PcYscXfDJ57Kx9lFSAHw`
      },
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        console.log('Connected');
        client.subscribe('/topic/messages', (message) => {
          const newMessage = JSON.parse(message.body);
          setReceivedMessages(prevMessages => [...prevMessages, newMessage]);
        });
      },
      onDisconnect: () => {
        console.log('Disconnected');
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      }
    });

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <div>
      <div>
        {receivedMessages.map((msg, index) => (
          <MessageBox key={index} message={msg.message} time={msg.time} />
        ))}
      </div>
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
    </div>
  );
};

export default SendMessage;
