import React from 'react'

import * as S from '@/components/common/chatRoom/unSelect/index.style'

import SelectChatRoom from '@/assets/image/chat/sadErrorImg.svg';


interface SelectedChatRoomProps {
  room: string;
}

const SelectedChatRoom: React.FC<SelectedChatRoomProps> = ({ room }) => {
  return (
    <div>
      <h1>Chat Room: {room}</h1>
    </div>
  );
};

export default SelectedChatRoom;