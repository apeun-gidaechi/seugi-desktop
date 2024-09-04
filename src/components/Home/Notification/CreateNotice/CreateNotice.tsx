import React from 'react'
import * as S from '@/components/Home/Notification/CreateNotice/CreateNotice.style';

interface CreateNoticeProps {
    onClose: () => void;
}

const CreateNotice = ({ onClose }: CreateNoticeProps) => {
    return (
        <S.NoticeMain>
            <S.CreateNoticeContainer>
                <S.TitleContainer>
                    <S.Title>새 알림 작성</S.Title>
                    <S.TitleButton onClick={onClose}>업로드</S.TitleButton>
                </S.TitleContainer>
                <S.InputContainer>
                    <S.TitleInputField
                        placeholder='제목을 입력해 주세요'
                    />
                    <S.ContentInputField
                        placeholder='내용을 입력해 주세요'
                    />
                </S.InputContainer>
            </S.CreateNoticeContainer>
        </S.NoticeMain>
    )
}

export default CreateNotice;