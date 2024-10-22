import React, { useEffect, useState } from 'react';
import * as S from './DeleteTimetable.style';
import { getTimeTable } from '@/Api/Home';
import Cookies from 'js-cookie';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';

interface DeleteTimetableProps {
    onCancel: () => void;
}

const DeleteTimetable = ({ onCancel }: DeleteTimetableProps) => {
    const workspaceId = Cookies.get("workspaceId") || "";
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

    const handleDelete = async () => {
        try {
            await SeugiCustomAxios.delete(`/timetable/${id}`);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <S.DeleteDiv>
            <S.TitleDiv>
                <S.Title>시간표를 삭제 하시겠습니까?</S.Title>
            </S.TitleDiv>
            <S.ButtonDiv>
                <S.CancleButton onClick={onCancel}>
                    <S.CancleButtonSpan>취소</S.CancleButtonSpan>
                </S.CancleButton>
                <S.DeleteButton onClick={handleDelete}>
                    <S.DeleteButtonSpan>삭제</S.DeleteButtonSpan>
                </S.DeleteButton>
            </S.ButtonDiv>
        </S.DeleteDiv>
    );
}

export default DeleteTimetable;
