// Chat.tsx
import React, { useState } from "react";
import * as S from "@/pages/chat/chat.style";
import Sidebar from "@/components/common/sidebar/sidebar";
import UnChatRoom from '@/components/common/chatRoom/unSelect/index';
import Selected from '@/components/common/chatRoom/Selected/index';
import Layer from '@/components/layer/chat/index';

const Chat: React.FC = () => {
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);

  const handleSelectChatRoom = (room: string) => {
    setSelectedChatRoom(room);
    console.log("Selected chat room:", room);
  };

  return (
    <S.ChatContainer>
      <Layer />
      <Sidebar onSelectChatRoom={handleSelectChatRoom} />
      {selectedChatRoom ? (
        <Selected roomName={selectedChatRoom} />
      ) : (
        <UnChatRoom />
      )}
    </S.ChatContainer>
  );
};

export default Chat;