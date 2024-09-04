import React from 'react'
import * as S from '@/components/Home/Notification/ChangeNotice/ChangeNotice.style';

const ChangeNotice = () => {
    return (
        <S.CorrectionNoticeMain>
            <S.ButtonContainer>
                <S.CorrectionNotice>공지 수정</S.CorrectionNotice>
            </S.ButtonContainer>
            <S.ButtonContainer>
                <S.ReportNotice>공지 신고</S.ReportNotice>
            </S.ButtonContainer>
            <S.ButtonContainer>
                <S.DeleteNotice>공지 삭제</S.DeleteNotice>
            </S.ButtonContainer>
        </S.CorrectionNoticeMain>
    )
}

export default ChangeNotice