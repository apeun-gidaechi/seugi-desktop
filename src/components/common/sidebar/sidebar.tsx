import React, { useState } from "react";
import * as S from "@/components/common/ChatSidebar/Chat/index.style";
import PlusButton from "@/assets/image/sidebar/plusButton.svg";
import SearchIcon from "@/assets/image/chat-components/Search.svg";
import AvatarProfile from "@/assets/image/chat-components/Avatar.svg";
import Navbar from "@/components/common/Navbar/Navbar";
import CreateRoomPlus from "@/components/CreateRoomPlus/createRoomPlus";
import TitleText from "@/components/common/TitleText/index";
import config from "@/constants/ChatMember/config.json";

interface SidebarProps {
  onSelectChatRoom: (room: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectChatRoom }) => {
  const [searchText, setSearchText] = useState("");
  const [chatRooms, setChatRooms] = useState<string[]>([]);
  const [showCreateRoom, setShowCreateRoom] = useState(false);

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      const isRoomFound = config.name.includes(searchText);
      if (isRoomFound) {
        addChatRoom(searchText);
        setSearchText("");
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
    onSelectChatRoom(room); // Notify parent about room selection
  };

  const handleCreateRoomClick = () => {
    setShowCreateRoom(true);
  };

  const handleCloseCreateRoom = () => {
    setShowCreateRoom(false);
  };

  const handleRoomCreation = (roomName: string) => {
    addChatRoom(roomName);
    setShowCreateRoom(false);
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
        {showCreateRoom && (
          <CreateRoomPlus
            onClose={handleCloseCreateRoom}
            onCreateRoom={handleRoomCreation}
          />
        )}
      </S.ChatingPage>
    </>
  );
};

export default Sidebar;