import React from 'react'
import * as S from '../MainRoomInfo/MainRoomInfo.style'

const MainRoomInfo = () => {
  return (
    <>
        <S.MainRoomInfoBox>
            <S.NotificationSet>알람 설정</S.NotificationSet>
            <S.OutChatRoom>채팅방 나가기</S.OutChatRoom>
        </S.MainRoomInfoBox>
    </>
  )
}

export default MainRoomInfo