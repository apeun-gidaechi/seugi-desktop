import React, { useState, useEffect } from 'react';
import * as S from './DetailTimeTable.style';
import { addDays, format, startOfWeek } from 'date-fns';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import Cookies from 'js-cookie';
import PopOver from '@/Components/DetailTimetable/PopOver/PopOver';

interface TimetableData {
  period: number;
  day: string;
  subject: string;
}

interface Props {
  onClose: () => void;
}

const DetailTimetable = ({ onClose }: Props) => {
  const workspaceId = Cookies.get("workspaceId");
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [timetableData, setTimetableData] = useState<(TimetableData | null)[][]>([]);
  const [activeSubject, setActiveSubject] = useState<TimetableData | null>(null);
  const [popoverPosition, setPopoverPosition] = useState<{ top: number; left: number } | null>(null);

  const days = ['월', '화', '수', '목', '금'];
  const periods = [1, 2, 3, 4, 5, 6, 7];

  const getWeekRange = (startDate: Date) => {
    const start = startDate;
    const end = addDays(startDate, 4);
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
      console.log(res);

      if (res.data && res.data.data) {
        const newTimetable: (TimetableData | null)[][] = Array(7).fill(null).map(() => Array(5).fill(null));

        res.data.data.forEach((item: any) => {
          const dayIndex = days.indexOf(format(new Date(item.date), 'eee'));

          const periodIndex = parseInt(item.time) - 1;

          if (dayIndex !== -1 && periodIndex !== -1) {
            newTimetable[periodIndex][dayIndex] = {
              period: periodIndex + 1, 
              day: days[dayIndex],
              subject: item.subject,
            };
          }
        });

        setTimetableData(newTimetable);
      }
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    handleGetWeekTimetable(currentWeekStart);
  }, [currentWeekStart]);

  const handleSubjectClick = (subject: TimetableData | null, event: React.MouseEvent) => {
    if (subject) {
      setActiveSubject(subject);
      setPopoverPosition({ top: event.clientY, left: event.clientX });
    }
  };

  const handleClosePopover = () => {
    setActiveSubject(null);
    setPopoverPosition(null);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <S.CalendarMain onClick={onClose}>
      <S.CalendarDiv onClick={handleModalClick}>
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
                <S.TimeCell
                  key={dayIndex}
                  onClick={(event) => handleSubjectClick(timetableData[period - 1]?.[dayIndex], event)}
                >
                  {timetableData[period - 1] && timetableData[period - 1][dayIndex]
                    ? timetableData[period - 1][dayIndex]?.subject
                    : '+'}
                </S.TimeCell>
              ))}
            </React.Fragment>
          ))}
        </S.TimetableContainer>

        {activeSubject && popoverPosition && (
          <PopOver onClose={handleClosePopover} />
        )}
      </S.CalendarDiv>
    </S.CalendarMain>
  );
};

export default DetailTimetable;
