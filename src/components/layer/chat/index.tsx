import React from 'react'

import * as S from '@/Components/Layer/chat/index.style';

import SideBar from "@/components/common/ChatSidebar/Chat/index";
import TopButton from '@/Components/Button/ChatButton/Index';
import ChatRoom from '@/Components/Common/ChatRoom/UnSelect/index'

const index = () => {
  return (
    <S.ChatingBackground>
      <S.ButtonWrapper>
        <TopButton />
        {/* <ChatRoom/> */}
      </S.ButtonWrapper>
      {/* <SideBar /> */}
    </S.ChatingBackground>
  )
}

export default index