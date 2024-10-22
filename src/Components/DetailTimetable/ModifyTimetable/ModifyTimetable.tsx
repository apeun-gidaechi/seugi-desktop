import React, { useState, useEffect } from 'react'
import * as S from './ModifyTimetable.style';
import CancleImg from '@/Assets/image/profile/CancleImg.svg';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import { getTimeTable } from '@/Api/Home';
import Cookies from 'js-cookie';

const ModifyTimetable = () => {
    const workspaceId = Cookies.get("workspaceId") || "";
    const [inputValue, setInputValue] = useState("");
    const [id, setId] = useState<number | null>(null);

    useEffect(() => {
        const fetchTimetable = async () => {
            try {
                const data = await getTimeTable(workspaceId);
                setId(data.id);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTimetable();
    }, []);

    const handleCancelClick = () => {
        setInputValue('');
    };

    const handleChangeSubject = async () => {
        if (id === null) {
            console.error("ID가 없습니다.");
            return;
        }

        try {
            const res = await SeugiCustomAxios.patch(`/timetable`, {
                id,
                subject: inputValue
            });
            console.log('응답:', res);
        } catch (err) {
            console.error(err);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            return;
        }
    };

    return (
        <S.ModifyDiv>
            <S.TitleDiv>
                <S.Title>시간표 수정</S.Title>
                <S.CompleteButton onClick={handleChangeSubject}>
                    <S.subtitle>완료</S.subtitle>
                </S.CompleteButton>
            </S.TitleDiv>
            <S.InputDiv>
                <S.InputTag
                    placeholder='과목 이름을 입력해주세요'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <S.CancleButton onClick={handleCancelClick}>
                    <S.ButtonImg src={CancleImg} />
                </S.CancleButton>
            </S.InputDiv>
        </S.ModifyDiv>
    )
}

export default ModifyTimetable;
