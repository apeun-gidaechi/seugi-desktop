import styled from "styled-components";

export const AllWrapContainer = styled.div`
    margin: 80px 0 64px 0;
    position: absolute;
    padding: 20px 32px 0 0;
    width: 100%;
    height: calc(100vh - 200px); 
`;

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
    height: calc(100% - 40px); 
    max-height: 650px; 
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