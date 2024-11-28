import React from 'react';
import * as S from './Dialog.style';

interface DialogProps {
    onCancel: () => void;
}

const Dialog = ({ onCancel }: DialogProps) => {
    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <S.DialogMain onClick={onCancel}>
            <S.Dialog onClick={handleModalClick}>
                <S.FrameDialog>
                    <S.ComponentsDiv>
                        <S.Span>부관리자 임명</S.Span>
                    </S.ComponentsDiv>
                    <S.ComponentsDiv>
                        <S.Span>학생 정보 수정</S.Span>
                    </S.ComponentsDiv>
                    <S.ComponentsDiv>
                        <S.KickSpan>내보내기</S.KickSpan>
                    </S.ComponentsDiv>
                </S.FrameDialog>
            </S.Dialog>
        </S.DialogMain>
    );
};

export default Dialog;
