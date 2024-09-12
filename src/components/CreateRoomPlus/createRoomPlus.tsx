import React, { useState, ChangeEvent } from 'react';
import * as S from './createRoomPlus.style'; 

import AvatarImg from '@/assets/image/chat-components/Avatar.svg';
import NonClicked from '@/assets/image/chat-components/nonClick.svg';
import Clicked from '@/assets/image/chat-components/clicked.svg';
import SearchIcon from '@/assets/image/sidebar/Findicon.svg';

interface Member {
  id: number;
  name: string;
  department: string;
}

interface CreateRoomPlusProps {
  onClose: () => void;
  onCreateRoom: (roomName: string) => void;
}

const CreateRoomPlus: React.FC<CreateRoomPlusProps> = ({ onClose, onCreateRoom }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Member[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const dummyData: Member[] = [
    { id: 1, name: '123', department: '1' },
    { id: 2, name: '1234', department: '1' },
    { id: 3, name: 'q', department: '1' },
    { id: 4, name: 'qw', department: '2' },
    { id: 5, name: 'qwe', department: '2' },
    { id: 6, name: 'qwer', department: '1' },
  ];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === '') {
      setSearchResult([]);
    } else {
      const result = dummyData.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.department.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResult(result);
    }
  };

  const handleMemberClick = (id: number) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((memberId) => memberId !== id) : [...prev, id]
    );
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('https://api.seugi.com/member/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error logging in: ${response.status} ${response.statusText} - ${errorText}`);
        throw new Error('Login failed');
      }

      const data = await response.json();
      setAccessToken(data.accessToken);
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to login. Please check your credentials.');
    }
  };

  const refreshAccessToken = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.seugi.com/member/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refreshToken: accessToken }), // use the current accessToken as refreshToken
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error refreshing token: ${response.status} ${response.statusText} - ${errorText}`);
        throw new Error('Failed to refresh access token');
      }

      const data = await response.json();
      return data.accessToken;
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  };

  const handleContinueClick = async () => {
    if (selectedMembers.length > 1) {
      if (!accessToken) {
        await login('lkh10285@gmail.com', '1'); // Log in with specific credentials
      }

      try {
        const requestData = {
          workspaceId: "669e339593e10f4f59f8c583",
          joinUsers: Array.from(selectedMembers),
          roomName: `Group Chat (${selectedMembers.length} members)`,
          chatRoomImg: "",
        };

        let response = await fetch('https://api.seugi.com/chat/group/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`,
          },
          body: JSON.stringify(requestData),
        });

        if (response.status === 401) {
          try {
            const newAccessToken = await refreshAccessToken();  // Get new token
            response = await fetch('https://api.seugi.com/chat/group/create', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${newAccessToken}`,
              },
              body: JSON.stringify(requestData),
            });

            if (!response.ok) {
              const errorText = await response.text();
              console.error(`Failed to create room with refreshed token: ${response.status} ${response.statusText} - ${errorText}`);
              throw new Error(`Failed to create room with refreshed token: ${response.statusText}`);
            }
          } catch (refreshError) {
            console.error('Error refreshing token:', refreshError);
            alert('Failed to refresh access token. Please login again.');
            return;
          }
        }

        const result = await response.text();

        if (response.ok) {
          console.log("Room created successfully:", result);
          onCreateRoom(result);
          onClose();
        } else {
          console.error("Error creating group chat room:", result);
          alert('그룹 채팅방 생성에 실패했습니다. 다시 시도해주세요.');
        }
      } catch (error) {
        console.error(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`);
        alert('에러가 발생했습니다. 다시 시도해주세요.');
      }
    } else {
      alert('두 명 이상의 멤버를 선택해주세요.');
    }
  };

  const combinedResults = [
    ...selectedMembers.map((id) => dummyData.find((item) => item.id === id)!).filter(Boolean),
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
        <S.SearchIconImg src={SearchIcon}/>
      </S.InviteMemberWrap>
      <S.ScrollableMemberList>
        {combinedResults.map((item) => (
          <S.PlusMemberClick key={item.id} onClick={() => handleMemberClick(item.id)}>
            <S.AvatarProfileWrap>
              <S.AvatarProfile src={AvatarImg} />
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