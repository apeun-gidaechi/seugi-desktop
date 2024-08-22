import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1020px;
    height: 670px;
    padding: 20px 32px 0 0;
    position: absolute;
    margin: 100px 0 64px 452px;
    overflow: hidden;

    @media (max-width: 1020px) {
        width: 90%;
        margin: 100px auto 64px auto; 
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    background: var(--Sub-White, #FFF);
    width: 100%;
    height: 100%;
    padding: 20px;

    @media (max-width: 300px) {
        height: auto;
    }
`;

export const SelectChatRoomImgWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const SelectChatRoomImg = styled.img`
    width: 4rem;
    height: auto;

    @media (max-width: 768px) {
        width: 3rem; 
    }
`;

export const SelectChatRoomMessage = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    padding: 20px;

    @media (max-width: 768px) {
        font-size: 16px; 
        text-align: center; 
    }
`;