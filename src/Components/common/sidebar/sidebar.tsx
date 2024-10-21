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
import Cookies from "js-cookie"; 

interface SidebarProps {
  onSelectChatRoom: (room: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectChatRoom }) => {
  const location = useLocation();
  const [isCreateRoomVisible, setCreateRoomVisible] = useState(false);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const [personalChatRooms, setPersonalChatRooms] = useState<string[]>([]);
  const [groupChatRooms, setGroupChatRooms] = useState<string[]>([]);
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);

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

  const fetchPersonalChatRooms = async (workspaceId: string) => {
    try {
      const accessToken = Cookies.get("accessToken");
  
      if (!accessToken) {
        console.error("Access token not found. Please log in again.");
        return;
      }
  
      const response = await SeugiCustomAxios.get(`/chat/personal/search?workspace=${workspaceId}`, {
        headers: {
          Authorization: accessToken,
        },
      });
  
      // API 응답의 data를 출력
      const data = response.data;
      console.log("API response data:", data); // 전체 data 출력
  
      // data의 타입을 확인하여 필요한 방 이름을 추출
      let rooms: string[] = [];
      
      // data의 구조를 기반으로 방 이름을 가져옴
      if (data && Array.isArray(data.data)) {
        rooms = data.data.map((room: { chatName: string }) => room.chatName); // data.data에서 방 이름을 가져옴
      } else {
        console.error("Unexpected data format:", data);
      }
  
      console.log("Fetched personal chat rooms:", rooms); // 방 이름으로 변환된 데이터 출력
      setPersonalChatRooms(rooms);
    } catch (error) {
      console.error("Error fetching personal chat rooms:", error);
    }
  };

  useEffect(() => {
    const storedWorkspaceId = Cookies.get("workspaceId") || null;
    setWorkspaceId(storedWorkspaceId); 

    if (storedWorkspaceId) {
      fetchPersonalChatRooms(storedWorkspaceId);
    }
  }, []); 

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