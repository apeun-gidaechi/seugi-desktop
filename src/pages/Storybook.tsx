import React from 'react'
import ChatForm from "@/components/ChatForm/chatForm"
import CreateRoomName from "@/components/CreateRoomName/createRoomName"
import CreateRoomPlus from "@/components/CreateRoomPlus/createRoomPlus"
import MainRoomMemberManger from "@/components/mainRoomMemberManger/mainRoomMemberManger"
import MainRoomSearch from "@/components/MainRoomSearch/mainRoomSearch"
// import MemberManagement from "@/components/MemberManagement/memberManagement"
import MainRoomInfo from "@/components/MainRoomInfo/MainRoomInfo";
import BadgeNormal from "@/components/BadgeNormal/badgenormal";
import BadgeNumber from "@/components/BadgeNumber/badgeNumber";

const Storybook = () => {
  return (
    <div style={{backgroundColor: '#ffCDCC'}}>
        <MainRoomInfo/>
        <BadgeNormal/>
        <BadgeNumber/>
        {/* <MemberManagement/> */}
        <MainRoomSearch/>
        <MainRoomMemberManger/>
        <CreateRoomPlus/>
        <CreateRoomName/>
        <ChatForm/>
    </div>
  )
}

export default Storybook
