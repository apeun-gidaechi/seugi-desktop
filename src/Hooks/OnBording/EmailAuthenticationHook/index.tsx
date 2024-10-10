import React, { useState, useEffect } from 'react'
import axios from 'axios';
import config from '@/constants/config/config.json';
import { useNavigate, useLocation } from 'react-router-dom';

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

const index = () => {
    const location = useLocation();
    const { name, email, password } = location.state || {};
    const [timer, setTimer] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [code, setCode] = useState<string[]>(Array(6).fill(''));
    const [isCodeSent, setIsCodeSent] = useState(false);
    const navigate = useNavigate();

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    // 인증코드 보내기 함수
    const handleSendCode = async () => {
        try {
            console.log(email);
            const res = await axios.get(`${SERVER_URL}/email/send`, {
                params: { email: email }
            });
            console.log('Code sent successfully:', res.data);
            setTimer(300);
            setShowAlert(true);
            setIsCodeSent(true);
        } catch (error) {
            console.error('Error sending code:', error);
        }
    };

    // CodeTextField 컴포넌트에서 입력값을 받아서 코드 문자열로 만드는 함수
    const handleCodeChange = (updatedCode: string[]) => {
        setCode(updatedCode);
    };

    // 회원가입 정보 보내기
    const sendCode = async () => {
        const verificationCode = code.join('');
        console.log(name, email, password, verificationCode);
        try {
            const res = await axios.post(`${SERVER_URL}/member/register`, {
                name,
                email,
                password,
                code: verificationCode,
            });
            console.log(res);
            navigate('/');
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendCode();
        }
    };

    const Backclick = () => {
        navigate('/emailsignup')
    }

    return {
        timer,
        showAlert,
        isCodeSent,
        handleCloseAlert,
        handleSendCode,
        handleCodeChange,
        sendCode,
        formatTime,
        handleKeyDown,
        Backclick
    }
}

export default index;