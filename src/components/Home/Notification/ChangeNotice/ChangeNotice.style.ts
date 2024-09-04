import styled from "styled-components";
import { SeugiColor } from "@/design/color/SeugiColor";
import { SeugiFont } from "@/design/text/SeugiFont";

export const CorrectionNoticeMain = styled.div`
    display: inline-flex;
    min-width: 220px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    border-radius: 16px;
    background: ${SeugiColor.White};

    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);

    position:absolute;
    z-index:999;
    left:22vw;
`

export const ButtonContainer = styled.button`
    display: flex;
    padding: 8px 0px;
    align-items: flex-start;
    gap: var(--Corner-Small, 10px);
    align-self: stretch;

    cursor: pointer;

    background:none;
    border:none;
`

export const CorrectionNotice = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};
`
export const ReportNotice = styled.span`
    color: ${SeugiColor.Black};

    ${SeugiFont.subtitle.subtitle2};
`

export const DeleteNotice = styled.span`
    color: ${SeugiColor.Red500};

    ${SeugiFont.subtitle.subtitle2};
`