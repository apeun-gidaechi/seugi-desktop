import React, { useState } from 'react';
import * as S from './CreateTimetable.style';
import CancleImg from '@/Assets/image/profile/CancleImg.svg';
import MinusImg from '@/Assets/image/home/minus_line.svg';
import PlusImg from '@/Assets/image/home/add_line.svg';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import CalendarImg from '@/Assets/image/home/calendar.svg';
import Cookies from 'js-cookie';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CreateTimetableProps {
    date: string;
    onClose: () => void;
}

const CreateTimetable = ({ date, onClose }: CreateTimetableProps) => {
    const workspaceId = Cookies.get("workspaceId") || "";
    const [period, setPeriod] = useState(1);
    const [grade, setGrade] = useState(1);
    const [classNum, setClassNum] = useState(1);
    const [subject, setSubject] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(date)); // 선택된 날짜 상태

    const decreaseValue = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
        if (value > 1) {
            setter(value - 1);
        }
    };

    const increaseValue = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
        setter(value + 1);
    };

    const handlePostTimetable = async () => {
        if (!selectedDate) return;
        const formattedDate = selectedDate.toISOString().split('T')[0];
        console.log(formattedDate);
        try {
            await SeugiCustomAxios.post(`/timetable`, {
                workspaceId,
                grade,
                classNum,
                time: period,
                subject,
                date: formattedDate
            });
            onClose();
        } catch (err) {
            console.error(err);
        }
    };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <S.CreateMain onClick={onClose}>
            <S.CreateDiv onClick={handleModalClick}>
                <S.TitleDiv>
                    <S.TitleSpan>시간표 만들기</S.TitleSpan>
                    <S.CompleteButton onClick={handlePostTimetable}>완료</S.CompleteButton>
                </S.TitleDiv>
                <S.InputDiv>
                    <S.InputTag
                        placeholder='과목 이름을 입력해주세요'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <S.CancleButton>
                        <S.ButtonImg src={CancleImg} />
                    </S.CancleButton>
                </S.InputDiv>
                <S.ButtonDiv>
                    {/* 교시 */}
                    <S.DropDown>
                        <S.MinusButton onClick={() => decreaseValue(setPeriod, period)}>
                            <S.MinusImg src={MinusImg} />
                        </S.MinusButton>
                        <S.TimeSpan>{period} 교시</S.TimeSpan>
                        <S.PlusButton onClick={() => increaseValue(setPeriod, period)}>
                            <S.PlusButtonImg src={PlusImg} />
                        </S.PlusButton>
                    </S.DropDown>
                    {/* 학년 */}
                    <S.DropDown>
                        <S.MinusButton onClick={() => decreaseValue(setGrade, grade)}>
                            <S.MinusImg src={MinusImg} />
                        </S.MinusButton>
                        <S.TimeSpan>{grade} 학년</S.TimeSpan>
                        <S.PlusButton onClick={() => increaseValue(setGrade, grade)}>
                            <S.PlusButtonImg src={PlusImg} />
                        </S.PlusButton>
                    </S.DropDown>
                    {/* 반 */}
                    <S.DropDown>
                        <S.MinusButton onClick={() => decreaseValue(setClassNum, classNum)}>
                            <S.MinusImg src={MinusImg} />
                        </S.MinusButton>
                        <S.TimeSpan>{classNum} 반</S.TimeSpan>
                        <S.PlusButton onClick={() => increaseValue(setClassNum, classNum)}>
                            <S.PlusButtonImg src={PlusImg} />
                        </S.PlusButton>
                    </S.DropDown>
                </S.ButtonDiv>
                <S.DateDiv>
                    <S.DateInput
                        placeholder='날짜를 선택해주세요'
                        value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                        readOnly
                    />
                    <S.CalendarButton>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            customInput={<S.CalendarImg src={CalendarImg} />} // 커스텀 캘린더 아이콘
                            dateFormat="yyyy-MM-dd"
                        />
                    </S.CalendarButton>
                </S.DateDiv>
            </S.CreateDiv>
        </S.CreateMain>
    );
};

export default CreateTimetable;
