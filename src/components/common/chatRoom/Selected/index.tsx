import React from 'react';
import * as S from '@/components/common/chatRoom/unSelect/index.style';
import SelectChatRoom from '@/assets/image/chat/sadErrorImg.svg';

interface SelectedProps {
  roomName: string;  
}

const Selected: React.FC<SelectedProps> = ({ roomName }) => {
  return (
    <div>
      <h1>Selected Chat Room: {roomName}</h1>
    </div>
  );
};

export default Selected;