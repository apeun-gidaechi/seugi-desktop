import React, { useState } from "react";
import * as S from "@/components/common/ChatSidebar/Chat/index.style";
import SearchIcon from "@/assets/image/chat-components/Search.svg";
import AvatarProfile from "@/assets/image/chat-components/Avatar.svg";
import Navbar from "@/components/common/Navbar/Navbar";
import TitleText from "@/components/common/TitleText/index";
import config from "@/constants/ChatMember/config.json";

interface SidebarProps {
  onSelectChatRoom: (room: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectChatRoom }) => {
  const [searchText, setSearchText] = useState("");
  const [chatRooms, setChatRooms] = useState<string[]>([]);

  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      const roomFound = chatRooms.includes(searchText) || config.name.includes(searchText);

      if (roomFound) {
        handleChatRoomClick(searchText);
      } else {
        // Create room if not found
        await createRoom(searchText);
      }

      setSearchText("");
    }
  };

  const createRoom = async (roomName: string) => {
    try {
      const joinUsers = new Set<number>(); // Replace with actual user IDs if needed
      const chatRoomImg = ""; // Set the chat room image if applicable

      const response = await fetch('/api/createChatRoom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomName,
          joinUsers: Array.from(joinUsers), // Convert Set to Array
          chatRoomImg,
        }),
      });

      const result = await response.text(); // Assuming the API returns a string

      if (response.ok) {
        addChatRoom(roomName);
        handleChatRoomClick(roomName);
      } else {
        alert(`Error creating room: ${result}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`An error occurred: ${error.message}`);
      } else {
        alert('An unknown error occurred');
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
    onSelectChatRoom(room);
  };

  return (
    <>
      <S.ChatingPage>
        <Navbar />
        <S.SideBarChat>
          <div style={{ marginLeft: '1.5%' }}>
            <TitleText />
          </div>
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
          <S.ChatRoomsWrap>
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
          </S.ChatRoomsWrap>
        </S.SideBarChat>
      </S.ChatingPage>
    </>
  );
};

export default Sidebar;