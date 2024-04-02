import React from 'react'
import * as S from "../chat/chat.style";
import SideBar from "../../components/sidebar/sidebar"
import ChatRoom from "../../components/chatRoom/chatRoom"
import SendMessage from "../../components/sendMessage/sendMessage"

const chat = () => {
  return (
    <>
        <SideBar/> 
        <SendMessage/>
        <ChatRoom/>
    </>
  )
}

export default chat