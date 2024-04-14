import * as S from "../sendMessage/sendMessage.style"; 
import React from 'react' 

import PlusMessageFile from "@/assets/image/chat-components/MessageFile.svg"
import SendArrow from "@/assets/image/chat-components/SendArrow.svg"

const sendMessage = () => {
  return (
    <>
        <S.SendMessageWrap>
            <S.PlustFileButton>
                <S.PlusMessageFile src={PlusMessageFile}/>
            </S.PlustFileButton>
            <S.SendMessage type="text" placeholder="메세지 보내기"></S.SendMessage>
            <S.SendArrowWrap>
                <S.SendArrow src={SendArrow}/>
            </S.SendArrowWrap>
        </S.SendMessageWrap>
    </>
  )
}

export default sendMessage