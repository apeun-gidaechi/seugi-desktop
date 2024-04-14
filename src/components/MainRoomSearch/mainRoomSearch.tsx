import React from 'react'
import * as S from "@/components/MainRoomSearch/mainRoomSearch.style"

import AvatarImg from '@/assets/image/chat-components/Avatar.svg'
import FindIcon from "@/assets/image/sidebar/Findicon.svg"

const mainRoomSearch = () => {
  return (
    <>
        <S.CreateRoomPlusBox>
            <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                <S.ChatRoomName>검색</S.ChatRoomName>
            </div>
            <S.InviteMemberWrap>
                <S.InviteMemberFlex>
                    <S.InviteMember type='text' placeholder='이름, 소속 등을 입력해 주세요'></S.InviteMember>
                    <S.FindIconWrap>
                        <S.FindIcon src={FindIcon}></S.FindIcon>
                    </S.FindIconWrap>
                </S.InviteMemberFlex>
            </S.InviteMemberWrap>
            <S.PlusMemberClick style={{display: 'flex'}}>
                <S.AvatarProfileWrap>
                    <S.AvatarProfile src={AvatarImg}></S.AvatarProfile>
                </S.AvatarProfileWrap>
                <S.InviterName>노영재</S.InviterName>
                <S.PlusButtonCheck >
                </S.PlusButtonCheck>
            </S.PlusMemberClick>
        </S.CreateRoomPlusBox>
    </>
  )
}

export default mainRoomSearch