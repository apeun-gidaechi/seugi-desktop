import React from 'react'
import * as S from './oauthsignup.style';
import Button from '@/components/button/continuebutton';
import Cloud1 from '@/assets/image/onbording/oauthsignup/Cloud1.svg';
import Cloud2 from '@/assets/image/onbording/oauthsignup/Cloud2.svg';
import Cloud3 from '@/assets/image/onbording/oauthsignup/Cloud3.svg';
import Sun from '@/assets/image/onbording/oauthsignup/Sun.svg'
const oauthsignup = () => {
  return (
    <S.OauthMain>
        <S.Cloud1 src={Cloud1}/>
        <S.Cloud2 src={Cloud2} />
        <S.Cloud3 src={Cloud3} />
        <S.Sun src={Sun} />
        <S.OauthFirstWrap>
            <S.Header>
                <S.Title1> 새 계정 만들기 </S.Title1>
            </S.Header>
            <S.TxtContainer>
                <S.EneterInfo>
                    <S.Subtitle>
                        <S.SubtitleName> 이름 <S.Redstar> * </S.Redstar></S.SubtitleName>
                    </S.Subtitle>
                    <S.InputContainer>
                        <S.Txtfield
                            placeholder='이름을 입력해주세요'
                        />
                    </S.InputContainer>
                </S.EneterInfo>
            </S.TxtContainer>
            <S.ButtonContainer>
                <Button/>
                <S.EmailCheck>
                    <S.HaveEmail href='http://localhost:5173/login'>이미 계정이 있으신가요?</S.HaveEmail>
                </S.EmailCheck>
            </S.ButtonContainer>
        </S.OauthFirstWrap>
    </S.OauthMain>
  )
}

export default oauthsignup