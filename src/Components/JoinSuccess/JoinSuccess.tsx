import { useState, useEffect } from "react";
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';
import Button from "@/Components/Button/Button";
import * as S from "@/Components/JoinSuccess/JoinSuccess.style";
import { useNavigate, useLocation } from "react-router-dom";
import Backimg from "@/assets/image/Backimg.svg";
import config from '@/constants/config/config.json';
import React from "react";

const JoinSuccess = () => {
  const navigate = useNavigate();
  const [workspaceName, setWorkspaceName] = useState("");
  const [schoolInfo, setSchoolInfo] = useState("");
  const [schoolImgUrl, setSchoolImgUrl] = useState("");
  const [workspaceId, setWorkspaceId] = useState("");
  const location = useLocation();
  const { verificationCode } = location.state || {};

  const handleJoinSuccess = () => {
    navigate('/selectjob', { state: { verificationCode, workspaceId } });
  };

  useEffect(() => {
    const handleSchoolInfo = async () => {
      try {

        const res = await SeugiCustomAxios.get(`/workspace/search/${verificationCode}`);
        const data = res.data.data;

        setWorkspaceName(data.workspaceName);
        setSchoolInfo(
          `학생 ${data.studentCount}명 선생님 ${data.teacherCount}명`
        );
        setSchoolImgUrl(data.workspaceImageUrl);
        setWorkspaceId(data.workspaceId);
      } catch (error) {
        console.error("Failed to fetch school information:", error);
      }
    };
    handleSchoolInfo();
  }, [verificationCode]);

  const Backclick = () => {
    navigate("/schoolcode");
  };

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
