import React, { useState, useEffect } from "react";
import HomeBookImg from "@/Assets/image/home/homebook.svg";
import ArrowImg from "@/Assets/image/home/arrow.svg";
import * as S from '@/Components/Home/DailySchedule/DailySchedule.style';
import { SeugiCustomAxios } from "@/Api/SeugiCutomAxios";
import { SeugiColor } from '@/Design/color/SeugiColor';

interface TimetableItem {
    id: number;
    workspaceId: string;
    grade: string;
    classNum: string;
    time: string;
    subject: string;
    date: string;
}

const DailySchedule = () => {
    const workspaceId = window.localStorage.getItem('workspaceId');
    const [timetable, setTimetable] = useState<TimetableItem[]>([]);
    const [currentPeriod, setCurrentPeriod] = useState<number | null>(null);
    const [allPeriodsOver, setAllPeriodsOver] = useState<boolean>(false);

    const handleGetTimeTable = async () => {
        try {
            const res = await SeugiCustomAxios.get(`/timetable/day?workspaceId=${workspaceId}`);
            console.log(res.data);
            setTimetable(res.data.data);
        } catch (error) {
            console.error("Failed to load timetable:", error);
        }
    };

    const getCurrentPeriod = () => {
        const now = new Date();
        const startTime = new Date();
        startTime.setHours(8, 50, 0, 0); // 1교시 시작 시간: 08:50
        const periodDuration = 50 * 60 * 1000; // 수업시간 (ms)
        const breakDuration = 10 * 60 * 1000; // 쉬는시간 (ms)

        const lunchStart = new Date();
        lunchStart.setHours(12, 40, 0, 0); // 점심시간 시작 12:40
        const lunchEnd = new Date();
        lunchEnd.setHours(13, 30, 0, 0); // 점심시간 끝 13:30

        let lastPeriodEnd = null;

        for (let i = 0; i < timetable.length; i++) {
            const periodStart = new Date(startTime.getTime() + i * (periodDuration + breakDuration));

            if (periodStart >= lunchStart && periodStart < lunchEnd) {
                periodStart.setTime(lunchEnd.getTime());
            }

            const periodEnd = new Date(periodStart.getTime() + periodDuration);
            lastPeriodEnd = periodEnd;

            if (now >= periodStart && now < periodEnd) {
                return i + 1;
            }
        }

        if (lastPeriodEnd && now > lastPeriodEnd) {
            setAllPeriodsOver(true);
        } else {
            setAllPeriodsOver(false);
        }

        return null;
    };

    useEffect(() => {
        handleGetTimeTable();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPeriod(getCurrentPeriod());
        }, 1000);

        return () => clearInterval(interval);
    }, [timetable]);

    return (
        <S.HomeWrapper1UpContainer>
            <S.ScheduleTitleBox>
                <S.ScheduleTitleDiv>
                    <S.BookLogo src={HomeBookImg} />
                    <S.DailyScheduleTitle>오늘의 시간표</S.DailyScheduleTitle>
                </S.ScheduleTitleDiv>
                <S.ArrowLButton>
                    <S.ArrowLogo src={ArrowImg} />
                </S.ArrowLButton>
            </S.ScheduleTitleBox>

            <S.ScheduleDivBox>
                {timetable.length > 0 ? (
                    <>
                        <S.NumberTable>
                            {timetable.map((item, index) => (
                                <S.Number key={item.id}>{index + 1}교시</S.Number>
                            ))}
                        </S.NumberTable>

                        <S.TimetableRow>
                            {timetable.map((item, index) => {
                                const isCurrentPeriod = currentPeriod === index + 1;
                                const isPastPeriod = currentPeriod && index + 1 < currentPeriod;
                                const isFirstPeriod = index === 0;
                                const isLastPeriod = allPeriodsOver || currentPeriod === timetable.length;

                                return (
                                    <S.TimetableItem
                                        key={item.id}
                                        style={{
                                            backgroundColor: isPastPeriod || isCurrentPeriod || allPeriodsOver ? SeugiColor.Primary500 : "transparent",
                                            borderTopLeftRadius: (isPastPeriod || isCurrentPeriod || allPeriodsOver) && isFirstPeriod ? "999px" : "0px",
                                            borderBottomLeftRadius: (isPastPeriod || isCurrentPeriod || allPeriodsOver) && isFirstPeriod ? "999px" : "0px",
                                            borderTopRightRadius: isCurrentPeriod || (allPeriodsOver && index === timetable.length - 1) ? "999px" : "0px",
                                            borderBottomRightRadius: isCurrentPeriod || (allPeriodsOver && index === timetable.length - 1) ? "999px" : "0px",
                                            color: isCurrentPeriod ? SeugiColor.White : SeugiColor.Primary300
                                        }}
                                    >
                                        <S.ItemTable>{item.subject}</S.ItemTable>
                                    </S.TimetableItem>
                                );
                            })}
                        </S.TimetableRow>
                    </>
                ) : (
                    <S.NoScheduleText>오늘은 수업이 없습니다.</S.NoScheduleText>
                )}
            </S.ScheduleDivBox>
        </S.HomeWrapper1UpContainer>
    );
};

export default DailySchedule;
