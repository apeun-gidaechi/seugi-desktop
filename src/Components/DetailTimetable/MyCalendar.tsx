import React, { useState, useEffect } from 'react';
import * as S from './DetailTimeTable.style';
import { addDays, format } from 'date-fns';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import Cookies from 'js-cookie';

// 각 과목의 타입 정의
interface TimetableData {
  period: number;
  day: string;
  subject: string;
}

const Timetable: React.FC = () => {
  const workspaceId = Cookies.get("workspaceId");
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(new Date());
  const [timetableData, setTimetableData] = useState<(TimetableData | null)[][]>([]);
  const [selectedSubject, setSelectedSubject] = useState<TimetableData | null>(null); // 클릭한 과목 상태
  const [isCreating, setIsCreating] = useState<boolean>(false); // 시간표 생성 상태

  const days = ['월', '화', '수', '목', '금'];
  const periods = [1, 2, 3, 4, 5, 6, 7];

  const getWeekRange = (startDate: Date) => {
    const start = startDate;
    const end = addDays(startDate, 5);
    return `${format(start, 'MM/dd')} ~ ${format(end, 'MM/dd')}`;
  };

  const handlePrevWeek = () => {
    setCurrentWeekStart((prev) => addDays(prev, -7));
  };

  const handleNextWeek = () => {
    setCurrentWeekStart((prev) => addDays(prev, 7));
  };

  const transformTimetableData = (data: TimetableData[]): (TimetableData | null)[][] => {
    const timetable = Array(7).fill(null).map(() => Array(5).fill(null));
    data.forEach((item) => {
      const periodIndex = item.period - 1;
      const dayIndex = days.indexOf(item.day);
      if (periodIndex >= 0 && dayIndex >= 0) {
        timetable[periodIndex][dayIndex] = item;
      }
    });
    return timetable;
  };

  const handleGetWeekTimetable = async (weekStart: Date) => {
    try {
      const formattedDate = format(weekStart, 'yyyy-MM-dd');
      const res = await SeugiCustomAxios.get(`/timetable/weekend?workspaceId=${workspaceId}`);
      if (res.data && res.data.data.subject) {
        const transformedData = transformTimetableData(res.data.data.subject);
        setTimetableData(transformedData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetWeekTimetable(currentWeekStart);
  }, [currentWeekStart]);

  // 과목 클릭 시 수정 및 삭제 컴포넌트 띄우기
  const handleSubjectClick = (subject: TimetableData | null) => {
    if (subject) {
      setSelectedSubject(subject);
      // 수정 및 삭제 컴포넌트를 띄우는 로직
    } else {
      setIsCreating(true); // 시간표 생성 모드로 설정
    }
  };

  // 시간표 생성, 수정 및 삭제 컴포넌트
  const renderSubjectModal = () => {
    if (selectedSubject) {
      return (
        <div>
          {/* 여기서 수정 및 삭제 컴포넌트 구현 */}
          <h2>수정 및 삭제</h2>
          <p>{selectedSubject.subject} ({selectedSubject.day} {selectedSubject.period}교시)</p>
          {/* 수정 및 삭제 버튼 등 */}
        </div>
      );
    }

    if (isCreating) {
      return (
        <div>
          {/* 시간표 생성 컴포넌트 구현 */}
          <h2>시간표 생성</h2>
          {/* 과목 추가 폼 등 */}
        </div>
      );
    }

    return null;
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

      {renderSubjectModal()}
    </S.CalendarDiv>
  );
};

export default Timetable;
