import React from "react";
import Button from "@/Components/Button/Button";
import * as S from "./JoinSuccess.style";
import Backimg from "@/Assets/image/Backimg.svg";

import useJoinSuccess from '@/Hooks/Workspace/JoinSuccess/index';

const JoinSuccess = () => {
  const { ...JoinSuccess } = useJoinSuccess();

  return (
    <S.SuccessMain>
      <S.Container>
        <S.BackButton onClick={JoinSuccess.Backclick}>
          <S.BackImg src={Backimg} />
        </S.BackButton>
        <S.SchoolImgContainer>
          <S.SchoolImg src={JoinSuccess.schoolImgUrl} alt="error" />
        </S.SchoolImgContainer>
        <S.SchoolInfoContainer>
          <S.SchoolName>{JoinSuccess.workspaceName}</S.SchoolName>
          <S.SchoolInfo>{JoinSuccess.schoolInfo}</S.SchoolInfo>
        </S.SchoolInfoContainer>
        <S.ButtonContainer>
          <Button onClick={JoinSuccess.handleJoinSuccess} text="계속하기" />
        </S.ButtonContainer>
      </S.Container>
    </S.SuccessMain>
  );
};

export default JoinSuccess;
