import React, { useState } from 'react';
import * as S from '@/components/Home/Notification/CreateNotice/CreateNotice.style';
import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';

interface CreateNoticeProps {
    onClose: () => void;
}

const CreateNotice = ({ onClose }: CreateNoticeProps) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const workspaceId = window.localStorage.getItem('workspaceId');

    const handlePostNotice = async () => {
        try {
            const res = await SeugiCustomAxios.post(`/notification`, {
                title: title,
                content: content,
                workspaceId: workspaceId,
            });
            console.log({ title, content, workspaceId });
            if (res.status === 200) {
                onClose();
            }
        } catch (error) {
            console.error("Error posting notice:", error);
        }
    };

    return (
        <S.NoticeMain>
            <S.CreateNoticeContainer>
                <S.TitleContainer>
                    <S.Title>새 알림 작성</S.Title>
                    <S.TitleButton onClick={handlePostNotice}>업로드</S.TitleButton>
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
}

export default CreateNotice;
