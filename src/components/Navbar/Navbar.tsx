import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from "@/components/Navbar/Navbar.style";
import config from "@/constants/login/config.json";

import Home from "@/assets/image/sidebar/home.svg";
import Chat from "@/assets/image/sidebar/chat.svg";
import Chats from "@/assets/image/sidebar/chats.svg";
import Bell from "@/assets/image/sidebar/bell.svg";

import AvatarImg from "@/assets/image/chat-components/Avatar.svg";

import SelectHome from "@/assets/image/sidebar/slecthome.svg";
import SelectChat from "@/assets/image/sidebar/selectchat.svg";
import SelectChats from "@/assets/image/sidebar/selectgroup.svg";
import SelectBell from "@/assets/image/sidebar/selectbell.svg";

interface SendMessageProps {
    chatRoom: string;
    currentUser: string;
}

type SelectedButton = "home" | "chat" | "chats" | "bell" | null;

const Navbar = () => {
    const [selected, setSelected] = useState<SelectedButton>(null);
    const [chatRooms, setChatRooms] = useState<string[]>([]);
    const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleButtonClick = (button: SelectedButton, path: string) => {
        setSelected(button);
        navigate(path);
        setSelectedChatRoom(null);
    };

    useEffect(() => {
        // Load chat rooms from localStorage on component mount
        const storedChatRooms = localStorage.getItem("chatRooms");
        if (storedChatRooms) {
            setChatRooms(JSON.parse(storedChatRooms));
        }
    }, []);

    useEffect(() => {
        // Save chat rooms to localStorage whenever chatRooms state changes
        localStorage.setItem("chatRooms", JSON.stringify(chatRooms));
    }, [chatRooms]);

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
      </S.SideBarMenu>
    </div>
    
  )
}

export default Navbar