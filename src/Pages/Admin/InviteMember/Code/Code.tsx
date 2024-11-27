import React from 'react';
import * as S from './Code.style';
import CopyImg from '@/Assets/image/adminsetting/copy_line.svg';

interface CodeProps {
    workspaceCode: string;
    onClose: () => void;
}

const Code = ({ workspaceCode, onClose }: CodeProps) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(workspaceCode);
            alert('초대코드가 복사되었습니다!');
        } catch (error) {
            console.error('복사 실패:', error);
            alert('복사에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <S.CodeMain>
            <S.CodeDiv>
                <S.titleDiv>
                    <S.title>초대코드는 {workspaceCode} 입니다</S.title>
                </S.titleDiv>
                <S.ButtonDiv>
                    <S.CancelButton onClick={onClose}>
                        <S.Cancel>닫기</S.Cancel>
                    </S.CancelButton>
                    <S.CopyButton onClick={handleCopy}>
                        <S.Copy>복사</S.Copy>
                        <S.CopyImg src={CopyImg} />
                    </S.CopyButton>
                </S.ButtonDiv>
            </S.CodeDiv>
        </S.CodeMain>
    );
};

export default Code;
