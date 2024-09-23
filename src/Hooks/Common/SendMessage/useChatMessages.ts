import { useEffect, useState } from "react";
import { socketService } from './socketService'; 

// 메시지 타입 정의
interface Message {
  message: string;
  time: string;
  sender: string;
  type: MessageType;
}

// ENUM을 사용하여 메시지 타입을 정의
enum MessageType {
  MESSAGE = "MESSAGE",
  IMG = "IMG",
  FILE = "FILE",
}

const useChatMessages = (chatRoom: string, currentUser: string) => {
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([]);

  useEffect(() => {
    socketService.subscribeToMessages(chatRoom, handleIncomingMessage);

    return () => {
      socketService.unsubscribeFromMessages(chatRoom);
    };
  }, [chatRoom]);

  const handleIncomingMessage = (message: string) => {
    try {
      const parsedMessage: Message = JSON.parse(message);
      setReceivedMessages((prevMessages) => [...prevMessages, parsedMessage]);
    } catch (error) {
      console.error("Failed to parse incoming message:", error);
    }
  };

  const sendMessage = (message: string, type: MessageType) => {
    const time = new Date().toISOString();
    const newMessage = {
      roomId: chatRoom,
      type: type,
      message: message,
      mention: [],
      mentionAll: false,
      emoticon: "",
      time: time,
      sender: currentUser,
    };
  
    try {
      socketService.sendMessage(JSON.stringify(newMessage), chatRoom, type);
      
      setReceivedMessages((prevMessages) => [
        ...prevMessages,
        { message: message, time: time, sender: currentUser, type: type },
      ]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return { receivedMessages, sendMessage };
};

export default useChatMessages;