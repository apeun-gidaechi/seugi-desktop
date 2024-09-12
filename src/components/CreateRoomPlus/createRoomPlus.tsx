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

  const handleContinueClick = () => {
    if (selectedMembers.length > 0) {
      const selectedMemberNames = selectedMembers.map(
        (id) => dummyData.find((item) => item.id === id)?.name
      );
      const roomName = selectedMemberNames.join(', '); 
      onCreateRoom(roomName); 
      onClose(); 
    } else {
      alert('Please select at least one member.');
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