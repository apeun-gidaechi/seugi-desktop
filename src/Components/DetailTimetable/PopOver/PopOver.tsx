import React, { useState } from 'react';
import * as S from './PopOver.style';
import ModifyTimetable from '@/Components/DetailTimetable/ModifyTimetable/ModifyTimetable';
import DeleteTimetable from '@/components/DetailTimetable/DeleteTimetable/DeleteTimetable';

const PopOver = () => {
    const [activeComponent, setActiveComponent] = useState<string | null>(null);

    const handleModifyClick = () => {
        setActiveComponent('modify');
    };

    const handleDeleteClick = () => {
        setActiveComponent('delete');
    };

    const handleCancel = () => {
        setActiveComponent(null);  
    };

    return (
        <S.PopUpDiv>
            <S.Button onClick={handleModifyClick}>
                <S.ModitySpan>시간표 수정</S.ModitySpan>
            </S.Button>
            <S.Button onClick={handleDeleteClick}>
                <S.DeleteSpan>시간표 삭제</S.DeleteSpan>
            </S.Button>

            {activeComponent === 'modify' && <ModifyTimetable />}
            {activeComponent === 'delete' && <DeleteTimetable onCancel={handleCancel} />}
        </S.PopUpDiv>
    );
}

export default PopOver;
