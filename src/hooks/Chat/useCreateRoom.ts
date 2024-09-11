import { useState } from "react";

const useCreateRoom = (addChatRoom: (roomName: string) => void) => {
  const [showCreateRoom, setShowCreateRoom] = useState(false);

  const handleCreateRoomClick = () => {
    setShowCreateRoom(true);
  };

  const handleCloseCreateRoom = () => {
    setShowCreateRoom(false);
  };

  const handleRoomCreation = (roomName: string) => {
    addChatRoom(roomName);
    setShowCreateRoom(false);
  };

  return {
    showCreateRoom,
    handleCreateRoomClick,
    handleCloseCreateRoom,
    handleRoomCreation,
  };
};

export default useCreateRoom;