import { useState, useEffect } from "react";
import axios from "axios";
import config from "@/constants/config/config.json"; 

const useChatSidebar = (onSelectChatRoom: (room: string) => void) => {
  const [searchText, setSearchText] = useState("");
  const [chatRooms, setChatRooms] = useState<string[]>([]);

  const fetchChatRooms = async () => {
    try {
      const token = localStorage.getItem("accessToken"); 
      const response = await axios.get("/chat/rooms", {
        baseURL: config.serverurl, 
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setChatRooms(response.data.rooms); 
    } catch (error) {
      console.error("채팅방 목록을 불러오는데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    fetchChatRooms(); 
  }, []);

  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      const roomFound = chatRooms.includes(searchText);

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
      const requestData = {
        workspaceId: "669e339593e10f4f59f8c583",
        roomName: roomName,
        joinUsers: [10],
        chatRoomImg: "",
      };

      const token = localStorage.getItem("accessToken"); 
      const response = await axios.post(
        "/chat/personal/create",
        requestData,
        {
          baseURL: config.serverurl, 
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      if (response.status === 200) {
        addChatRoom(roomName);
        handleChatRoomClick(roomName);
      } else {
        console.error(`방 생성 중 오류: ${response.data}`);
      }
    } catch (error) {
      console.error(`방 생성 중 오류가 발생했습니다: ${error}`);
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
    onSelectChatRoom(room);
  };

  return {
    searchText,
    setSearchText,
    chatRooms,
    handleSearch,
    handleChatRoomClick,
  };
};

export default useChatSidebar;