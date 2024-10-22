import React from 'react'
import * as S from './PopOver.style';

const PopOver = () => {
    return (
        <S.PopUpDiv>
            <S.Button>
                <S.ModitySpan>시간표 수정</S.ModitySpan>
            </S.Button>
            <S.Button>
                <S.DeleteSpan>시간표 삭제</S.DeleteSpan>
            </S.Button>
        </S.PopUpDiv>
    )
}

export default PopOver