import React, { useState } from 'react';
import * as S from "@/components/MainRoomMemberManger/mainRoomMemberManger.style"; 

const MainRoomMemberManager = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    alert('확인');
  };

  return (
    <>
      <div style={{display: "flex", flexDirection: "column"}}>
        <S.ChatRoomForm>
          <S.FileUpload
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            hovered={isHovered}
            onClick={handleClick}
          >
            내보내기
          </S.FileUpload>
        </S.ChatRoomForm>
      </div>
    </>
  );
};

export default MainRoomMemberManager;
