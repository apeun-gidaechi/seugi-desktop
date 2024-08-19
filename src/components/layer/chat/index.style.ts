import styled from "styled-components";

export const ChatingBackground = styled.div`
    background: var(--Primary-Primary050, #F8FCFF);
    display: flex;  /* Use flex to handle alignment */
    flex-direction: column;  /* Align children in a column */
    height: 100vh;
    position: relative;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

export const ChatRoomWrapper = styled.div`
    flex: 1;  /* Allow this component to take up remaining space */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

