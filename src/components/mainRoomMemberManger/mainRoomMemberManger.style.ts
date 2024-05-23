import styled from "styled-components"; 

interface FileUploadProps {
    hovered: boolean;
}

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

export const FileUpload = styled.button<FileUploadProps>`
     color: ${(props) =>
        props.hovered ? "var(--Red-Red500, #C20000)" : "var(--Red-Red500, #F90707)"};

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
`