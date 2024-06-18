import React from 'react';
import * as S from '@/components/WaitingJoin/WaitingJoin.style';
import schoolimg from '@/assets/image/join-school/schoolimg.svg';
import ment from '@/assets/image/join-school/ment.svg';

const WaitingJoin = () => {
    return (
        <S.WaitingAcceptanceFrame>
            <S.WaitingAcceptanceContainer>
                <S.SchoolInfoContainer>
                    <S.SchoolImg src={schoolimg} />
                    <S.SchoolName>학교명</S.SchoolName>
                </S.SchoolInfoContainer>
                <S.MentContainer>
                    <S.MentImg src={ment} />
                </S.MentContainer>
                <S.CheckButton>
                    확인
                </S.CheckButton>
            </S.WaitingAcceptanceContainer>
        </S.WaitingAcceptanceFrame>
    )
}

export default WaitingJoin;