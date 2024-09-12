import styled from "styled-components";
import { SeugiColor } from "@/design/color/SeugiColor";
import { SeugiFont } from "@/design/text/SeugiFont";

export const NoticeMain = styled.div`
    width: 100vw;
    height: 100vh;

    position:absolute;

    background: rgba(0, 0, 0, 0.30);
    
    z-index:998;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const CreateNoticeContainer = styled.div`
    position: absolute;
    left: 30rem;
    top: 14rem;

    display: flex;
    width: 640px;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    border-radius: 32px;
    background: ${SeugiColor.White};

    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.04);

    z-index:999;

`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const Title = styled.span`
    color: ${SeugiColor.Black};
    ${SeugiFont.title.title1};
`

export const TitleButton = styled.button`
    display: flex;
    height: 36px;
    padding: var(--Large, 12px);
    justify-content: center;
    align-items: center;
    gap: var(--Corner-Small, 10px);

    border-radius: var(--Large, 12px);

    border:none;
    background:none;

    cursor: pointer; 

    color: ${SeugiColor.Primary500};

    ${SeugiFont.body.body2};
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`

export const TitleInputField = styled.input`
    display: flex;
    padding: 12px;
    align-items: flex-start;
    gap: 121px;
    align-self: stretch;

    border-radius: var(--Large, 12px);
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.White};

    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};

    &::placeholder {
        color: ${SeugiColor.Gray500};

        ${SeugiFont.subtitle.subtitle2};
    }
`

export const ContentInputField = styled.textarea`
    display: flex;
    height: 352px;
    padding: 15px 12px;
    align-items: flex-start;
    gap: 121px;
    align-self: stretch;

    border-radius: var(--Large, 12px);
    border: 1px solid ${SeugiColor.Gray300};
    background: ${SeugiColor.White};

    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};

    &::placeholder {
        color: ${SeugiColor.Gray500};

        ${SeugiFont.subtitle.subtitle2};
    }
`

