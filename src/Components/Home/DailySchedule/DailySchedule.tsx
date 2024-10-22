import React, { useState, useEffect, useRef } from "react"; 
import HomeBookImg from "@/Assets/image/home/homebook.svg";
import ArrowImg from "@/Assets/image/home/arrow.svg";
import NoSchedule from '@/Assets/image/home/NoSchedule.svg';
import * as S from '@/Components/Home/DailySchedule/DailySchedule.style';
import { SeugiColor } from '@/Design/color/SeugiColor';
import MyCalendar from "@/Components/DetailTimetable/DetailTimeTable";
import PlusButtonImg from '@/Assets/image/home/plusbutton.svg';
import CreateTimetable from "@/Components/DetailTimetable/CreateTimetable/CreateTimetable";
import { format } from 'date-fns';

interface TimetableItem {
    id: number;
    workspaceId: string;
    grade: string;
    classNum: string;
    time: string;
    subject: string;
    date: string;
}

interface Props {
    timetable: TimetableItem[];
}

const DailySchedule = ({ timetable = [] }: Props) => {
    const [currentPeriod, setCurrentPeriod] = useState<number | null>(null);
    const [allPeriodsOver, setAllPeriodsOver] = useState<boolean>(false);
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [isCreateTimetableOpen, setIsCreateTimetableOpen] = useState(false);

    const calendarRef = useRef<HTMLDivElement | null>(null); 
    const dialogRef = useRef<HTMLDivElement | null>(null);

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
        const interval = setInterval(() => {
            setCurrentPeriod(getCurrentPeriod());
        }, 1000);

        return () => clearInterval(interval);
    }, [timetable]);

    const onClickCalendar = () => {
        setShowCalendar(prev => !prev);
        if (isCreateTimetableOpen) {
            closeCreateTimetable();
        }
    };

    const todayDate = format(new Date(), 'yyyy-MM-dd');

    const openCreateTimetable = () => {
        setIsCreateTimetableOpen(true);
        if (showCalendar) {
            setShowCalendar(false);
        }
    };

    const closeCreateTimetable = () => {
        setIsCreateTimetableOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;

            if (dialogRef.current && !dialogRef.current.contains(target) && !(target && (target as Element).closest('.CreateTimeTable'))) {
                closeCreateTimetable();
            }

            if (calendarRef.current && !calendarRef.current.contains(target) && !(target && (target as Element).closest('.Calendar'))) {
                setShowCalendar(false);
            }
        };

        if (isCreateTimetableOpen || showCalendar) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isCreateTimetableOpen, showCalendar]);

    return (
        <S.HomeWrapper1UpContainer>
            <S.ScheduleTitleBox>
                <S.ScheduleTitleDiv>
                    <S.BookLogo src={HomeBookImg} />
                    <S.DailyScheduleTitle>오늘의 시간표</S.DailyScheduleTitle>
                </S.ScheduleTitleDiv>
                <S.ButtonDiv>
                    <S.CreateTimeTableButton onClick={openCreateTimetable} className="CreateTimeTable">
                        <S.CreateTimeTableButtonImg src={PlusButtonImg} />
                    </S.CreateTimeTableButton>
                    <S.ArrowLButton onClick={onClickCalendar} className="Calendar"> 
                        <S.ArrowLogo src={ArrowImg} />
                    </S.ArrowLButton>
                </S.ButtonDiv>
            </S.ScheduleTitleBox>

            {showCalendar && (
                <div ref={calendarRef}>
                    <MyCalendar />
                </div>
            )}
            {isCreateTimetableOpen && (
                <div ref={dialogRef}>
                    <CreateTimetable date={todayDate} onClose={closeCreateTimetable} />
                </div>
            )}

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
                    <S.NoScheduleDiv>
                        <S.NoScheduleImg src={NoSchedule} />
                        <S.NoScheduleText>오늘은 수업이 없습니다.</S.NoScheduleText>
                    </S.NoScheduleDiv>
                )}
            </S.ScheduleDivBox>
        </S.HomeWrapper1UpContainer>
    );
};

export default DailySchedule;
