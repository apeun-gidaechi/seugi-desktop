import React, { useState } from 'react'

import * as S from '@/components/Profile/Correction/Correction.style';

import CancelImg from '@/assets/image/Profile/CancleImg.svg';

const Correction = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [content, useContent] = useState("직위");

  const handleCancelClick = () => {
    setInputValue(""); 
  };

  return (
    <S.EditProfile>
      <S.CorrectionDiv>
        <S.CorrectionBox>
          <S.CorrectionTitleDiv>
            <S.CorrectionTitle>{content} 수정</S.CorrectionTitle>
          </S.CorrectionTitleDiv>
          <S.InputDiv>
            <S.CorrectionInputField 
              placeholder='직위를 입력해주세요' 
              onChange={(e:any) => setInputValue(e.target.value)}
              value={inputValue}
              />
            <S.CancleButton onClick={handleCancelClick}>
              <S.CancleImg src={CancelImg} />
            </S.CancleButton>
          </S.InputDiv>
        </S.CorrectionBox>
      </S.CorrectionDiv>
      <S.SaveButton>
        <S.ButtonText>저장</S.ButtonText>
      </S.SaveButton>
    </S.EditProfile>
  )
}

export default Correction