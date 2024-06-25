import React, { useState, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import * as S from "./sendMessage.style";
import MessageBox from '@/components/MessageBox/messageBox'; 

import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg";
import SendArrow from "@/assets/image/chat-components/SendArrow.svg";
import SendArrowBlue from "@/assets/image/chat-components/sendBlueArrow.svg";

interface SendMessageProps {
  chatRoom: string;
}

const SendMessage: React.FC<SendMessageProps> = ({ chatRoom }) => {
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
      const newMessage = { message, time, sender: 'own ID' };
      stompClient.publish({ destination: `/app/chat/${chatRoom}`, body: JSON.stringify(newMessage) });
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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJyaGVlc2V1bGFAZ21haWwuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxNDA4NzQ0NCwiZXhwIjoxNzIxODYzNDQ0fQ.oqILzCb3asfWiF8SQKsUQzMS941Yo8gqOyclLe38ShY`
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
        client.subscribe(`/topic/messages/${chatRoom}`, (message) => {
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
  }, [chatRoom]);

  const shouldShowTime = (index: number): boolean => {
    if (index === receivedMessages.length - 1) {
      return true;
    }

    const currentMessage = receivedMessages[index];
    const nextMessage = receivedMessages[index + 1];

    const currentTime = new Date(currentMessage.time);
    const nextTime = new Date(nextMessage.time);

    const timeDifference = (nextTime.getTime() - currentTime.getTime()) / (1000 * 60 * 60);

    return nextMessage.sender !== 'own ID' || timeDifference >= 24;
  };

  const formatTime = (time: string) => {
    const date = new Date(time);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
    return `${period} ${hours}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>
        {receivedMessages.map((msg, index) => (
          <MessageBox 
            key={index} 
            message={msg.message} 
            time={shouldShowTime(index) ? formatTime(msg.time) : ''} 
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
          disabled={!chatRoom}  
        />
        
        <S.SendArrowButton onClick={handleClick} disabled={!chatRoom || !hasText}>
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