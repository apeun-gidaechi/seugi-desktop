import React, { useEffect } from "react";

import * as S from "@/components/Home/Subscribed/Home.style";
import Navbar from "@/components/Navbar/Navbar";
import Schools from '@/components/Home/Schools/Schools';
import Meal from "@/components/Home/Meal/Meal";
import CatSeugi from "@/components/Home/CatSeugi/CatSeugi";
import Calendar from "@/components/Home/Calendar/Calendar";
import Notification from '@/components/Home/Notification/Notification';
import DailySchedule from "@/components/Home/DailySchedule/DailySchedule";

import { isTokenExpired } from "@/util/tokenUtils";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const token = window.localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (isTokenExpired(token)) {
      alert("세션이 만료되었습니다. 다시 로그인 해주세요.");
      window.localStorage.removeItem("accessToken");
      navigate("/");
    }
  }, [token, navigate]);

  
  return (
    <S.HomeContainer>
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
                <CatSeugi/>
              </S.RightContainer>
            </S.HomeWrapper1DownContainer>
          </S.HomeWrapper1>

          <S.HomeWrapper2>
            <Schools />
            <Meal />
          </S.HomeWrapper2>
        </S.ComponentsBox>
      </S.HomeMain>
    </S.HomeContainer>
  );
};

export default Home;
