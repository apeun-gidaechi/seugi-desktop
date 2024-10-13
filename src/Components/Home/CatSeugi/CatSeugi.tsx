import React, { useState } from 'react';
import * as S from '@/Components/Home/CatSeugi/CatSeugi.style';

import SearchImg from "@/Assets/image/home/search.svg";
import SeugiImg from "@/Assets/image/onbording/Start/seugilogo.svg";

const CatSeugi = () => {
    const [inputValue, setInputValue] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        if (inputValue.length > 0) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        } else {
            setShowMessage(false);
        }
    };

    return (
        <S.RightDownContainer>
            <S.SeugiTitleContainer>
                <S.SeugiImg src={SeugiImg} />
                <S.CatSeugiTitle>캣스기</S.CatSeugiTitle>
            </S.SeugiTitleContainer>
            <S.CatSeugi>
                <S.CatSeugiInput
                    placeholder="2학년 4반에서 아무나 한 명 뽑아줘..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <S.SearchButton onClick={handleButtonClick}>
                    <S.SearchImg src={SearchImg} />
                </S.SearchButton>
            </S.CatSeugi>
            {showMessage && (
                <S.MessageContainer>
                    <S.MessageText>다음교시는 국어입니다</S.MessageText>
                </S.MessageContainer>
            )}
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
    );
}

export default CatSeugi;
