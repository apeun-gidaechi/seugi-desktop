import React from 'react'

import * as S from '@/components/common/chatRoom/Select/index.style'

import SelectChatRoom from '@/assets/image/chat/sadErrorImg.svg';
import SendMessage from '../../sendMessage/sendMessage';
import Sidebar from '../../sidebar/sidebar';
import MessageBox from "@/components/MessageBox/messageBox";
import useChatMessages from '@/hooks/SendMessage/useChatMessages';

interface SelectedChatRoomProps {
  room: string;
  currentUser: string;
}

interface SendMessageProps {
  chatRoom: string;
  currentUser: string;
}

const SelectedChatRoom: React.FC<SelectedChatRoomProps> = ({ room, currentUser }) => {
  const { receivedMessages } = useChatMessages(room, currentUser); // Move receivedMessages here
  
  return (
    <S.AllWrapContainer>
      <S.ContainerWrapper>
        <S.Container>
          <div>
            {receivedMessages.map((msg, index) => (
              <MessageBox key={index} message={msg.message} time={msg.time} />
            ))}
          </div>
        </S.Container>
      </S.ContainerWrapper>
      <div>
        <SendMessage chatRoom={room} currentUser={currentUser} />
      </div>
    </S.AllWrapContainer>
  );
};

export default SelectedChatRoom