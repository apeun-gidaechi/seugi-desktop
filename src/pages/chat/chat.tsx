import React from "react";
import * as S from "@/pages/chat/chat.style";
import SideBar from "@/components/sidebar/sidebar";
import SendMessage from "@/components/SendMessage/sendMessage";
// import SendMessage from "../../components/sendMessage/sendMessage"
// import ChatForm from "../../components/ChatForm/chatForm"

const chat = () => {
  return (
    <S.ChatingBackground>
      <SideBar />
    </S.ChatingBackground>
  );
};

export default chat;
