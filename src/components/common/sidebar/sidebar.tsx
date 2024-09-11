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
    console.log("Search triggered with:", searchText);
    if (searchText.trim() !== "") {
      const roomFound = chatRooms.includes(searchText) || config.name.includes(searchText);

      if (roomFound) {
        console.log("found room");
        
        handleChatRoomClick(searchText);
      } else {
        await createRoom(searchText);
      }

      setSearchText("");
    }
  };

  const createRoom = async (roomName: string) => {
    console.log("Creating room:", roomName);
    try {
      const requestData = {
        workspaceId: "669e339593e10f4f59f8c583",
        roomName: roomName, 
        joinUsers: [10], 
        chatRoomImg: "" 
      };
  
      const response = await fetch('https://api.seugi.com/chat/personal/create', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcyNjA2NDc0NywiZXhwIjoxNzI2MDcwNzQ3fQ.UHfrc2EM-3C5efG-aQy_ROE4KwpxflrqH2nIv7qr6i8"
        },
        body: JSON.stringify(requestData),
      });
  
      const result = await response.text(); 
  
      console.log("API response:", result);
  
      if (response.ok) {
        console.log("Room created successfully:", roomName);
        addChatRoom(roomName);
        handleChatRoomClick(roomName);
      } else {
        console.error(`Error creating room: ${result}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`An error occurred: ${error.message}`);
      } else {
        console.error('An unknown error occurred');
      }
    }
  };

  const addChatRoom = (roomName: string) => {
    console.log("Adding room to state:", roomName);
    setChatRooms((prevRooms) => {
      console.log("Previous rooms:", prevRooms); 
      if (!prevRooms.includes(roomName)) {
        const updatedRooms = [...prevRooms, roomName];
        console.log("Updated rooms:", updatedRooms); 
        return updatedRooms;
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