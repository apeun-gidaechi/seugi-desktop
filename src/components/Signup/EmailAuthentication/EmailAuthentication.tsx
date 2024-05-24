import React, { useState, useEffect } from 'react';
import * as S from '@/components/Signup/EmailAuthentication/EmailAuthentication.style';
import Button from '@/components/button/Button';
import Sun from '@/assets/image/onbording/EmailAuthentication/sun.svg';
import Cloud1 from '@/assets/image/onbording/EmailAuthentication/cloud1.svg';
import Cloud2 from '@/assets/image/onbording/EmailAuthentication/cloud2.svg';
import Cloud3 from '@/assets/image/onbording/EmailAuthentication/cloud3.svg';
import CodeTextFeild from '@/components/CodeTextField/CodeTextFeild';
import axios from 'axios';
import config from '@/config/config.json';
import { useNavigate } from 'react-router-dom';

const EmailAuthentication = () => {
    const [timer, setTimer] = useState(0);
    const navigate = useNavigate();

    // 인증코드 보내기 함수
    const sendCode = async () => {
        try {
            const res = await axios.get(`${config.serverurl}/email/send`);
            console.log('Code sent successfully:', res.data);
            // 타이머 시작
            setTimer(300); 
        } catch (error) {
            console.error('Error sending code:', error);
        }
    };

    // 인증코드 확인 함수
    const handleAuthentication = async () => {
        try {
            const res = await axios.get(`${config.serverurl}/email/verify`);
            if (res.data.success) {
                console.log('Authentication successful:', res.data);
                navigate('/chat');
            } else {
                console.log('Authentication failed:', res.data);
                alert('인증 코드를 다시 확인해주세요.');
            }
        } catch (error) {
            console.error('Error verifying code:', error);
        }
    };

    useEffect(() => {
        if (timer > 0) {
            const intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [timer]);

    // 타이머 형식을 분:초로 변환
    const formatTime = (time: number) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <S.AuthenticationMain>
            <S.Cloud1 src={Cloud1} />
            <S.Cloud2 src={Cloud2} />
            <S.Cloud3 src={Cloud3} />
            <S.Sun src={Sun} />
            <S.AuthenticationContainer>
                <S.TitleContainer>
                    <S.Title>이메일 인증</S.Title>
                </S.TitleContainer>
                <S.CodeContainer>
                    <S.CodeInputContainer>
                        <S.SubtitleContainer>
                            <S.Subtitle> 인증코드 <S.Redstar>*</S.Redstar></S.Subtitle>
                        </S.SubtitleContainer>
                    </S.CodeInputContainer>
                    <S.InputBox>
                        <CodeTextFeild />
                        <CodeTextFeild />
                        <CodeTextFeild />
                        <CodeTextFeild />
                        <CodeTextFeild />
                        <CodeTextFeild />
                    </S.InputBox>
                    {timer > 0 ? (
                        <S.TimerSpan>{formatTime(timer)}</S.TimerSpan>
                    ) : (
                        <S.CodeSpan onClick={sendCode}>인증 코드 전송</S.CodeSpan>
                    )}
                </S.CodeContainer>
                <S.ContinueContainer>
                    <Button text='확인' onClick={handleAuthentication} />
                </S.ContinueContainer>
            </S.AuthenticationContainer>
        </S.AuthenticationMain>
    );
};

export default EmailAuthentication;