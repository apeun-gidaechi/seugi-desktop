import React from "react";
import * as S from "./SchoolCode.style";
import Button from "@/Components/Button/Button";
import CodeTextField from "@/Components/Onboarding/CodeTextField/CodeTextField";

import Backimg from "@/assets/image/Backimg.svg";

import useSchoolCode from '@/Hooks/Workspace/Schoolcode/index';

const SchoolCode = () => {
  const { ...SchoolCode } = useSchoolCode();

  return (
    <S.SchoolCodeMain>
      <S.SchoolCode>
        <S.SchoolCodeContainer>
          <S.Header>
            <S.BackButton onClick={SchoolCode.Backclick}>
              <S.BackImg src={Backimg} />
            </S.BackButton>
            <S.Title>학교 코드를 입력해주세요</S.Title>
          </S.Header>
          <S.InputCodeContainer>
            <CodeTextField
              onKeyDown={SchoolCode.handleKeyDown}
              onChange={SchoolCode.handleCodeChange}
            />
          </S.InputCodeContainer>
          <S.ButtonContainer>
            <Button text="계속하기" onClick={SchoolCode.handleContinue} />
          </S.ButtonContainer>
        </S.SchoolCodeContainer>
      </S.SchoolCode>
    </S.SchoolCodeMain>
  );
};

export default SchoolCode;
