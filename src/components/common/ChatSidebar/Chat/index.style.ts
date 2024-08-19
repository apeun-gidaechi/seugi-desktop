import styled from "styled-components";

export const SideBarChat = styled.div`
  display: flex;
  flex-direction: column;
  width: 366px;
  height: 100%;
  padding: 8px 0px;
  /* background: #FFF;  */
  margin-left: 80px;

  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
    padding: 64px 20px 64px 32px;
`;

export const ChatingPage = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const SideFinder = styled.div`
  display: flex;
  height: 52px;
  width: 100%;
  padding: 12px;

  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 12px;
  background: var(--Sub-White, #FFF);

  margin-top: 20px;

  /* ev-black-1 */
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    width: calc(100% - 24px);
    margin-left: 12px;
    margin-right: 12px;
  }
`;

export const FindChatingRoom = styled.input`
    color: var(--Gray-Gray500, #AAA);

    /* Subtitle2 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */

    outline: none;
    border: none;
  &:focus {
    color: black; 
  }

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const PlusButtonImg = styled.img`
  width: 26.667px;
  height: 26.667px;
`;

export const SearchIcon = styled.img`
`;

export const PlusButton = styled.button`
  background: none; 
  border: none; 
  display: inline; 
  position: absolute;
  margin-left: 282px;
  margin-top: 10px; 
  z-index: 10; 

  @media (max-width: 768px) {
    margin-left: calc(100% - 38px);
  }
`;

export const ChatRoomsWrap = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
    padding: 8px;

    flex-direction: column;
    flex: 1 0 0;

    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const ChatRoomList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`;

export const ChatRoom = styled.div`
  display: flex;
  height: 72px;

  align-items: center;

  cursor: pointer;

  color: var(--Black, #000);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; 

  padding: 4px 16px; 
  width: 100%; 
  

  box-sizing: border-box; 
  text-align: left;
`;

export const ChatRoomAvatar = styled.img`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`;

export const ChatRoomAvatarWrap = styled.div`
  padding-right: 16px;
`;