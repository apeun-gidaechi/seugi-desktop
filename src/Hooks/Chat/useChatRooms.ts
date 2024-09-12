import { useState, useEffect } from "react";

const useChatSidebar = (onSelectChatRoom: (room: string) => void) => {
  const [searchText, setSearchText] = useState("");
  const [chatRooms, setChatRooms] = useState<string[]>([]);

  // 서버에서 구독된 채팅방 목록을 가져오는 함수
  const fetchChatRooms = async () => {
    try {
      const response = await fetch("https://api.example.com/chat/rooms");
      const data = await response.json();
      setChatRooms(data.rooms); // 서버 응답에서 채팅방 목록을 가져옴
    } catch (error) {
      console.error("Failed to fetch chat rooms:", error);
    }
  };

  useEffect(() => {
    fetchChatRooms(); // 컴포넌트가 마운트될 때 채팅방 목록을 가져옴
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

      const response = await fetch('https://api.seugi.com/chat/personal/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer YOUR_TOKEN_HERE",
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.text();

      if (response.ok) {
        addChatRoom(roomName);
        handleChatRoomClick(roomName);
      } else {
        console.error(`Error creating room: ${result}`);
      }
    } catch (error) {
      console.error(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`);
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