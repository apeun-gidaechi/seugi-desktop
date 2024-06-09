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
import { useNavigate, useLocation } from 'react-router-dom';
import CustomAlert from '@/components/Alert/Alert';

const EmailAuthentication = () => {
    const location = useLocation();
    const { name, email, password } = location.state || {};
    const [timer, setTimer] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [code, setCode] = useState<string>('');
    const navigate = useNavigate();

    const handleCloseAlert = () => {
        console.log("custom Alert");
        setShowAlert(false);
    };

    // 인증코드 보내기 함수
    const handleSendCode = async () => {
        console.log(email);
        await axios.get(`${config.serverurl}/email/send`, {
            params: { email: email }
        }).then((res) => {
            console.log('Code sent successfully:', res.data);
            setTimer(300);
        }).catch((error) => {
            console.error(error)
        })
    };

    // CodeTextFeild 컴포넌트에서 입력값을 받아서 코드 문자열로 만드는 함수
    const handleCodeChange = (index: number, value: string) => {
        const updatedCode = code.split('');
        updatedCode[index] = value;
        setCode(updatedCode.join(''));
    };
    
    // 회원가입 정보 보내기
    const sendCode = async () => {
        console.log(name, email, password, code);
        try {
            const res = await axios.post(`${config.serverurl}/member/register`, {
                name,
                email,
                password,
                code,
            });
            console.log(res);
            navigate('/selectschool');
        } catch (error) {
            console.error('Error sending code:', error);
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
        const minutes = String(Math.floor(time / 60));
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}분 ${seconds}초`;
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
                        {[...Array(6)].map((_, index) => (
                            <CodeTextFeild
                                key={index}
                                onChange={(value) => handleCodeChange(index, value)}
                            />
                        ))}
                    </S.InputBox>
                    {timer > 0 ? (
                        <S.TimerSpan>{formatTime(timer)} 남음</S.TimerSpan>
                    ) : (
                        <S.CodeSpan onClick={handleSendCode} >인증 코드 전송</S.CodeSpan>
                    )}
                    {showAlert &&
                        <CustomAlert
                            position=''
                            titletext="인증코드를 전송했어요"
                            subtext="이메일 함을 확인해 보세요"
                            onClose={handleCloseAlert}
                        />
                    }
                </S.CodeContainer>
                <S.ContinueContainer>
                    <Button text='확인' onClick={sendCode} />
                </S.ContinueContainer>
            </S.AuthenticationContainer>
        </S.AuthenticationMain>
    );
};

export default EmailAuthentication;
