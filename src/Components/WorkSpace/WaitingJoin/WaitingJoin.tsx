import React from 'react';
import * as S from './WaitingJoin.style';
import schoolimg from '@/assets/image/join-school/schoolimg.svg';
import ment from '@/assets/image/join-school/ment.svg';
import Button from '@/Components/Button/Button';
import { clearAccessToken } from '@/Api/SeugiCutomAxios';
import Session from '@/Util/TokenExpired/TokenExpired';

import useWaitingJoin from '@/Hooks/Workspace/WaitingJoin/index';

const WaitingJoin = () => {
    const { ...WaitingJoin } = useWaitingJoin();

    return (
        <S.WaitingAcceptanceFrame>
            <Session token={WaitingJoin.token} clearAccessToken={clearAccessToken} />
            <S.WaitingAcceptanceContainer>
                <S.SchoolInfoContainer>
                    <S.SchoolImg src={schoolimg} />
                    <S.SchoolName>학교 가입 신청 완료</S.SchoolName>
                    <Button onClick={WaitingJoin.handleWaitingJoin} text="완료" />
                </S.SchoolInfoContainer>
                <S.MentContainer>
                    <S.MentImg src={ment} />
                </S.MentContainer>
            </S.WaitingAcceptanceContainer>
        </S.WaitingAcceptanceFrame>
    );
};

export default WaitingJoin;
