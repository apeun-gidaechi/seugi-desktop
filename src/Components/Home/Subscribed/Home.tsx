import React from "react";

import * as S from "@/Components/Home/Subscribed/Home.style";
import Navbar from "@/Components/common/Navbar/Navbar";

import Schools from '@/Components/Home/Schools/Schools';
import Meal from "@/Components/Home/Meal/Meal";
import CatSeugi from "@/Components/Home/CatSeugi/CatSeugi";
import Calendar from "@/Components/Home/Calendar/Calendar";
import Notification from '@/Components/Home/Notification/Notification';
import DailySchedule from "@/Components/Home/DailySchedule/DailySchedule";
import { clearAccessToken } from "@/Api/SeugiCutomAxios";
import Session from "@/Util/TokenExpired/TokenExpired";
import Assignment from "../Assignment/Assignment";

import useHome from '@/Hooks/HomeHook/Home/index';

const Home = () => {
  const { ...Home } = useHome();

  return (
    <S.HomeContainer>
      <Session token={Home.token} clearAccessToken={clearAccessToken} />
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
