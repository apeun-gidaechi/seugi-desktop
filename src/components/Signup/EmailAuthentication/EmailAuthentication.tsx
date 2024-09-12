import React from 'react';
import * as S from '@/components/Signup/EmailAuthentication/EmailAuthentication.style';
import Button from '@/components/Button/Button';
import Sun from '@/assets/image/onbording/EmailAuthentication/sun.svg';
import Cloud1 from '@/assets/image/onbording/EmailAuthentication/cloud1.svg';
import Cloud2 from '@/assets/image/onbording/EmailAuthentication/cloud2.svg';
import Cloud3 from '@/assets/image/onbording/EmailAuthentication/cloud3.svg';
import Backimg from '@/assets/image/Backimg.svg'
import CodeTextField from '@/components/CodeTextField/CodeTextFeild';
import CustomAlert from '@/components/Alert/Alert';

import useAuthentication from '@/Hooks/EmailAuthenticationHook/index';

const EmailAuthentication = () => {
    const {
        timer,
        showAlert,
        isCodeSent,
        handleCloseAlert,
        handleSendCode,
        handleCodeChange,
        formatTime,
        sendCode,
        handleKeyDown,
        Backclick
    } = useAuthentication();
    
    return (
        <S.AuthenticationMain>
            <S.Cloud1 src={Cloud1} />
            <S.Cloud2 src={Cloud2} />
            <S.Cloud3 src={Cloud3} />
            <S.Sun src={Sun} />
            <S.AuthenticationContainer>
                <S.TitleContainer>
                    <S.BackButton onClick={Backclick}>
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
                            onChange={handleCodeChange}
                            onKeyDown={handleKeyDown}
                        />
                    </S.InputBox>
                    {timer > 0 ? (
                        <S.TimerSpan>{formatTime(timer)} 남음</S.TimerSpan>
                    ) : (
                        <S.CodeSpan onClick={handleSendCode}>
                            {isCodeSent ? '인증 코드 재전송' : '인증 코드 전송'}
                        </S.CodeSpan>
                    )}
                    {showAlert &&
                        <CustomAlert
                            position='top-right'
                            titletext="인증코드를 전송했어요"
                            subtext="이메일 함을 확인해 보세요"
                            onClose={handleCloseAlert}
                        />
                    }
                </S.CodeContainer>
                <S.ContinueContainer>
                    <Button text='계속하기' onClick={sendCode} />
                </S.ContinueContainer>
            </S.AuthenticationContainer>
        </S.AuthenticationMain>
    );
};

export default EmailAuthentication;
