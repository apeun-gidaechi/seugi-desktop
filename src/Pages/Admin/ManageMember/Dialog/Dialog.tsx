import React, { useState } from 'react';
import * as S from './Dialog.style';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import Cookies from 'js-cookie';
import StudentInfo from '@/Pages/Admin/ManageMember/StudentInfo/StudentInfo';

interface DialogProps {
    onCancel: () => void;
    memberId: string;
    permission: 'ADMIN' | 'MIDDLEADMIN' | 'TEACHER' | 'STUDENT';
}

const Dialog = ({ onCancel, memberId, permission }: DialogProps) => {
    const workspaceId = Cookies.get('workspaceId');
    const workspaceRole = 'MIDDLE_ADMIN';

    const [isStudentInfoModalOpen, setIsStudentInfoModalOpen] = useState(false); 

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleChangePermission = async () => {
        if (permission === 'STUDENT') {
            alert('이 기능은 사용할 수 없습니다.');
            return;
        }
        try {
            await SeugiCustomAxios.patch(`/workspace/permission`, {
                memberId,
                workspaceId,
                workspaceRole,
            });
            onCancel();
        } catch (err) {
            console.error('권한 변경 오류:', err);
        }
    };

    const handleKickMember = async () => {
        if (permission === 'STUDENT') {
            alert('이 기능은 사용할 수 없습니다.');
            return;
        }
        try {
            await SeugiCustomAxios.patch(`/workspace/kick`, {
                memberList: [memberId],
                workspaceId,
            });
            console.log('멤버 내보내기 성공');
            onCancel();
        } catch (err) {
            console.error('멤버 내보내기 오류:', err);
        }
    };

    const handleEditStudentInfo = () => {
        setIsStudentInfoModalOpen(true); 
    };

    const handleCloseStudentInfoModal = () => {
        setIsStudentInfoModalOpen(false); 
    };

    return (
        <S.DialogMain onClick={onCancel}>
            <S.Dialog onClick={handleModalClick}>
                <S.FrameDialog>
                    <S.ComponentsDiv onClick={handleChangePermission}>
                        <S.Span>부관리자 임명</S.Span>
                    </S.ComponentsDiv>
                    <S.ComponentsDiv onClick={handleEditStudentInfo}>  
                        <S.Span>학생 정보 수정</S.Span>
                    </S.ComponentsDiv>
                    <S.ComponentsDiv onClick={handleKickMember}>
                        <S.KickSpan>내보내기</S.KickSpan>
                    </S.ComponentsDiv>
                </S.FrameDialog>
            </S.Dialog>

            {isStudentInfoModalOpen && (
                <StudentInfo
                    onClose={handleCloseStudentInfoModal}  
                    memberId={memberId}  
                    permission={permission}
                />
            )}
        </S.DialogMain>
    );
};

export default Dialog;
