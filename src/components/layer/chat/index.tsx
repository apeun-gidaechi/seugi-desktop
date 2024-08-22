import React from 'react'

import * as S from '@/components/layer/chat/index.style';

import SideBar from "@/components/common/ChatSidebar/Chat/index";
import TopButton from '@/components/button/chatButton/index';
import ChatRoom from '@/components/common/chatRoom/unSelect/index'

const index = () => {
  return (
    <S.ChatingBackground>
        <S.ButtonWrapper>
            <TopButton />
            {/* <ChatRoom/> */}
        </S.ButtonWrapper>
        <SideBar />
    </S.ChatingBackground>
  )
}

export default index