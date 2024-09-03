import React from 'react'

import * as S from '@/components/common/chatRoom/unSelect/index.style'

import SelectChatRoom from '@/assets/image/chat/sadErrorImg.svg';
import SendMessage from '../../sendMessage/sendMessage';
import Sidebar from '../../sidebar/sidebar';

interface SelectedChatRoomProps {
  room: string;
  currentUser: string;
}

const SelectedChatRoom: React.FC<SelectedChatRoomProps> = ({ room, currentUser }) => {
  return (
    <div>
      <h1>Chat Room: {room}</h1>
      <SendMessage chatRoom={room} currentUser={currentUser} />
    </div>
  );
};

export default SelectedChatRoom;