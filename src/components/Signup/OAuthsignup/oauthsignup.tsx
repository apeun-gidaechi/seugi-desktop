import React, { useState, useEffect } from 'react'
import * as S from '@/components/Signup/OAuthsignup/oauthsignup.style';
import Button from '@/components/Button/Button';
import Cloud1 from '@/assets/image/onbording/oauthsignup/Cloud1.svg';
import Cloud2 from '@/assets/image/onbording/oauthsignup/Cloud2.svg';
import Cloud3 from '@/assets/image/onbording/oauthsignup/Cloud3.svg';
import Sun from '@/assets/image/onbording/oauthsignup/Sun.svg'
import Backimg from '@/assets/image/Backimg.svg';
import TextField from '@/components/TextField/TextField';
import config from '@/constants/login/config.json';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const oauthsignup = () => {
    const navigate = useNavigate();
    const [Name, setName] = useState("");

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handlesignup = async () => {
        try {
            const response = await axios.post(`${config.serverurl}/member/register`, {
                name,
                // 토큰 추가
            });
            if (response.status === 200) {
                navigate('/emailathentance');
            } else {
                alert('회원가입 중 문제가 발생했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('error:', error);
            alert('회원가입 중 문제가 발생했습니다. 다시 시도해주세요.');
        }
    }

    const handleKeyDown = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            handlesignup();
        }
    }

    const Backclick = () => {
        navigate('/')
    }
    
    return (
        <S.OauthMain>
            <S.Cloud1 src={Cloud1} />
            <S.Cloud2 src={Cloud2} />
            <S.Cloud3 src={Cloud3} />
            <S.Sun src={Sun} />
            <S.OauthFirstWrap>
                <S.Header>
                    <S.BackButton onClick={Backclick}>
                        <S.BackImg src={Backimg} />
                    </S.BackButton>
                    <S.Title1> 새 계정 만들기 </S.Title1>
                </S.Header>
                <S.TxtContainer>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.SubtitleName> 이름 <S.Redstar> * </S.Redstar></S.SubtitleName>
                        </S.Subtitle>
                        <S.InputContainer>
                            <TextField
                                placeholder='이름을 입력해주세요'
                                onChange={handleNameChange}
                                style={{ border: "none" }}
                                onKeyDown={handleKeyDown}
                                value={Name}
                            />
                        </S.InputContainer>
                    </S.EneterInfo>
                </S.TxtContainer>
                <S.ButtonContainer>
                    <Button onClick={handlesignup} />
                    <S.EmailCheck>
                        <S.HaveEmail href='http://localhost:5173/login'>이미 계정이 있으신가요?</S.HaveEmail>
                    </S.EmailCheck>
                </S.ButtonContainer>
            </S.OauthFirstWrap>
        </S.OauthMain>
    )
}

export default oauthsignup