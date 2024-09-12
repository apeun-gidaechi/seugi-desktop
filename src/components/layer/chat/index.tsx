import React from 'react'

import * as S from '@/components/Layer/chat/index.style';

import SideBar from "@/components/common/ChatSidebar/Chat/index";
import TopButton from '@/components/Button/chatButton/index';
import ChatRoom from '@/components/Common/ChatRoom/UnSelect/index'

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