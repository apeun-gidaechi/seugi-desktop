import React, { useEffect, useState } from 'react';
import axios, { AxiosInstance } from 'axios';
import useMembers from '@/Hooks/Common/Sidebar/useMembers'; 
import * as S from './createRoomPlus.style'; 
import Cookies from 'js-cookie'; // js-cookie 추가

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
  const [workspaceId, setWorkspaceId] = useState<string | null>(null); // workspaceId 상태 추가

  useEffect(() => {
    const token = Cookies.get("accessToken") || null; // 쿠키에서 accessToken 가져오기, 없으면 null로 설정
    setAccessToken(token);

    // 쿠키에서 workspaceId 가져오기
    const storedWorkspaceId = Cookies.get("workspaceId") || null; // 쿠키에서 workspaceId 가져오기, 없으면 null로 설정
    setWorkspaceId(storedWorkspaceId); // workspaceId 상태 설정
  }, []);

  // 나머지 코드는 변경 없이 그대로 유지합니다.
  const {
    searchTerm,
    handleSearchChange,
    handleMemberClick,
    combinedResults,
    selectedMembers,
  } = useMembers(workspaceId ?? '', accessToken); // 기본값으로 빈 문자열 사용

  const handleContinueClick = async () => {
    if (selectedMembers.length > 1) {
      try {
        const selectedMemberNames = combinedResults
          .filter((member) => selectedMembers.includes(member.id))
          .map((member) => member.name);
        
        const roomName = `${selectedMemberNames.join(', ')}`;
  
        const requestData = {
          workspaceId: workspaceId,
          joinUsers: Array.from(selectedMembers),
          roomName: roomName,
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
  
          const chatRoomInfo = {
            roomId: result.data.roomId,
            roomName: requestData.roomName
          };
  
          onCreateRoom(chatRoomInfo);
          onClose();
        } else {
          console.error(`Error creating room: ${response.data}`);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            alert('Session expired. Please login again.');
            setAccessToken(null); 
            Cookies.remove("accessToken"); // 쿠키에서 accessToken 제거
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
          onChange={(e) => handleSearchChange(e.target.value)}
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