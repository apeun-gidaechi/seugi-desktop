import React, { useEffect, useState } from 'react';
import axios, { AxiosInstance } from 'axios';
import useMembers from '@/Hooks/Common/Sidebar/useMembers'; 
import * as S from './createRoomPlus.style'; 

import AvatarImg from '@/Assets/image/chat-components/Avatar.svg';
import NonClicked from '@/Assets/image/chat-components/nonClick.svg';
import Clicked from '@/Assets/image/chat-components/clicked.svg';
import SearchIcon from '@/Assets/image/sidebar/Findicon.svg';

interface CreateRoomPlusProps {
  onClose: () => void;
  onCreateRoom: (roomInfo: { roomId: string; roomName: string }) => void;
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export const SeugiCustomAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
});

const CreateRoomPlus: React.FC<CreateRoomPlusProps> = ({ onClose, onCreateRoom }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const workspaceId = "669e339593e10f4f59f8c583"; 

  useEffect(() => {
    const token = window.localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  const {
    searchTerm,
    handleSearchChange,
    handleMemberClick,
    combinedResults,
    selectedMembers,
  } = useMembers(workspaceId, accessToken); // 훅 사용

  const handleContinueClick = async () => {
    if (selectedMembers.length > 1) {
      try {
        const requestData = {
          workspaceId: workspaceId,
          joinUsers: Array.from(selectedMembers),
          roomName: `Group Chat (${selectedMembers.length} members)`,
          chatRoomImg: "",
        };

        const response = await SeugiCustomAxios.post('/chat/group/create', requestData, {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": accessToken,
          },
        });

        if (response.status === 200) {
          const result = response.data;
          console.log("Room created successfully:", result);
          onCreateRoom(result);
  
          // 채팅방 ID와 이름을 함께 전달
          const chatRoomInfo = {
            roomId: result.data.roomId,   // 서버에서 반환된 채팅방 ID
            roomName: requestData.roomName // 생성 시 지정한 채팅방 이름
          };
  
          onCreateRoom(chatRoomInfo); // ID와 이름 모두 전달
          onClose();
        } else {
          console.error(`Error creating room: ${response.data}`);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            alert('Session expired. Please login again.');
            setAccessToken(null); 
            window.localStorage.removeItem("accessToken"); 
            return;
          }
          console.error(`An error occurred: ${error.message}`);
          alert('에러가 발생했습니다. 다시 시도해주세요.');
        } else {
          console.error('Unexpected error:', error);
          alert('An unexpected error occurred.');
        }
      }
    } else {
      alert('두 명 이상의 멤버를 선택해주세요.');
    }
  };

  return (
    <S.CreateRoomPlusBox>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <S.ChatRoomName>채팅방 멤버</S.ChatRoomName>
        <S.ChatRoomButton onClick={handleContinueClick}>계속하기</S.ChatRoomButton>
      </div>
      <S.InviteMemberWrap>
        <S.InviteMember
          type="text"
          placeholder="이름, 소속 등을 입력해 주세요"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)} // 변경된 부분
        />
        <S.SearchIconImg src={SearchIcon} alt="Search" />
      </S.InviteMemberWrap>
      <S.ScrollableMemberList>
        {combinedResults.map((item) => (
          <S.PlusMemberClick key={item.id} onClick={() => handleMemberClick(item.id)}>
            <S.AvatarProfileWrap>
              <S.AvatarProfile src={AvatarImg} alt={`${item.name}'s Avatar`} />
            </S.AvatarProfileWrap>
            <S.InviterName>{item.name}</S.InviterName>
            <S.PlusButtonCheck>
              {selectedMembers.includes(item.id) ? (
                <img src={Clicked} alt="Clicked" />
              ) : (
                <img src={NonClicked} alt="NonClicked" />
              )}
            </S.PlusButtonCheck>
          </S.PlusMemberClick>
        ))}
      </S.ScrollableMemberList>
    </S.CreateRoomPlusBox>
  );
};

export default CreateRoomPlus;