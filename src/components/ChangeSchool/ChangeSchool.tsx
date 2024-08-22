import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SeugiCustomAxios } from "@/api/SeugiCutomAxios";

import * as S from "@/components/ChangeSchool/ChangeSchool.style";
import Arrow from "@/assets/image/home/arrow.svg";
import Setting from "@/assets/image/home/setting_fill.svg";

const Changeschool = () => {
  const [subscribedSchools, setSubSchools] = useState<any[]>([]);
  const [pendingSchools, setPenSchools] = useState<any[]>([]);
  const navigate = useNavigate();

  const goCreateSchool = () => {
    navigate("/createschool");
  };

  const goJoinSchool = () => {
    navigate("/schoolcode");
  };

  const setSubscribedSchools = async () => {
    const res = await SeugiCustomAxios.get(`/workspace/`);

    setSubSchools(res.data.data);
  };

  const setPendingSchools = async () => {
    const pending = await SeugiCustomAxios.get(`/workspace/my/wait-list`,);

    setPenSchools(pending.data.data);
  };

  const handleArrowClick = (workspaceId: string) => {
    window.localStorage.setItem("workspaceId", workspaceId);
    window.location.reload();
  };

  useEffect(() => {
    setSubscribedSchools();
    setPendingSchools();
  }, []);

  return (
    <S.ChangeSchoolMain>
      {subscribedSchools.length === 0 ? (
        <S.NoSubscribedSchools>
          <S.NoSubSchoolText>가입된 학교가 없습니다.</S.NoSubSchoolText>
          <S.CreateSchool onClick={goCreateSchool}>새 학교 가입</S.CreateSchool>
        </S.NoSubscribedSchools>
      ) : (
        subscribedSchools.map((school, index) => (
          <S.Subscribed key={index}>
            <S.SchoolBox>
              <S.SchoolName>{school.workspaceName}</S.SchoolName>
              <S.ArrowButton
                onClick={() => handleArrowClick(school.workspaceId)}
              >
                <S.ArrowImg src={Arrow} />
              </S.ArrowButton>
            </S.SchoolBox>
          </S.Subscribed>
        ))
      )}

      {pendingSchools.length > 0 && (
        <S.PendingSchool>
          <S.WaitingJoin>가입 대기 중</S.WaitingJoin>
          {pendingSchools.map((school, index) => (
            <S.Subscribed key={index}>
              <S.SchoolBox>
                <S.SchoolName>{school.workspaceName}</S.SchoolName>
              </S.SchoolBox>
            </S.Subscribed>
          ))}
        </S.PendingSchool>
      )}
      <S.MoveButton>
        <S.CreateSchool onClick={goCreateSchool}>새 학교 등록</S.CreateSchool>
        <S.JoinSchool onClick={goJoinSchool}>초대 코드로 가입</S.JoinSchool>
      </S.MoveButton>
    </S.ChangeSchoolMain>
  );
};

export default Changeschool;
