import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";

export const Title = styled.div`
    //margin-left: 1.5%;

    position: relative;

    width: 100%;
    height: 100%;

    color: ${SeugiColor.Black};

    ${SeugiFont.title.title1};
`  