import * as S from "@/components/sidebar/sidebar.style"; 
import React from 'react' 

import Home from "@/assets/image/sidebar/home.svg"
import Chat from "@/assets/image/sidebar/chat.svg"
import Chats from "@/assets/image/sidebar/chats.svg"
import Bell from "@/assets/image/sidebar/bell.svg"
import PlusButton from "@/assets/image/sidebar/plusButton.svg"
import SearchIcon from "@/assets/image/chat-components/Search.svg" 
import AvatarImg from "@/assets/image/chat-components/Avatar.svg"
import SendMessage from "@/components/sendMessage/sendMessage";

import ChatForm from "@/components/ChatForm/chatForm"
import CreateRoomName from "@/components/CreateRoomName/createRoomName"
import CreateRoomPlus from "@/components/CreateRoomPlus/createRoomPlus"
import MainRoomMemberManger from "@/components/mainRoomMemberManger/mainRoomMemberManger"
import MainRoomSearch from "@/components/MainRoomSearch/mainRoomSearch"
import MainRoomInfo from "@/components/MainRoomInfo/MainRoomInfo";
import MainRoomInfoManger from "@/components/MainRoomInfoManager/mainRoomInfomanager"
import BadgeNormal from "@/components/BadgeNormal/badgenormal";
import BadgeNumber from "@/components/BadgeNumber/badgeNumber";

const sidebar = () => {
  return (
      <>
        <S.ChatingPage>
            <S.SideBarMenu>
                <S.SideBarImage1 src={Home}/>
                <S.SideBarImage2 src={Chat}/>
                <S.SideBarImage3 src={Chats}/>
                <S.SideBarImage4 src={Bell}/>
                <S.SideAvatarImgWrap>
                    <S.SideAvatarImg src={AvatarImg}/>
                </S.SideAvatarImgWrap>
            </S.SideBarMenu>
            <S.SideBarChat>
                <S.SideFinder>
                    <S.FindChatingRoom type="text" placeholder="채팅방 검색"/>
                    <S.SearchIcon src={SearchIcon}/>
                </S.SideFinder>
                <S.PlusButton>
                    <S.PlusButtonImg src={PlusButton}/>
                </S.PlusButton>
                <SendMessage/>
            </S.SideBarChat>
        <MainRoomInfo/>
        <BadgeNormal/>
        <BadgeNumber/>
        <MainRoomInfoManger/>
        {/* <MainRoomSearch/> */}
        <MainRoomMemberManger/>
        {/* <CreateRoomPlus/>
        <CreateRoomName/>
        <ChatForm/> */}
        </S.ChatingPage>
      </>
  )
}

export default sidebar 