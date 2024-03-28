import * as S from "../sidebar/sidebar.style"; 
import React from 'react' 

import Home from "../../assets/image/home.svg"
import Chat from "../../assets/image/chat.svg"
import Chats from "../../assets/image/chats.svg"
import Bell from "../../assets/image/bell.svg"
import PlusButton from "../../assets/image/plusButton.svg"
import SearchIcon from "../../assets/image/Search.svg"

const sidebar = () => {
  return (
      <>
        <S.ChatingPage>
            <S.SideBarMenu>
                <S.SideBarImage1 src={Home}></S.SideBarImage1>
                <S.SideBarImage2 src={Chat}></S.SideBarImage2>
                <S.SideBarImage3 src={Chats}></S.SideBarImage3>
                <S.SideBarImage4 src={Bell}></S.SideBarImage4>
            </S.SideBarMenu>
            <S.SideBarChat>
                <S.SideFinder type="text"> 
                    <S.SearchIcon src={SearchIcon}/>
                </S.SideFinder>
                <S.PlusButton>
                    <S.PlusButtonImg src={PlusButton}/>
                </S.PlusButton>
            </S.SideBarChat>
        </S.ChatingPage>
      </>
  )
}

export default sidebar