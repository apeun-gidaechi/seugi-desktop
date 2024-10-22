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
  const [lastTimestamps, setLastTimestamps] = useState<{ [roomId: string]: number }>({}); // 각 방의 최신 메시지 시간 저장

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

  // 채팅방 선택 시 호출되는 함수
  const handleChatRoomSelect = async (room: string) => {
    setSelectedChatRoom(room);
    handleChatRoomClick(room);

    const roomId = room; // 실제 roomId를 얻어야 함

    if (roomId) {
      // 해당 채팅방의 최신 메시지를 가져오기 위한 함수 호출
      await fetchNewMessages(roomId);
    }
  };

  // timestamp를 기반으로 최신 메시지를 가져오는 함수
  // timestamp를 기반으로 최신 메시지를 가져오는 함수
const fetchNewMessages = async (roomId: string) => {
  try {
      const accessToken = Cookies.get("accessToken");
      if (!accessToken) {
          console.error("Access token not found. Please log in again.");
          return;
      }

      // 해당 roomId의 마지막 메시지 timestamp 가져오기
      const lastTimestamp = lastTimestamps[roomId];
      console.log("dd:",roomId);
      
      // 메시지 가져오기 API 호출
      const url = lastTimestamp 
          ? `message/search/${roomId}?timestamp=${lastTimestamp}` 
          : `message/search/${roomId}`;

      const response = await SeugiCustomAxios.get(url, {
          headers: {
              Authorization: accessToken,
          },
      });

      const data = response.data;

      if (data && Array.isArray(data.messages)) {
          // 메시지 처리
          console.log(`New messages for room ${roomId}:`, data.messages);

          // 마지막 메시지의 timestamp 저장
          if (data.messages.length > 0) {
              const lastMessageTimestamp = data.messages[data.messages.length - 1].timestamp;
              setLastTimestamps((prev) => ({
                  ...prev,
                  [roomId]: lastMessageTimestamp,
              }));
          }
      } else {
          console.error("Unexpected data format:", data);
      }
  } catch (error) {
      console.error("Error fetching new messages:", error);
  }
};

  // 개인 채팅방 목록 가져오기
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

      const data = response.data;
      let rooms: string[] = [];

      if (data && Array.isArray(data.data)) {
        rooms = data.data.map((room: { chatName: string }) => room.chatName);
      } else {
        console.error("Unexpected data format:", data);
      }

      setPersonalChatRooms(rooms);
    } catch (error) {
      console.error("Error fetching personal chat rooms:", error);
    }
  };

  // 그룹 채팅방 목록 가져오기
  const fetchGroupChatRooms = async (workspaceId: string) => {
    try {
      const accessToken = Cookies.get("accessToken");

      if (!accessToken) {
        console.error("Access token not found. Please log in again.");
        return;
      }

      const response = await SeugiCustomAxios.get(`/chat/group/search?workspace=${workspaceId}`, {
        headers: {
          Authorization: accessToken,
        },
      });

      const data = response.data;
      let rooms: string[] = [];

      if (data && Array.isArray(data.data)) {
        rooms = data.data.map((room: { chatName: string }) => room.chatName);
      } else {
        console.error("Unexpected data format:", data);
      }

      setGroupChatRooms(rooms);
    } catch (error) {
      console.error("Error fetching group chat rooms:", error);
    }
  };

  useEffect(() => {
    const storedWorkspaceId = Cookies.get("workspaceId") || null;
    setWorkspaceId(storedWorkspaceId);

    if (storedWorkspaceId) {
      if (location.pathname === "/chat") {
        fetchPersonalChatRooms(storedWorkspaceId);
      } else if (location.pathname === "/groupchat") {
        fetchGroupChatRooms(storedWorkspaceId);
      }
    }
  }, [location.pathname]);

  const chatRoomsToDisplay = location.pathname === "/groupchat" 
    ? Array.isArray(groupChatRooms) ? groupChatRooms : [] 
    : Array.isArray(personalChatRooms) ? personalChatRooms : [];

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
              {chatRoomsToDisplay.map((room, index) => (
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