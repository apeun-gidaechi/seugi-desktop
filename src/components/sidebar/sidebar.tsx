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

const Sidebar: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [chatRooms, setChatRooms] = useState<string[]>([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const navigate = useNavigate();

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
    setChatRooms((prevRooms) => {
      if (!prevRooms.includes(roomName)) {
        return [...prevRooms, roomName];
      }
      return prevRooms;
    });
  };

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      const isRoomFound = config.name.includes(searchText);
      if (isRoomFound) {
        addChatRoom(searchText);
        setSearchText(""); // Clear search text after adding room
      } else {
        alert(`Room '${searchText}' not found.`);
      }
    }
  };

  const handleCreatePersonalChat = async () => {
    try {
      const response = await axios.post(
        "/chat/personal/create",
        {
          workspaceId: "6623a537239b94389ef7b66e", // Replace with your actual workspaceId
          roomName: "", // Room name will be automatically set by the server
          chatRoomImg: "", // No need to specify chat room image
          joinUsers: [2], // Replace with the actual user ID you want to chat with
        },
        {
          headers: {
            Authorization: `Bearer YOUR_JWT_TOKEN_HERE`, // Replace with your JWT token
          },
        }
      );

      if (response.status === 200) {
        // Room created successfully, handle the response as needed
        const roomId = response.data.data; // Retrieve the chat room ID from response
        // Optionally, you can update the UI or navigate to the newly created room
      } else {
        // Handle other status codes (e.g., 400 for validation errors, 404 for user not found)
        console.error("Failed to create chat room:", response.data.message);
      }
    } catch (error) {
      console.error("Failed to create chat room:", error);
    }
  };
 
  return (
    <>
    <Navbar/>
      <S.ChatingPage>
        <S.SideBarMenu>
          <S.SideBarButton 
            onClick={() => handleButtonClick('home', '/home')} 
            isSelected={selected === 'home'}
          >
            <S.SideBarImage src={selected === 'home' ? SelectHome : Home} />
          </S.SideBarButton>
          <S.SideBarButton 
            onClick={() => handleButtonClick('chat', '/chat')} 
            isSelected={selected === 'chat'}
          >
            <S.SideBarImage src={selected === 'chat' ? SelectChat : Chat} />
          </S.SideBarButton>
          <S.SideBarButton 
            onClick={() => handleButtonClick('chats', '/groupchat')} 
            isSelected={selected === 'chats'}
          >
            <S.SideBarImage src={selected === 'chats' ? SelectChats : Chats} />
          </S.SideBarButton>
          <S.SideBarButton 
            onClick={() => handleButtonClick('bell', '/notification')} 
            isSelected={selected === 'bell'}
          >
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
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <S.SearchIcon src={SearchIcon} onClick={handleSearch} />
          </S.SideFinder>
          <S.PlusButton>
            <S.PlusButtonImg
              src={PlusButton}
              onClick={handleCreatePersonalChat}
            />
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
        {selectedChatRoom && (
          <SendMessage chatRoom={selectedChatRoom} currentUser="사용자 이름" />
        )}
      </S.ChatingPage>
    </>
  );
};

export default Sidebar;