import React, { useEffect, useRef, useState } from 'react';
import * as S from '@/Components/Home/Notification/ChangeNotice/ChangeNotice.style';
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';
import AlertContainer from '@/Components/Alert/Alert';
import CreateNotice from '@/Components/Home/Notification/CreateNotice/CreateNotice';
import { getNoticeId } from '@/Api/Home';

interface Props {
    onClose: () => void;
    notificationId: number;
    userId: number;
    refreshNotifications: () => void;
}

const ChangeNotice: React.FC<Props> = ({ notificationId, userId, onClose, refreshNotifications }) => {
    const [currentUserId, setCurrentUserId] = useState<number | undefined>(undefined);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const workspaceId = window.localStorage.getItem('workspaceId');
    const userRole = window.localStorage.getItem('Role');

    const ref = useRef<HTMLDivElement>(null);

    const handleGetNoticeId = async () => {
        try {
            if (workspaceId !== null) {
                const NoticeIds = await getNoticeId(workspaceId);
                const notification = NoticeIds.find((item: any) => item.id === notificationId);

                if (notification) {
                    setCurrentUserId(notification.userId);
                }
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
            refreshNotifications();
        } catch (error) {
            console.error('Delete Error', error);
        }
    };

    const canDelete = currentUserId === userId || userRole === 'MIDDLE_ADMIN' || userRole === 'ADMIN';

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node | null;

        if (target instanceof Element && target.closest('.point')) {
            return;
        }

        if (ref.current && !ref.current.contains(target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            {editMode ? (
                <CreateNotice
                    notificationId={notificationId}
                    onClose={onClose}
                    refreshNotifications={refreshNotifications}
                />
            ) : (
                <S.CorrectionNoticeMain ref={ref}>
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
