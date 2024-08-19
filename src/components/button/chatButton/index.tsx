import React from 'react'

import * as S from '@/components/button/chatButton/index.style'

import SearchIcon from '@/assets/image/chat/blackSearchIcon.svg';
import HamburgerIcon from '@/assets/image/chat/hamburgerLine.svg';

const index = () => {
  return (
    <S.ButtonWrap>
        <S.TopButton>
            <S.TopButtonIconImg src={SearchIcon}/>
        </S.TopButton>
        <S.TopButton>
            <S.TopButtonIconImg src={HamburgerIcon}/>
        </S.TopButton>
    </S.ButtonWrap>
  )
}

export default index