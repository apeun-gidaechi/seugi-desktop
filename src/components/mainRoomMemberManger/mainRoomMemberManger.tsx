import React from 'react';
import * as S from "@/components/mainRoomMemberManger/mainRoomMemberManger.style";

const MainRoomMemberManager = () => {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column"}}>
        <S.ChatRoomForm>
          <S.FileUpload>내보내기</S.FileUpload>
        </S.ChatRoomForm>
      </div>
    </>
  );
};

export default MainRoomMemberManager;