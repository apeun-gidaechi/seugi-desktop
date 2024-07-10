/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

import * as S from '@/components/Home/Subscribed/Home.style';
import Navbar from '@/components/Navbar/Navbar';
import Changeschool from '@/components/ChangeSchool/ChangeSchool';

import config from "@/constants/Home/config.json";

import HomeBookImg from '@/assets/image/home/homebook.svg';
import NotificationImg from '@/assets/image/home/notification.svg';
import ArrowImg from '@/assets/image/home/arrow.svg';
import CalendarImg from '@/assets/image/home/calendar.svg';
import SeugiImg from '@/assets/image/onbording/Start/seugilogo.svg';
import SchoolImg from '@/assets/image/home/school.svg';
import CafeteriaImg from '@/assets/image/home/cafeteria.svg'
import SearchImg from '@/assets/image/home/search.svg';

const numberLoop = () => {

  const numbers = [];

  for (let i = 1; i < config.subject.length + 1; i++) {
    i === config.today
      ? numbers.push(<S.Number className="Today" key={i}>{i}</S.Number>)
      : numbers.push(<S.Number key={i}>{i}</S.Number>);
  }

  return numbers;
};

const itemLoop = () => {
  const items = [];

  for (let i = 0; i < config.today; i++) {
    if (config.today === 1)
      items.push(<S.Item className="First Today" key={i}>{config.subject[i]}</S.Item>);
    else if (i === 0)
      items.push(<S.Item className="First" key={i}>{config.subject[i]}</S.Item>);
    else if (i === config.today - 1)
      items.push(<S.Item className="Today Last" key={i}>{config.subject[i]}</S.Item>);
    else items.push(<S.Item key={i}>{config.subject[i]}</S.Item>);
  }

  for (let i = config.today; i < config.subject.length; i++) {
    if (i === config.subject.length - 1)
      items.push(<S.Item className="After Last" key={i}>{config.subject[i]}</S.Item>);
    else items.push(<S.Item className="After" key={i}>{config.subject[i]}</S.Item>);
  }

  return items;
};

const SHome: React.FC = () => {
  const [showChangeschool, setShowChangeschool] = useState(false);

  const handleOnClicked = () => {
    setShowChangeschool(!showChangeschool);
  }

  return (
    <S.HomeContainer>
      <Navbar >
      </Navbar>
      <S.HomeMain>
        <S.HomeTitle>홈</S.HomeTitle>
        {showChangeschool && <Changeschool />}
        <S.ComponentsBox>
          <S.HomeWrapper1>
            <S.HomeWrapper1UpContainer>
              <S.ScheduleTitleBox>
                <S.BookLogo src={HomeBookImg} />
                <S.DailyScheduleTitle>오늘의 시간표</S.DailyScheduleTitle>
                <S.ArrowLButton>
                  <S.ArrowLogo src={ArrowImg} />
                </S.ArrowLButton>
              </S.ScheduleTitleBox>
              <S.NumberTable>{numberLoop()}</S.NumberTable>
              <S.ItemTable>{itemLoop()}</S.ItemTable>
            </S.HomeWrapper1UpContainer>
            <S.HomeWrapper1DownContainer>
              <S.LeftContainer>
                <S.NotificationContainer>
                  <S.NotificationLogo src={NotificationImg} />
                  <S.NotificationTitle>알림</S.NotificationTitle>
                  <S.ArrowLButton>
                    <S.NArrowLogo src={ArrowImg} />
                  </S.ArrowLButton>
                </S.NotificationContainer>
              </S.LeftContainer>
              <S.RightContainer>
                <S.RightUpContainer>
                  <S.SoonScheduleBox>
                    <S.CalendarLogo src={CalendarImg} />
                    <S.ScheduleTitle>다가오는 일정</S.ScheduleTitle>
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
                <S.RightDownContainer>
                  <S.SeugiTitleContainer>
                    <S.SeugiImg src={SeugiImg} />
                    <S.CatSeugiTitle>캣스기</S.CatSeugiTitle>
                  </S.SeugiTitleContainer>
                  <S.CatSeugi>
                    <S.CatSeugiInput
                      placeholder='2학년 4반에서 아무나 한 명 뽑아줘...' />
                    <S.SearchButton>
                      <S.SearchImg src={SearchImg} />
                    </S.SearchButton>
                  </S.CatSeugi>
                  <S.QuestionContainer>
                    <S.LastQuestionBox>
                      <S.LastText>
                        <S.Lastweek>지난주</S.Lastweek>
                      </S.LastText>
                    </S.LastQuestionBox>
                    <S.LastQuestion>
                      <S.QuestionText>급식에 복어가 나오는 날이 언제...</S.QuestionText>
                      <S.QuestionDay>6월 21일</S.QuestionDay>
                    </S.LastQuestion>
                    <S.LastQuestion>
                      <S.QuestionText>우리 학교 대회 담당하는 분이 누구...</S.QuestionText>
                      <S.QuestionDay>6월 21일</S.QuestionDay>
                    </S.LastQuestion>
                  </S.QuestionContainer>
                </S.RightDownContainer>
              </S.RightContainer>
            </S.HomeWrapper1DownContainer>
          </S.HomeWrapper1>

          <S.HomeWrapper2>
            <S.UpContainer>
              <S.SchoolTitleBox>
                <S.SchoolImg src={SchoolImg} />
                <S.MySchooliTitle>내 학교</S.MySchooliTitle>
              </S.SchoolTitleBox>
              <S.SchoolBox>
                <S.SchoolName>대구 소프트웨어 마이스터 고등학교</S.SchoolName>
                <S.ChangeSchool onClick={handleOnClicked}>전환</S.ChangeSchool>
              </S.SchoolBox>
            </S.UpContainer>
            <S.DownContainer>
              <S.CafeteriaTitleBox>
                <S.CafeteriaImg src={CafeteriaImg} />
                <S.CafeteriaTitle>오늘의 급식</S.CafeteriaTitle>
                <S.ArrowLButton>
                  <S.CArrowLogo src={ArrowImg} />
                </S.ArrowLButton>
              </S.CafeteriaTitleBox>
              <S.CafeteriaDiv>
                <S.TimeButton>
                  <S.Breakfast>아침</S.Breakfast>
                </S.TimeButton>
                <S.TimeButton>
                  <S.Lunch>점심</S.Lunch>
                </S.TimeButton>
                <S.TimeButton>
                  <S.Dinner>저녁</S.Dinner>
                </S.TimeButton>
              </S.CafeteriaDiv>
              <S.MenuList>
                <S.Menu> 오리훈제볶음밥 </S.Menu>
                <S.Menu> 간장두부조립 </S.Menu>
                <S.Menu> 배추김치 </S.Menu>
                <S.Menu> 초코첵스시리얼+우유 </S.Menu>
                <S.Menu> 오렌지 </S.Menu>
              </S.MenuList>
            </S.DownContainer>
          </S.HomeWrapper2>
        </S.ComponentsBox>
      </S.HomeMain>
    </S.HomeContainer>
  );
};

export default SHome;
