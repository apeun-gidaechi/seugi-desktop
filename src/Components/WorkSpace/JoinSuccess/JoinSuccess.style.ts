import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const SuccessMain = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  width: 485px;
  padding: 36px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
`

export const SchoolImgContainer = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
  justify-content: center;
  align-items: center;
`

export const SchoolImg = styled.img`
  width: 180px;
  height: 180px;

  fill: url(<path-to-image>) lightgray 50% / cover no-repeat;
  filter: drop-shadow(0px 3px 9px rgba(0, 0, 0, 0.04));
`

export const SchoolInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export const SchoolName = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.title.title1};
`

export const SchoolInfo = styled.span`
    color: ${SeugiColor.Gray600};

    ${SeugiFont.subtitle.subtitle1};
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

export const BackButton = styled.button`
  width: 32px;
  height: 32px;

  border:none;
  background:none;
  
  cursor: pointer;

  margin-right:90%;
`

export const BackImg = styled.img`
`