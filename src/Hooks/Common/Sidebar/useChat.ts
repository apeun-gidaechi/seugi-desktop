import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {SeugiCustomAxios} from "@/axios/SeugiCutomAxios";
import {useLocation} from "react-router-dom";
import ChatRoom from "@/Components/common/ChatRoom";

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

// Axios 인스턴스 생성
// export const SeugiCustomAxios: AxiosInstance = axios.create({
//   baseURL: SERVER_URL,
// });

// useChatSidebar 훅 정의
const useChat = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [personalChatRooms, updatePersonalChatRooms] = useState<ChatRoom[]>([]); // 개인 채팅방 상태
  const [groupChatRooms, updateGroupChatRooms] = useState<ChatRoom[]>([]); // 그룹 채팅방 상태
  const selectedChatRooms: ChatRoom[] = pathname === "/groupchat"
    ? Array.isArray(groupChatRooms) ? groupChatRooms : []
    : Array.isArray(personalChatRooms) ? personalChatRooms : [];

  const [selectedRoom, setSelectedRoom] = useState<ChatRoom>(); // 선택한 채팅방

  useEffect(() => {
    fetchChatRooms();
  }, [pathname]);

  // 채팅방 목록 가져오는 함수
  const fetchChatRooms = async () => {
    try {
      const storedWorkspaceId = Cookies.get("workspaceId") || null; // 쿠키에서 workspaceId 가져오기

      // 경로에 따라 개인 또는 그룹 채팅방 검색
      if (pathname === "/chat") {
        const response = await SeugiCustomAxios.get(`/chat/personal/search?workspace=${storedWorkspaceId}`);

        const personalRooms = response.data.data; // 개인 채팅방 데이터
        updatePersonalChatRooms(personalRooms);
      } else if (pathname === "/groupchat") {
        const response = await SeugiCustomAxios.get(`/chat/group/search?workspace=${storedWorkspaceId}`);

        const groupRooms = response.data.data; // 그룹 채팅방 데이터
        updateGroupChatRooms(groupRooms);
      }
    } catch (error) {
      console.error("Error fetching chat rooms:", error);
    }
  };

  const createRoom = async (roomName: string) => {
    const requestData = {
      workspaceId: "669e339593e10f4f59f8c583", // 워크스페이스 ID
      roomName: roomName,
      joinUsers: [10],
      chatRoomImg: "",
    };
    try {
      const response = await SeugiCustomAxios.post('/chat/personal/create', requestData);

      if (response.status !== 200) {
        console.error(`Error creating room: ${response.data}`);
        return;
      }

      // const newRoomList = [...personalChatRooms, roomName]; // 새로운 방 추가
      // updatePersonalChatRooms(newRoomList); // 업데이트된 상태 저장
      // handleChatRoomClick(roomName);
    } catch (error) {
      console.error(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleChatRoomClick = (room: ChatRoom) => {
    setSelectedRoom(room);
  };

  return {
    handleChatRoomClick,
    selectedChatRooms,
    selectedRoom
  };
};

export default useChat;