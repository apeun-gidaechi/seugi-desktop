import React from 'react'
import * as S from "@/pages/Chat/chat.style";
import SideBar from "@/components/SideBar/sidebar"
import SendMessage from "@/components/SendMessage/sendMessage"
// import SendMessage from "../../components/sendMessage/sendMessage"
// import ChatForm from "../../components/ChatForm/chatForm"

const chat = () => {
  return (
    <S.ChatingBackground>
        <SideBar/> 
    </S.ChatingBackground>
  )
}

export default chat