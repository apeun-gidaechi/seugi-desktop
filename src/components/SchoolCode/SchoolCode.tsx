import React, { useEffect, useState } from "react";
import * as S from "@/components/SchoolCode/SchoolCode.style";
import Button from "@/components/Button/Button";
import CodeTextField from "@/components/CodeTextField/CodeTextFeild";
import { useNavigate } from "react-router-dom";
import Backimg from "@/assets/image/Backimg.svg";

import { SeugiCustomAxios } from "@/api/SeugiCutomAxios";
import Session from "@/util/TokenExpired/TokenExpired";
import { clearAccessToken } from "@/api/SeugiCutomAxios";

const SchoolCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const token = window.localStorage.getItem("accessToken");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleContinue = async () => {
    const verificationCode = code.join("");

    try {
      const res = await SeugiCustomAxios.get(`/workspace?code=${verificationCode}`);
      console.log("Code sent successfully:", res.data);
      navigate("/joinsuccess", { state: { verificationCode } });
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  const handleCodeChange = (updatedCode: string[]) => {
    setCode(updatedCode);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleContinue();
    }
  };

  const Backclick = () => {
    navigate("/selectschool");
  };

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
