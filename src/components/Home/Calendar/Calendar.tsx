import React from 'react'
import * as S from '@/components/Home/Calendar/Calendar.style';

import CalendarImg from "@/assets/image/home/calendar.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";

const Calendar = () => {
  return (
      <S.RightUpContainer>
          <S.SoonScheduleBox>
              <S.SoonScheduleTitle>
                  <S.CalendarLogo src={CalendarImg} />
                  <S.ScheduleTitle>다가오는 일정</S.ScheduleTitle>
              </S.SoonScheduleTitle>
              <S.ArrowLButton>
                  <S.SArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
          </S.SoonScheduleBox>
          <S.DummyBox>
              <S.DateDummy>
                  <S.DateText>7/21</S.DateText>
                  <S.DateText>7/25</S.DateText>
                  <S.DateText>8/15</S.DateText>
                  <S.DateText>8/15</S.DateText>
                  <S.DateText>8/15</S.DateText>
              </S.DateDummy>
              <S.SubDummy>
                  <S.SubTitle>체육대회</S.SubTitle>
                  <S.SubTitle>기숙사 정기점호</S.SubTitle>
                  <S.SubTitle>KBS 촬영</S.SubTitle>
                  <S.SubTitle>KBS 촬영</S.SubTitle>
                  <S.SubTitle>KBS 촬영</S.SubTitle>
              </S.SubDummy>
              <S.D_DayDummy>
                  <S.D_DayText>D-3</S.D_DayText>
                  <S.D_DayText>D-7</S.D_DayText>
                  <S.D_DayText>D-21</S.D_DayText>
                  <S.D_DayText>D-21</S.D_DayText>
                  <S.D_DayText>D-21</S.D_DayText>
              </S.D_DayDummy>
          </S.DummyBox>
      </S.RightUpContainer>
  )
}

export default Calendar