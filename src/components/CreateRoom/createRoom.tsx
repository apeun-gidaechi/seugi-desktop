import * as S from "../CreateRoom/createRoom.style"; 
import React from 'react'

import CreateRoomCancle from "../../assets/image/createroomcancle.svg"

const createRoom = () => {
  return (
    <div>
        <S.chatFormWrap>
            <div style={{display: 'flex', justifyContent: 'space-between'}}> {/* 수정된 div 스타일 */}
                <S.ChatRoomName>채팅방 이름</S.ChatRoomName>
                <S.ChatRoomButton>만들기</S.ChatRoomButton>
            </div>
            <S.InputRoomNameWrap>
                <S.InputRoomName>zi존CNs</S.InputRoomName>
                <S.CreateRoomCancleWrap>
                    <S.CreateRoomCancle src={CreateRoomCancle}/>
                </S.CreateRoomCancleWrap>
            </S.InputRoomNameWrap>
        </S.chatFormWrap>
    </div>     
  )
}

export default createRoom