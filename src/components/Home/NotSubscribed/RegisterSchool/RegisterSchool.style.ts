import styled from 'styled-components';

export const RegisterSchoolContainer = styled.div`
    position:absolute;
    width: 100%;
    height: 1024px;
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
    background: var(--Sub-White, #FFF);

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
    color: var(--Sub-Black, #000);

    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
`;

export const Subtitle = styled.span`
    color: var(--Gray-Gray700, #333);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
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
    background: var(--Gray-Gray100, #F4F5F9);

    border:none;

    cursor: pointer;
`

export const NewSchoolButtonText = styled.span`
    color: var(--Gray-Gray600, #787878);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
`

export const JoinSchoolButton = styled.button`
    display: flex;
    height: 54px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;

    border-radius: var(--Large, 12px);
    background: var(--Primary-Primary500, #1D93F3);

    border:none;

    cursor: pointer;
`

export const JoinSchoolButtonText = styled.span`
    color: var(--Sub-White, #FFF);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 20.8px */
`
