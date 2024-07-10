// Sidebar.tsx

import React, { useState } from 'react';
import * as S from './sidebar.style';

import PlusButton from '@/assets/image/sidebar/plusButton.svg';
import SearchIcon from '@/assets/image/chat-components/Search.svg';
import AvatarProfile from '@/assets/image/chat-components/Avatar.svg';

import Navbar from '@/components/Navbar/Navbar';
import CreateRoomPlus from '@/components/CreateRoomPlus/createRoomPlus'; // Import the correct path

import config from '@/constants/ChatMember/config.json';
import SendMessage from '@/components/sendMessage/sendMessage';

interface SendMessageProps {
  chatRoom: string;
  currentUser: string;
}

const Sidebar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [chatRooms, setChatRooms] = useState<string[]>([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const [showCreateRoom, setShowCreateRoom] = useState(false);

  const handleCreatePersonalChat = () => {
    const newRoomId = `room-${Date.now()}`;
    addChatRoom(newRoomId);
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

  const handleCreateRoomClick = () => {
    setShowCreateRoom(true);
  };

  const handleCloseCreateRoom = () => {
    setShowCreateRoom(false);
  };

  const handleRoomCreation = (roomName: string) => {
    addChatRoom(roomName);
    setShowCreateRoom(false); // Close the create room modal after creating room
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
            <S.PlusButtonImg src={PlusButton} onClick={handleCreateRoomClick} />
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
        {showCreateRoom && (
          <CreateRoomPlus onClose={handleCloseCreateRoom} onCreateRoom={handleRoomCreation} />
        )}
      </S.ChatingPage>
    </>
  );
};

export default Sidebar;