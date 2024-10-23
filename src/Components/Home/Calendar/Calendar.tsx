import React from 'react';
import * as S from '@/Components/Home/Calendar/Calendar.style';

import CalendarImg from "@/Assets/image/home/calendar.svg";
import ArrowImg from "@/Assets/image/home/arrow.svg";

import NoCalendar from '@/Assets/image/home/NoCalendar.svg';

interface ScheduleItem {
    id: number;
    workspaceId: string;
    date: string;
    eventName: string;
    eventContent: string;
    grade: number[];
}

interface Props {
    schedules: ScheduleItem[];
}

const Calendar = ({ schedules = [] }: Props) => {
    const today = new Date();
    const currentDay = String(today.getDate()).padStart(2, '0');

    const formatDate = (dateString: string) => {
        const month = dateString.substring(5, 7);
        const day = dateString.substring(8, 10);
        return `${month}/${day}`;
    };

    const calculateDDay = (schedule: ScheduleItem) => {
        const eventDay = schedule.date.substring(8, 10);
        const dPlus = Number(currentDay) - Number(eventDay);
        const dMinus = Number(eventDay) - Number(currentDay);

        if (currentDay > eventDay) {
            return `D+${dPlus}`;
        } else if (currentDay === eventDay) {
            return `D-Day`;
        } else {
            return `D-${dMinus}`;
        }
    };

    // D-Day(오늘 일정 포함)와 미래 일정 필터링 및 정렬
    const sortedSchedules = schedules
        .filter((schedule) => {
            const eventDate = new Date(schedule.date);
            return eventDate >= today || eventDate.toDateString() === today.toDateString(); // 오늘 포함한 미래 일정 필터링
        })
        .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime(); // 날짜 기준 오름차순 정렬
        });

    return (
        <S.RightUpContainer>
            <S.SoonScheduleBox>
                <S.SoonScheduleTitle>
                    <S.CalendarLogo src={CalendarImg} />
                    <S.ScheduleTitle>다가오는 일정</S.ScheduleTitle>
                </S.SoonScheduleTitle>
            </S.SoonScheduleBox>
            {sortedSchedules.length > 0 ? (
                <S.Box>
                    <S.DateBox>
                        {sortedSchedules.map((item) => (
                            <S.Row key={item.id}>
                                <S.DateText>{formatDate(item.date)}</S.DateText>
                                <S.SubTitle>{item.eventName}</S.SubTitle>
                                <S.D_DayText>{calculateDDay(item)}</S.D_DayText>
                            </S.Row>
                        ))}
                    </S.DateBox>
                </S.Box>
            ) : (
                <S.NoCalendarDiv>
                    <S.NoCalendarImg src={NoCalendar} />
                    <S.NoCalendarText>일정이 없어요</S.NoCalendarText>
                </S.NoCalendarDiv>
            )}
        </S.RightUpContainer>
    );
};

export default Calendar;