import styled from "styled-components";

export const ChatContainer = styled.div`
background: var(--Primary-Primary050, #F8FCFF);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    position: relative;
    width: 100vw;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;


export const ChatWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr; /* 사이드바 + Chat 내용 */
  height: 100vh;
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;