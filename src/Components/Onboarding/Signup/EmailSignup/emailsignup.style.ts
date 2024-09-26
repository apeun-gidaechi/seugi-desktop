import { SeugiColor } from '@/Design/color/SeugiColor';
import { SeugiFont } from '@/Design/text/SeugiFont';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'; 

export const EmailMain = styled.div`
    background: linear-gradient(#1C8DF4 0%, #21B6E5 58.35%);

    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const EmailFirstWrap = styled.div`
    position:relative;
    z-index:5;
    display: flex;
    width: 485px;
    padding: 36px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    border-radius: 36px;
    background: ${SeugiColor.White};

    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.06);
`;

export const Header = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`;

export const Title1 = styled.p`
    color: ${SeugiColor.Black};

    ${SeugiFont.title.title1};
`;

export const TxtContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
`;

export const EneterInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
`;

export const Subtitle = styled.div`
    margin-left:4px;
    display: flex;
    padding-left: 4px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`;

export const Body1 = styled.p`
    color: ${SeugiColor.Black};

    ${SeugiFont.body.body1};
`;

export const Redstar = styled.a`
    color: ${SeugiColor.Red500};

    ${SeugiFont.body.body1};
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`;

export const Continuebtn = styled.button`
    display: flex;
    height: 54px;
    padding: 12px 125px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    border-radius: var(--Large, 12px);
    background: ${SeugiColor.Primary500};
`;

export const EmailCheck = styled.div`
    display: flex;
    padding-left: 4px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`;

export const Haveemail = styled.a`
    margin-left: 4px;
    color: ${SeugiColor.Primary500};

     ${SeugiFont.body.body1};

    text-decoration:none;
`;

export const Showpw = styled.img`
    width: 24px;
    height: 24px;
`

export const Btnview = styled.button`
    margin-right: 16px; 
    background: transparent;
    border: none;
    cursor: pointer;

    &:focus {
        outline: none; 
    }
`

export const InputContainer = styled.div<{ error?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--Large, 12px);
    border: 1px solid ${({ error }) => (error ? 'red' : SeugiColor.Gray300)};
    background: ${SeugiColor.White};
    
    /* 애니메이션을 추가하여 에러 발생 시 부드러운 강조 효과 */
    transition: border-color 0.3s ease;
`;


export const ErrorText = styled.p`
    color: ${SeugiColor.Red500};
    padding:10px 0 0 0;
    ${SeugiFont.body.body1};

    margin-left:4px;
`;


export const Cloud1 = styled.img`
    position: absolute;
    width: 100vw;
    height: 687px;
    flex-shrink: 0;
    fill: #F2F7FF;
    top: 49vh;
    z-index:3;
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
    height: 759px;
    flex-shrink: 0;
    top: 19vh;
    fill: linear-gradient(rgba(255, 251, 251, 0.20) 5.93%, rgba(29, 185, 255, 0.20) 100%), #CAE4FF;
    z-index:1;
`

export const Sun = styled.img`
    position:absolute;

    width: 342px;
    height: 342px;
    flex-shrink: 0;
    top:2%;
    left:25%;
    border-radius: 342px;
    background: linear-gradient( rgba(255, 255, 255, 0.50) 0%, rgba(255, 199, 0, 0.50) 100%), #FFC700;
    z-index:4;
`

export const BackButton = styled.button`
    position:absolute;
    
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    
    border:none;
    background:none;

    cursor: pointer;
    left: 0;

`

export const BackImg = styled.img`
`