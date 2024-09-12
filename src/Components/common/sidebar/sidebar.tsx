import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "@/Components/Common/ChatSideBar/index.style";
import SearchIcon from "@/assets/image/chat-components/Search.svg";
import AvatarProfile from "@/assets/image/chat-components/Avatar.svg";
import Navbar from "@/Components/Common/Navbar/Navbar";
import TitleText from "@/Components/Common/TitleText/index";
import CreateRoomBtn from "@/assets/image/sidebar/add_fill.svg";
import useChatSidebar from "@/Hooks/Sidebar/useChatSidebar";
import CreateRoomPlus from "@/Components/CreateRoomPlus/createRoomPlus";

interface SidebarProps {
  onSelectChatRoom: (room: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectChatRoom }) => {
  const location = useLocation();

  const { searchText, setSearchText, chatRooms, handleSearch, handleChatRoomClick } = useChatSidebar(onSelectChatRoom);
  // console.log(chatRooms);

  const [isCreateRoomVisible, setCreateRoomVisible] = useState(false);

  const handleCreateRoomClick = () => {
    setCreateRoomVisible(prevState => !prevState);
  };

  const handleCloseCreateRoom = () => {
    setCreateRoomVisible(false);
  };

  const handleCreateRoom = (roomName: string) => {
    console.log(`Creating room: ${roomName}`);
    handleCloseCreateRoom();
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
            <S.IconWrapper>
              <S.SearchIcon src={SearchIcon} onClick={handleSearch} />
              {location.pathname === '/groupchat' && (
                <S.PlusButtonImg
                  src={CreateRoomBtn}
                  alt="Create Room"
                  onClick={handleCreateRoomClick}
                />
              )}
            </S.IconWrapper>
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
          {isCreateRoomVisible && (
            <CreateRoomPlus
              onClose={handleCloseCreateRoom}
              onCreateRoom={handleCreateRoom}
            />
          )}
        </S.SideBarChat>
      </S.ChatingPage>
    </>
  );
};

export default Sidebar;