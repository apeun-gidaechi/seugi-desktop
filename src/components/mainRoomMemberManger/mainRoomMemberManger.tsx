import React from 'react'
import * as S from "../mainRoomMemberManger/mainRoomMemberManger.style"; 

const mainRoomMemberManger = () => {
  return (
    <>
        <div style={{display: "flex", flexDirection: "column"}}>
          <S.ChatRoomForm>
              <S.FileUpload>내보내기</S.FileUpload>
          </S.ChatRoomForm>
        </div>
    </>
  )
}

export default mainRoomMemberManger