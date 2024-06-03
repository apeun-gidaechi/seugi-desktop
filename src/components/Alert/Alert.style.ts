import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';


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
  padding: var(--Large, 12px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--Large, 12px);
  background: rgba(0, 0, 0, 0.00);

  color: var(--Primary-Primary500, #1D93F3);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */

  border:none;
  cursor: pointer;
`

export const TitleText = styled.span`
  color: var(--Sub - Black, #000);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; 
`

export const SubText = styled.span`
  color: var(--Gray-Gray700, #333);

  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */
`

