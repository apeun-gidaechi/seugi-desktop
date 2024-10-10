import React, { useState } from "react";
import * as S from "./chat.style";
import UnChatRoom from '@/Components/Chat/chatRoom/unSelect/index';
import SelectedChatRoom from '@/Components/Chat/chatRoom/Select/index';
import Sidebar from '@/Components/common/sidebar/sidebar';
import TopButton from '@/Components/Button/chatButton/index';

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