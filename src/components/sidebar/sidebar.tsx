import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "@/components/SideBar/sidebar.style";

import Home from "@/assets/image/sidebar/home.svg";
import Chat from "@/assets/image/sidebar/chat.svg";
import Chats from "@/assets/image/sidebar/chats.svg";
import Bell from "@/assets/image/sidebar/bell.svg";
import PlusButton from "@/assets/image/sidebar/plusButton.svg";
import SearchIcon from "@/assets/image/chat-components/Search.svg";
import AvatarImg from "@/assets/image/chat-components/Avatar.svg";
import AvatarProfile from "@/assets/image/chat-components/Avatar.svg"; 

import SelectHome from "@/assets/image/sidebar/slecthome.svg";
import SelectChat from "@/assets/image/sidebar/selectchat.svg";
import SelectChats from "@/assets/image/sidebar/selectgroup.svg";
import SelectBell from "@/assets/image/sidebar/selectbell.svg";

import config from "@/constants/ChatMember/config.json"; 
import SendMessage from "@/components/SendMessage/sendMessage"; 

type SelectedButton = 'home' | 'chat' | 'chats' | 'bell' | null;

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState<SelectedButton>(null);
  const [searchText, setSearchText] = useState('');
  const [chatRooms, setChatRooms] = useState<string[]>([]); 
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleButtonClick = (button: SelectedButton, path: string) => {
    setSelected(button);
    navigate(path);
    setSelectedChatRoom(null);  
  };

  useEffect(() => {
    if (searchText) {
      const isRoomFound = config.name.includes(searchText);
      if (isRoomFound) {
        alert(`name found: ${searchText}`);
        addChatRoom(searchText); 
      }
    }
  }, [searchText]);

  const addChatRoom = (roomName: string) => {
    setChatRooms((prevRooms) => {
      if (!prevRooms.includes(roomName)) {
        return [...prevRooms, roomName];
      }
      return prevRooms;
    });
  };

  const handleChatRoomClick = (room: string) => {
    setSelectedChatRoom(room);
  };

  return (
    <>
      <S.ChatingPage>
        <S.SideBarMenu>
          <S.SideBarButton onClick={() => handleButtonClick('home', '/home')} isSelected={selected === 'home'}>
            <S.SideBarImage src={selected === 'home' ? SelectHome : Home} />
          </S.SideBarButton>
          <S.SideBarButton onClick={() => handleButtonClick('chat', '/chat')} isSelected={selected === 'chat'}>
            <S.SideBarImage src={selected === 'chat' ? SelectChat : Chat} />
          </S.SideBarButton>
          <S.SideBarButton onClick={() => handleButtonClick('chats', '/groupchat')} isSelected={selected === 'chats'}>
            <S.SideBarImage src={selected === 'chats' ? SelectChats : Chats} />
          </S.SideBarButton>
          <S.SideBarButton onClick={() => handleButtonClick('bell', '/notification')} isSelected={selected === 'bell'}>
            <S.SideBarImage src={selected === 'bell' ? SelectBell : Bell} />
          </S.SideBarButton>
          <S.SideAvatarImgWrap>
            <S.SideAvatarImg src={AvatarImg} />
          </S.SideAvatarImgWrap>
        </S.SideBarMenu>
        <S.SideBarChat>
          <S.SideFinder>
            <S.FindChatingRoom 
              type="text" 
              placeholder="채팅방 검색" 
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <S.SearchIcon src={SearchIcon} />
          </S.SideFinder>
          <S.PlusButton>
            <S.PlusButtonImg src={PlusButton} />
          </S.PlusButton>
          <S.ChatRoomList>
            {chatRooms.map((room, index) => (
              <S.ChatRoom key={index} onClick={() => handleChatRoomClick(room)}>
                <S.ChatRoomAvatarWrap>
                  <S.ChatRoomAvatar src={AvatarProfile} />
                </S.ChatRoomAvatarWrap>
                {room}
              </S.ChatRoom>
            ))}
          </S.ChatRoomList>
        </S.SideBarChat>
        {selectedChatRoom && <SendMessage chatRoom={selectedChatRoom} />}
      </S.ChatingPage>
    </>
  );
}

export default Sidebar;
