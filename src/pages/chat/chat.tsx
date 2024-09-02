import React, { useState } from "react";
import * as S from "@/pages/chat/chat.style";
import UnChatRoom from '@/components/common/chatRoom/unSelect/index';
import SelectedChatRoom from '@/components/common/chatRoom/Selecte/index';
import Layer from '@/components/layer/chat/index';
import Sidebar from '@/components/common/sidebar/sidebar'; 

const Chat = () => {
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);

  const handleSelectChatRoom = (room: string) => {
    setSelectedChatRoom(room);
  };

  return (
    <S.ChatContainer>
      <Layer />
      <Sidebar onSelectChatRoom={handleSelectChatRoom} /> 
      {selectedChatRoom ? (
        <SelectedChatRoom room={selectedChatRoom} />
      ) : (
        <UnChatRoom />
      )}
    </S.ChatContainer>
  );
};

export default Chat;