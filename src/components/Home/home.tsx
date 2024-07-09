/* eslint-disable react/react-in-jsx-scope */

// 히히 알아서 수정해봐 ~~

import * as S from '@/components/Home/home.style';
import Navbar from '@/components/Navbar/Navbar';

import config from '@/constants/Home/config.json';

import BookImg from '@/assets/image/home/book.svg';
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
      ? numbers.push(<S.Number className="Today">{i}</S.Number>)
      : numbers.push(<S.Number>{i}</S.Number>);
  }

  return numbers;
};

const itemLoop = () => {
  const items = [];

  for (let i = 0; i < config.today; i++) {
    if (config.today === 1)
      items.push(<S.Item className="First Today">{config.subject[i]}</S.Item>);
    else if (i === 0)
      items.push(<S.Item className="First">{config.subject[i]}</S.Item>);
    else if (i === config.today - 1)
      items.push(<S.Item className="Today Last">{config.subject[i]}</S.Item>);
    else items.push(<S.Item>{config.subject[i]}</S.Item>);
  }

  for (let i = config.today; i < config.subject.length; i++) {
    if (i === config.subject.length - 1)
      items.push(<S.Item className="After Last">{config.subject[i]}</S.Item>);
    else items.push(<S.Item className="After">{config.subject[i]}</S.Item>);
  }

  return items;
};

const Home: React.FC = () => {
  return (
    <S.HomeContainer>
      <Navbar />

      <S.HomeMain style={{ width: "100%", height: "100%" }}>
        <S.HomeTitle>홈</S.HomeTitle>

        <S.HomeWrapper>
          <S.DailyScheduleBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.BookLogo src={BookImg} />
              <S.DailyScheduleTitle>오늘의 시간표</S.DailyScheduleTitle>
              <S.ArrowLButton>
                <S.ArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>

            <S.NumberTable>{numberLoop()}</S.NumberTable>
            <S.ItemTable>{itemLoop()}</S.ItemTable>
          </S.DailyScheduleBox>

          <S.NotificationBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.NotificationLogo src={NotificationImg} />
              <S.NotificationTitle>알림</S.NotificationTitle>
              <S.ArrowLButton>
                <S.NArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>
          </S.NotificationBox>

          <S.ScheduleBox>
            <div style={{ display: "flex", alignItems: "center", padding: "4px" }}>
              <S.CalendarLogo src={CalendarImg} />
              <S.ScheduleTitle>다가오는 일정</S.ScheduleTitle>
              <S.ArrowLButton>
                <S.SArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>
            <S.Dummy>
              <S.Dummy1>
                <S.DummyDate>7/21</S.DummyDate>
                <S.SubTitle>체육대회</S.SubTitle>
                <S.D_Day>D-3</S.D_Day>
              </S.Dummy1>
            </S.Dummy>
            <S.Dummy>
              <S.Dummy2>
                <S.DummyDate>7/25</S.DummyDate>
                <S.SubTitle>기숙사 정기점호</S.SubTitle>
                <S.D_Day>D-7</S.D_Day>
              </S.Dummy2>
            </S.Dummy>
            <S.Dummy>
              <S.Dummy3>
                <S.DummyDate>8/15</S.DummyDate>
                <S.SubTitle>KBS 촬영</S.SubTitle>
                <S.D_Day>D-21</S.D_Day>
              </S.Dummy3>
            </S.Dummy>
            <S.Dummy>
              <S.Dummy4>
                <S.DummyDate>8/15</S.DummyDate>
                <S.SubTitle>KBS 촬영</S.SubTitle>
                <S.D_Day>D-21</S.D_Day>
              </S.Dummy4>
            </S.Dummy>
            <S.Dummy>
              <S.Dummy5>
                <S.DummyDate>8/15</S.DummyDate>
                <S.SubTitle>KBS 촬영</S.SubTitle>
                <S.D_Day>D-21</S.D_Day>
              </S.Dummy5>
            </S.Dummy>
          </S.ScheduleBox>

          <S.CatSeugiBox>
            <div style={{ display: "flex", alignItems: "center", padding: "4px" }}>
              <S.SeugiImg src={SeugiImg} />
              <S.CatSeugiTitle>캣스기</S.CatSeugiTitle>
              <S.ArrowLButton>
                <S.CArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>
            <S.CatSeugi>
              <S.CatSeugiInput 
              placeholder='2학년 4반에서 아무나 한 명 뽑아줘...'/>
              <S.SearchImg src={SearchImg}/>
            </S.CatSeugi>
            <S.LastQuestionBox>
              <S.Lastweek>지난주</S.Lastweek>
            </S.LastQuestionBox>
            <S.LastQuestion>
              <S.QuestionText>급식에 복어가 나오는 날이 언제...</S.QuestionText>
              <S.QuestionDay>6월 21일</S.QuestionDay>
            </S.LastQuestion>
            <S.LastQuestion>
              <S.QuestionText>우리 학교 대회 담당하는 분이 누구...</S.QuestionText>
              <S.QuestionDay>6월 21일</S.QuestionDay>
            </S.LastQuestion>
          </S.CatSeugiBox>

          <S.MySchoolBox>
            <div style={{ display: "flex", alignItems: "center", padding: "4px" }}>
              <S.SchoolImg src={SchoolImg} />
              <S.MySchooliTitle>내 학교</S.MySchooliTitle>
              <S.ArrowLButton>
                <S.CArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>
          </S.MySchoolBox>

          <S.CafeteriaBox>
            <div style={{ display: "flex", alignItems: "center", padding: "4px" }}>
              <S.CafeteriaImg src={CafeteriaImg} />
              <S.CafeteriaTitle>오늘의 급식</S.CafeteriaTitle>
              <S.ArrowLButton>
                <S.CArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>
          </S.CafeteriaBox>

        </S.HomeWrapper>
      </S.HomeMain>
    </S.HomeContainer>
  );
};

export default Home;
