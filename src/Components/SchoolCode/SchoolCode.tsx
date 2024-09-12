import React from "react";
import * as S from "@/Components/SchoolCode/SchoolCode.style";
import Button from "@/Components/Button/Button";
import CodeTextField from "@/Components/CodeTextField/CodeTextFeild";

import Backimg from "@/assets/image/Backimg.svg";

import Session from "@/Util/TokenExpired/TokenExpired";
import { clearAccessToken } from "@/Api/SeugiCutomAxios";

import useSchoolCode from '@/Hooks/Schoolcode/index';

const SchoolCode = () => {
  const {
    token,
    Backclick,
    handleKeyDown,
    handleCodeChange,
    handleContinue
  } = useSchoolCode();

  return (
    <S.SchoolCodeMain>
      <Session token={token} clearAccessToken={clearAccessToken} />
      <S.SchoolCode>
        <S.SchoolCodeContainer>
          <S.Header>
            <S.BackButton onClick={Backclick}>
              <S.BackImg src={Backimg} />
            </S.BackButton>
            <S.Title>학교 코드를 입력해주세요</S.Title>
          </S.Header>
          <S.InputCodeContainer>
            <CodeTextField
              onKeyDown={handleKeyDown}
              onChange={handleCodeChange}
            />
          </S.InputCodeContainer>
          <S.ButtonContainer>
            <Button text="계속하기" onClick={handleContinue} />
          </S.ButtonContainer>
        </S.SchoolCodeContainer>
      </S.SchoolCode>
    </S.SchoolCodeMain>
  );
};

export default SchoolCode;
