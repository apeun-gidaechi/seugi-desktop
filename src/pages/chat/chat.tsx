import React, { useState } from "react";
import * as S from "@/pages/chat/chat.style";
import UnChatRoom from '@/components/common/chatRoom/unSelect/index';
import SelectedChatRoom from '@/components/common/chatRoom/Selecte/index';
import Sidebar from '@/components/common/sidebar/sidebar'; 
import TopButton from '@/components/button/chatButton/index';

const Chat = () => {
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const currentUser = "ㅠㅠ"; // 하드코딩 수정예정

  const handleSelectChatRoom = (room: string) => {
    setSelectedChatRoom(room);
  };

  return (
    <S.ChatWrapper>
      <Sidebar onSelectChatRoom={handleSelectChatRoom} />
      <S.ChatContent>
        <S.ButtonWrapper>
          <TopButton />
        </S.ButtonWrapper>
        {selectedChatRoom ? (
          <SelectedChatRoom room={selectedChatRoom} currentUser={currentUser} />
        ) : (
          <UnChatRoom />
        )}
      </S.ChatContent>
    </S.ChatWrapper>
  );
};

export default Chat;