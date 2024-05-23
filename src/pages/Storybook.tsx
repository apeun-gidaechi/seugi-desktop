import React from 'react'
import ChatForm from "@/components/ChatForm/chatForm"
import CreateRoomName from "@/components/CreateRoomName/createRoomName"
import CreateRoomPlus from "@/components/CreateRoomPlus/createRoomPlus"
import MainRoomMemberManger from "@/components/mainRoomMemberManger/mainRoomMemberManger"
import MainRoomSearch from "@/components/MainRoomSearch/mainRoomSearch"
import MainRoomInfoManger from "@/components/MainRoomInfoManager/mainRoomInfomanager"
import BadgeNormal from "@/components/BadgeNormal/badgenormal";
import BadgeNumber from "@/components/BadgeNumber/badgeNumber";

const Storybook = () => {
  return (
    <div style={{backgroundColor: '#ffCDCC'}}>
        <BadgeNormal/>
        <BadgeNumber/>
        <MainRoomInfoManger/>
        <MainRoomSearch/>
        <MainRoomMemberManger/>
        <CreateRoomPlus/>
        <CreateRoomName/>
        <ChatForm/>
    </div>
  )
}

export default Storybook