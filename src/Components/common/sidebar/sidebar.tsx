import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "@/Components/Chat/ChatSideBar/index.style";
import SearchIcon from "@/Assets/image/chat-components/Search.svg";
import AvatarProfile from "@/Assets/image/chat-components/Avatar.svg";
import Navbar from "@/Components/common/Navbar/Navbar";
import TitleText from "@/Components/common/TitleText/index";
import CreateRoomBtn from "@/Assets/image/sidebar/add_fill.svg";
import useChatSidebar from "@/Hooks/Common/Sidebar/useChatSidebar";
import CreateRoomPlus from "@/Components/Chat/CreateRoomPlus/createRoomPlus";

interface SidebarProps {
  onSelectChatRoom: (room: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectChatRoom }) => {
  const location = useLocation();
  const { searchText, setSearchText, chatRooms, handleSearch, handleChatRoomClick } = useChatSidebar(onSelectChatRoom);
  const [isCreateRoomVisible, setCreateRoomVisible] = useState(false);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null); // 현재 선택된 방의 상태

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

  const handleChatRoomSelect = (room: string) => {
    setSelectedChatRoom(room); // 선택된 방 업데이트
    handleChatRoomClick(room); // 기존 클릭 핸들러 호출
  };

  return (
    <>
      <S.ChatingPage>
        {/* <Navbar /> */}
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
                <S.ChatRoom
                  key={index}
                  onClick={() => handleChatRoomSelect(room)} // 클릭 시 방 선택
                  style={{
                    backgroundColor: selectedChatRoom === room ? '#F5FBFF' : 'transparent', 
                  }}
                >
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