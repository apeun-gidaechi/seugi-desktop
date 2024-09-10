import React, { useEffect, useState } from 'react';
import * as S from '@/components/Home/Notification/CreateNotice/CreateNotice.style';
import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';

interface CreateNoticeProps {
    onClose: () => void;
    notificationId?: number; 
    refreshNotifications: () => void;
}

const CreateNotice: React.FC<CreateNoticeProps> = ({ onClose, notificationId, refreshNotifications }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const workspaceId = window.localStorage.getItem('workspaceId');

    // 공지 불러오는 함수 (수정 모드일 때)
    const fetchNotice = async () => {
        if (notificationId) {
            console.log(notificationId);
            try {
                const res = await SeugiCustomAxios.get(`/notification/${workspaceId}`);
                const notice = res.data.data.find((item: any) => item.id === notificationId);
                if (notice) {
                    setTitle(notice.title);
                    setContent(notice.content);
                }
            } catch (error) {
                console.error("Error fetching notice:", error);
            }
        }
    };

    useEffect(() => {
        // 컴포넌트가 마운트될 때 공지 데이터를 불러옴 (수정 모드인 경우)
        fetchNotice();
    }, [notificationId]);

    // 공지 작성 또는 수정 함수
    const handlePostNotice = async () => {
        try {
            if (notificationId) {
                // 공지 수정 API 호출
                await SeugiCustomAxios.put(`/notification/${workspaceId}/${notificationId}`, {
                    title,
                    content
                });
            } else {
                // 새 공지 작성 API 호출
                await SeugiCustomAxios.post(`/notification`, {
                    title,
                    content,
                    workspaceId
                });
            }
            refreshNotifications();
            onClose();
        } catch (error) {
            console.error("Error posting notice:", error);
        }
    };

    return (
        <S.NoticeMain>
            <S.CreateNoticeContainer>
                <S.TitleContainer>
                    <S.Title>{notificationId ? '공지 수정' : '새 공지 작성'}</S.Title>
                    <S.TitleButton onClick={handlePostNotice}>
                        {notificationId ? '수정 완료' : '업로드'}
                    </S.TitleButton>
                </S.TitleContainer>
                <S.InputContainer>
                    <S.TitleInputField
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='제목을 입력해 주세요'
                    />
                    <S.ContentInputField
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='내용을 입력해 주세요'
                    />
                </S.InputContainer>
            </S.CreateNoticeContainer>
        </S.NoticeMain>
    );
};

export default CreateNotice;
