import React from "react";
import * as S from "@/pages/chat/chat.style";
import SideBar from "@/components/common/ChatSidebar/Chat/index";
import TopButton from '@/components/button/chatButton/index';
import ChatRoom from "@/components/common/chatRoom/unSelect";
import SendMessage from "@/components/common/sendMessage/sendMessage";

import Layer from '@/components/layer/chat/index';

const Chat = () => {
  return (
    <S.ChatContainer>
      <Layer/>
    </S.ChatContainer>
  );
};

export default Chat;