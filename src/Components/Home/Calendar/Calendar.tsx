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

    return (
        <S.RightUpContainer>
            <S.SoonScheduleBox>
                <S.SoonScheduleTitle>
                    <S.CalendarLogo src={CalendarImg} />
                    <S.ScheduleTitle>다가오는 일정</S.ScheduleTitle>
                </S.SoonScheduleTitle>
                {/* <S.ArrowLButton>
                    <S.SArrowLogo src={ArrowImg} />
                </S.ArrowLButton> */}
            </S.SoonScheduleBox>
            {schedules.length > 0 ? (
                <S.Box>
                    <S.DateBox>
                        {schedules.map((item) => (
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
