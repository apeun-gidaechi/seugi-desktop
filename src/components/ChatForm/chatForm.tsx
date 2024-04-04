import * as S from "../ChatForm/chatForm.style"; 
import React from 'react'

const chatForm = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <S.ChatRoomForm>
            <S.FileUpload>파일 업로드</S.FileUpload>
        </S.ChatRoomForm>
    </div>     
  )
}

export default chatForm