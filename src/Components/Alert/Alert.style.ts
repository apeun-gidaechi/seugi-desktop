import styled from "styled-components";
import { SeugiFont } from '@/Design/text/SeugiFont';
import { SeugiColor } from "@/Design/color/SeugiColor";

export const Dialog = styled.div<{ position: string }>`
  position: fixed;
  ${({ position }) => {
    switch (position) {
      case 'top-left':
        return `
          top: 20px;
          left: 20px;
        `;
      case 'top-right':
        return `
          top: 20px;
          right: 20px;
        `;
      case 'bottom-left':
        return `
          bottom: 20px;
          left: 20px;
        `;
      case 'bottom-right':
        return `
          bottom: 20px;
          right: 20px;
        `;
      case 'center':
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: none;
        `;
      default:
        return `
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          animation: none;
        `;
    }
  }}
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 18px;

  width:450px;
`;


export const TextContainer = styled.div`
  display: flex;
  padding: 4px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`

export const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`

export const Button = styled.button`
  display: flex;
  height: 36px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.00);

  color: ${SeugiColor.Primary500};

  ${SeugiFont.subtitle.subtitle2};

  border:none;
  cursor: pointer;
`

export const TitleText = styled.span`
  color: ${SeugiColor.Black};
  ${SeugiFont.subtitle.subtitle1};
`

export const SubText = styled.span`
  color: ${SeugiColor.Gray700};
  ${SeugiFont.subtitle.subtitle2};
`

