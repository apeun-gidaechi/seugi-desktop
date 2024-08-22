import { SeugiColor } from "@/design/color/SeugiColor";
import { SeugiFont } from "@/design/text/SeugiFont";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const CreateSchoolMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 193px;
    flex: 1 0 0;
    align-self: stretch;
    margin-top:24vh;
`

export const CreateSchoolContainer = styled.div`
    display: flex;
    width: 485px;
    padding: 36px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`

export const Title = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.title.title1};
`

export const InputImg = styled.img`
    width: 128px;
    height: 128px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`


export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
`

export const SubtitleContainer = styled.div`
    display: flex;
    padding-left: 4px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`

export const Subtitle = styled.span`
    margin-left:4px;
    color: ${SeugiColor.Black};

    ${SeugiFont.body.body1};
`

export const RedStar = styled.a`
    color: ${SeugiColor.Red500};

    ${SeugiFont.body.body1};
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`

export const Input = styled.input.attrs({ type: 'file' })`
    width: 220px;
    height: 220px;
    background-color: ${SeugiColor.Transparent};
    border: none;
    position: relative;
    display: inline-block;
    z-index: 5;
    display:none;
    &::file-selector-button {
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-color: ${SeugiColor.Transparent};
        border: none;
    }
`

export const ButtonImg = styled.img<{ $isImageUploaded: boolean }>`
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    display: inline-block;
    z-index: 4;
    cursor: pointer;
    border-radius: 20%; 
    border: ${(props) => (props.$isImageUploaded ? `2px solid ${SeugiColor.Gray300}` : 'none')}; 
`;


export const PlusButton = styled.img` // 반응형......./
    width: 60px;
    height: 60px;
    cursor: pointer;
    z-index:300;
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    position: absolute;
    right: 42.5%;
    top: 50%;
`

export const UpLoadButtonLabel = styled.label`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const BackButton = styled.button`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position:absolute;
    border:none;
    background:none;

    cursor: pointer;
    margin-right:27vw;
`

export const BackImg = styled.img`
`