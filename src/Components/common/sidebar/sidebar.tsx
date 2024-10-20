import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "@/Components/Chat/ChatSideBar/index.style";
import SearchIcon from "@/Assets/image/chat-components/Search.svg";
import AvatarProfile from "@/Assets/image/chat-components/Avatar.svg";
import TitleText from "@/Components/common/TitleText/index";
import CreateRoomBtn from "@/Assets/image/sidebar/add_fill.svg";
import useChatSidebar from "@/Hooks/Common/Sidebar/useChatSidebar";
import CreateRoomPlus from "@/Components/Chat/CreateRoomPlus/createRoomPlus";

interface SidebarProps {
  onSelectChatRoom: (room: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectChatRoom }) => {
  const location = useLocation();
  const [isCreateRoomVisible, setCreateRoomVisible] = useState(false);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);

  // 개인 채팅방과 그룹 채팅방을 각각 상태로 관리
  const [personalChatRooms, setPersonalChatRooms] = useState<string[]>([]);
  const [groupChatRooms, setGroupChatRooms] = useState<string[]>([]);

  const { searchText, setSearchText, handleSearch, handleChatRoomClick } = useChatSidebar(
    onSelectChatRoom,
    location.pathname,
    setPersonalChatRooms,
    setGroupChatRooms
  );

  const handleCreateRoomClick = () => {
    setCreateRoomVisible((prevState) => !prevState);
  };

  const handleCloseCreateRoom = () => {
    setCreateRoomVisible(false);
  };

  // 방이 생성되면 그룹 채팅방에 추가
  const handleCreateRoom = (roomInfo: { roomId: string; roomName: string }) => {
    if (roomInfo.roomName) {
      console.log(`Creating room: ${roomInfo.roomName}`);
      
      // 새로 생성된 그룹 채팅방을 groupChatRooms에 추가
      setGroupChatRooms((prevRooms) => [...prevRooms, roomInfo.roomName]);

      handleCloseCreateRoom();
    } else {
      console.log("Room name is empty");
    }
  };

  const handleChatRoomSelect = (room: string) => {
    setSelectedChatRoom(room);
    handleChatRoomClick(room);
  };

  // 개인 채팅방과 그룹 채팅방을 합쳐서 렌더링
  const combinedChatRooms = [...personalChatRooms, ...groupChatRooms];

  return (
    <>
      <S.ChatingPage>
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
            <S.IconWrapper>
              <S.SearchIcon src={SearchIcon} onClick={handleSearch} />
              {location.pathname === "/groupchat" && (
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
              {combinedChatRooms.map((room, index) => (
                <S.ChatRoom
                  key={index}
                  onClick={() => handleChatRoomSelect(room)}
                  style={{
                    backgroundColor:
                      selectedChatRoom === room ? "#F5FBFF" : "transparent",
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