import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const SideBarChat = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100%;
  padding: 8px 0px;
  background: #FFF; 
  /* margin-left: 80px; */
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.04);
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }  
`;

export const ChatingPage = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const SideFinder = styled.div`
  display: flex;
  height: 44px;
  width: 264px;
  margin-left: 12px;
  border-radius: 12px;
  border: 1px solid #E6E6E6;
  background: #FFF;

  @media (max-width: 768px) {
    width: calc(100% - 24px);
    margin-left: 12px;
    margin-right: 12px;
  }
`;

export const FindChatingRoom = styled.input`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 208px;
  margin-left: 16px;
  outline: none;
  color: ${SeugiColor.Gray500};
  ${SeugiFont.subtitle.subtitle2};
  &:focus {
    color: black; 
  }

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const PlusButtonImg = styled.img`
  width: 26.667px;
  height: 26.667px;
`;

export const SearchIcon = styled.img`
`;

export const PlusButton = styled.button`
  background: none; 
  border: none; 
  display: inline; 
  position: absolute;
  margin-left: 282px;
  margin-top: 10px; 
  z-index: 10; 

  @media (max-width: 768px) {
    margin-left: calc(100% - 38px);
  }
`;

export const ChatRoomList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ChatRoom = styled.div`
  display: flex;
  height: 72px;
  padding: 4px 16px;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  cursor: pointer;

  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`;

export const ChatRoomAvatar = styled.img`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`;

export const ChatRoomAvatarWrap = styled.div`
  padding-right: 16px;
`;