import styled from "styled-components";

// 전체 컨테이너
export const ChatRoomContainer = styled.div`
  width: 100%;
  max-width: 400px; /* 필요에 따라 수정 가능 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 20px;
  background-color: #fff; /* 배경색 */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 채팅방 목록
export const ChatRoomList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* 항목 간 간격 */
  max-height: 500px; /* 스크롤 영역 설정 */
  overflow-y: auto; /* 스크롤 가능 */
`;

// 개별 채팅방 항목
export const ChatRoom = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  padding: 10px; /* 패딩 */
  border-radius: 4px;
  cursor: pointer; /* 마우스 포인터 변경 */
  transition: background-color 0.2s; /* 배경색 변화 효과 */

  &:hover {
    background-color: #f0f0f0; /* 호버 시 배경색 변화 */
  }
`;

// 채팅방 아바타 감싸는 랩
export const ChatRoomAvatarWrap = styled.div`
  margin-right: 10px; /* 아바타와 텍스트 간 간격 */
`;

// 채팅방 아바타 이미지
export const ChatRoomAvatar = styled.img`
  width: 40px; /* 아바타 크기 */
  height: 40px; /* 아바타 크기 */
  border-radius: 50%; /* 원형으로 만들기 */
  object-fit: cover; /* 이미지 비율 유지 */
`;