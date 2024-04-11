import * as S from './SelectSchool.style';
import React from 'react'

import JoinSchoolimg from '@/assets/image/JoinSchool.svg';
import CreateSchoolimg from '@/assets/image/CreateSchool.svg';

const SelectSchool = () => {
  return (
    <S.SelectschoolMain>
        <S.SelectschoolFirstWrap>
            <S.ContainerBox>
                <S.TitleContainer>
                    <S.Title>학교 가입 또는 생성</S.Title>
                </S.TitleContainer>
                <S.ButtonContainer1>
                    <S.ButtonContainer>
                        <S.Button><S.ButtonImg src={JoinSchoolimg}></S.ButtonImg></S.Button>
                        <S.Subtitle> 초대 코드로 가입 </S.Subtitle>
                    </S.ButtonContainer>
                    <S.ButtonContainer>
                        <S.Button><S.ButtonImg src={CreateSchoolimg}></S.ButtonImg></S.Button>
                        <S.Subtitle> 새 학교 생성 </S.Subtitle>
                    </S.ButtonContainer>
                </S.ButtonContainer1>
            </S.ContainerBox>
        </S.SelectschoolFirstWrap>
    </S.SelectschoolMain>
  )
}

export default SelectSchool