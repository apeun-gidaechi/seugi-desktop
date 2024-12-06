import React, { useEffect, useRef, useState } from 'react';
import * as S from '@/Components/Home/Notification/ChangeNotice/ChangeNotice.style';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import AlertContainer from '@/Components/Alert/Alert';
import CreateNotice from '@/Components/Home/Notification/CreateNotice/CreateNotice';
import { fetchingNotice } from '@/Api/Home';
import Cookies from 'js-cookie';

interface NotificationEmoji {
    emoji: string;
    description?: string;
}

interface Notice {
    id: number;
    workspaceId: string;
    userId: number;
    userName: string;
    title: string;
    content: string;
    emoji: NotificationEmoji[];
    creationDate: string;
    lastModifiedDate: string;
}

interface Props {
    onClose: () => void;
    notificationId: number;
    userId: number;
    mutateNotifications: () => void;
}

const ChangeNotice: React.FC<Props> = ({ notificationId, userId, onClose, mutateNotifications }) => {
    const [currentUserId, setCurrentUserId] = useState<number | undefined>(undefined);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const workspaceId = typeof window !== 'undefined' ? Cookies.get('workspaceId') : null;
    const userRole = Cookies.get('userRole');

    const ref = useRef<HTMLDivElement>(null);

    const handleGetNoticeId = async () => {
        if (!workspaceId) {
            console.error('Workspace ID is undefined');
            return;
        }

        try {
            const NoticeIds: Notice[] = await fetchingNotice(workspaceId);
            const notification = NoticeIds.find((item) => item.id === notificationId);

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
        try {
            if (!(currentUserId === userId || userRole === 'MIDDLE_ADMIN' || userRole === 'ADMIN')) {
                alert('권한이 없습니다');
                return;
            }
            await SeugiCustomAxios.delete(`/notification/${workspaceId}/${notificationId}`);
            handleGetNoticeId();
            mutateNotifications();
        } catch (error) {
            console.error('Delete Error', error);
        }
    };

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
                    mutateNotifications={mutateNotifications}
                />
            ) : (
                <S.CorrectionNoticeMain ref={ref}>
                    <S.ButtonContainer>
                        <S.CorrectionNotice onClick={() => setEditMode(true)}>공지 수정</S.CorrectionNotice>
                    </S.ButtonContainer>
                    <S.ButtonContainer>
                        <S.ReportNotice>공지 신고</S.ReportNotice>
                    </S.ButtonContainer>
                    <S.ButtonContainer onClick={handleDeleteNotice}>
                        <S.DeleteNotice>공지 삭제</S.DeleteNotice>
                    </S.ButtonContainer>
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