import React from 'react'
import * as S from './oauthsignup.style';
import Button from '../../button/continuebutton';

const oauthsignup = () => {
  return (
    <S.OauthMain>
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