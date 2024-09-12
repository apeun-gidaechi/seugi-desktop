import { useState } from "react";
import config from "@/constants/ChatMember/config.json";

const useChatSidebar = (onSelectChatRoom: (room: string) => void) => {
  const [searchText, setSearchText] = useState("");
  const [chatRooms, setChatRooms] = useState<string[]>([]);

  // Refresh token function
  const refreshToken = async () => {
    try {
      const response = await fetch('https://api.seugi.com/auth/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJsa2gxMDI4NUBnbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzI2MTA0NDEwLCJleHAiOjE3MjY5Njg0MTB9.Qj1xs6sG28RmevA7k5ieGL47b0m-S2sVSGkYLXjTApw",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Assuming the API returns the new access token
        return result.accessToken;
      } else {
        console.error('Failed to refresh token:', result.message);
        throw new Error('Token refresh failed');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  // Create Room function with token refresh logic
  const createRoom = async (roomName: string) => {
    try {
      // Refresh the token
      let token = await refreshToken();

      if (!token) {
        throw new Error("Failed to obtain new token");
      }

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
          'Authorization': `Bearer ${token}`, // Use the refreshed token
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

  const handleSearch = async () => {
    if (searchText.trim() !== "") {
      const roomFound = chatRooms.includes(searchText) || config.name.includes(searchText);

      if (roomFound) {
        handleChatRoomClick(searchText);
      } else {
        await createRoom(searchText); // Trigger room creation if not found
      }

      setSearchText("");
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