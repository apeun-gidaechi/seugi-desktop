import React from 'react'
import * as S from '@/components/Home/CatSeugi/CatSeugi.style';

import SearchImg from "@/assets/image/home/search.svg";
import SeugiImg from "@/assets/image/onbording/Start/seugilogo.svg";

const CatSeugi = () => {
  return (
      <S.RightDownContainer>
          <S.SeugiTitleContainer>
              <S.SeugiImg src={SeugiImg} />
              <S.CatSeugiTitle>캣스기</S.CatSeugiTitle>
          </S.SeugiTitleContainer>
          <S.CatSeugi>
              <S.CatSeugiInput placeholder="2학년 4반에서 아무나 한 명 뽑아줘..." />
              <S.SearchButton>
                  <S.SearchImg src={SearchImg} />
              </S.SearchButton>
          </S.CatSeugi>
          <S.QuestionContainer>
              <S.LastQuestionBox>
                  <S.LastText>
                      <S.Lastweek>지난주</S.Lastweek>
                  </S.LastText>
              </S.LastQuestionBox>
              <S.LastQuestion>
                  <S.QuestionText>
                      급식에 복어가 나오는 날이 언제...
                  </S.QuestionText>
                  <S.QuestionDay>6월 21일</S.QuestionDay>
              </S.LastQuestion>
              <S.LastQuestion>
                  <S.QuestionText>
                      우리 학교 대회 담당하는 분이 누구...
                  </S.QuestionText>
                  <S.QuestionDay>6월 21일</S.QuestionDay>
              </S.LastQuestion>
          </S.QuestionContainer>
      </S.RightDownContainer>
  )
}

export default CatSeugi