import React, {useEffect} from "react";
import * as S from "./index.style";
import UnChatRoom from '@/Components/Chat/chatRoom/unSelect/index';
import SelectedChatRoom from '@/Components/Chat/chatRoom/Select/index';
import Sidebar from '@/Components/common/sidebar/sidebar';
import TopButton from '@/Components/Button/chatButton/index';
import useChat from "@/Hooks/Common/Sidebar/useChat";
import {socketService} from "@/Hooks/Common/SendMessage/socketService";
import Spacer from "@/Components/common/Spacer/spacer";
import TitleText from "@/Components/common/TitleText";

const GroupChat = () => {
  const currentUser = "ㅠㅠ"; // 하드코딩 수정예정
  const {
    selectedRoom,
    selectedChatRooms,
    handleChatRoomClick
  } = useChat();

  useEffect(() => {
    socketService.connect();
  }, []);

  return (
    <S.Container>
      <S.TitleWrapper>
        <TitleText/>
        <Spacer/>
        <TopButton/>
      </S.TitleWrapper>
      <S.ChatWrapper>
        <Sidebar chatRooms={selectedChatRooms} handleChatRoomClick={handleChatRoomClick}/>
        {selectedRoom ? (
          <SelectedChatRoom room={selectedRoom} currentUser={currentUser}/>
        ) : (
          <UnChatRoom/>
        )}
      </S.ChatWrapper>
    </S.Container>
  );
};

export default GroupChat;