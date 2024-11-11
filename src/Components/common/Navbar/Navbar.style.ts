import styled from "styled-components";
import SelectBar from "@/Assets/image/sidebar/selectsidebar.svg";

export const SideBarMenu = styled.div`
  position: relative;
  display: flex;
  width: 80px;
  height: 100vh; /* 화면 높이에 맞추기 */
  padding: 8px 0px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #FFF;
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
  z-index: 989;

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 8px;
    position: fixed;
    bottom: 0;
  }
`;

export const SideBarButton = styled.button<{ $isSelected: boolean }>`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  position: relative;
  outline: none;

  &:focus {
    outline: none;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.$isSelected ? `url(${SelectBar}) no-repeat center` : 'none'};
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 100%;
    margin-bottom: 0;

    &::before {
      left: auto;
      top: 0;
      width: 100%;
      height: 4px;
    }
  }
`;

export const SideBarImage = styled.img`
  width: 36px;
  height: 36px;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const SideAvatarImgWrap = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 0;
    padding-bottom: 0;
    position: absolute;
    bottom: 10px;
  }
`;

export const SideAvatarImg = styled.img`
  width: 36px;
  height: 36px;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const SideAvatarButton = styled.button`
    background:none;
    border:none;

    cursor: pointer;

    z-index:999;
`