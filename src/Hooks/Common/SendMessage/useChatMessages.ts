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

  // 구독을 통해 메시지 수신
  useEffect(() => {
    // 소켓 연결 및 메시지 수신
    socketService.subscribeToMessages(chatRoom, handleIncomingMessage);

    // 컴포넌트가 언마운트되거나 방이 바뀔 때 구독 해제
    return () => {
      socketService.unsubscribeFromMessages(chatRoom);
    };
  }, [chatRoom]);

  // 수신된 메시지를 처리하는 함수
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
  
    // 메시지 소켓을 통해 발송
    try {
      // 세 번째 인수로 type을 추가
      socketService.sendMessage(JSON.stringify(newMessage), chatRoom, type);
      
      // 성공적으로 전송된 메시지를 로컬 상태에 추가
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