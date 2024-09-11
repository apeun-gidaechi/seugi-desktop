import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "@/components/common/ChatSidebar/Chat/index.style";
import SearchIcon from "@/assets/image/chat-components/Search.svg";
import AvatarProfile from "@/assets/image/chat-components/Avatar.svg";
import Navbar from "@/components/common/Navbar/Navbar";
import TitleText from "@/components/common/TitleText/index";
import CreateRoomBtn from "@/assets/image/sidebar/add_fill.svg";
import useChatSidebar from "@/hooks/Sidebar/useChatSidebar";

interface SidebarProps {
  onSelectChatRoom: (room: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectChatRoom }) => {
  const location = useLocation();
  const { searchText, setSearchText, chatRooms, handleSearch, handleChatRoomClick } = useChatSidebar(onSelectChatRoom);

  return (
    <>
      <S.ChatingPage>
        <Navbar />
        <S.SideBarChat>
          <div style={{ marginLeft: '1.5%' }}>
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
              {location.pathname === '/groupchat' && (
                <S.PlusButtonImg src={CreateRoomBtn} alt="Create Room" onClick={handleSearch} />
              )}
            </S.IconWrapper>
          </S.SideFinder>
          <S.ChatRoomsWrap>
            <S.ChatRoomList>
              {chatRooms.map((room, index) => (
                <S.ChatRoom key={index} onClick={() => handleChatRoomClick(room)}>
                  <S.ChatRoomAvatarWrap>
                    <S.ChatRoomAvatar src={AvatarProfile} />
                  </S.ChatRoomAvatarWrap>
                  {room}
                </S.ChatRoom>
              ))}
            </S.ChatRoomList>
          </S.ChatRoomsWrap>
        </S.SideBarChat>
      </S.ChatingPage>
    </>
  );
};

export default Sidebar;