import styled from "styled-components";

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 20px;
`

export const InChatContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
    height: 100%;
    padding: 24px 16px;
    flex-direction: column;
    background: white;
    box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    overflow-y: scroll;
    -ms-overflow-style: none;/* for Internet Explorer, Edge */
    scrollbar-width: none;/* for Firefox */

    &::-webkit-scrollbar {
        display: none;/* for Chrome, Safari, and Opera */
    }
`

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    background: var(--Sub-White, #FFF);
    width: 100%;
    height: 100%; 
    //max-height: 650px;
    border: 1px solid red;
`;

export const CurrentData = styled.div`
    color: var(--Gray-Gray600, #787878);
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
`;

export const CurrentDataWrap = styled.div`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 24px;
    background: var(--Gray-Gray100, #F4F5F9);
`;

export const CurrentDataContainer = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 10px;
    width: 100%;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px; 
`;

export const Message = styled.div`
  background-color: #e0e0e0;
  padding: 8px 12px;
  border-radius: 8px;
  max-width: 60%;
  word-wrap: break-word;
  font-size: 14px;
`;

export const Time = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 4px;
  align-self: flex-end; /* 시간을 오른쪽 정렬 */
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
    //bottom: 70px;
    //left: 10px;
    display: flex;
    z-index: 100;

    width: 220px;
    height: 120px;
    
    min-width: 220px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    border-radius: 16px;
    background: #FFF;

    /* ev-black-3 */
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.08);
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