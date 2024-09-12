import { useEffect, useState } from "react";
import { socketService } from './SocketService'; 

interface Message {
  message: string;
  time: string;
  sender: string;
  type: string;
}

const useChatMessages = (chatRoom: string, currentUser: string) => {
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([]);

  useEffect(() => {
    const topic = `/exchange/chat.exchange/room.${chatRoom}`;
    socketService.subscribeToMessages(topic, (message) => {
      const newMessage = JSON.parse(message);
      setReceivedMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socketService.unsubscribeFromMessages(topic); 
    };
  }, [chatRoom]);

  const sendMessage = (message: string, type: string) => {
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
    socketService.sendMessage(JSON.stringify(newMessage), chatRoom);
    setReceivedMessages((prevMessages) => [
      ...prevMessages,
      { message: message, time: time, sender: currentUser, type: type },
    ]);
  };

  return { receivedMessages, sendMessage };
};

export default useChatMessages;