import {useEffect, useState} from "react";
import {socketService} from './socketService';
import {ChatRoom} from "@/Components/common/ChatRoom";
import {SeugiCustomAxios} from "@/axios/SeugiCutomAxios";

// TODO: Move to file

export type MessageType =
  'MESSAGE'
  | 'IMG'
  | 'FILE'
  | 'ENTER'
  | 'LEFT'
  | 'TRANFER_ADMIN'
  | 'SUB'
  | 'UNSUB'
  | 'DELETE_MESSAGE'
  | 'ADD_EMOJI'
  | 'REMOVE_EMOJI'
  | 'BOT'
export type MessageStatus = 'ALIVE' | 'DELETE';

export interface Message {
  id?: string;
  chatRoomId?: number;
  type?: MessageType;
  userId: number;
  message: string;
  uuid: string;
  emojiList?: any[];
  mention: number[];
  mentionAll: boolean
  timestamp?: string
  messageStatus?: MessageStatus
  eventList: number[];
  emoticon?: string;
}

const useChatMessages = (selectedRoom: ChatRoom, currentUser: string) => {
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([]);
  const [lastTimestamps, setLastTimestamps] = useState<{ [roomId: string]: number }>({});

  useEffect(() => {
    console.log('useChatMessages.useEffect called');

    setTimeout(() => {
      socketService.subscribeToMessages(selectedRoom.id, (message) => {
        console.log(`useChatMessages.subscribeToMessages: new message - ${message}`);
        const newMessage = JSON.parse(message);
        setReceivedMessages((prevMessages) => [...prevMessages, newMessage]);
      });
      
    }, 1500); // connection 지연 시간

    fetchNewMessages();

    // return () => {
    //   socketService.unsubscribeFromMessages(selectedRoom.id);
    // };
  }, [selectedRoom]);

  const sendMessage = (message: string, type: MessageType) => {
    const time = new Date().toISOString();
    const newMessage = {
      roomId: selectedRoom.id,
      type: type,
      message: message,
      mention: [],
      mentionAll: false,
      emoticon: "",
      time: time,
      sender: currentUser,
    };
    socketService.sendMessage(JSON.stringify(newMessage));
  };


  // timestamp를 기반으로 최신 메시지를 가져오는 함수
  // timestamp를 기반으로 최신 메시지를 가져오는 함수
  const fetchNewMessages = async () => {
    const roomId = selectedRoom?.id;
    if (!roomId) {
      return;
    }
    // 해당 roomId의 마지막 메시지 timestamp 가져오기
    const lastTimestamp = lastTimestamps[roomId];
    console.log("dd:", roomId);

    // 메시지 가져오기 API 호출
    const url = lastTimestamp
      ? `message/search/${roomId}?timestamp=${lastTimestamp}`
      : `message/search/${roomId}`;

    try {
      const response = await SeugiCustomAxios.get(url);
      const messages: Message[] = response.data.data.messages
      messages
        .sort((a, b) => new Date(a.timestamp ?? '').getTime() - new Date(b.timestamp ?? '').getTime())

      setReceivedMessages(messages);
      // setMessages(messages);

      // 마지막 메시지의 timestamp 저장
      // const lastMessageTimestamp = messages.messages[messages.messages.length - 1].timestamp;
      // setLastTimestamps((prev) => ({
      //   ...prev,
      //   [roomId]: lastMessageTimestamp,
      // }));
    } catch (error) {
      console.error("Error fetching new messages:", error);
    }
  };

  return {
    receivedMessages,
    sendMessage
  };
};

export default useChatMessages;