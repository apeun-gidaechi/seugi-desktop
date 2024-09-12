import React from 'react'

import * as S from '@/components/Common/ChatRoom/UnSelect/index.style'

import SelectChatRoom from '@/assets/image/chat/sadErrorImg.svg';


const index = () => {
  return (
    <S.AllWrapContainer>
      <S.ContainerWrapper>
          <S.Container>
              <S.SelectChatRoomImgWrap>
                <S.SelectChatRoomImg src ={SelectChatRoom}/>
                <S.SelectChatRoomMessage> 채팅방을 선택해주세요 </S.SelectChatRoomMessage>
              </S.SelectChatRoomImgWrap>
          </S.Container>
      </S.ContainerWrapper>
    </S.AllWrapContainer>
  )
}

export default index