import React from "react";
import * as S from "@/pages/chat/chat.style";
import SideBar from "@/components/common/ChatSidebar/Chat/index";
import TopButton from '@/components/button/chatButton/index';
import SendMessage from "@/components/common/sendMessage/sendMessage";
import ChatRoom from '@/components/common/chatRoom/unSelect/index';

import Layer from '@/components/layer/chat/index';

const Chat = () => {
  return (
    <S.ChatContainer>
      <Layer/>
      <ChatRoom/>
    </S.ChatContainer>
  );
};

export default Chat;