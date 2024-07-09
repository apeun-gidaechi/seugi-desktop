import React, { useState, useEffect } from 'react';
import * as S from './sidebar.style';

import PlusButton from '@/assets/image/sidebar/plusButton.svg';
import SearchIcon from '@/assets/image/chat-components/Search.svg';
import AvatarProfile from '@/assets/image/chat-components/Avatar.svg';

import Navbar from '@/components/Navbar/Navbar';

import config from '@/constants/ChatMember/config.json';
import SendMessage from '@/components/sendMessage/sendMessage';

interface SendMessageProps {
  chatRoom: string;
  currentUser: string;
}

type SelectedButton = 'home' | 'chat' | 'chats' | 'bell' | null;

const Sidebar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [chatRooms, setChatRooms] = useState<string[]>([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);

  const saveToLocalStorage = (key: string, value: any) => {
    console.log(`Saving to localStorage: ${key} = ${JSON.stringify(value)}`);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const loadFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    console.log(`Loading from localStorage: ${key} = ${value}`);
    return value ? JSON.parse(value) : null;
  };

  const saveToSessionStorage = (key: string, value: any) => {
    console.log(`Saving to sessionStorage: ${key} = ${JSON.stringify(value)}`);
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  const loadFromSessionStorage = (key: string) => {
    const value = sessionStorage.getItem(key);
    console.log(`Loading from sessionStorage: ${key} = ${value}`);
    return value ? JSON.parse(value) : null;
  };

  const saveToCookies = (key: string, value: any, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    console.log(`Saving to cookies: ${key} = ${JSON.stringify(value)}`);
    document.cookie = key + "=" + JSON.stringify(value) + ";" + expires + ";path=/";
  };

  const loadFromCookies = (key: string) => {
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        console.log(`Loading from cookies: ${key} = ${c.substring(name.length, c.length)}`);
        return JSON.parse(c.substring(name.length, c.length));
      }
    }
    return null;
  };

  const loadChatRooms = () => {
    return (
      loadFromLocalStorage('chatRooms') ||
      loadFromSessionStorage('chatRooms') ||
      loadFromCookies('chatRooms')
    );
  };

  useEffect(() => {
    const storedChatRooms = loadChatRooms();
    if (storedChatRooms) {
      console.log('Loaded chatRooms:', storedChatRooms);
      setChatRooms(storedChatRooms);
    }
  }, []);

  useEffect(() => {
    console.log('Saving chatRooms:', chatRooms);
    saveToLocalStorage('chatRooms', chatRooms);
    saveToSessionStorage('chatRooms', chatRooms);
    saveToCookies('chatRooms', chatRooms, 7);
  }, [chatRooms]);

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
        <Navbar />
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