import { useState } from "react";
import config from "@/constants/ChatMember/config.json";

const useChatSidebar = (onSelectChatRoom: (room: string) => void) => {
  const [searchText, setSearchText] = useState("");
  const [chatRooms, setChatRooms] = useState<string[]>([]);

  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      const roomFound = chatRooms.includes(searchText) || config.name.includes(searchText);

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
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcyNjA2NDc0NywiZXhwIjoxNzI2MDcwNzQ3fQ.UHfrc2EM-3C5efG-aQy_ROE4KwpxflrqH2nIv7qr6i8",
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
    console.log(`Adding chat room: ${roomName}`);
    setChatRooms((prevRooms) => {
      if (!prevRooms.includes(roomName)) {
        return [...prevRooms, roomName];
      }
      return prevRooms;
    });
  };

  const handleChatRoomClick = (roomName: string) => {
    onSelectChatRoom(roomName);
    console.log(`Adding chat room: ${roomName}`);
    setChatRooms((prevRooms) => {
      if (!prevRooms.includes(roomName)) {
        return [...prevRooms, roomName];
      }
      return prevRooms;
    });
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