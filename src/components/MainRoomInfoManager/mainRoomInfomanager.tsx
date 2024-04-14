import React from 'react'
import * as S from "@/components/MainRoomInfoManager/mainRoomInfoManager.style"

const mainRoomInfomanager = () => {
  return (
    <>
        <S.MainRoomInfoBox>
            <S.NotificationSet>채팅방 설정</S.NotificationSet>
            <S.NotificationSet>알람 설정</S.NotificationSet>
            <S.OutChatRoom>채팅방 나가기</S.OutChatRoom>
        </S.MainRoomInfoBox>
    </>
  )
}

export default mainRoomInfomanager