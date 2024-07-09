import styled from "styled-components";

export const SideBarChat = styled.div`
    display: flex;
    width: 320px;
    height: 971px;
    padding: 8px 0px;
    flex-direction: column;
    background: #FFF; 
    margin-left: 80px;
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`

export const ChatingPage = styled.div`
    display: flex;
`

export const SideFinder = styled.div`
    display: flex;
    height: 44px;
    width: 264px;
    margin-left: 12px;
    border-radius: 12px;
    border: 1px solid #E6E6E6;
    background: #FFF;
`

export const FindChatingRoom = styled.input`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 208px;
    margin-left: 16px;
    outline: none;
    color: var(--Gray-Gray500, #AAA);
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    &:focus {
        color: black; 
    }
`

export const PlusButtonImg = styled.img`
    width: 26.667px;
    height: 26.667px;
`

export const SearchIcon = styled.img`

`

export const PlusButton = styled.button`
    background: none; 
    border: none; 
    display: inline; 
    position: absolute;
    margin-left: 282px;
    margin-top: 10px; 
`

export const ChatRoomList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const ChatRoom = styled.div`
  display: flex;
  height: 72px;
  padding: 4px 16px;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  cursor: pointer;

  color: var(--Black, #000);

  /* Subtitle2 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */
  
`;

export const ChatRoomAvatar = styled.img`
    width: 36px;
    height: 36px;
    flex-shrink: 0;
`;

export const ChatRoomAvatarWrap = styled.div`
    padding-right: 16px;
`