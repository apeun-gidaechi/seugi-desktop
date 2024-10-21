import React, { useEffect, useState } from 'react';
import * as S from '@/Components/Home/Notification/CreateNotice/CreateNotice.style';
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';
import { fetchingNotice } from '@/Api/Home';
import Cookies from 'js-cookie';

interface CreateNoticeProps {
    onClose: () => void;
    notificationId?: number;
    mutateNotifications: () => void;
}

const CreateNotice: React.FC<CreateNoticeProps> = ({ onClose, notificationId, mutateNotifications }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const workspaceId = typeof window !== 'undefined' ? Cookies.get('workspaceId') : null;

    const fetchNotice = async () => {
        if (notificationId) {
            console.log(notificationId);
            try {
                if (workspaceId) {
                    const fetching = await fetchingNotice(workspaceId);
                    const notice = fetching.find((item: any) => item.id === notificationId);
                    if (notice) {
                        setTitle(notice.title);
                        setContent(notice.content);
                    }
                } else {
                    console.error('Workspace ID is undefined');
                }
            } catch (error) {
                console.error("Error fetching notice:", error);
            }
        }
    };

    useEffect(() => {
        fetchNotice();
    }, [notificationId]);

    const handlePostNotice = async () => {
        try {
            if (notificationId) {
                // 공지 수정 API 호출
                await SeugiCustomAxios.patch(`/notification`, {
                    title,
                    content,
                    id: notificationId
                });
                
            } else {
                // 새 공지 작성 API 호출
                await SeugiCustomAxios.post(`/notification`, {
                    title,
                    content,
                    workspaceId
                });
            }
            mutateNotifications();
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
