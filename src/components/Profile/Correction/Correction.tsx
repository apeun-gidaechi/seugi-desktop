import React, { useState } from 'react';
import * as S from '@/components/Profile/Correction/Correction.style';

import CancelImg from '@/assets/image/Profile/CancleImg.svg';

interface CorrectionProps {
  value: string;
  content: string;
  onSave: (value: string) => void;
  onCancel: () => void;
}

const Correction: React.FC<CorrectionProps> = ({ value, content, onSave, onCancel }) => {
  const [inputValue, setInputValue] = useState(content);

  const transformValue = (value: string) => {
    switch (value) {
      case 'status':
        return "상태메세지"
      case 'spot':
        return "직위"
      case 'belong':
        return "소속"
      case 'phone':
        return "휴대전화번호"
      case 'wire':
        return "유선전화번호"
      case "location":
        return "근무 위치"
    }
  }

  const handleSaveClick = () => {
    onSave(inputValue);
  };

  const handleCancelClick = () => {
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  return (
    <S.EditProfile>
      <S.CorrectionDiv>
        <S.CorrectionBox>
          <S.CorrectionTitleDiv>
            <S.CorrectionTitle>{transformValue(value)} 수정</S.CorrectionTitle>
          </S.CorrectionTitleDiv>
          <S.InputDiv>
            <S.CorrectionInputField
              placeholder={`${transformValue(value)}를 입력해주세요`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <S.CancleButton onClick={handleCancelClick}>
              <S.CancleImg src={CancelImg} />
            </S.CancleButton>
          </S.InputDiv>
        </S.CorrectionBox>
      </S.CorrectionDiv>
      <S.SaveButton onClick={handleSaveClick}>
        <S.ButtonText>저장</S.ButtonText>
      </S.SaveButton>
    </S.EditProfile>
  );
};

export default Correction;
