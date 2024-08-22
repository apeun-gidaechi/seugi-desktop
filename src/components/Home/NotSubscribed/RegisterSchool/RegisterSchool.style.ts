import { Subtitle2 } from '@/components/Login/login.style';
import { SeugiColor } from '@/design/color/SeugiColor';
import { SeugiFont }from '@/design/text/SeugiFont';
import styled from 'styled-components';

export const RegisterSchoolContainer = styled.div`
    position:absolute;
    width: 100%;
    height: 1024px;
    z-index: 999;
    background: rgba(0, 0, 0, 0.30);
`;

export const RegisterSchoolBox = styled.div`
    display: flex;
    width: 328px;
    padding: 18px;
    flex-direction: column;
    align-items: center;
    gap: 18px;

    position: absolute;
    left: 556px;
    top: 300px;
    border-radius: 16px;
    background: ${SeugiColor.White};

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);
`;

export const TextBox = styled.div`
    display: flex;
    padding: 4px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const RegisterSchoolText = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle1};
`;

export const Subtitle = styled.span`
    color: ${SeugiColor.Gray700};

    ${SeugiFont.subtitle.subtitle2};
`

export const ButtonBox = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`
export const NewSchoolButton = styled.button`
    display: flex;
    height: 54px;
    width:65px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;

    border-radius: var(--Large, 12px);
    background: ${SeugiColor.Gray100};

    border:none;

    cursor: pointer;
`

export const NewSchoolButtonText = styled.span`
    color: ${SeugiColor.Gray600};

    ${SeugiFont.subtitle.subtitle2};
`

export const JoinSchoolButton = styled.button`
    display: flex;
    height: 54px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;

    border-radius: var(--Large, 12px);
    background: ${SeugiColor.Primary500};

    border:none;

    cursor: pointer;
`

export const JoinSchoolButtonText = styled.span`
    color: ${SeugiColor.White};

    ${SeugiFont.subtitle.subtitle2};
`
