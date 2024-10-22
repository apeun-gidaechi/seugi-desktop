import React, { useState, useEffect } from 'react';
import * as S from './DetailTimeTable.style';
import { addDays, format, startOfWeek } from 'date-fns';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import Cookies from 'js-cookie';

interface TimetableData {
  period: number;
  day: string;
  subject: string;
}

const DetailTimetable = () => {
  const workspaceId = Cookies.get("workspaceId");
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 })); // 월요일 시작
  const [timetableData, setTimetableData] = useState<(TimetableData | null)[][]>([]);

  const days = ['월', '화', '수', '목', '금'];
  const periods = [1, 2, 3, 4, 5, 6, 7];

  const getWeekRange = (startDate: Date) => {
    const start = startDate;
    const end = addDays(startDate, 4); // 5일간의 범위
    return `${format(start, 'MM/dd')} ~ ${format(end, 'MM/dd')}`;
  };

  const handlePrevWeek = () => {
    setCurrentWeekStart((prev) => addDays(prev, -7));
  };

  const handleNextWeek = () => {
    setCurrentWeekStart((prev) => addDays(prev, 7));
  };

  const handleGetWeekTimetable = async (weekStart: Date) => {
    try {
      const res = await SeugiCustomAxios.get(`/timetable/weekend?workspaceId=${workspaceId}`);
      console.log(res.data.data[1].subject);
      console.log(res.data.data[1].date);
      console.log(res.data.data[1].time);
      if (res.data && res.data.data.subject) {
        setTimetableData
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetWeekTimetable(currentWeekStart);
  }, [currentWeekStart]);

  const handleSubjectClick = (subject: TimetableData | null) => {
    // 클릭 이벤트는 필요한 경우 추가할 수 있습니다.
  };

  return (
    <S.CalendarDiv>
      <S.HeaderControls>
        <S.ArrowButton onClick={handlePrevWeek}>◀</S.ArrowButton>
        <S.WeekDisplay>{getWeekRange(currentWeekStart)}</S.WeekDisplay>
        <S.ArrowButton onClick={handleNextWeek}>▶</S.ArrowButton>
      </S.HeaderControls>

      <S.TimetableContainer>
        <S.HeaderCell></S.HeaderCell>
        {days.map((day, index) => (
          <S.DayHeaderCell key={index}>{day}</S.DayHeaderCell>
        ))}

        {periods.map((period) => (
          <React.Fragment key={period}>
            <S.TimeHeaderCell>{period}교시</S.TimeHeaderCell>
            {days.map((day, dayIndex) => (
              <S.TimeCell key={dayIndex} onClick={() => handleSubjectClick(timetableData[period - 1]?.[dayIndex])}>
                {timetableData[period - 1] && timetableData[period - 1][dayIndex]
                  ? timetableData[period - 1][dayIndex]?.subject
                  : '+'}
              </S.TimeCell>
            ))}
          </React.Fragment>
        ))}
      </S.TimetableContainer>
    </S.CalendarDiv>
  );
};

export default DetailTimetable;
