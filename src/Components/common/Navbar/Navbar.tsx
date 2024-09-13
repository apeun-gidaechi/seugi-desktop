import { useNavigate, useLocation } from "react-router-dom";
import * as S from "@/components/common/Navbar/Navbar.style";

import Home from "@/assets/image/sidebar/home.svg";
import Chat from "@/assets/image/sidebar/chat.svg";
import Chats from "@/assets/image/sidebar/chats.svg";
import AvatarImg from "@/assets/image/chat-components/Avatar.svg";
import SelectHome from "@/assets/image/sidebar/slecthome.svg";
import SelectChat from "@/assets/image/sidebar/selectchat.svg";
import SelectChats from "@/assets/image/sidebar/selectgroup.svg";
import Profile from "@/Components/Profile/Profile";
import React, { useEffect, useRef, useState } from "react";

type SelectedButton = "home" | "chat" | "chats" | null;

const Navbar = () => {

  const [selected, setSelected] = useState<SelectedButton>(null);
  const [chatRooms, setChatRooms] = useState<string[]>([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const profileRef = useRef<HTMLDivElement>(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false)

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

  const handleAvatarClick = () => {
    setIsProfileVisible((prev) => !prev);
  };

  useEffect(() => {
    const storedChatRooms = localStorage.getItem("chatRooms");
    if (storedChatRooms) {
      setChatRooms(JSON.parse(storedChatRooms));
    }
    if (selected) {
      const pathMap = {
        home: "/home",
        chat: "/chat",
        chats: "/groupchat",
      };
      navigate(pathMap[selected]);
    }
  }, [selected, navigate]);

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
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileVisible(false);
      }
    };

    if (isProfileVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileVisible]);

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
          <S.SideAvatarButton onClick={handleAvatarClick}>
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