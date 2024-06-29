import {useEffect} from 'react'
import * as S from '@/components/Signup/Emailsignup/emailsignup.style';
import hidePasswordimg from '@/assets/image/onbording/hide_fill.svg';
import showPasswordimg from '@/assets/image/onbording/show_fill.svg';
import Cloud1 from '@/assets/image/onbording/oauthsignup/Cloud1.svg';
import Cloud2 from '@/assets/image/onbording/oauthsignup/Cloud2.svg';
import Cloud3 from '@/assets/image/onbording/oauthsignup/Cloud3.svg';
import Sun from '@/assets/image/onbording/oauthsignup/Sun.svg'
import Button from '@/components/button/Button';
import TextField from '@/components/TextField/TextField';
import useSignup from '@/hooks/Signuphook/useSignup';

const emailsignup = () => {
    const { ...signUp } = useSignup();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

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
                            <TextField
                                value="name"
                                placeholder='이름을 입력해주세요'
                                onChange={signUp.handleNameChange}
                                style={{ border: "none" }}
                                onKeyDown={signUp.handleKeyDown}
                            />
                        </S.InputContainer>
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 이메일 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer>
                            <TextField
                                value='email'
                                style={{ border: "none" }}
                                placeholder='이메일을 입력해주세요'
                                onChange={signUp.handleEmailChange}
                                onKeyDown={signUp.handleKeyDown}
                            />
                        </S.InputContainer>
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 비밀번호 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer>
                            <TextField
                                value='password'
                                style={{ border: "none" }}
                                type={signUp.showPassword ? 'text' : 'password'}
                                placeholder='비밀번호를 입력해주세요'
                                onChange={signUp.handlePasswordChange}
                                onKeyDown={signUp.handleKeyDown}
                            />
                            <S.Btnview onClick={signUp.togglePasswordVisibility}>
                                {signUp.showPassword ? <img src={hidePasswordimg} alt="숨기기" /> : <img src={showPasswordimg} alt="보이기" />}
                            </S.Btnview>
                        </S.InputContainer>
                    </S.EneterInfo>
                    <S.EneterInfo>
                        <S.Subtitle>
                            <S.Body1> 비밀번호 확인 <S.Redstar>*</S.Redstar> </S.Body1>
                        </S.Subtitle>
                        <S.InputContainer>
                            <TextField
                                value="confirmPassword"
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
                        {signUp.errorMessage && <S.ErrorText>{signUp.errorMessage}</S.ErrorText>}
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