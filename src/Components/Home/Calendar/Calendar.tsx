import React from 'react';
import * as S from '@/Components/Home/Calendar/Calendar.style';

import CalendarImg from "@/Assets/image/home/calendar.svg";
import ArrowImg from "@/Assets/image/home/arrow.svg";

import NoCalendar from '@/Assets/image/home/NoCalendar.svg';

interface ScheduleItem {
    id: number;
    workspaceId: string;
    date: string; // format: YYYY-MM-DD
    eventName: string;
    eventContent: string;
    grade: number[];
}

interface Props {
    schedules: ScheduleItem[];
}

const Calendar = ({ schedules = [] }: Props) => {

    // D-Day 계산 함수
    const calculateDDay = (eventDate: string) => {
        const currentDate = new Date();
        const eventDay = new Date(eventDate);

        // 두 날짜 차이를 밀리초로 계산 후, 일 단위로 변환
        const differenceInTime = eventDay.getTime() - currentDate.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // 하루를 밀리초로 환산

        return differenceInDays >= 0 ? `D-${differenceInDays}` : `D+${Math.abs(differenceInDays)}`;
    };

    return (
        <S.RightUpContainer>
            <S.SoonScheduleBox>
                <S.SoonScheduleTitle>
                    <S.CalendarLogo src={CalendarImg} />
                    <S.ScheduleTitle>다가오는 일정</S.ScheduleTitle>
                </S.SoonScheduleTitle>
                <S.ArrowLButton>
                    <S.SArrowLogo src={ArrowImg} />
                </S.ArrowLButton>
            </S.SoonScheduleBox>
            {schedules.length > 0 ? (
                <S.Box>
                    <S.DateBox>
                        {schedules.map((item, index) => (
                            <S.DateText key={item.id}>{index}</S.DateText>
                        ))}
                    </S.DateBox>
                    <S.SubBox>
                        {schedules.map((item) => (
                            <S.SubTitle key={item.id}>{item.eventName}</S.SubTitle>
                        ))}
                    </S.SubBox>
                    <S.D_DayBox>
                        {schedules.map((item) => (
                            <S.D_DayText key={item.id}>{calculateDDay(item.date)}</S.D_DayText>
                        ))}
                    </S.D_DayBox>
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
