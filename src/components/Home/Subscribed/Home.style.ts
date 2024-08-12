import styled from "styled-components";
import { SeugiColor } from "@/design/color/SeugiColor";
import { SeugiText } from "@/design/text/SeugiText";

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: flex-start;
`;

export const HomeMain = styled.div`
  display: flex;
  padding: 64px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;

  width: 100vw;

  background: ${SeugiColor.Primary050};

  margin-left: 5%;
`;

export const ComponentsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const HomeTitle = styled.h1`
  margin-left: 1%;

  position: relative;

  width: 100%;
  height: 100%;

  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const HomeWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
`;

export const HomeWrapper2 = styled.div`
  display: flex;
  width: 29vw;
  height: 22vw;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const HomeWrapper1UpContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Corner-Small, 10px);
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const ScheduleTitleBox = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const ScheduleTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const HomeWrapper1DownContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

export const LeftContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Corner-Small, 10px);
  flex: 1 0 0;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const NotificationContainer = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const NotificationTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const NotificationWrapper = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  border-radius: 8px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const NotificationContentAuthor = styled.span`
  color:${SeugiColor.Gray600};

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const NotificationContentTitle = styled.span`
  position: relative;

  color: ${SeugiColor.Black};

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const NotificationContentDescription = styled.span`
  position: relative;

  color: ${SeugiColor.Black};

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
`;

export const NotificationAddEmoji = styled.img`
  position: relative;

  width: 28px;
  height: 28px;

  padding: 4px;
`;

export const NotificationEmojiBox = styled.div`
  display: flex;

  flex-direction: row;
`;

export const NotificationEmojiWrapper = styled.div`
  position: relative;

  display: flex;

  justify-content: center;
  align-items: center;

  margin-right: 4px;

  cursor: pointer;

  &.Clicked {
    border-radius: 8px;
    border: 1px solid ${SeugiColor.Primary300};
    background: ${SeugiColor.Primary100};
  }

  transition: background 0.25s;

  border-radius: 8px;
  border: 1px solid ${SeugiColor.Gray200};
  background: ${SeugiColor.Gray100};

  width: 51px;
  height: 29px;

  position: relative;
`;

export const NotificationEmoji = styled.img`
  position: relative;

  width: 15px;
  height: 16px;
`;

export const NotificationEmojiCount = styled.span`
  margin: 3px;

  color: ${SeugiColor.Gray600};
  /* Body1 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
`;

export const TitleContainer = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
`;

export const RightUpContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const RightDownContainer = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const SeugiTitleContainer = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const UpContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const DownContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const SoonScheduleBox = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const BookLogo = styled.img`
  position: relative;
`;

export const DailyScheduleTitle = styled.h2`
  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const NumberTable = styled.div`
  display: flex;

  top: 10px;
  padding: 8px 0;
`;

export const Number = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex: 1;

  color: ${SeugiColor.Primary300};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 18.2px */

  &.Today {
    color: ${SeugiColor.Primary500};
  }
  height: 1.7vh;
`;

export const ItemTable = styled.table`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 9999px;
  background-color: ${SeugiColor.Primary100};
`;

export const Item = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex: 1;

  padding: 8px 0;

  color: ${SeugiColor.Primary200};

  background-color: ${SeugiColor.Primary500};

  &.First {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  &.Last {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &.Today {
    color: ${SeugiColor.White};
  }

  &.After {
    background-color: transparent;
    color: ${SeugiColor.Primary300};
  }
`;

export const NotificationLogo = styled.img`
  width: 32px;
  height: 32px;
`;

export const NotificationTitle = styled.h2`
  position: relative;

  left: 8px;

  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */
`;

export const NArrowLogo = styled.img`
  position: relative;
`;

export const ArrowLogo = styled.img`
  position: relative;
`;

export const ScheduleBox = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: ${SeugiColor.White};

  padding: 12px;

  border-radius: 12px;

  width: 21vw;
  height: 18.5vh;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const ScheduleDivBox = styled.div`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  border-radius: 12px;
  flex-direction: column;
`

export const CalendarLogo = styled.img`
  width: 32px;
  height: 32px;
`;

export const ScheduleTitle = styled.span`
  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

  margin-right: 60%;
`;

export const ArrowLButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
`;

export const SArrowLogo = styled.img`
  position: relative;
`;

export const CatSeugiBox = styled.div`
  position: relative;

  background-color: ${SeugiColor.White};

  padding: 12px;

  border-radius: 12px;

  width: 21vw;
  height: 16.5vh;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const SeugiImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const CatSeugiTitle = styled.span`
  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const CArrowLogo = styled.img`
  position: relative;
`;

export const SchoolImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const SchoolTitleBox = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const MySchooliTitle = styled.span`
  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;
export const CafeteriaTitleBox = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const CafeteriaImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const CafeteriaTitle = styled.p`
  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */

  margin-right: 65%;
`;

export const DummyBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const DateDummy = styled.div`
  display: flex;
  padding: 4px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  border-radius: 8px;
`;

export const DateText = styled.span`
  color: ${SeugiColor.Primary500};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 18.2px */
`;

export const SubDummy = styled.div`
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const SubTitle = styled.span`
  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
`;

export const D_DayDummy = styled.div`
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  border-radius: 8px;
`;

export const D_DayText = styled.span`
  color: ${SeugiColor.Gray600};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 15.6px */
`;

export const CatSeugi = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 99px;
  border: 1.5px solid var(--Gradient-Primary, #1C8DF4);
  background: ${SeugiColor.White};
`;

export const CatSeugiInput = styled.input`
  width: 100%;
  height: 29px;
  border: none;
  &::placeholder {
    color: ${SeugiColor.Gray500};

    font-family: "Pretendard-Regular", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

  &:focus {
    outline: none;
  }

  padding: 0 0 0 4px;
`;

export const SearchImg = styled.img`
  padding: 0 4px 0 0;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const LastQuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const LastText = styled.div`
  display: flex;
  padding: 0px 4px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const Lastweek = styled.span`
  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const LastQuestion = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 4px;
  background: ${SeugiColor.Gray100};
`;

export const QuestionText = styled.span`
  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const QuestionDay = styled.span`
  color: ${SeugiColor.Gray600};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const CafeteriaDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  margin-left: 5px;
`;

export const TimeButton = styled.button`
  border: none;
  background: none;

  cursor: pointer;
`;

export const Breakfast = styled.span`
  color: ${SeugiColor.Black};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const Lunch = styled.span`
  color: ${SeugiColor.Gray600};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const Dinner = styled.span`
  color: ${SeugiColor.Gray600};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const MenuList = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  border-radius: 8px;
  background: ${SeugiColor.Gray100};
`;

export const Menu = styled.span`
  color:${SeugiColor.Gray700};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const SchoolBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const SchoolName = styled.span`
  color: ${SeugiColor.Gray600};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

export const ChangeSchool = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: ${SeugiColor.Gray100};

  color: ${SeugiColor.Gray600};

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  border: none;

  cursor: pointer;
`;

export const SearchButton = styled.button`
  border: none;
  background: none;

  cursor: pointer;
`;
