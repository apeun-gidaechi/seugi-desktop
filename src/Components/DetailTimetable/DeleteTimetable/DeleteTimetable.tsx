import React from 'react'
import * as S from './DeleteTimetable.style';

const DeleteTimetable = () => {
    return (
        <S.DeleteDiv>
            <S.TitleDiv>
                <S.Title>시간표를 삭제 하시겠습니까?</S.Title>
            </S.TitleDiv>
            <S.ButtonDiv>
                <S.CancleButton>
                    <S.CancleButtonSpan>취소</S.CancleButtonSpan>
                </S.CancleButton>
                <S.DeleteButton>
                    <S.DeleteButtonSpan>삭제</S.DeleteButtonSpan>
                </S.DeleteButton>
            </S.ButtonDiv>
        </S.DeleteDiv>
    )
}

export default DeleteTimetable