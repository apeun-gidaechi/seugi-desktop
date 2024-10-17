import React, { useState, ChangeEvent, useEffect } from 'react';
import axios, { AxiosInstance } from 'axios';
import * as S from './createRoomPlus.style'; 

import AvatarImg from '@/Assets/image/chat-components/Avatar.svg';
import NonClicked from '@/Assets/image/chat-components/nonClick.svg';
import Clicked from '@/Assets/image/chat-components/clicked.svg';
import SearchIcon from '@/Assets/image/sidebar/Findicon.svg';

interface Member {
  id: number;
  name: string;
  department: string;
}

interface CreateRoomPlusProps {
  onClose: () => void;
  onCreateRoom: (roomName: string) => void;
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export const SeugiCustomAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
});

const CreateRoomPlus: React.FC<CreateRoomPlusProps> = ({ onClose, onCreateRoom }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Member[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const workspaceId = "669e339593e10f4f59f8c583"; 

  useEffect(() => {
    const token = window.localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  const searchMembers = async (term: string) => {
    if (term && accessToken) { // accessToken이 있을 때만 요청
      try {
        const response = await SeugiCustomAxios.get(`/workspace/members`, {
          params: {
            workspaceId: workspaceId,
          },
          headers: {
            "Authorization": accessToken,
          },
        });
  
        // API 응답 구조 확인
        console.log("API Response:", response.data);
  
        // 응답 데이터에서 member 정보 추출
        const members: Member[] = (response.data.data || []).map((m: any) => ({
          id: m.member.id, // id 필드
          name: m.nick, // nick 필드를 사용하여 이름 설정
          department: m.belong || "", // 소속 (비어있을 경우 기본값 "")
          // 다른 필요한 속성도 추가할 수 있습니다.
        }));
  
        // 필터링된 멤버 결과 설정
        setSearchResult(members.filter(
          (item) =>
            item.name.toLowerCase().includes(term.toLowerCase()) ||
            item.department.toLowerCase().includes(term.toLowerCase())
        ));
  
        console.log("Search Result:", members);
      } catch (error) {
        console.error("Error fetching members:", error);
        alert('멤버를 가져오는 중 오류가 발생했습니다.');
      }
    } else {
      setSearchResult([]);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchMembers(value); 
  };

  const handleMemberClick = (id: number) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((memberId) => memberId !== id) : [...prev, id]
    );
  };

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

  const combinedResults = [
    ...selectedMembers.map((id) => searchResult.find((item) => item.id === id)!).filter(Boolean),
    ...searchResult.filter((item) => !selectedMembers.includes(item.id)),
  ];

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
          onChange={handleSearchChange}
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