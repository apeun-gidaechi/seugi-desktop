import styled from 'styled-components';
import { SeugiColor } from '@/Design/color/SeugiColor';
import { SeugiFont } from '@/Design/text/SeugiFont';

export const CafeteriaContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const CafeteriaTitleBox = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const CafeteriaTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CafeteriaImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const ArrowLButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
`;

export const CArrowLogo = styled.img`
  position: relative;
`;

export const CafeteriaDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  margin-left: 5px;
`;

export const TimeButton = styled.button`
  border: none;
  background: none;

  cursor: pointer;
`;

export const Meal = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`;

export const MenuList = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  border-radius: 8px;
  background: ${SeugiColor.Gray100};
`;

export const CafeteriaTitle = styled.p`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`;

export const Menu = styled.span`
  color:${SeugiColor.Gray700};

  ${SeugiFont.subtitle.subtitle2};
`;

export const CalorieDiv = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: var(--Corner-Small, 10px);

  border-radius: 34px;
  background: ${SeugiColor.Primary500};
`

export const CalorieText = styled.span`
  color: ${SeugiColor.White};

  ${SeugiFont.caption.caption1};
 `

export const NoMealMessage = styled.span`
  color:${SeugiColor.Gray700};

  ${SeugiFont.subtitle.subtitle2};
`