import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import axios from 'axios'; // Import Axios for making HTTP requests
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
import SendMessage from '@/components/SendMessage/sendMessage'; // SendMessage 컴포넌트 추가

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

  useEffect(() => {
    // Load chat rooms from localStorage on component mount
    const storedChatRooms = localStorage.getItem('chatRooms');
    if (storedChatRooms) {
      setChatRooms(JSON.parse(storedChatRooms));
    }
  }, []);

  useEffect(() => {
    // Save chat rooms to localStorage whenever chatRooms state changes
    localStorage.setItem('chatRooms', JSON.stringify(chatRooms));
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
        setSearchText(''); // Clear search text after adding room
      } else {
        alert(`Room '${searchText}' not found.`);
      }
    }
  };

  const handleCreatePersonalChat = async () => {
    try {
      const response = await axios.post(
        '/chat/personal/create',
        {
          workspaceId: '6623a537239b94389ef7b66e', // Replace with your actual workspaceId
          roomName: '', // Room name will be automatically set by the server
          chatRoomImg: '', // No need to specify chat room image
          joinUsers: [2] // Replace with the actual user ID you want to chat with
        },
        {
          headers: {
            Authorization: `Bearer YOUR_JWT_TOKEN_HERE` // Replace with your JWT token
          }
        }
      );

      if (response.status === 200) {
        // Room created successfully, handle the response as needed
        const roomId = response.data.data; // Retrieve the chat room ID from response
        // Optionally, you can update the UI or navigate to the newly created room
      } else {
        // Handle other status codes (e.g., 400 for validation errors, 404 for user not found)
        console.error('Failed to create chat room:', response.data.message);
      }
    } catch (error) {
      console.error('Failed to create chat room:', error);
    }
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
