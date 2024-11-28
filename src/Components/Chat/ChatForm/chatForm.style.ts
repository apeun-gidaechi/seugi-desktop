import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components"; 
import { createGlobalStyle } from 'styled-components'; 


export const ChatRoomForm = styled.div`
    width: 272px;
    height: 69px;

    border-radius: 16px;
    background: #FFF; 

    display: flex;
    width: 272px;
    padding: 16px;
    gap: 8px;
`

export const FileUpload = styled.div`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};

    display: flex;
    justify-content: center;

    padding: 8px;
`