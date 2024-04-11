import React from 'react'
import * as S from '../MainRoomInfo/MainRoomInfo.style'

import ToggleButton from "@/components/button/Toggle/toggle"

const MainRoomInfo = () => {
  return (
    <>
        <S.MainRoomInfoBox>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <S.NotificationSet>알람 설정</S.NotificationSet>
                <ToggleButton/>
            </div>
            <S.OutChatRoom>채팅방 나가기</S.OutChatRoom>
        </S.MainRoomInfoBox>
    </>
  )
}

export default MainRoomInfo