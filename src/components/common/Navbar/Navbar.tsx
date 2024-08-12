import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "@/components/common/Navbar/Navbar.style";

import Home from "@/assets/image/sidebar/home.svg";
import Chat from "@/assets/image/sidebar/chat.svg";
import Chats from "@/assets/image/sidebar/chats.svg";
import AvatarImg from "@/assets/image/chat-components/Avatar.svg";

import SelectHome from "@/assets/image/sidebar/slecthome.svg";
import SelectChat from "@/assets/image/sidebar/selectchat.svg";
import SelectChats from "@/assets/image/sidebar/selectgroup.svg";

type SelectedButton = "home" | "chat" | "chats" | null;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState<SelectedButton>(null);

  useEffect(() => {
    // 현재 경로에 따라 selected 상태를 설정
    const pathMap: { [key: string]: SelectedButton } = {
      "/home": "home",
      "/chat": "chat",
      "/groupchat": "chats",
    };

    const currentPath = location.pathname;
    setSelected(pathMap[currentPath] || null);
  }, [location]);

  const handleButtonClick = (button: SelectedButton) => {
    setSelected(button);
  };

  useEffect(() => {
    if (selected) {
      const pathMap = {
        home: "/home",
        chat: "/chat",
        chats: "/groupchat",
      };
      navigate(pathMap[selected]);
    }
  }, [selected, navigate]);

  return (
    <div>
      <S.SideBarMenu>
        <S.SideBarButton
          onClick={() => handleButtonClick("home")}
          $isSelected={selected === "home"}
        >
          <S.SideBarImage src={selected === "home" ? SelectHome : Home} />
        </S.SideBarButton>
        <S.SideBarButton
          onClick={() => handleButtonClick("chat")}
          $isSelected={selected === "chat"}
        >
          <S.SideBarImage src={selected === "chat" ? SelectChat : Chat} />
        </S.SideBarButton>
        <S.SideBarButton
          onClick={() => handleButtonClick("chats")}
          $isSelected={selected === "chats"}
        >
          <S.SideBarImage src={selected === "chats" ? SelectChats : Chats} />
        </S.SideBarButton>
        <S.SideAvatarImgWrap>
          <S.SideAvatarImg src={AvatarImg} />
        </S.SideAvatarImgWrap>
      </S.SideBarMenu>
    </div>
  );
};

export default Navbar;