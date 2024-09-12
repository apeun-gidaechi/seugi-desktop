import React, { useEffect } from "react";

import * as S from "@/components/Home/Subscribed/Home.style";
import Navbar from "@/components/Navbar/Navbar";

import Schools from '@/components/Home/Schools/Schools';
import Meal from "@/components/Home/Meal/Meal";
import CatSeugi from "@/components/Home/CatSeugi/CatSeugi";
import Calendar from "@/components/Home/Calendar/Calendar";
import Notification from '@/components/Home/Notification/Notification';
import DailySchedule from "@/components/Home/DailySchedule/DailySchedule";
import { handleUserRole } from '@/Util/Role/WhatisYourRole';
import { clearAccessToken } from "@/api/SeugiCutomAxios";
import Session from "@/Util/TokenExpired/TokenExpired";
import Assignment from "../Assignment/Assignment";

const Home: React.FC = () => {
  const token = window.localStorage.getItem("accessToken");
  const workspaceId = window.localStorage.getItem('workspaceId');
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (workspaceId !== null) {
    handleUserRole(workspaceId);
  } else {
    console.error('워크스페이스가 없어요');
  }


  return (
    <S.HomeContainer>
      <Session token={token} clearAccessToken={clearAccessToken} />
      <Navbar />
      <S.HomeMain>
        <S.HomeTitle>홈</S.HomeTitle>
        <S.ComponentsBox>
          <S.HomeWrapper1>
            <DailySchedule />
            <S.HomeWrapper1DownContainer>
              <Notification />
              <S.RightContainer>
                <Calendar />
                <CatSeugi />
              </S.RightContainer>
            </S.HomeWrapper1DownContainer>
          </S.HomeWrapper1>

          <S.HomeWrapper2>
            <Schools />
            <Meal />
            <Assignment />
          </S.HomeWrapper2>
        </S.ComponentsBox>
      </S.HomeMain>
    </S.HomeContainer>
  );
};

export default Home;
