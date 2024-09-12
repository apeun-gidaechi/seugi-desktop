import styled from "styled-components";
import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";

export const AssignmentMain = styled.div`
    display: flex;
    padding: 12px 12px 16px 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;

    border-radius: 12px;
    background: ${SeugiColor.White};

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const AssignmentTitleBox = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

export const AssignmentImg = styled.img`
  width: 28px;
  height: 28px;
`

export const AssignmentTitleText = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`

export const AssignmentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const PostAssignment = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.body.body1};

  margin-left:15vw;
`

export const AssignmentButton = styled.a`
    display: flex;
    padding: 12px 12px 16px 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;

    border:none;
    background:none;

    cursor: pointer;

    text-decoration:none;
`

export const AssignmentButtonText = styled.span`
    color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`