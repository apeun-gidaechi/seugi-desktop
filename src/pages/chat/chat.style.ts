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

export const ChatWrapper = styled.div`
  background: var(--Primary-Primary050, #F8FCFF);
  position: relative;
  padding-top: 10px;

  display: flex;
`;

export const ChatContent = styled.div`
  position: relative;
  top: -20px;
  width: 100%; 
  height: calc(100vh - 20px);
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;