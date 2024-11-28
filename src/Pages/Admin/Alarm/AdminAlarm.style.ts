import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const AdminGeneralMain = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

export const SettingMain = styled.div`
    display: flex;
    padding: 56px 16px 0px 416px;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;

    background: ${SeugiColor.White};
`

export const SettingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`

export const TitleDiv = styled.div`
    display: flex;
    padding: 8px 4px;
    align-items: flex-start;
    gap: 24px;
`

export const Title = styled.span`
    color: ${SeugiColor.Black};
    ${SeugiFont.subtitle.subtitle1};
`

export const Right = styled.div`
    width: 180px;
    flex-shrink: 0;
    align-self: stretch;
`

export const OutSchoolDiv = styled.div`
    width:52vw;
    display: flex;
    height: 56px;
    padding: 12px 20px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const OutSchool = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2}
`

export const RightImg = styled.img`
`

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 51px;
  height: 31px;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${SeugiColor.Gray200};
  -webkit-transition: .5s;
  transition: .5s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 2px;
    bottom: 3px;
    background-color: ${SeugiColor.White};
    -webkit-transition: .5s;
    transition: .5s;
    border-radius: 50%;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider} {
    background-color: ${SeugiColor.Primary500};
  }

  &:focus + ${ToggleSlider} {
    box-shadow: 0 0 2px #2196F3;
  }

  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;