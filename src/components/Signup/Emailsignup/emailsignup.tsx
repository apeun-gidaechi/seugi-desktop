import React, { useState } from 'react';
import axios from 'axios';
import * as S from '@/components/Signup/Emailsignup/emailsignup.style';
import hidePasswordimg from '@/assets/image/onbording/hide_fill.svg';
import showPasswordimg from '@/assets/image/onbording/show_fill.svg';
import Cloud1 from '@/assets/image/onbording/oauthsignup/Cloud1.svg';
import Cloud2 from '@/assets/image/onbording/oauthsignup/Cloud2.svg';
import Cloud3 from '@/assets/image/onbording/oauthsignup/Cloud3.svg';
import Sun from '@/assets/image/onbording/oauthsignup/Sun.svg'

import Button from '@/components/button/Button';
import { useNavigate } from 'react-router';

const emailsignup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleContinue = () => {
        if (!name.trim()) {
            alert('이름을 입력해주세요');
            return;
        }
        if (!email.trim()) {
            alert('이메일을 입력해주세요.');
            return;
        }
        if (!validateEmail(email)) {
            alert('유효한 이메일 형식을 입력해주세요.');
            return;
        }
        if (!password.trim()) {
            alert('비밀번호를 입력해주세요.');
            return;
        }
        if (password !== confirmPassword) {
            setPasswordError('비밀번호가 일치하지 않습니다.');
        } else {
            setPasswordError('');
            // 비밀번호 일치 시 회원가입 처리 로직
        }
    };



    return (
        <S.EmailMain>
            <S.Cloud1 src={Cloud1} />
            <S.Cloud2 src={Cloud2} />
            <S.Cloud3 src={Cloud3} />
            <S.Sun src={Sun} />
            <S.EmailFirstWrap>
                <S.Header>
                    <S.Title1> 새 계정 만들기 </S.Title1>
                </S.Header>
                <S.TxtContainer>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 이름 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer>
                            <S.Txtfield
                                value={name}
                                placeholder='이름을 입력해주세요'
                                onChange={handleNameChange} />
                        </S.InputContainer>
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 이메일 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer>
                            <S.Txtfield
                                value={email}
                                placeholder='이메일을 입력해주세요'
                                onChange={handleEmailChange} />
                        </S.InputContainer>
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 비밀번호 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer>
                            <S.Txtfield
                                type={showPassword ? 'text' : 'password'}
                                placeholder='비밀번호를 입력해주세요'
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <S.Btnview onClick={togglePasswordVisibility}>
                                {showPassword ? <img src={hidePasswordimg} alt="숨기기" /> : <img src={showPasswordimg} alt="보이기" />}
                            </S.Btnview>
                        </S.InputContainer>
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 비밀번호 확인 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer>
                            <S.Txtfield
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder='비밀번호를 다시 입력해주세요'
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                            <S.Btnview onClick={toggleConfirmPasswordVisibility}>
                                {showConfirmPassword ? <img src={hidePasswordimg} alt="숨기기" /> : <img src={showPasswordimg} alt="보이기" />}
                            </S.Btnview>
                        </S.InputContainer>
                        {passwordError && <S.ErrorText>{passwordError}</S.ErrorText>}
                    </S.EneterInfo>
                </S.TxtContainer>
                <S.ButtonContainer>
                    <Button />
                    <S.EmailCheck>
                        <S.Haveemail href='http://localhost:5173/login'>이미 계정이 있으신가요?</S.Haveemail>
                    </S.EmailCheck>
                </S.ButtonContainer>
            </S.EmailFirstWrap>
        </S.EmailMain>
    )
}

export default emailsignup;