import React from 'react'
import * as S from '@/Components/Home/Calendar/Calendar.style';

import CalendarImg from "@/Assets/image/home/calendar.svg";
import ArrowImg from "@/Assets/image/home/arrow.svg";
import NoCalendar from '@/Assets/image/home/NoCalendar.svg';

const Calendar = () => {
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
            {/* 일정이 있는 경우 */}
            {/* 일정이 없는 경우 */}
            <S.NoCalendarDiv>
                <S.NoCalendarImg src={NoCalendar} />
                <S.NoCalendarText>일정이 없어요</S.NoCalendarText>
            </S.NoCalendarDiv>
        </S.RightUpContainer>
    )
}

export default Calendar