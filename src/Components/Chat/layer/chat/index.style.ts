import { SeugiColor } from "@/Design/color/SeugiColor";
import styled from "styled-components";

export const ChatingBackground = styled.div`
    background: ${SeugiColor.Primary050};
    display: flex; 
    flex-direction: column; 
    height: 100vh;
    position: relative;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;
