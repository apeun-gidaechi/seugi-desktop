import React from 'react'
import * as S from './ModifyTimetable.style';
import CancleImg from '@/Assets/image/profile/CancleImg.svg';

const ModifyTimetable = () => {
    return (
        <S.ModifyDiv>
            <S.TitleDiv>
                <S.Title>시간표 수정</S.Title> <S.CompleteButton><S.subtitle>완료</S.subtitle></S.CompleteButton>
            </S.TitleDiv>
            <S.InputDiv>
                <S.InputTag placeholder='과목 이름을 입력해주세요' />
                <S.CancleButton>
                    <S.ButtonImg src={CancleImg}/>
                </S.CancleButton>
            </S.InputDiv>
        </S.ModifyDiv>
    )
}

export default ModifyTimetable