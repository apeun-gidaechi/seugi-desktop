import { SeugiImg } from "@/Components/Login/login.style";
import { SeugiColor } from "@/Design/color/SeugiColor";
import { SeugiFont } from "@/Design/text/SeugiFont";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const AuthenticationMain = styled.div`
    background: linear-gradient( #1C8DF4 0%, #21B6E5 58.35%);
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const AuthenticationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px 32px;
    gap: 32px;

    position: absolute;
    width: 485px;
    height: 378px;
    left: calc(50% - 485px/2 + 0.5px);
    top: calc(50% - 378px/2);

    background: ${SeugiColor.White};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
    border-radius: 36px;
    z-index:10;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 421px;
    height: 36px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const Title = styled.span`
    width: 128px;
    height: 36px;
    ${SeugiFont.title.title1};
    color: ${SeugiColor.Black};
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const CodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    gap: 16px;
    width: 421px;
    height: 126px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const CodeInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    width: 421px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left:4px;
    align-items: flex-start;
    gap: 10px;

    width: 80px;
    height: 18px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const Subtitle = styled.p`    
    color: ${SeugiColor.Black};

    ${SeugiFont.body.body1};
`

export const Redstar = styled.a`
    color: ${SeugiColor.Red500};

    ${SeugiFont.body.body1};
`;

export const InputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;

`

export const CodeTextInput = styled.input`
    display: flex;
    width: 52px;
    height: 52px;
    padding: 17px 0px 14px 0px;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;

    border-radius: var(--Large, 12px);
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.White};
    ${SeugiFont.subtitle.subtitle2};
    text-align:center;
`

export const CodeSpan = styled.button`
    display: flex;
    height: 36px;
    padding: var(--Large, 12px);
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: var(--Large, 12px);
    background: ${SeugiColor.Primary500};
    border:none;

    color: ${SeugiColor.White};

   ${SeugiFont.body.body2};

    cursor: pointer;
`

export const ContinueContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const Sun = styled.img`
    position: absolute;
    width: 342px;
    height: 342px;
    top: 2%;
    left: 48%;
    flex-shrink: 0;
    border-radius: 342px;
    background: linear-gradient( rgba(255, 255, 255, 0.50) 0%, rgba(255, 199, 0, 0.50) 100%), #FFC700;
    z-index:4;
`

export const Cloud1 = styled.img`
    position: absolute;
    width: 100vw;
    height: 759px;
    flex-shrink: 0;
    top: 19vh;
    fill: linear-gradient(rgba(255, 251, 251, 0.20) 5.93%, rgba(29, 185, 255, 0.20) 100%), #CAE4FF;
    z-index:1;
`

export const Cloud2 = styled.img`
    position: absolute;
   width: 100vw;
    height: 625px;
    flex-shrink: 0;
    top: 39vh;
    fill: linear-gradient(rgba(255, 255, 255, 0.20) -10.24%, rgba(0, 194, 255, 0.20) 88.96%, rgba(235, 248, 255, 0.20) 88.96%), #F3F8FF;
    z-index:2;
`

export const Cloud3 = styled.img`   
    position: absolute;
    width: 100vw;
    height: 687px;
    flex-shrink: 0;
    fill: #F2F7FF;
    top: 49vh;
    z-index:3;
`

export const TimerSpan = styled.span`
    color: ${SeugiColor.Gray600};

    ${SeugiFont.body.body2};
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