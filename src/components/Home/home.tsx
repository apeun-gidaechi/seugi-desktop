/* eslint-disable react/react-in-jsx-scope */

// 히히 알아서 수정해봐 ~~

import * as S from "@/components/Home/home.style";
import SideBar from "../sidebar/sidebar";
import BookImg from "@/assets/image/home/book.svg";
import config from "@/constants/Home/config.json";
import NotificationImg from "@/assets/image/home/notification.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";
import CalendarImg from '@/assets/image/home/calendar.svg';
import SeugiImg from '@/assets/image/onbording/Start/seugilogo.svg';

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
      {/* <SideBar /> */}

      <div style={{ width: "100%", height: "100%" }}>
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
          </S.ScheduleBox>

          <S.CatSeugiBox>
            <div style={{ display: "flex", alignItems: "center", padding: "4px" }}>
              <S.SeugiImg src={SeugiImg} />
              <S.CatSeugiTitle>캣스기</S.CatSeugiTitle>
              <S.ArrowLButton>
                <S.CArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>
          </S.CatSeugiBox>

        </S.HomeWrapper>
      </div>
    </S.HomeContainer>
  );
};

export default Home;
