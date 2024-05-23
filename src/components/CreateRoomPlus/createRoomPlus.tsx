import React, { useState, ChangeEvent } from 'react';
import * as S from "@/components/CreateRoomPlus/createRoomPlus.style"; 

import AvatarImg from "@/assets/image/chat-components/Avatar.svg";
import NonClicked from '@/assets/image/chat-components/nonClick.svg';
import Clicked from "@/assets/image/chat-components/clicked.svg";

const CreateRoomPlus: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<{ id: number; name: string; department: string }[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  const dummyData = [
    { id: 1, name: "노영재", department: "뚝딱" },
    { id: 2, name: "노일재", department: "뚝딱뚝딱" },
    { id: 3, name: "노이재", department: "뚝딱" },
    { id: 4, name: "노삼재", department: "뚝딱" },
    { id: 5, name: "노사재", department: "뚝딱뚝딱" },
    { id: 6, name: "제민국", department: "뚝딱뚝딱제갈" },
  ];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === "") {
      setSearchResult([]);
    } else {
      const result = dummyData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.department.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResult(result);
    }
  };

  const handleMemberClick = (id: number) => {
    setSelectedMembers(prev =>
      prev.includes(id) ? prev.filter(memberId => memberId !== id) : [...prev, id]
    );
  };

  const handleContinueClick = () => {
    alert("확인");
  };

  const combinedResults = [
    ...selectedMembers.map(id => dummyData.find(item => item.id === id)!).filter(Boolean),
    ...searchResult.filter(item => !selectedMembers.includes(item.id)),
  ];

  return (
    <>
      <S.CreateRoomPlusBox>
        <div style={{display: 'flex', justifyContent: 'space-between'}}> 
          <S.ChatRoomName>멤버를 선택해 주세요</S.ChatRoomName>
          <S.ChatRoomButton onClick={handleContinueClick}>계속하기</S.ChatRoomButton>
        </div>
        <S.InviteMemberWrap>
          <S.InviteMemberFlex>
            <S.InviteMember 
              type='text' 
              placeholder='멤버 검색'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </S.InviteMemberFlex>
        </S.InviteMemberWrap>
        {combinedResults.map((item) => (
          <S.PlusMemberClick key={item.id} style={{display: 'flex'}}>
            <S.AvatarProfileWrap>
              <S.AvatarProfile src={AvatarImg}></S.AvatarProfile>
            </S.AvatarProfileWrap>
            <S.InviterName>{item.name}</S.InviterName>
            <S.PlusButtonCheck onClick={() => handleMemberClick(item.id)}>
              {selectedMembers.includes(item.id) ? (
                <img src={Clicked} alt="Clicked" />
              ) : (
                <img src={NonClicked} alt="NonClicked" />
              )}
            </S.PlusButtonCheck>
          </S.PlusMemberClick>
        ))}
      </S.CreateRoomPlusBox>
    </>
  );
}

export default CreateRoomPlus;
