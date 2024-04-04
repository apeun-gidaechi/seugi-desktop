import React, { useState } from 'react';
import * as S from "../CreateRoomPlus/createRoomPlus.style"; 

import AvatarImg from "../../assets/image/Avatar.svg";
import NonClicked from '../../assets/image/nonClick.svg';
import Clicked from "../../assets/image/clicked.svg";

const CreateRoomPlus = () => {
  const [isClicked, setIsClicked] = useState(false); 

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
        <S.CreateRoomPlusBox>
            <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                <S.ChatRoomName>멤버를 선택해 주세요</S.ChatRoomName>
                <S.ChatRoomButton>계속하기</S.ChatRoomButton>
            </div>
            <S.InviteMemberWrap>
                <S.InviteMemberFlex>
                    <S.InviteMember type='text' placeholder='멤버 검색'></S.InviteMember>
                </S.InviteMemberFlex>
            </S.InviteMemberWrap>
            <S.PlusMemberClick style={{display: 'flex'}}>
                <S.AvatarProfileWrap>
                    <S.AvatarProfile src={AvatarImg}></S.AvatarProfile>
                </S.AvatarProfileWrap>
                <S.InviterName>노영재</S.InviterName>
                <S.PlusButtonCheck onClick={handleClick}>
                    {isClicked ? (
                        <img src={Clicked} alt="Clicked" />
                    ) : (
                        <img src={NonClicked} alt="NonClicked" />
                    )}
                </S.PlusButtonCheck>
            </S.PlusMemberClick>
        </S.CreateRoomPlusBox>
    </>
  );
}

export default CreateRoomPlus;
