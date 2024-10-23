import React from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './index.style';

const TitleText = () => {
  const location = useLocation();
  let title;

  switch (location.pathname) {
    case '/home':
      title = '홈';
      break;
    case '/chat':
      title = '개인 채팅';
      break;
    case '/groupchat':
      title = '단체채팅';
      break;
    default:
      title = '';
      break;
  }  

  return (
    <S.Title>{title}</S.Title>
  );
}

export default TitleText;