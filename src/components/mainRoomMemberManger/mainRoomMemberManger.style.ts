import styled from "styled-components"; 

export const ChatRoomForm = styled.div`
    width: 272px;
    height: 72px;

    border-radius: 16px;
    background: #FFF; 

    display: flex;
    width: 272px;
    padding: 16px;
    gap: 8px;
`

export const FileUpload = styled.button`
    color: var(--Red-Red500, #F90707);
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 20.8px */
  display: flex;
  justify-content: center;
  padding: 8px;

  border: none;
  background: none;
  
  &:hover {
    color: var(--Red-Red500, #C20000); /* 마우스 호버 시 텍스트 색상 변경 */
  }
`