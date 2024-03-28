import React from 'react'
import * as S from './oauthsignup.style';

const oauthsignup = () => {
  return (
    <S.Frame297>
        <S.Frame298>
            <S.Title1> 새 계정 만들기 </S.Title1>
        </S.Frame298>
        <S.Frame300>
            <S.Frame121>
                <S.Frame121_1>
                    <S.Subtitlename> 이름 <S.Redstar> * </S.Redstar></S.Subtitlename>
                </S.Frame121_1>
                <S.Txtfield
                    placeholder='이름을 입력해주세요'
                />
            </S.Frame121>
        </S.Frame300>
        <S.Frame299>
            <S.Continuebtn>
                계속하기
            </S.Continuebtn>
            <S.Frame125>
                <S.Haveemail href='http://localhost:5173/login'>이미 계정이 있으신가요?</S.Haveemail>
            </S.Frame125>
        </S.Frame299>
    </S.Frame297>
  )
}

export default oauthsignup