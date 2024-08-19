import styled from "styled-components";

export const ChangeSchoolMain = styled.div`
  position: absolute;
  display: flex;
  width: 312px;
  height: 312px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  left:70%;
  top:17%;

  border-radius: 12px;
  background: #fff;

  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);

  z-index: 999;

  overflow: scroll;
`;

export const Subscribed = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

`;

export const SchoolName = styled.span`
  color: var(--Black, #000);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

  margin-right: auto;
`;

export const SettingButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;

  margin-right: 2px;
`;

export const NoPendingSchools = styled.span`
  color: #000;

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */
`;

export const PendingSchool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const SettingImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
`;

export const ArrowImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const NoSubSchoolText = styled.span`
  display: block;

  color: var(--Black, #000);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */

  padding: 0 0 8px 0;
`;

export const SchoolBox = styled.div`
  width: 280px;
  height: 40px;

  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 8px;
  background: var(--Primary-Primary050, #f8fcff);
`;

export const WaitingJoin = styled.span`
  display: flex;
  flex-direction: row;
  left: 10px;
  color: var(--Gray-Gray600, #787878);

  font-family: "Pretendard-Regular", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

  padding: 0 0 4px 0;
`;

export const JoinSchool = styled.button`
  display: flex;
  height: 36px;
  padding: var(--Large, 12px);
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: var(--Large, 12px);

  border: none;
  background-color:none;
  background:none;

  cursor: pointer;

  color: var(--Sub-Black, #000);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; 
`;
export const CreateSchool = styled.button`
  display: flex;
  height: 36px;
  padding: var(--Large, 12px);
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: var(--Large, 12px);

  border: none;
  background-color:none;
  background:none;

  cursor: pointer;

  color: var(--Gray-Gray600, #787878);

  /* Body2 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
`;

export const NoSubscribedSchools = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const MoveButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`