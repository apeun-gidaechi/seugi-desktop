import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios'; // Axios 인스턴스 import
import * as S from './index.style'; // 스타일 컴포넌트 import

// UserInfo와 ChatRoom 타입 정의
interface UserInfo {
  id: number;
  email: string;
  name: string;
  picture: string;
}

interface ChatRoom {
  id: string;
  workspaceId: string;
  type: string;
  roomAdmin: number;
  chatName: string;
  chatRoomImg: string;
  createdAt: string;
  chatStatusEnum: string;
  joinUserInfo: Array<{ userInfo: UserInfo; timestamp: string }>;
  lastMessage: string;
  lastMessageTimestamp: string;
  notReadCnt: number;
}

// 컴포넌트 정의
const ChatRoomComponent: React.FC<{ workspaceId: string }> = ({ workspaceId }) => {
  const [personalChatRooms, setPersonalChatRooms] = useState<ChatRoom[]>([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);

  // 개인 채팅방 목록 가져오기 함수
  const fetchPersonalChatRooms = async () => {
    try {
      const accessToken = Cookies.get("accessToken");

      if (!accessToken) {
        console.error("Access token not found. Please log in again.");
        return;
      }

      const response = await SeugiCustomAxios.get(`/chat/personal/search?workspace=${workspaceId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // API 응답에서 rooms를 ChatRoom 타입으로 변환
      const rooms: ChatRoom[] = response.data.data.map((room: any) => ({
        id: room.id,
        workspaceId: room.workspaceId,
        type: room.type,
        roomAdmin: room.roomAdmin,
        chatName: room.chatName,
        chatRoomImg: room.chatRoomImg,
        createdAt: room.createdAt,
        chatStatusEnum: room.chatStatusEnum,
        joinUserInfo: room.joinUserInfo,
        lastMessage: room.lastMessage,
        lastMessageTimestamp: room.lastMessageTimestamp,
        notReadCnt: room.notReadCnt,
      }));

      setPersonalChatRooms(rooms); // 상태 업데이트
    } catch (error) {
      console.error("Error fetching personal chat rooms:", error);
    }
  };

  // 컴포넌트 마운트 시 데이터 가져오기
  useEffect(() => {
    fetchPersonalChatRooms();
  }, [workspaceId]);

  const handleChatRoomSelect = (chatName: string) => {
    setSelectedChatRoom(chatName);
    // 추가적인 작업 (예: 채팅방으로 이동 등) 수행
  };

  return (
    <S.ChatRoomContainer>
      <S.ChatRoomList>
        {personalChatRooms.map((room: ChatRoom, index: number) => (
          <S.ChatRoom
            key={index}
            onClick={() => handleChatRoomSelect(room.chatName)}
            style={{
              backgroundColor: selectedChatRoom === room.chatName ? "#F5FBFF" : "transparent",
            }}
          >
            <S.ChatRoomAvatarWrap>
              <S.ChatRoomAvatar src={room.chatRoomImg} />
            </S.ChatRoomAvatarWrap>
            {room.chatName}
          </S.ChatRoom>
        ))}
      </S.ChatRoomList>
    </S.ChatRoomContainer>
  );
};

export default ChatRoomComponent;