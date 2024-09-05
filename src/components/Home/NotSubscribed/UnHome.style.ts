import { SeugiColor } from "@/design/color/SeugiColor";
import { SeugiFont } from "@/design/text/SeugiFont";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  width: 1440px;
  height: 1024px;
  align-items: flex-start;
`

export const RegisterComponent = styled.div`  
  position:absolute;
  width: 1440px;
  height: 1024px;
  
`

export const HomeMain = styled.div`
  display: flex;
  padding: 64px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;

  background: ${SeugiColor.Primary050};

  margin-left:5.5%;
`

export const ComponentsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;

`

export const HomeTitle = styled.h1`
  position: relative;

  width: 100%;

  color: ${SeugiColor.Black};

  ${SeugiFont.title.title1};
`

export const HomeWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
`

export const HomeWrapper2 = styled.div`
  display: flex;
  width: 420px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

export const HomeWrapper1UpContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 12px;
  background: #FFF;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const ScheduleTitleBox = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const StitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const SDetailBox = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const SDetail = styled.span`
  color: ${SeugiColor.Gray600};

  ${SeugiFont.body.body2};
`

export const HomeWrapper1DownContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`

export const LeftContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

  border-radius: 12px;
  background: #FFF;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const NotificationContainer = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const NDtailBox = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const NDetail = styled.span`
  color:${SeugiColor.Gray600};

  ${SeugiFont.body.body2};
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
`

export const RightUpContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const RightDownContainer = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const SeugiTitleContainer = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

export const SeugiDetailBox = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const SeugiDetail = styled.div`
  color: ${SeugiColor.Gray600};

  ${SeugiFont.body.body2};
`

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
`

export const DownContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const SScheduleTitleBox = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
 
export const SSDetailBox = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const SSDetail = styled.span`
  color: ${SeugiColor.Gray600};

  ${SeugiFont.body.body2};
`

export const BookLogo = styled.img`
  
`

export const DailyScheduleTitle = styled.h2`
  margin-left:8px;

  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`

export const NotificationLogo = styled.img`
  width: 32px;
  height: 32px;
`

export const NotificationTitle = styled.h2`
  position: relative;

  left: 8px;

  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};

  margin-right:78%;
`

export const NArrowLogo = styled.img`
  position:relative;
`

export const ArrowLogo = styled.img`
  position: relative;
`

export const CalendarLogo = styled.img`
  width: 32px;
  height: 32px;

  margin-right:8px;
`

export const ScheduleTitle = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`

export const ArrowLButton = styled.button`
  background:none;
  border:none;

  cursor: pointer;
`

export const SArrowLogo = styled.img`
  position: relative;
`

export const SeugiImg = styled.img`
  width:28px;
  height:28px;

  margin-right:8px;
`

export const CatSeugiTitle = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};

  margin-right:73%;
`

export const CArrowLogo = styled.img`
  position: relative;
`

export const SchoolImg = styled.img`
  width: 28px;
  height: 28px;

  margin-right:8px;
`

export const SchoolTitleBox = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

export const MySchooliTitle = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};

  margin-right:18vw;
`
export const CafeteriaTitleBox = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CafeteriaImg = styled.img`
  width:28px;
  height:28px;

  margin-right:8px;
`

export const CafeteriaTitle = styled.p`
  color: v${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`

export const CafeteriaDiv = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const CafeteriaDetail = styled.span`
  color: ${SeugiColor.Gray600};

  ${SeugiFont.body.body2};
`

export const SchoolBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const SchoolDetailBox = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;

`

export const SchoolDetail = styled.span`
  color: ${SeugiColor.Gray600};

  ${SeugiFont.body.body2};

  margin-left:9vw;
`