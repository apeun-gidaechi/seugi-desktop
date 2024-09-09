import React, { useEffect, useState } from 'react';
import * as S from '@/components/Home/Notification/ChangeNotice/ChangeNotice.style';
import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';
import AlertContainer from '@/components/Alert/Alert';
import CreateNotice from '@/components/Home/Notification/CreateNotice/CreateNotice';

interface Props {
    onClose: () => void;
    notificationId: number;
    userId: number;
}

const ChangeNotice: React.FC<Props> = ({ notificationId, userId, onClose }) => {
    const [currentUserId, setCurrentUserId] = useState<number | undefined>(undefined);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false); 
    const [isEdited, setIsEdited] = useState<boolean>(false);
    const workspaceId = window.localStorage.getItem('workspaceId');
    const userRole = window.localStorage.getItem('Role');

    const handleGetNoticeId = async () => {
        try {
            const res = await SeugiCustomAxios.get(`notification/${workspaceId}`);
            const notification = res.data.data.find((item: any) => item.id === notificationId);

            if (notification) {
                setCurrentUserId(notification.userId);
            }
        } catch (error) {
            console.error('Failed to fetch notification data', error);
        }
    };

    useEffect(() => {
        handleGetNoticeId();
    }, [notificationId]);

    const handleDeleteNotice = async () => {
        if (!(currentUserId === userId || userRole === 'MIDDLE_ADMIN' || userRole === 'ADMIN')) {
            setShowAlert(true);
            return;
        }

        try {
            await SeugiCustomAxios.delete(`/notification/${workspaceId}/${notificationId}`);
            handleGetNoticeId();
        } catch (error) {
            console.error('Delete Error', error);
        }
    };

    const handleEditComplete = () => {
        setEditMode(false); // 수정 모드를 비활성화
        setIsEdited(true); // 수정됨 상태 활성화
        setTimeout(() => setIsEdited(false), 3000); // 3초 후 수정됨 메시지를 숨김
    };

    const canDelete = currentUserId === userId || userRole === 'MIDDLE_ADMIN' || userRole === 'ADMIN';

    return (
        <>
            {editMode ? (
                <CreateNotice
                    notificationId={notificationId} 
                    onClose={handleEditComplete}
                />
            ) : (
                <S.CorrectionNoticeMain>
                    <S.ButtonContainer>
                        <S.CorrectionNotice onClick={() => setEditMode(true)}>공지 수정</S.CorrectionNotice>
                    </S.ButtonContainer>
                    <S.ButtonContainer>
                        <S.ReportNotice>공지 신고</S.ReportNotice>
                    </S.ButtonContainer>
                    {canDelete && (
                        <S.ButtonContainer onClick={handleDeleteNotice}>
                            <S.DeleteNotice>공지 삭제</S.DeleteNotice>
                        </S.ButtonContainer>
                    )}
                </S.CorrectionNoticeMain>
            )}
            {showAlert && (
                <AlertContainer
                    titletext="권한이 없습니다"
                    subtext="이 공지를 삭제할 권한이 없습니다."
                    buttontext="닫기"
                    onClose={() => setShowAlert(false)}
                    position="top-right"
                />
            )}
        </>
    );
};

export default ChangeNotice;
