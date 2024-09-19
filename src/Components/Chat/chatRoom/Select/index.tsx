import React from 'react'

import * as S from './index.style'

import SelectChatRoom from '@/assets/image/chat/sadErrorImg.svg';
import SendMessage from '@/Components/common/sendMessage/sendMessage';
// import Sidebar from '../../sidebar/sidebar';
// import MessageBox from "@/Components/MessageBox/messageBox";
import useChatMessages from '@/Hooks/Common/SendMessage/useChatMessages';

interface SelectedChatRoomProps {
  room: string;
  currentUser: string;
}


const SelectedChatRoom: React.FC<SelectedChatRoomProps> = ({ room, currentUser }) => {
  const { receivedMessages } = useChatMessages(room, currentUser); // Move receivedMessages here

  return (
    <S.AllWrapContainer>
      <S.ContainerWrapper>
        <S.Container>

        </S.Container>
      </S.ContainerWrapper>
      <div>
        <SendMessage chatRoom={room} currentUser={currentUser} />
      </div>
    </S.AllWrapContainer>
  );
};

export default SelectedChatRoom