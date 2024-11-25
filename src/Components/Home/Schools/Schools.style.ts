import styled from "styled-components";
import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";

export const UpContainer = styled.div`
  display: flex;
  padding: 12px 12px 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  border-radius: 12px;
  background: ${SeugiColor.White};

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const SchoolTitleBox = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export const SchoolImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const MySchooliTitle = styled.span`
  color: ${SeugiColor.Black};

  ${SeugiFont.subtitle.subtitle2};
`;

export const SchoolBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const SchoolName = styled.span`
  color: ${SeugiColor.Gray600};

  ${SeugiFont.subtitle.subtitle2};
`;

export const ChangeSchool = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: ${SeugiColor.Gray100};

  color: ${SeugiColor.Gray600};

  ${SeugiFont.body.body2};

  border: none;

  cursor: pointer;
`;

export const NoSchoolDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const NoSchoolMessage = styled.span`
  color:${SeugiColor.Gray700};

  ${SeugiFont.subtitle.subtitle2};
`

export const ArrowLButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
`;

export const ArrowLogo = styled.img`
  position: relative;
`;

export const ButtonDiv = styled.div`
  display:flex;
  justify-content:center;
`

export const SchoolTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`