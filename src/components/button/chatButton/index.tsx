import React, { useState } from 'react';

import * as S from '@/components/button/chatButton/index.style';
import SearchIcon from '@/assets/image/chat/blackSearchIcon.svg';
import HamburgerIcon from '@/assets/image/chat/hamburgerLine.svg';

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