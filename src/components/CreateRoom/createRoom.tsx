import * as S from "../CreateRoom/createRoom.style"; 
import React from 'react'

const createRoom = () => {
  return (
    <div>
        <S.chatFormWrap>
            <div style={{display: 'flex', justifyContent: 'space-between'}}> {/* 수정된 div 스타일 */}
                <S.ChatRoomName>채팅방 이름</S.ChatRoomName>
                <S.ChatRoomButton>만들기</S.ChatRoomButton>
            </div>
            <S.InputRoomName>
                <div>zi존CNs</div>
            </S.InputRoomName>
        </S.chatFormWrap>
    </div>     
  )
}

export default createRoom