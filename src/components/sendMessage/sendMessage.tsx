import React, { ChangeEvent } from 'react';
import * as S from '../sendMessage/sendMessage.style';

import PlusMessageFile from '@/assets/image/chat-components/MessageFile.svg';
import SendArrow from '@/assets/image/chat-components/SendArrow.svg';

const SendMessage: React.FC = () => {
  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const message = event.target.value;
    console.log(message);
  };

  return (
    <>
      <S.SendMessageWrap>
        <S.PlustFileButton>
          <S.PlusMessageFile src={PlusMessageFile} />
        </S.PlustFileButton>
        <S.SendMessage
          type="text"
          placeholder="메세지 보내기"
          onChange={handleMessageChange}
        />
        <S.SendArrowWrap>
          <S.SendArrow src={SendArrow} />
        </S.SendArrowWrap>
      </S.SendMessageWrap>
    </>
  );
};

export default SendMessage;
