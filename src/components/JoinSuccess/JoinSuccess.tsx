import React from 'react';
import Button from '@/components/button/Button';
import * as S from '@/components/JoinSuccess/JoinSuccess.style';

const JoinSuccess = () => {
  const handleJoinSuccess = () => {
    
  }
  return (
    <S.SuccessMain>
      <S.Container>
        <S.SchoolImg />
        <S.SchoolInfoContainer>
          <S.SchoolName>대구 소프트웨어 마이스터 고등학교</S.SchoolName>
          <S.SchoolInfo>학생 213명 선생님 32명</S.SchoolInfo>
        </S.SchoolInfoContainer>
        <S.ButtonContainer>
          <Button onClick={handleJoinSuccess}/>
        </S.ButtonContainer>
      </S.Container>
    </S.SuccessMain>
  )
}

export default JoinSuccess;