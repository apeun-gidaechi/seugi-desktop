import * as S from "./createRoomName.style"; 
import React, { useState } from 'react';
import CreateRoomCancle from "@/assets/image/chat-components/createroomcancle.svg";

const CreateRoomName: React.FC = () => {
  const [roomName, setRoomName] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const handleCreateButtonClick = () => {
    console.log(roomName);
    alert("완료");
  };

  return (
    <div>
      <S.chatFormWrap>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <S.ChatRoomName>채팅방 이름</S.ChatRoomName>
          <S.ChatRoomButton onClick={handleCreateButtonClick}>만들기</S.ChatRoomButton>
        </div>
        <S.InputRoomNameWrap>
          <S.InputRoomName
            type="text"
            placeholder="채팅방 이름을 설정해주세요"
            value={roomName}
            onChange={handleInputChange}
          />
          <S.CreateRoomCancleWrap>
            <S.CreateRoomCancle src={CreateRoomCancle} />
          </S.CreateRoomCancleWrap>
        </S.InputRoomNameWrap>
      </S.chatFormWrap>
    </div>     
  );
}

export default CreateRoomName;
