/* eslint-disable react/react-in-jsx-scope */

// 히히 알아서 수정해봐 ~~

import * as S from "@/components/Home/home.style";
import Navbar from "@/components/Navbar/Navbar";

import initialConfig from "@/constants/Home/config.json";

import HomeBookImg from "@/assets/image/home/homebook.svg";
import NotificationImg from "@/assets/image/home/notification.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";
import CalendarImg from "@/assets/image/home/calendar.svg";
import SeugiImg from "@/assets/image/onbording/Start/seugilogo.svg";
import SchoolImg from "@/assets/image/home/school.svg";
import CafeteriaImg from "@/assets/image/home/cafeteria.svg";
import SearchImg from "@/assets/image/home/search.svg";
import Emoji from "@/assets/image/home/emoji.svg";
import Heart from "@/assets/image/home/heart.png";
import Fire from "@/assets/image/home/fire.png";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [config, setConfig] = useState(() => {
    const savedConfig = localStorage.getItem("config");
    return savedConfig ? JSON.parse(savedConfig) : initialConfig;
  });

  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(config));
  }, [config]);

  const navigate = useNavigate();

  const handleOnclicked = () => {
    navigate("/"); // 컴퍼넌트 팝업창으로 띄우기
  };

  return (
    <S.HomeContainer>
      <Navbar />

      <S.HomeMain style={{ width: "100%", height: "100%" }}>
        <S.HomeTitle>홈</S.HomeTitle>

        <S.HomeWrapper>
          <S.DailyScheduleBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.BookLogo src={HomeBookImg} />
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

            <S.NotificationContainer>
              {config.notification.map((item, parentKey) => (
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
                    {item.emoji.map((emoji, childKey) => (
                      <S.NotificationEmojiWrapper
                        onClick={() => handleEmojiClick(parentKey, childKey)}
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
            </S.NotificationContainer>
          </S.NotificationBox>

          <S.ScheduleBox>
            <div
              style={{ display: "flex", alignItems: "center", padding: "4px" }}
            >
              <S.CalendarLogo src={CalendarImg} />
              <S.ScheduleTitle>다가오는 일정</S.ScheduleTitle>
              <S.ArrowLButton>
                <S.SArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>
          </S.ScheduleBox>

          <S.CatSeugiBox>
            <div
              style={{ display: "flex", alignItems: "center", padding: "4px" }}
            >
              <S.SeugiImg src={SeugiImg} />
              <S.CatSeugiTitle>캣스기</S.CatSeugiTitle>
              <S.ArrowLButton>
                <S.CArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>
            <S.CatSeugi>
              <S.CatSeugiInput placeholder="2학년 4반에서 아무나 한 명 뽑아줘..." />
              <S.SearchImg src={SearchImg} />
            </S.CatSeugi>
            <S.LastQuestionBox>
              <S.Lastweek>지난주</S.Lastweek>
            </S.LastQuestionBox>
            <S.LastQuestion>
              <S.QuestionText>급식에 복어가 나오는 날이 언제...</S.QuestionText>
              <S.QuestionDay>6월 21일</S.QuestionDay>
            </S.LastQuestion>
            <S.LastQuestion>
              <S.QuestionText>
                우리 학교 대회 담당하는 분이 누구...
              </S.QuestionText>
              <S.QuestionDay>6월 21일</S.QuestionDay>
            </S.LastQuestion>
          </S.CatSeugiBox>

          <S.MySchoolBox>
            <div
              style={{ display: "flex", alignItems: "center", padding: "4px" }}
            >
              <S.SchoolImg src={SchoolImg} />
              <S.MySchooliTitle>내 학교</S.MySchooliTitle>
              <S.ArrowLButton>
                <S.CArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>
            <S.SchoolBox>
              <S.SchoolName>대구 소프트웨어 마이스터 고등학교</S.SchoolName>
              <S.ChangeSchool onClick={handleOnclicked}>전환</S.ChangeSchool>
            </S.SchoolBox>
          </S.MySchoolBox>

          <S.CafeteriaBox>
            <div
              style={{ display: "flex", alignItems: "center", padding: "4px" }}
            >
              <S.CafeteriaImg src={CafeteriaImg} />
              <S.CafeteriaTitle>오늘의 급식</S.CafeteriaTitle>
              <S.ArrowLButton>
                <S.CArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
            </div>
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
          </S.CafeteriaBox>
        </S.HomeWrapper>
      </S.HomeMain>
    </S.HomeContainer>
  );
};

export default Home;
