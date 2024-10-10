import React, { useState } from 'react';

import * as S from '@/Components/Button/chatButton/index.style';
import SearchIcon from '@/Assets/image/chat/blackSearchIcon.svg';
import HamburgerIcon from '@/Assets/image/chat/hamburgerLine.svg';

import Drawer from '../Drawer/index';

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <S.ButtonWrap>
        <S.TopButton>
          <S.TopButtonIconImg src={SearchIcon} />
        </S.TopButton>
        <S.TopButton onClick={toggleDrawer}>
          <S.TopButtonIconImg src={HamburgerIcon} />
        </S.TopButton>
      </S.ButtonWrap>

      {isDrawerOpen && <Drawer onClose={toggleDrawer} />}
    </>
  );
};

export default Index;