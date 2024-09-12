import React, { useState } from "react";
import * as S from "@/pages/chat/chat.style";
import UnChatRoom from '@/components/Common/ChatRoom/UnSelect/index';
import SelectedChatRoom from '@/components/Common/ChatRoom/Select/index';
import Sidebar from '@/components/Common/Sidebar/sidebar'; 
import TopButton from '@/components/Button/chatButton/index';

const Chat = () => {
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const currentUser = "ㅠㅠ"; // 하드코딩 수정예정

  const handleSelectChatRoom = (room: string) => {
    console.log(room)
    setSelectedChatRoom(room);
  };

  return (
    <S.ChatWrapper>
      <Sidebar onSelectChatRoom={handleSelectChatRoom} />
      <S.ChatContent>
        <S.ButtonWrapper>
          <TopButton />
        </S.ButtonWrapper>
        <S.ChatRoomWrap>
          {selectedChatRoom ? (
            <SelectedChatRoom room={selectedChatRoom} currentUser={currentUser} />
          ) : (
            <UnChatRoom />
          )}
        </S.ChatRoomWrap>
      </S.ChatContent>
    </S.ChatWrapper>
  );
};

export default Chat;