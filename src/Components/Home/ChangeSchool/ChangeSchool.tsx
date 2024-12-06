import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./ChangeSchool.style";
import Arrow from "@/Assets/image/home/arrow.svg";
import { paths } from "@/Constants/paths";
import Cookies from "js-cookie";

interface workspaceItem {
  workspaceId: string;
  workspaceName: string;
  workspaceImageUrl: string;
  workspaceAdmin: number
  middleAdmin: number[];
  teacher: number[];
  student: number[];
}

interface pendingWorkspaceItem {
  workspaceId: string;
  workspaceName: string
  workspaceImageUrl: string;
  studentCount: string;
  teacherCount: string;
}
interface Props {
  onClose: () => void;
  workspaces: workspaceItem[];
  pendingWorkspaces: pendingWorkspaceItem[];
}

const Changeschool = ({ onClose, workspaces = [], pendingWorkspaces= [] }: Props) => {
  const navigate = useNavigate();

  const goCreateSchool = () => {
    navigate(paths.createschool);
  };

  const goJoinSchool = () => {
    navigate(paths.schoolcode);
  };

  const handleArrowClick = (workspaceId: string) => {
    Cookies.set("workspaceId", workspaceId);
    window.location.reload();
  };

  return (
    <S.Modal onClick={onClose}>
      <S.ChangeSchoolMain>
        {workspaces.length === 0 ? (
          <S.NoSubscribedSchools>
            <S.NoSubSchoolText>가입된 학교가 없습니다.</S.NoSubSchoolText>
            <S.CreateSchool onClick={goCreateSchool}>새 학교 가입</S.CreateSchool>
          </S.NoSubscribedSchools>
        ) : (
          workspaces.map((school, index) => (
            <S.Subscribed key={index}>
              <S.JoinSchoolBox onClick={() => handleArrowClick(school.workspaceId)}>
                <S.SchoolName>{school.workspaceName}</S.SchoolName>
                <S.ArrowButton>
                  <S.ArrowImg src={Arrow} />
                </S.ArrowButton>
              </S.JoinSchoolBox>
            </S.Subscribed>
          ))
        )}

        {pendingWorkspaces.length > 0 && (
          <S.PendingSchool>
            <S.WaitingJoin>가입 대기 중</S.WaitingJoin>
            {pendingWorkspaces.map((school, index) => (
              <S.Subscribed key={index}>
                <S.PendingSchoolBox>
                  <S.SchoolName>{school.workspaceName}</S.SchoolName>
                </S.PendingSchoolBox>
              </S.Subscribed>
            ))}
          </S.PendingSchool>
        )}
        <S.MoveButton>
          <S.CreateSchool onClick={goCreateSchool}>새 학교 등록</S.CreateSchool>
          <S.JoinSchool onClick={goJoinSchool}>초대 코드로 가입</S.JoinSchool>
        </S.MoveButton>
      </S.ChangeSchoolMain>
    </S.Modal>
  );
};

export default Changeschool;
