import React, { useEffect } from 'react';
import * as S from '@/components/WaitingJoin/WaitingJoin.style';
import schoolimg from '@/assets/image/join-school/schoolimg.svg';
import ment from '@/assets/image/join-school/ment.svg';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/button/Button';
import { isTokenExpired } from '@/util/tokenUtils';

const WaitingJoin = () => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem('accessToken');

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);
    
    useEffect(() => {
        if (isTokenExpired(token)) {
            alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
            window.localStorage.removeItem('accessToken');
            navigate('/');
        }
    }, [token, navigate]);

    const handleWaitingJoin = () => {
        if (!isTokenExpired(token)) {
            navigate('/home');
        } else {
            alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
            window.localStorage.removeItem('accessToken');
            navigate('/');
        }
    };

    return (
        <S.WaitingAcceptanceFrame>
            <S.WaitingAcceptanceContainer>
                <S.SchoolInfoContainer>
                    <S.SchoolImg src={schoolimg} />
                    <S.SchoolName>학교 가입 신청 완료</S.SchoolName>
                    <Button onClick={handleWaitingJoin} text="완료" />
                </S.SchoolInfoContainer>
                <S.MentContainer>
                    <S.MentImg src={ment} />
                </S.MentContainer>
            </S.WaitingAcceptanceContainer>
        </S.WaitingAcceptanceFrame>
    );
};

export default WaitingJoin;
