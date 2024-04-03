import React from 'react';
import * as S from "./continuebutton.style"
import { useNavigate } from 'react-router';

const button = () => {
    const navigate = useNavigate();
    const handleContinue = () => {
        navigate('./selectjob');
    }
    
    return (
      <>
          <S.Continuebtn onClick={handleContinue}>계속하기</S.Continuebtn>
      </>
    )
}

export default button;