import React, { useState, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import * as S from "./sendMessage.style";
import MessageBox from '@/components/MessageBox/messageBox'; 

import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/assets/image/chat-components/sendBlueArrow.svg";

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [hasText, setHasText] = useState(false);
  const [receivedMessages, setReceivedMessages] = useState<{ message: string, time: string, sender: string }[]>([]);
  const [stompClient, setStompClient] = useState<Client | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setMessage(text);
    setHasText(!!text);
  };

  const sendMessage = (message: string) => {
    if (stompClient && stompClient.connected) {
      const time = new Date().toISOString();
      const newMessage = { message, time, sender: '자신의 ID' };
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
        if (str.includes('<<< PONG')) {
          console.log('PONG received');
        } else if (str.includes('<<< CONNECTED')) {
          console.log('Connected to server');
        } else if (str.includes('<<< DISCONNECTED')) {
          console.log('Disconnected from server');
        }
      },
      onConnect: () => {
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

  const shouldShowTime = (index: number): boolean => {
    if (index === receivedMessages.length - 1) {
      return true;
    }

    const currentMessage = receivedMessages[index];
    const nextMessage = receivedMessages[index + 1];

    const currentTime = new Date(currentMessage.time);
    const nextTime = new Date(nextMessage.time);

    const timeDifference = (nextTime.getTime() - currentTime.getTime()) / (1000 * 60 * 60);

    return nextMessage.sender !== '자신의 ID' || timeDifference >= 24;
  };

  return (
    <div>
      <div>
        {receivedMessages.map((msg, index) => (
          <MessageBox 
            key={index} 
            message={msg.message} 
            time={shouldShowTime(index) ? msg.time : ''} 
          />
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
