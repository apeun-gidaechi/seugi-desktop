import React, { useState } from "react";
import * as S from "@/pages/chat/chat.style";
import SideBar from "@/components/common/sidebar/sidebar";
import UnChatRoom from '@/components/common/chatRoom/unSelect/index';

import Layer from '@/components/layer/chat/index';

const Chat: React.FC = () => {
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);

  const handleSelectChatRoom = (room: string) => {
    console.log('1')
    setSelectedChatRoom(room);
    console.log("Selected chat room:", room)
  };

  return (
    <S.ChatContainer>
      <Layer />
      <SideBar onSelectChatRoom={handleSelectChatRoom} /> 

    </S.ChatContainer>
  );
};

export default Chat;