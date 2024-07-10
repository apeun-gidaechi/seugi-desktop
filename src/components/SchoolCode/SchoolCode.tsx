import React, { useEffect, useState } from 'react';
import * as S from '@/components/SchoolCode/SchoolCode.style';
import Button from '@/components/Button/Button';
import CodeTextField from '@/components/CodeTextField/CodeTextFeild';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '@/util/tokenUtils';
import Backimg from '@/assets/image/Backimg.svg';
import config from "@/constants/config/config.json";

const SchoolCode = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState<string[]>(Array(6).fill(''));
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

    const handleContinue = async () => {
        const verificationCode = code.join('');

        if (isTokenExpired(token)) {
            alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
            window.localStorage.removeItem('accessToken');
            navigate('/');
            return;
        }

        try {
            const res = await axios.get(`${config.serverurl}/workspace?code=${verificationCode}`, {
                headers: {
                    Authorization: `${token}`
                },
            });
            console.log('Code sent successfully:', res.data);
            navigate('/joinsuccess', { state: { verificationCode } });
        } catch (error) {
            console.error('Error sending code:', error);
        }
    };

    const handleCodeChange = (updatedCode: string[]) => {
        setCode(updatedCode);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleContinue();
        }
    };

    const Backclick = () => {
        navigate('/selectschool');
    }

    return (
        <S.SchoolCodeMain>
            <S.SchoolCode>
                <S.SchoolCodeContainer>
                    <S.Header>
                        <S.BackButton onClick={Backclick}>
                            <S.BackImg src={Backimg} />
                        </S.BackButton>
                        <S.Title>학교 코드를 입력해주세요</S.Title>
                    </S.Header>
                    <S.InputCodeContainer>
                        <CodeTextField
                            onKeyDown={handleKeyDown}
                            onChange={handleCodeChange}
                        />
                    </S.InputCodeContainer>
                    <S.ButtonContainer>
                        <Button text="계속하기" onClick={handleContinue} />
                    </S.ButtonContainer>
                </S.SchoolCodeContainer>
            </S.SchoolCode>
        </S.SchoolCodeMain>
    );
};

export default SchoolCode;
