import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #F8FCFF;
    padding: 64px 32px !important;
`;

export const ChatWrapper = styled.div`
    display: flex;
    width: 100%;   
    height: calc(100% - 64px);
    gap: 20px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-content: space-between;
`;