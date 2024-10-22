import styled from "styled-components";
import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";

export const AssignmentMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 12px 16px;
  background: ${SeugiColor.White};
  border-radius: 12px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.04);
`;

export const AssignmentTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 4px;
`;

export const AssignmentImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const AssignmentTitleText = styled.span`
  color: ${SeugiColor.Black};
  ${SeugiFont.subtitle.subtitle2};
`;

export const AssignmentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  height: 300px; 
  overflow-y: auto;
  padding-right: 8px; 

  h1 {
    font-size: 16px;
    font-weight: bold;
    color: ${SeugiColor.Black};
    margin-bottom: 8px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const AssignmentButton = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
  background-color: ${SeugiColor.White};
  cursor: pointer;

  &:hover {

  }
`;

export const AssignmentButtonText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${SeugiColor.Black};
  ${SeugiFont.subtitle.subtitle2};
`;

export const AssignmentDescription = styled.p`
  font-size: 14px;
  color: gray;
  margin: 4px 0;
`;

export const AssignmentDateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
    color: gray;
  }
`;

export const DaysLeft = styled.div`
  background-color: #1D93F3;
  color: ${SeugiColor.White};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
`;

export const NoTask = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${SeugiColor.Black};
  ${SeugiFont.subtitle.subtitle2};
`


export const NoTaskWrap = styled.div`
  justify-content: center;
  align-items: center;
`