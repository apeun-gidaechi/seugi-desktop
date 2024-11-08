import { SeugiColor } from '@/Design/color/SeugiColor';
import { SeugiFont } from '@/Design/text/SeugiFont';
import styled from 'styled-components';

export const CalendarDiv = styled.div`
    position:absolute;
    display: flex;
    width: 360px;
    height: 410px;
    padding: 16px;
    flex-direction: column;
    align-items: center;

    border-radius: 16px;
    background: ${SeugiColor.White};

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);

    z-index:999;
`

export const TimetableContainer = styled.div`
    grid-template-columns: repeat(6, 1fr); 
    grid-template-rows: repeat(8, 1fr); 
    display: grid;

    border-radius: 12px;
    background: ${SeugiColor.White};
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const HeaderCell = styled.div`
  background-color: #f0f0f0;
  color:${SeugiColor.Gray500};
  ${SeugiFont.caption.caption2};
  text-align: center;
  padding: 10px;
`

export const DayHeaderCell = styled.div`
  background-color: #f0f0f0;
  color:${SeugiColor.Gray500};
  ${SeugiFont.caption.caption2};
  text-align: center;
  padding: 10px;
`;

export const TimeHeaderCell = styled.div`
    background-color: #f0f0f0;
    color:${SeugiColor.Gray600};
    ${SeugiFont.caption.caption2};
    text-align: center;
    padding: 10px;
`

export const TimeCell = styled.div`
  background-color: ${SeugiColor.White};
  border: 1px solid #ddd;
  text-align: center;
  padding: 10px;
`;

export const HeaderControls = styled.div`
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    border-radius: 12px;
    background: ${SeugiColor.White};

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);

    margin-bottom:4px;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0 20px;

  &:hover {
    color: ${SeugiColor.Primary500};
  }
`;

export const WeekDisplay = styled.div`
    ${SeugiFont.subtitle.subtitle2};
    color:${SeugiColor.Black};
    text-align: center;
`;
