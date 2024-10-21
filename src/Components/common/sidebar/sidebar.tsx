import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SeugiCustomAxios } from "@/Api/SeugiCutomAxios";
import * as S from "@/Components/Chat/ChatSideBar/index.style";
import SearchIcon from "@/Assets/image/chat-components/Search.svg";
import AvatarProfile from "@/Assets/image/chat-components/Avatar.svg";
import TitleText from "@/Components/common/TitleText/index";
import CreateRoomBtn from "@/Assets/image/sidebar/add_fill.svg";
import useChatSidebar from "@/Hooks/Common/Sidebar/useChatSidebar";
import CreateRoomPlus from "@/Components/Chat/CreateRoomPlus/createRoomPlus";
import Cookies from "js-cookie"; // 쿠키에서 토큰 가져오기 위한 라이브러리

interface SidebarProps {
  onSelectChatRoom: (room: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectChatRoom }) => {
  const location = useLocation();
  const [isCreateRoomVisible, setCreateRoomVisible] = useState(false);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const [personalChatRooms, setPersonalChatRooms] = useState<string[]>([]);
  const [groupChatRooms, setGroupChatRooms] = useState<string[]>([]);
  const [workspaceId, setWorkspaceId] = useState<string | null>(null); // 워크스페이스 ID 관리

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

  const handleCreateRoom = (roomInfo: { roomId: string; roomName: string }) => {
    if (roomInfo.roomName) {
      setGroupChatRooms((prevRooms) => [...prevRooms, roomInfo.roomName]);
      handleCloseCreateRoom();
    }
  };

  const handleChatRoomSelect = (room: string) => {
    setSelectedChatRoom(room);
    handleChatRoomClick(room);
  };

  // 개인 채팅방 검색 API 호출 (토큰 포함)
  const fetchPersonalChatRooms = async (workspaceId: string) => {
    try {
      const accessToken = Cookies.get("accessToken"); // 쿠키에서 토큰 가져오기

      if (!accessToken) {
        console.error("Access token not found. Please log in again.");
        return;
      }

      const response = await SeugiCustomAxios.get(`/chat/personal/search?workspace=${workspaceId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 토큰을 헤더에 추가
        },
      });

      const rooms = response.data.map((room: any) => room.chatName); // 방 이름으로 배열 변환
      setPersonalChatRooms(rooms);
    } catch (error) {
      console.error("Error fetching personal chat rooms:", error);
    }
  };

  // 컴포넌트 마운트 시 개인 채팅방 목록 가져오기
  useEffect(() => {
    if (workspaceId) {
      fetchPersonalChatRooms(workspaceId);
    }
  }, [workspaceId]);

  // 방이 생성되면 그룹 채팅방에 추가
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
                    backgroundColor: selectedChatRoom === room ? "#F5FBFF" : "transparent",
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