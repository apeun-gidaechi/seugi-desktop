import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import config from "@/constants/config/config.json";
import * as S from "@/components/ChangeSchool/ChangeSchool.style";
import Arrow from "@/assets/image/home/arrow.svg";
import Setting from "@/assets/image/home/setting_fill.svg";

const Changeschool = () => {
  const [subscribedSchools, setSubSchools] = useState<any[]>([]);
  const [pendingSchools, setPenSchools] = useState<any[]>([]);
  const navigate = useNavigate();

  const goCreateSchool = () => {
    navigate("/selectschool");
  };

  const setSubscribedSchools = async () => {
    const token = window.localStorage.getItem("accessToken");

    const subscribed = await axios.get(`${config.serverurl}/workspace/`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    setSubSchools(subscribed.data.data);
  };

  const setPendingSchools = async () => {
    const token = window.localStorage.getItem("accessToken");

    const pending = await axios.get(
      `${config.serverurl}/workspace/my/wait-list`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

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

      {subscribedSchools.length > 0 && (
        <S.CreateSchool onClick={goCreateSchool}>새 학교 가입</S.CreateSchool>
      )}
    </S.ChangeSchoolMain>
  );
};

export default Changeschool;
