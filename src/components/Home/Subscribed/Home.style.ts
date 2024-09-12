import styled from "styled-components";
import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: flex-start;
`;

export const HomeMain = styled.div`
  display: flex;
  padding: 48px 32px;
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
  height: 100px;

  color: ${SeugiColor.Black};

  ${SeugiFont.title.title1};
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

export const HomeWrapper1DownContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
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

export const CatSeugiBox = styled.div`
  position: relative;

  background-color: ${SeugiColor.White};

  padding: 12px;

  border-radius: 12px;

  width: 21vw;
  height: 16.5vh;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
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

  ${SeugiFont.subtitle.subtitle2};
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

  ${SeugiFont.subtitle.subtitle2};
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

  ${SeugiFont.subtitle.subtitle2};
`;

export const Lunch = styled.span`
  color: ${SeugiColor.Gray600};

  ${SeugiFont.subtitle.subtitle2};
`;

export const Dinner = styled.span`
  color: ${SeugiColor.Gray600};

  ${SeugiFont.subtitle.subtitle2};
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

  ${SeugiFont.subtitle.subtitle2};
`;

export const SchoolBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const SchoolName = styled.span`
  color: ${SeugiColor.Gray600};

  ${SeugiFont.subtitle.subtitle2};
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

  ${SeugiFont.body.body2};

  border: none;

  cursor: pointer;
`;

export const CafeteriaTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`