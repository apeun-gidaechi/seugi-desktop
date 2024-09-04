import React from 'react'
import * as S from '@/components/Home/Notification/ChangeNotice/ChangeNotice.style';

interface Props {
    onClose: () => void;
}
const ChangeNotice = ({ onClose }: Props) => {
    
    return (
        <S.CorrectionNoticeMain>
            <S.ButtonContainer >
                <S.CorrectionNotice>공지 수정</S.CorrectionNotice>
            </S.ButtonContainer>
            <S.ButtonContainer onClick={onClose}>
                <S.ReportNotice>공지 신고</S.ReportNotice>
            </S.ButtonContainer>
            <S.ButtonContainer onClick={onClose}>
                <S.DeleteNotice>공지 삭제</S.DeleteNotice>
            </S.ButtonContainer>
        </S.CorrectionNoticeMain>
    )
}

export default ChangeNotice