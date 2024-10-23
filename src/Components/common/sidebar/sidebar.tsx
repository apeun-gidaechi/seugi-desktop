import React, {useState} from "react";
import * as S from "@/Components/Chat/ChatSideBar/index.style";
import SearchIcon from "@/Assets/image/chat-components/Search.svg";
import AvatarProfile from "@/Assets/image/chat-components/Avatar.svg";
import TitleText from "@/Components/common/TitleText/index";
import CreateRoomBtn from "@/Assets/image/sidebar/add_fill.svg";
import CreateRoomPlus from "@/Components/Chat/CreateRoomPlus/createRoomPlus";
import {ChatRoom} from "@/Components/common/ChatRoom";

interface SidebarProps {
  chatRooms: ChatRoom[];
  selectedRooms?: ChatRoom;
  handleChatRoomClick: (room: ChatRoom) => void;
}

const Sidebar: React.FC<SidebarProps> = (
  {
    chatRooms,   
    selectedRooms,
    handleChatRoomClick
  }: SidebarProps
) => {
  const [isCreateRoomVisible, setCreateRoomVisible] = useState(false);

  const [searchText, setSearchText] = useState("");


  const handleSearch = async () => {
    if (searchText.trim() === "") {
      return;
    }
    // const combinedRooms = [...personalChatRooms, ...groupChatRooms];
    // const roomFound = combinedRooms.includes(searchText);
    //
    // if (roomFound) {
    //   handleChatRoomClick(searchText);
    // } else {
    //   await createRoom(searchText);
    // }

    setSearchText("");
  };
  // const [lastTimestamps, setLastTimestamps] = useState<{ [roomId: string]: number }>({}); // 각 방의 최신 메시지 시간 저장

  const handleCreateRoomClick = () => {
    setCreateRoomVisible((prevState) => !prevState);
  };

  const handleCloseCreateRoom = () => {
    setCreateRoomVisible(false);
  };

  const handleCreateRoom = (roomInfo: { roomId: string; roomName: string }) => {
    if (roomInfo.roomName) {
      // setGroupChatRooms((prevRooms) => [...prevRooms, roomInfo.roomName]);
      handleCloseCreateRoom();
    }
  };

  return (
    // <S.ChatingPage>
      <S.SideBarChat>
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
            <S.SearchIcon src={SearchIcon} onClick={handleSearch}/>
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
            {chatRooms.map((room, index) => (
              <S.ChatRoom
                key={index}
                onClick={() => handleChatRoomClick(room)}
                style={{
                  backgroundColor: selectedRooms?.id === room.id ? "#F5FBFF" : "transparent",
                }}
              >
                <S.ChatRoomAvatarWrap>
                  <S.ChatRoomAvatar src={AvatarProfile}/>
                </S.ChatRoomAvatarWrap>
                {room.chatName}
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
    // </S.ChatingPage>
  );
};

export default Sidebar;