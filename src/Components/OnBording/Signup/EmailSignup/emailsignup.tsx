import React from 'react'
import * as S from './emailsignup.style';
import hidePasswordimg from '@/assets/image/onbording/hide_fill.svg'
import showPasswordimg from '@/assets/image/onbording/show_fill.svg';
import Cloud1 from '@/assets/image/onbording/oauthsignup/Cloud1.svg';
import Cloud2 from '@/assets/image/onbording/oauthsignup/Cloud2.svg';
import Cloud3 from '@/assets/image/onbording/oauthsignup/Cloud3.svg';
import Sun from '@/assets/image/onbording/oauthsignup/Sun.svg';
import Backimg from '@/assets/image/Backimg.svg';
import Button from '@/Components/Button/Button';
import TextField from '@/Components/common/TextField/TextField';
import useSignup from '@/Hooks/Signuphook/index';
import { useNavigate } from 'react-router-dom';

const emailsignup = () => {
    const { ...signUp } = useSignup();

    return (
        <S.EmailMain>
            <S.Cloud1 src={Cloud1} />
            <S.Cloud2 src={Cloud2} />
            <S.Cloud3 src={Cloud3} />
            <S.Sun src={Sun} />
            <S.EmailFirstWrap>
                <S.Header>
                    <S.BackButton onClick={signUp.Backclick}>
                        <S.BackImg src={Backimg} />
                    </S.BackButton>
                    <S.Title1> 새 계정 만들기 </S.Title1>
                </S.Header>
                <S.TxtContainer>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 이름 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer data-error={!!signUp.errors.name}>
                            <TextField
                                value={signUp.name}
                                placeholder='이름을 입력해주세요'
                                onChange={signUp.handleNameChange}
                                style={{ border: signUp.errors.name ? "1px solid red" : "none" }}
                                onKeyDown={signUp.handleKeyDown}
                            />
                        </S.InputContainer>
                        {signUp.errors.name && <S.ErrorText>{signUp.errors.name}</S.ErrorText>}
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 이메일 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer data-error={!!signUp.errors.email}>
                            <TextField
                                value={signUp.email}
                                style={{ border: signUp.errors.email ? "1px solid red" : "none" }}
                                placeholder='이메일을 입력해주세요'
                                onChange={signUp.handleEmailChange}
                                onKeyDown={signUp.handleKeyDown}
                            />
                        </S.InputContainer>
                        {signUp.errors.email && <S.ErrorText>{signUp.errors.email}</S.ErrorText>}
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 비밀번호 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer error={!!signUp.errors.password}>
                            <TextField
                                value={signUp.password}
                                style={{ border: "none" }}
                                placeholder="비밀번호를 입력해주세요"
                                onChange={signUp.handlePasswordChange}
                                type={signUp.showPassword ? 'text' : 'password'}
                            />
                            <S.Btnview onClick={signUp.togglePasswordVisibility}>
                                {signUp.showPassword ? <img src={hidePasswordimg} alt="숨기기" /> : <img src={showPasswordimg} alt="보이기" />}
                            </S.Btnview>
                        </S.InputContainer>
                        {signUp.errors.password && <S.ErrorText>{signUp.errors.password}</S.ErrorText>}
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 비밀번호 확인 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer data-error={!!signUp.errors.confirmPassword}>
                            <TextField
                                value={signUp.confirmPassword}
                                style={{ border: "none" }}
                                type={signUp.showConfirmPassword ? 'text' : 'password'}
                                placeholder='비밀번호를 다시 입력해주세요'
                                onChange={signUp.handleConfirmPasswordChange}
                                onKeyDown={signUp.handleKeyDown}
                            />
                            <S.Btnview onClick={signUp.toggleConfirmPasswordVisibility}>
                                {signUp.showConfirmPassword ? <img src={hidePasswordimg} alt="숨기기" /> : <img src={showPasswordimg} alt="보이기" />}
                            </S.Btnview>
                        </S.InputContainer>
                        {signUp.errors.confirmPassword && <S.ErrorText>{signUp.errors.confirmPassword}</S.ErrorText>}
                    </S.EneterInfo>
                </S.TxtContainer>
                <S.ButtonContainer>
                    <Button onClick={signUp.handleSignup} />
                    <S.EmailCheck>
                        <S.Haveemail href='http://localhost:5173/login'>이미 계정이 있으신가요?</S.Haveemail>
                    </S.EmailCheck>
                </S.ButtonContainer>
            </S.EmailFirstWrap>
        </S.EmailMain>
    )
}

export default emailsignup;
