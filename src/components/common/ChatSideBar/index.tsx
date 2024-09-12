import React from "react";
import * as S from "./index.style";

import PlusButton from "@/assets/image/sidebar/plusButton.svg";
import SearchIcon from "@/assets/image/chat-components/Search.svg";
import AvatarProfile from "@/assets/image/chat-components/Avatar.svg";

import Navbar from "@/components/common/Navbar/Navbar";
import CreateRoomPlus from "@/components/CreateRoomPlus/createRoomPlus";
import TitleText from "../TitleText/index";

import SendMessage from "@/components/common/sendMessage/sendMessage";
import useChatRooms from "@/hooks/Chat/useChatRooms";
import useCreateRoom from "@/hooks/Chat/useCreateRoom";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const {
    chatRooms,
    selectedChatRoom,
    searchText,
    setSearchText,
    handleSearch,
    handleChatRoomClick,
    addChatRoom,
  } = useChatRooms();

  const {
    showCreateRoom,
    handleCreateRoomClick,
    handleCloseCreateRoom,
    handleRoomCreation,
  } = useCreateRoom(addChatRoom);

  return (
    <>
      <S.ChatingPage>
        <Navbar />
        <S.SideBarChat>
          <div style={{ marginLeft: "1.5%" }}>
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
        {selectedChatRoom && (
          <SendMessage chatRoom={selectedChatRoom} currentUser="사용자 이름" />
        )}
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