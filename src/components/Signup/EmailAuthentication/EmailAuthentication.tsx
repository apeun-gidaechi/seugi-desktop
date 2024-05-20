import React from 'react'
import * as S from '@/components/Signup/EmailAuthentication/EmailAuthentication.style';
import Button from '@/components/button/Button';
import Sun from '@/assets/image/onbording/EmailAuthentication/sun.svg';
import Cloud1 from '@/assets/image/onbording/EmailAuthentication/cloud1.svg';
import Cloud2 from '@/assets/image/onbording/EmailAuthentication/cloud2.svg';
import Cloud3 from '@/assets/image/onbording/EmailAuthentication/cloud3.svg';

const EmailAuthentication = () => {
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
                        <S.CodeTextInput />
                        <S.CodeTextInput />
                        <S.CodeTextInput />
                        <S.CodeTextInput />
                        <S.CodeTextInput />
                        <S.CodeTextInput />
                    </S.InputBox>
                    <S.CodeSpan>인증 코드 전송</S.CodeSpan>
                </S.CodeContainer>
                <S.ContinueContainer>
                    <Button text='확인'/>
                </S.ContinueContainer>
            </S.AuthenticationContainer>
        </S.AuthenticationMain>
    )
}

export default EmailAuthentication