import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './sidebar.style';

import Home from '@/assets/image/sidebar/home.svg';
import Chat from '@/assets/image/sidebar/chat.svg';
import Chats from '@/assets/image/sidebar/chats.svg';
import Bell from '@/assets/image/sidebar/bell.svg';
import PlusButton from '@/assets/image/sidebar/plusButton.svg';
import SearchIcon from '@/assets/image/chat-components/Search.svg';
import AvatarImg from '@/assets/image/chat-components/Avatar.svg';
import AvatarProfile from '@/assets/image/chat-components/Avatar.svg';

import SelectHome from '@/assets/image/sidebar/slecthome.svg';
import SelectChat from '@/assets/image/sidebar/selectchat.svg';
import SelectChats from '@/assets/image/sidebar/selectgroup.svg';
import SelectBell from '@/assets/image/sidebar/selectbell.svg';

import config from '@/constants/ChatMember/config.json';
import SendMessage from '@/components/sendMessage/sendMessage';

interface SendMessageProps {
  chatRoom: string;
  currentUser: string;
}

type SelectedButton = 'home' | 'chat' | 'chats' | 'bell' | null;

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState<SelectedButton>(null);
  const [searchText, setSearchText] = useState('');
  const [chatRooms, setChatRooms] = useState<string[]>([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const navigate = useNavigate();

  const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const loadFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const saveToSessionStorage = (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const loadFromSessionStorage = (key: string) => {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const saveToCookies = (key: string, value: any, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = key + "=" + JSON.stringify(value) + ";" + expires + ";path=/";
  };

  const loadFromCookies = (key: string) => {
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return JSON.parse(c.substring(name.length, c.length));
      }
    }
    return null;
  };

  useEffect(() => {
    const storedChatRooms = loadFromLocalStorage('chatRooms') || loadFromSessionStorage('chatRooms') || loadFromCookies('chatRooms');
    if (storedChatRooms) {
      setChatRooms(storedChatRooms);
    }
  }, []);

  useEffect(() => {
    saveToSessionStorage('chatRooms', chatRooms);
    saveToCookies('chatRooms', chatRooms, 7); 
  }, [chatRooms]);

  const handleButtonClick = (button: SelectedButton, path: string) => {
    setSelected(button);
    navigate(path);
    setSelectedChatRoom(null);
  };

  const handleChatRoomClick = (room: string) => {
    setSelectedChatRoom(room);
  };

  const addChatRoom = (roomName: string) => {
    setChatRooms(prevRooms => {
      if (!prevRooms.includes(roomName)) {
        return [...prevRooms, roomName];
      }
      return prevRooms;
    });
  };

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      const isRoomFound = config.name.includes(searchText);
      if (isRoomFound) {
        addChatRoom(searchText);
        setSearchText('');
      } else {
        alert(`Room '${searchText}' not found.`);
      }
    }
  };

  const handleCreatePersonalChat = () => {
    const newRoomId = `room-${Date.now()}`;
    addChatRoom(newRoomId);
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
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <S.SearchIcon src={SearchIcon} onClick={handleSearch} />
          </S.SideFinder>
          <S.PlusButton>
            <S.PlusButtonImg src={PlusButton} onClick={handleCreatePersonalChat} />
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
        {selectedChatRoom && <SendMessage chatRoom={selectedChatRoom} currentUser="사용자 이름" />}
      </S.ChatingPage>
    </>
  );
};

export default Sidebar;