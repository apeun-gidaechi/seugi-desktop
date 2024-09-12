import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/Components/Navbar/Navbar.style";

import Home from "@/assets/image/sidebar/home.svg";
import Chat from "@/assets/image/sidebar/chat.svg";
import Chats from "@/assets/image/sidebar/chats.svg";
import AvatarImg from "@/assets/image/chat-components/Avatar.svg";
import SelectHome from "@/assets/image/sidebar/slecthome.svg";
import SelectChat from "@/assets/image/sidebar/selectchat.svg";
import SelectChats from "@/assets/image/sidebar/selectgroup.svg";
import Profile from "@/Components/Profile/Profile";

type SelectedButton = "home" | "chat" | "chats" | "bell" | null;

const Navbar = () => {
  const [selected, setSelected] = useState<SelectedButton>(null);
  const [chatRooms, setChatRooms] = useState<string[]>([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const navigate = useNavigate();
  const profileRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (button: SelectedButton, path: string) => {
    setSelected(button);
    navigate(path);
    setSelectedChatRoom(null);
  };

  const handleAvatarClick = () => {
    setIsProfileVisible(prev => !prev);
  };

  useEffect(() => {
    const storedChatRooms = localStorage.getItem("chatRooms");
    if (storedChatRooms) {
      setChatRooms(JSON.parse(storedChatRooms));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatRooms", JSON.stringify(chatRooms));
  }, [chatRooms]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node | null;

      if (
        profileRef.current &&
        !profileRef.current.contains(target) &&
        !(target && (target as Element).closest('.AvactarClick'))
      ) {
        setIsProfileVisible(false);
      }
    };

    if (isProfileVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileVisible]);

  return (
    <div>
      <S.SideBarMenu>
        <S.SideBarButton
          onClick={() => handleButtonClick("home", "/home")}
          $isSelected={selected === "home"}
        >
          <S.SideBarImage src={selected === "home" ? SelectHome : Home} />
        </S.SideBarButton>
        <S.SideBarButton
          onClick={() => handleButtonClick("chat", "/chat")}
          $isSelected={selected === "chat"}
        >
          <S.SideBarImage src={selected === "chat" ? SelectChat : Chat} />
        </S.SideBarButton>
        <S.SideBarButton
          onClick={() => handleButtonClick("chats", "/groupchat")}
          $isSelected={selected === "chats"}
        >
          <S.SideBarImage src={selected === "chats" ? SelectChats : Chats} />
        </S.SideBarButton>
        <S.SideAvatarImgWrap>
          <S.SideAvatarButton onClick={handleAvatarClick} className="AvactarClick">
            <S.SideAvatarImg src={AvatarImg} />
          </S.SideAvatarButton>
        </S.SideAvatarImgWrap>
      </S.SideBarMenu>

      {isProfileVisible && (
        <div ref={profileRef}>
          <Profile />
        </div>
      )}
    </div>
  );
};

export default Navbar;
