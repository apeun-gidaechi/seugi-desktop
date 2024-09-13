import React from "react";
import Button from "@/Components/Button/Button";
import * as S from "./JoinSuccess.style";
import Backimg from "@/assets/image/Backimg.svg";

import useJoinSuccess from '@/Hooks/JoinSuccess/index';

const JoinSuccess = () => {
  const {
    workspaceName,
    schoolInfo,
    schoolImgUrl,
    handleJoinSuccess,
    Backclick
  } = useJoinSuccess();
  
  return (
    <S.SuccessMain>
      <S.Container>
        <S.BackButton onClick={Backclick}>
          <S.BackImg src={Backimg} />
        </S.BackButton>
        <S.SchoolImgContainer>
          <S.SchoolImg src={schoolImgUrl} alt="error" />
        </S.SchoolImgContainer>
        <S.SchoolInfoContainer>
          <S.SchoolName>{workspaceName}</S.SchoolName>
          <S.SchoolInfo>{schoolInfo}</S.SchoolInfo>
        </S.SchoolInfoContainer>
        <S.ButtonContainer>
          <Button onClick={handleJoinSuccess} text="계속하기" />
        </S.ButtonContainer>
      </S.Container>
    </S.SuccessMain>
  );
};

export default JoinSuccess;
