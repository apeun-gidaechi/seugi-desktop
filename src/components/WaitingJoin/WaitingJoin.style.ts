import { SeugiFont } from '@/design/text/SeugiFont';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'; 

export const WaitingAcceptanceFrame = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`
export const WaitingAcceptanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 36px;
    background: #FFF;

`

export const SchoolInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 36px;
    width: 421px;
    height: 334.19px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const SchoolImg = styled.img`
    width: 145px;
    height: 145px;
    flex-shrink: 0;
`

export const SchoolName = styled.span`
    color: var(--white-black-black-000, #101112);
    text-align: center;

    ${SeugiFont.subtitle.subtitle1}
`

export const MentContainer = styled.div`
    display: inline-flex;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const MentImg = styled.img`
    margin-left:17vw;
`;
