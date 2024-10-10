import React from 'react'
import * as S from '@/Components/Home/Assignment/Assignment.style';
import AssignmentImg from '@/assets/image/home/checkAssignment.svg';

const Assignment = () => {
    return (
        <S.AssignmentMain>
            <S.AssignmentTitleBox>
                <S.AssignmentImg src={AssignmentImg} />
                <S.AssignmentTitleText>과제</S.AssignmentTitleText>
                <S.PostAssignment>과제를 제출해주세요</S.PostAssignment>
            </S.AssignmentTitleBox>
            <S.AssignmentBox>
                <S.AssignmentButton
                    href='https://classroom.google.com/c/NzAzNjU4MTM5MDky/a/NzA1OTcwMDc1Nzk0/details'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <S.AssignmentButtonText>2024학년도 2-4 프로젝트 실습 [학습 일지 작성] 제출</S.AssignmentButtonText>
                    <S.AssignmentButtonText>2024학년도 2학년 나르샤 프로젝트 [부스 배경 및 X배 ...] 제출</S.AssignmentButtonText>
                </S.AssignmentButton>
            </S.AssignmentBox>
        </S.AssignmentMain>
    )
}

export default Assignment;
