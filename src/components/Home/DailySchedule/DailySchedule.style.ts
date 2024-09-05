import styled from "styled-components";
import { SeugiColor } from "@/design/color/SeugiColor";
import { SeugiFont } from "@/design/text/SeugiFont";

export const Number = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex: 1;

  color: ${SeugiColor.Primary300};

  ${SeugiFont.body.body1};

  &.Today {
    color: ${SeugiColor.Primary500};
  }
  height: 1.7vh;
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

export const BookLogo = styled.img`
  position: relative;
`;

export const DailyScheduleTitle = styled.h2`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`;


export const ArrowLButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
`;

export const ArrowLogo = styled.img`
  position: relative;
`;

export const ScheduleDivBox = styled.div`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  border-radius: 12px;
  flex-direction: column;
`

export const NumberTable = styled.div`
  display: flex;

  top: 10px;
  padding: 8px 0;
`;

export const ItemTable = styled.table`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 9999px;
  background-color: ${SeugiColor.Primary100};
`;