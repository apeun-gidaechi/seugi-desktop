import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./Navbar.style";
import Home from "@/Assets/image/sidebar/home.svg";
import Chat from "@/Assets/image/sidebar/chat.svg";
import Chats from "@/Assets/image/sidebar/chats.svg";
import SelectHome from "@/Assets/image/sidebar/slecthome.svg";
import SelectChat from "@/Assets/image/sidebar/selectchat.svg";
import SelectChats from "@/Assets/image/sidebar/selectgroup.svg";
import SettingImg from "@/Assets/image/profile/profilesetting_fill.svg";
import Avatar from "@/Components/common/Avatar/Avatar";
import Profile from "@/Components/Profile/Profile";
import { paths } from "@/Constants/paths";
import { useSelected } from "@/Hooks/Selected/useSelected";

const Navbar = () => {
  const { selected, setSelected } = useSelected();
  const navigate = useNavigate();
  const profileRef = useRef<HTMLDivElement>(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleButtonClick = (path: string) => {
    setSelected(path);
    navigate(path);
  };

  const handleAvatarClick = () => {
    setIsProfileVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
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

  const handleClickSetting = () => {
    navigate(paths.admingeneral);
  };

  return (
    <S.SideBarContainer>
      <S.SideBarButton
        onClick={() => handleButtonClick("")}
        $isSelected={selected === ""}
      >
        <S.SideBarImage src={selected === "" ? SelectHome : Home} />
      </S.SideBarButton>

      <S.SideBarButton
        onClick={() => handleButtonClick("chat")}
        $isSelected={selected === "chat"}
      >
        <S.SideBarImage src={selected === "chat" ? SelectChat : Chat} />
      </S.SideBarButton>
      <S.SideBarButton
        onClick={() => handleButtonClick("groupchat")}
        $isSelected={selected === "groupchat"}
      >
        <S.SideBarImage src={selected === "groupchat" ? SelectChats : Chats} />
      </S.SideBarButton>

      <S.SettingButton onClick={handleClickSetting}>
        <S.SideBarImage src={SettingImg} />
      </S.SettingButton>

      <S.SideAvatarImgWrap>
        <S.SideAvatarButton
          onClick={handleAvatarClick}
          className="avatar-button"
        >
          <Avatar size="medium" />
        </S.SideAvatarButton>
      </S.SideAvatarImgWrap>

      {isProfileVisible && (
        <div ref={profileRef}>
          <Profile />
        </div>
      )}
    </S.SideBarContainer>
  );
};

export default Navbar;
