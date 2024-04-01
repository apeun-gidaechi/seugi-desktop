import styled from "styled-components";

export const SelectFirstWrap = styled.div`
    display: inline-flex;
    padding: 36px 32px;
    flex-direction: column;
    align-items: center;
    gap: 36px;

    border-radius: 36px;
    background: #FFF;

    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.06);
`;

export const Selectjob = styled.p`
    color: var(--Black, #000);

    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
`;

export const Frame334 = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 5px;
`;

export const Frame232 = styled.button`
    display: flex;
    width: 187px;
    height: 187px;
    padding: 16px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 20px;
    color: var(--Primary900, #020202);
    cursor: pointer;
`;

export const Stdimg = styled.img`
    margin-top:20px;
    width: 214px;
    height: 120px;
`;

export const Txtstudent = styled.p`
    color: var(--Primary900, #020202);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Teacherimg = styled.img`
    margin-top:20px;
    width: 174px;
    height: 120px;
`;

export const TxtTeacher = styled.p`
    color: var(--Gray500, #020202);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Frame300 = styled.div`
display: flex;
width: 379px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 8px;
`;

export const Continuebtn = styled.button`
    display: flex;
    height: 54px;
    padding: 12px 125px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    border:none;
    border-radius: var(--Large, 12px);
    background: var(--Primary-Primary500, #1D93F3);

    color: var(--Sub-White, #FFF);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;

    cursor: pointer;
`;

export const Haveemail = styled.a`
    display: flex;
    padding-left: 4px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    color: var(--Primary-Primary500, #1D93F3);

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; 

    text-decoration:none;
`;