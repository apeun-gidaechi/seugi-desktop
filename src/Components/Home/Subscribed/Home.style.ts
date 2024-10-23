import styled from "styled-components";
import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const HomeMain = styled.div`
  overflow-y: auto;
  display: flex;
  padding: 48px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;

  background: ${SeugiColor.Primary050};
`;

export const ComponentsBox = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const HomeTitle = styled.h1`
  margin-left: 1%;

  position: relative;

  width: 100%;
  height: 100px;

  color: ${SeugiColor.Black};

  ${SeugiFont.title.title1};
`;

export const HomeWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
`;

export const HomeWrapper2 = styled.div`
  display: flex;
  width: 29vw;
  height: 22vw;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const HomeWrapper1DownContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
  width: 100px;
`;

