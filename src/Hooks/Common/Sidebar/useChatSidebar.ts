import { useEffect, useState } from "react";
import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

// Axios 인스턴스 생성
export const SeugiCustomAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
});

// useChatSidebar 훅 정의
const useChatSidebar = (
  onSelectChatRoom: (room: string) => void,
  pathname: string,
  setPersonalChatRooms: (rooms: string[]) => void,
  setGroupChatRooms: (rooms: string[]) => void
) => {
  const [searchText, setSearchText] = useState("");
  const [personalChatRooms, updatePersonalChatRooms] = useState<string[]>([]); // 개인 채팅방 상태
  const [groupChatRooms, updateGroupChatRooms] = useState<string[]>([]); // 그룹 채팅방 상태

  useEffect(() => {
    fetchChatRooms();
  }, [pathname]);

  // 채팅방 목록 가져오는 함수
  const fetchChatRooms = async () => {
    try {
      const storedWorkspaceId = Cookies.get("workspaceId") || null; // 쿠키에서 workspaceId 가져오기
      const accessToken = Cookies.get("accessToken"); // 쿠키에서 accessToken 가져오기

      if (!accessToken) {
        console.error("Access token not found. Please log in again.");
        return;
      }

      const response = await SeugiCustomAxios.get(`/chat/personal/search?workspace=${storedWorkspaceId}`, {
        headers: {
          Authorization: accessToken, // Authorization 헤더에 Bearer 토큰 추가
        },
      });
      
      const rooms = response.data;

      // 경로에 따라 개인 또는 그룹 채팅방을 필터링
      if (pathname === "/chat") {
        const filteredRooms = rooms.filter((room: any) => room.type === "personal");
        updatePersonalChatRooms(filteredRooms);
        setPersonalChatRooms(filteredRooms);
      } else if (pathname === "/groupchat") {
        const filteredRooms = rooms.filter((room: any) => room.type === "group");
        updateGroupChatRooms(filteredRooms);
        setGroupChatRooms(filteredRooms);
      }
    } catch (error) {
      console.error("Error fetching chat rooms:", error);
    }
  };

  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      const combinedRooms = [...personalChatRooms, ...groupChatRooms];
      const roomFound = combinedRooms.includes(searchText);

      if (roomFound) {
        handleChatRoomClick(searchText);
      } else {
        await createRoom(searchText);
      }

      setSearchText("");
    }
  };

  const createRoom = async (roomName: string) => {
    try {
      const accessToken = Cookies.get("accessToken");

      if (!accessToken) {
        console.error("Access token not found. Please log in again.");
        return;
      }

      const requestData = {
        workspaceId: "669e339593e10f4f59f8c583", // 워크스페이스 ID
        roomName: roomName,
        joinUsers: [10],
        chatRoomImg: "",
      };

      const response = await SeugiCustomAxios.post('/chat/personal/create', requestData, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 Bearer 토큰 추가
        },
      });

      if (response.status === 200) {
        const newRoomList = [...personalChatRooms, roomName]; // 새로운 방 추가
        updatePersonalChatRooms(newRoomList); // 업데이트된 상태 저장
        setPersonalChatRooms(newRoomList); // 덮어쓰기
        handleChatRoomClick(roomName);
      } else {
        console.error(`Error creating room: ${response.data}`);
      }
    } catch (error) {
      console.error(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleChatRoomClick = (roomName: string) => {
    onSelectChatRoom(roomName);
  };

  return {
    searchText,
    setSearchText,
    handleSearch,
    handleChatRoomClick,
  };
};

export default useChatSidebar;