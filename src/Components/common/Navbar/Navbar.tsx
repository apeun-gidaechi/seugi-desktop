import { useNavigate, useLocation } from "react-router-dom";
import * as S from "@/Components/common/Navbar/Navbar.style";

import Home from "@/Assets/image/sidebar/home.svg";
import Chat from "@/Assets/image/sidebar/chat.svg";
import Chats from "@/Assets/image/sidebar/chats.svg";
import SelectHome from "@/Assets/image/sidebar/slecthome.svg";
import SelectChat from "@/Assets/image/sidebar/selectchat.svg";
import SelectChats from "@/Assets/image/sidebar/selectgroup.svg";
import Profile from "@/Components/Profile/Profile";
import React, { useEffect, useRef, useState } from "react";
import { paths } from '@/Constants/paths';
import Avatar from "@/Components/common/Avatar/Avatar";

type SelectedButton = "home" | "chat" | "chats" | null;

const Navbar = () => {

  const [selected, setSelected] = useState<SelectedButton>(null);
  const [chatRooms, setChatRooms] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const profileRef = useRef<HTMLDivElement>(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false)

  useEffect(() => {
    // 현재 경로에 따라 selected 상태를 설정
    const pathMap: { [key: string]: SelectedButton } = {
      "/": "home",
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
        home: paths.home,
        chat: paths.chat,
        chats: paths.groupchat,
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
      const target = e.target as Node | null;
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node) &&
        !(target && (target as Element).closest('.avactar')) 
      ){
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
          <S.SideAvatarButton onClick={handleAvatarClick} className="avactar">
            <Avatar size="medium" />
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