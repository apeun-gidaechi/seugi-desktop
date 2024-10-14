import styled from "styled-components";
import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";

export const RightUpContainer = styled.div`
  padding: 12px 12px 16px 12px;
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

export const SoonScheduleTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CalendarLogo = styled.img`
  width: 32px;
  height: 32px;
`;


export const ScheduleTitle = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`;

export const ArrowLButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
`;

export const SArrowLogo = styled.img`
  position: relative;
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const DateBox = styled.div`
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

  ${SeugiFont.body.body1};
`;

export const SubBox = styled.div`
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

  ${SeugiFont.body.body2};
`;

export const D_DayBox = styled.div`
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

  ${SeugiFont.caption.caption1};
`;

export const NoCalendarDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const NoCalendarImg = styled.img`
  margin-bottom:4px;
`

export const NoCalendarText = styled.span`
  ${SeugiFont.subtitle.subtitle2};
  color: ${SeugiColor.Black};
`