import React from 'react';
import * as S from './EmailAuthentication.style';
import Button from '@/Components/Button/Button';
import Sun from '@/Assets/image/onbording/EmailAuthentication/sun.svg';
import Cloud1 from '@/Assets/image/onbording/EmailAuthentication/cloud1.svg';
import Cloud2 from '@/Assets/image/onbording/EmailAuthentication/cloud2.svg';
import Cloud3 from '@/Assets/image/onbording/EmailAuthentication/cloud3.svg';
import Backimg from '@/Assets/image/Backimg.svg'
import CodeTextField from '@/Components/Onboarding/CodeTextField/CodeTextField';
import CustomAlert from '@/Components/Alert/Alert';

import useAuthentication from '@/Hooks/OnBording/EmailAuthenticationHook/index';

const EmailAuthentication = () => {
    const { ...Authentication } = useAuthentication();

    return (
        <S.AuthenticationMain>
            <S.Cloud1 src={Cloud1} />
            <S.Cloud2 src={Cloud2} />
            <S.Cloud3 src={Cloud3} />
            <S.Sun src={Sun} />
            <S.AuthenticationContainer>
                <S.TitleContainer>
                    <S.BackButton onClick={Authentication.Backclick}>
                        <S.BackImg src={Backimg} />
                    </S.BackButton>
                    <S.Title>이메일 인증</S.Title>
                </S.TitleContainer>
                <S.CodeContainer>
                    <S.CodeInputContainer>
                        <S.SubtitleContainer>
                            <S.Subtitle> 인증코드 <S.Redstar>*</S.Redstar></S.Subtitle>
                        </S.SubtitleContainer>
                    </S.CodeInputContainer>
                    <S.InputBox>
                        <CodeTextField
                            onChange={Authentication.handleCodeChange}
                            onKeyDown={Authentication.handleKeyDown}
                        />
                    </S.InputBox>
                    {Authentication.timer > 0 ? (
                        <S.TimerSpan>{Authentication.formatTime(Authentication.timer)} 남음</S.TimerSpan>
                    ) : (
                        <S.CodeSpan onClick={Authentication.handleSendCode}>
                            {Authentication.isCodeSent ? '인증 코드 재전송' : '인증 코드 전송'}
                        </S.CodeSpan>
                    )}
                    {Authentication.showAlert &&
                        <CustomAlert
                            position='top-right'
                            titletext="인증코드를 전송했어요"
                            subtext="이메일 함을 확인해 보세요"
                            onClose={Authentication.handleCloseAlert}
                        />
                    }
                </S.CodeContainer>
                <S.ContinueContainer>
                    <Button text='계속하기' onClick={Authentication.sendCode} />
                </S.ContinueContainer>
            </S.AuthenticationContainer>
        </S.AuthenticationMain>
    );
};

export default EmailAuthentication;
