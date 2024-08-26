import React, { useState, useEffect } from "react";

import * as S from "@/components/Home/Subscribed/Home.style";
import Navbar from "@/components/Navbar/Navbar";

import initialConfig from "@/constants/Home/config.json";

import HomeBookImg from "@/assets/image/home/homebook.svg";
import NotificationImg from "@/assets/image/home/notification.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";
import CalendarImg from "@/assets/image/home/calendar.svg";

import Emoji from "@/assets/image/home/emoji.svg";
import Heart from "@/assets/image/home/heart.png";
import Fire from "@/assets/image/home/fire.png";

import { isTokenExpired } from "@/util/tokenUtils";
import { useNavigate } from "react-router-dom";

import Schools from '@/components/Home/Schools/Schools';
import Meal from "@/components/Home/Meal/Meal";
import CatSeugi from "@/components/Home/CatSeugi/CatSeugi";

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

  const [config, setConfig] = useState(() => {
    const savedConfig = localStorage.getItem("config");
    return savedConfig ? JSON.parse(savedConfig) : initialConfig;
  });


  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(config));
  }, [config]);

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
        items.push(
          <S.Item className="First Today Last">{config.subject[i]}</S.Item>
        );
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

  const handleEmojiClick = (parentKey: number, childKey: number) => {
    setConfig((prevConfig: any) => {
      const newConfig = JSON.parse(JSON.stringify(prevConfig));

      if (prevConfig.notification[parentKey].like[childKey] === true) {
        newConfig.notification[parentKey].like[childKey] = false;
        newConfig.notification[parentKey].emoji[childKey] -= 1;
      } else {
        newConfig.notification[parentKey].like[childKey] = true;
        newConfig.notification[parentKey].emoji[childKey] += 1;
      }

      return newConfig;
    });
  };
  return (
    <S.HomeContainer>
      <Navbar />
      <S.HomeMain>
        <S.HomeTitle>홈</S.HomeTitle>
        <S.ComponentsBox>
          <S.HomeWrapper1>
            <S.HomeWrapper1UpContainer>
              <S.ScheduleTitleBox>
                <S.ScheduleTitleDiv>
                  <S.BookLogo src={HomeBookImg} />
                  <S.DailyScheduleTitle>오늘의 시간표</S.DailyScheduleTitle>
                </S.ScheduleTitleDiv>
                <S.ArrowLButton>
                  <S.ArrowLogo src={ArrowImg} />
                </S.ArrowLButton>
              </S.ScheduleTitleBox>
              <S.ScheduleDivBox>
                <S.NumberTable>{numberLoop()}</S.NumberTable>
                <S.ItemTable>{itemLoop()}</S.ItemTable>
              </S.ScheduleDivBox>
            </S.HomeWrapper1UpContainer>
            <S.HomeWrapper1DownContainer>
              <S.LeftContainer>
                <S.NotificationContainer>
                  <S.NotificationTitleContainer>
                    <S.NotificationLogo src={NotificationImg} />
                    <S.NotificationTitle>알림</S.NotificationTitle>
                  </S.NotificationTitleContainer>
                  <S.ArrowLButton>
                    <S.NArrowLogo src={ArrowImg} />
                  </S.ArrowLButton>
                </S.NotificationContainer>
                <S.NotificationBox>
                  {config.notification.map((item: any, parentKey: any) => (
                    <S.NotificationWrapper key={parentKey}>
                      <S.NotificationContentAuthor>
                        {item.author} · {item.date}
                      </S.NotificationContentAuthor>
                      <S.NotificationContentTitle>
                        {item.title}
                      </S.NotificationContentTitle>
                      <S.NotificationContentDescription>
                        {item.content}
                      </S.NotificationContentDescription>
                      <S.NotificationEmojiBox>
                        <S.NotificationAddEmoji src={Emoji} />
                        {item.emoji.map((emoji: any, childKey: any) => (
                          <S.NotificationEmojiWrapper
                            onClick={() =>
                              handleEmojiClick(parentKey, childKey)
                            }
                            key={childKey}
                            className={
                              item.like[childKey] === true ? "Clicked" : ""
                            }
                          >
                            {childKey === 0 ? (
                              <S.NotificationEmoji src={Heart} />
                            ) : (
                              <S.NotificationEmoji src={Fire} />
                            )}
                            <S.NotificationEmojiCount
                              className={
                                item.like[childKey] === true ? "Clicked" : ""
                              }
                            >
                              {emoji}
                            </S.NotificationEmojiCount>
                          </S.NotificationEmojiWrapper>
                        ))}
                      </S.NotificationEmojiBox>
                    </S.NotificationWrapper>
                  ))}
                </S.NotificationBox>
              </S.LeftContainer>
              <S.RightContainer>
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
