import React from 'react';

import * as S from './index.style';

import SendMessage from '@/Components/common/sendMessage/sendMessage';
import useChatMessages from '@/Hooks/Common/SendMessage/useChatMessages';

interface Message {
  message: string;
  time: string;
  sender: string;
  type: string;
}

interface SelectedChatRoomProps {
  room: string;
  currentUser: string;
}

const SelectedChatRoom: React.FC<SelectedChatRoomProps> = ({ room, currentUser }) => {
  const { receivedMessages } = useChatMessages(room, currentUser);

  // 현재 날짜를 원하는 형식으로 포맷팅하는 함수
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return date.toLocaleDateString('ko-KR', options);
  };

  // 현재 날짜를 가져오기
  const currentDate = formatDate(new Date());

  return (
    <S.AllWrapContainer>
      <S.ContainerWrapper>
        <S.Container>
          <S.CurrentDataContainer> 
            <S.CurrentDataWrap>
              <S.CurrentData>{currentDate}</S.CurrentData>
            </S.CurrentDataWrap>
          </S.CurrentDataContainer>
        </S.Container>
      </S.ContainerWrapper>
      <div>
        <SendMessage chatRoom={room} currentUser={currentUser} />
        {receivedMessages.map((message: Message, index: number) => (
          <S.MessageWrapper key={index}>
            <S.Message>{message.message}</S.Message>
            <S.Time>{message.time}</S.Time>
          </S.MessageWrapper>
        ))}
      </div>
    </S.AllWrapContainer>
  );
};

export default SelectedChatRoom;