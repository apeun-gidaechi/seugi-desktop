import styled from "styled-components";
import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";

export const RightDownContainer = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
  z-index:900;
`;

export const SeugiTitleContainer = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const SeugiImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const CatSeugiTitle = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`;

export const CatSeugi = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 99px;
  border: 1.5px solid var(--Gradient-Primary, #1C8DF4);
  background: ${SeugiColor.White};
`;

export const CatSeugiInput = styled.input`
  width: 100%;
  height: 29px;
  border: none;
  &::placeholder {
    color: ${SeugiColor.Gray500};

    ${SeugiFont.subtitle.subtitle2};
  }

  ${SeugiFont.subtitle.subtitle2};

  &:focus {
    outline: none;
  }

  padding: 0 0 0 4px;
`;


export const SearchButton = styled.button`
  border: none;
  background: none;

  cursor: pointer;
`;

export const SearchImg = styled.img`
  padding: 0 4px 0 0;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const LastQuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;


export const LastText = styled.div`
  display: flex;
  padding: 0px 4px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const Lastweek = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.body.body2};
`;

export const LastQuestion = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 4px;
  background: ${SeugiColor.Gray100};
`;

export const QuestionText = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.body.body1};
`;

export const QuestionDay = styled.span`
  color: ${SeugiColor.Gray600};

  ${SeugiFont.body.body2};
`;

export const MessageContainer = styled.div`
    width:100%;
    margin-top: 10px;
    padding: 10px;
    background-color: ${SeugiColor.Gray100};
    border: 1px solid ${SeugiColor.Gray100};
    border-radius: 4px;
`;

export const MessageText = styled.p`
    margin: 0;
    ${SeugiFont.subtitle.subtitle2};
    color: #333;
`;