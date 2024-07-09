/* eslint-disable react/react-in-jsx-scope */

// 히히 알아서 수정해봐 ~~

import * as S from "@/components/Home/home.style";
import SideBar from "../sidebar/sidebar";
import BookImg from "@/assets/image/home/book.svg";
import config from "@/constants/Home/config.json";
import NotificationImg from "@/assets/image/home/notification.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";
import CalendarImg from '@/assets/image/home/calendar.svg';

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
      <SideBar />

      <div style={{ width: "100%", height: "100%" }}>
        <S.HomeTitle>홈</S.HomeTitle>

        <S.HomeWrapper>
          <S.DailyScheduleBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.BookLogo src={BookImg} />
              <S.DailyScheduleTitle>오늘의 시간표</S.DailyScheduleTitle>
              <S.ArrowLogo src={ArrowImg} />
            </div>

            <S.NumberTable>{numberLoop()}</S.NumberTable>
            <S.ItemTable>{itemLoop()}</S.ItemTable>
          </S.DailyScheduleBox>

          <S.NotificationBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.NotificationLogo src={NotificationImg} />
              <S.NotificationTitle>알림</S.NotificationTitle>
              <S.ArrowLogo src={ArrowImg} />
            </div>
          </S.NotificationBox>

          <S.ScheduleBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.CalendarLogo src={CalendarImg} />
              <S.DailyScheduleTitle>다가오는 일정</S.DailyScheduleTitle>
              <S.ArrowLogo src={ArrowImg} />
            </div>
          </S.ScheduleBox>
        </S.HomeWrapper>
      </div>
    </S.HomeContainer>
  );
};

export default Home;
