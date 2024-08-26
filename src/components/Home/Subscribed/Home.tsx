import React, { useState, useEffect, useRef } from "react";

import * as S from "@/components/Home/Subscribed/Home.style";
import Navbar from "@/components/Navbar/Navbar";
import Changeschool from "@/components/ChangeSchool/ChangeSchool";

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

import { isTokenExpired } from "@/util/tokenUtils";
import { useNavigate } from "react-router-dom";
import { SeugiCustomAxios } from "@/api/SeugiCutomAxios";

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

  const [showChangeschool, setShowChangeschool] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState("아침");
  const [workspaceName, setWorkspaceName] = useState("");

  const [config, setConfig] = useState(() => {
    const savedConfig = localStorage.getItem("config");
    return savedConfig ? JSON.parse(savedConfig) : initialConfig;
  });

  const getWorkspaceName = async () => {
    const workspaceId = window.localStorage.getItem("workspaceId");

    const res = await SeugiCustomAxios.get(`/workspace/${workspaceId}`);

    setWorkspaceName(res.data.data.workspaceName);
  };

  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    getWorkspaceName();
  }, []);

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

  const handleOnClicked = () => {
    setShowChangeschool(!showChangeschool);
  };

  const getMenu = () => {
    switch (selectedMeal) {
      case "아침":
        return (
          <>
            <S.Menu> 쇠고기야채죽 </S.Menu>
            <S.Menu> 연유프렌치토스트 </S.Menu>
            <S.Menu> 배추김치 </S.Menu>
            <S.Menu> 포도 </S.Menu>
            <S.Menu> 허쉬초코크런치시리얼+우유 </S.Menu>
          </>
        );
      case "점심":
        return (
          <>
            <S.Menu> 추가밥 </S.Menu>
            <S.Menu> 메콤로제해물파스타 </S.Menu>
            <S.Menu> #브리오슈수제버거 </S.Menu>
            <S.Menu> 모둠야채피클 </S.Menu>
            <S.Menu> 맥케인 </S.Menu>
            <S.Menu> 망고사고 </S.Menu>
          </>
        );
      case "저녁":
        return (
          <>
            <S.Menu> 현미밥 </S.Menu>
            <S.Menu> 돼지국밥 </S.Menu>
            <S.Menu> 삼색나물무침 </S.Menu>
            <S.Menu> -오징어야채볶음 </S.Menu>
            <S.Menu> 석박지 </S.Menu>
          </>
        );
      default:
        return null;
    }
  };

  const ChangeSchoolRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ChangeSchoolRef.current && !ChangeSchoolRef.current.contains(e.target as Node)) {
        setShowChangeschool(false);
      }
    };

    if (showChangeschool) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showChangeschool]);
  return (
    <S.HomeContainer>
      <Navbar />
      <S.HomeMain>
        <S.HomeTitle>홈</S.HomeTitle>
        {showChangeschool && (
          <div ref={ChangeSchoolRef}>
            <Changeschool onClose={handleOnClicked} />
          </div>
        )}
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
                <S.RightDownContainer>
                  <S.SeugiTitleContainer>
                    <S.SeugiImg src={SeugiImg} />
                    <S.CatSeugiTitle>캣스기</S.CatSeugiTitle>
                  </S.SeugiTitleContainer>
                  <S.CatSeugi>
                    <S.CatSeugiInput placeholder="2학년 4반에서 아무나 한 명 뽑아줘..." />
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
                      <S.QuestionText>
                        급식에 복어가 나오는 날이 언제...
                      </S.QuestionText>
                      <S.QuestionDay>6월 21일</S.QuestionDay>
                    </S.LastQuestion>
                    <S.LastQuestion>
                      <S.QuestionText>
                        우리 학교 대회 담당하는 분이 누구...
                      </S.QuestionText>
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
                <S.SchoolName>{workspaceName}</S.SchoolName>
                <S.ChangeSchool onClick={handleOnClicked}>전환</S.ChangeSchool>
              </S.SchoolBox>
            </S.UpContainer>
            <S.DownContainer>
              <S.CafeteriaTitleBox>
                <S.CafeteriaTitleDiv>
                  <S.CafeteriaImg src={CafeteriaImg} />
                  <S.CafeteriaTitle>오늘의 급식</S.CafeteriaTitle>
                </S.CafeteriaTitleDiv>
                <S.ArrowLButton>
                  <S.CArrowLogo src={ArrowImg} />
                </S.ArrowLButton>
              </S.CafeteriaTitleBox>
              <S.CafeteriaDiv>
                <S.TimeButton onClick={() => setSelectedMeal("아침")}>
                  <S.Breakfast
                    className={selectedMeal === "아침" ? "selected" : ""}
                    style={{
                      color: selectedMeal === "아침" ? "#000" : "#787878",
                    }}
                  >
                    아침
                  </S.Breakfast>
                </S.TimeButton>
                <S.TimeButton onClick={() => setSelectedMeal("점심")}>
                  <S.Breakfast
                    className={selectedMeal === "점심" ? "selected" : ""}
                    style={{
                      color: selectedMeal === "점심" ? "#000" : "#787878",
                    }}
                  >
                    점심
                  </S.Breakfast>
                </S.TimeButton>
                <S.TimeButton onClick={() => setSelectedMeal("저녁")}>
                  <S.Breakfast
                    className={selectedMeal === "저녁" ? "selected" : ""}
                    style={{
                      color: selectedMeal === "저녁" ? "#000" : "#787878",
                    }}
                  >
                    저녁
                  </S.Breakfast>
                </S.TimeButton>
              </S.CafeteriaDiv>
              <S.MenuList>{getMenu()}</S.MenuList>
            </S.DownContainer>
          </S.HomeWrapper2>
        </S.ComponentsBox>
      </S.HomeMain>
    </S.HomeContainer>
  );
};

export default Home;
