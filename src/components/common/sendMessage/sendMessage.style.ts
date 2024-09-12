import styled from "styled-components";

export const MessageBoxInBox = styled.div`
  position: absolute;
  z-index: 100;
  /* margin: 70px 0 64px 452px; */
  margin: 80px 0 64px 0;
  padding: 20px 32px 0 0;
  /* width: calc(100% - 452px); */
  width: 100%;
  height: calc(100vh - 200px); 
  margin-top: -100vh;
  /* margin-top: calc(-100vh + 230px); */
`

export const MessageWrap = styled.div`
  margin-top: 240px;
  margin-right: 20px;
`

export const Allwrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SendMessageWrap = styled.div`
  height: 64px;
  display: flex;
  padding: 10px 16px;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background: var(--Sub-White, #FFF);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
  width: 100%;
  position: relative;
`;

export const PlustFileButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const PlusMessageFile = styled.img`
  width: 27px;
  height: 27px;
  padding: 0;
  display: block;
`;

export const SendMessageInput = styled.input`
  flex: 1;
  font-family: 'Pretendard-Regular', sans-serif;
  color: var(--Gray-Gray500, #AAA);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  border: none;
  background: none;
  outline: none;

  &:focus {
    color: black;
  }
`;

export const SendArrowButton = styled.button`
  border: none;
  background: none;
  position: relative;
`;

export const SendArrow = styled.img`
  width: 32px;
  height: 32px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  bottom: 70px;
  left: 10px;
  display: flex;
  z-index: 100;

  width: 220px;
  height: 120px;

  display: inline-flex;
    min-width: 220px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    border-radius: 16px;
    background: #FFF;

    /* ev-black-3 */
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);
`;

export const DropdownItem = styled.button`

    display: flex;
    padding: 8px 0px;
    align-items: flex-start;
    gap: var(--Corner-Small, 10px);

    align-self: stretch;
  background: none;
  border: none;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  color: var(--Sub-Black, #000);

    /* Subtitle2 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 2px;
  }
`;

export const UploadImg = styled.img`
    width: 24px;
    height: 24px;
`