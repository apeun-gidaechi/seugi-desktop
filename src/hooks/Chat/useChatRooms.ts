import { useState } from "react";
import config from "@/constants/ChatMember/config.json";

const useChatRooms = () => {
  const [chatRooms, setChatRooms] = useState<string[]>([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  const addChatRoom = (roomName: string) => {
    setChatRooms((prevRooms) => {
      if (!prevRooms.includes(roomName)) {
        return [...prevRooms, roomName];
      }
      return prevRooms;
    });
  };

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      const isRoomFound = config.name.includes(searchText);
      if (isRoomFound) {
        addChatRoom(searchText);
        setSearchText("");
      } else {
        alert(`Room '${searchText}' not found.`);
      }
    }
  };

  const handleChatRoomClick = (room: string) => {
    setSelectedChatRoom(room);
  };

  return {
    chatRooms,
    selectedChatRoom,
    searchText,
    setSearchText,
    handleSearch,
    handleChatRoomClick,
    addChatRoom,
  };
};

export default useChatRooms;