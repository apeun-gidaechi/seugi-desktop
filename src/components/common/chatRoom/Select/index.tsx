import React from 'react'

import * as S from '@/components/common/chatRoom/Select/index.style'

import SelectChatRoom from '@/assets/image/chat/sadErrorImg.svg';
import SendMessage from '../../sendMessage/sendMessage';
import Sidebar from '../../sidebar/sidebar';

interface SelectedChatRoomProps {
  room: string;
  currentUser: string;
}

const SelectedChatRoom: React.FC<SelectedChatRoomProps> = ({ room, currentUser }) => {
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

export default SelectedChatRoom;