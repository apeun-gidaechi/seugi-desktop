import React, { useState } from 'react';
import * as S from './StudentInfo.style';
import Dropdown from '@/Pages/Admin/ManageMember/DropDown/DropDown';
import { SeugiCustomAxios } from '@/axios/SeugiCutomAxios';
import Cookies from 'js-cookie';

interface StudentInfoProps {
    onClose: () => void;
    memberId: string;
    permission: 'ADMIN' | 'MIDDLEADMIN' | 'TEACHER' | 'STUDENT';
}

const StudentInfo = ({ onClose, memberId, permission }: StudentInfoProps) => {
    const workspaceId = Cookies.get('workspaceId');

    const [grade, setGrade] = useState('1학년');
    const [classNum, setClassNum] = useState('1반');
    const [number, setNumber] = useState('1번');

    const gradeOptions = ['1학년', '2학년', '3학년'];
    const classOptions = ['1반', '2반', '3반', '4반'];
    const numberOptions = Array.from({ length: 30 }, (_, i) => `${i + 1}번`);

    const handlePatchMember = async () => {
        if (!memberId || !workspaceId) {
            alert('학생 ID 또는 워크스페이스 ID가 없습니다.');
            return;
        }

        if (permission !== 'STUDENT') {
            alert('학생만 수정할 수 있습니다.');
            onClose();
            return;
        }

        const gradeInt = parseInt(grade.replace('학년', ''));
        const classNumInt = parseInt(classNum.replace('반', ''));
        const numberInt = parseInt(number.replace('번', ''));

        try {
            const res = await SeugiCustomAxios.patch(`/profile/schidnum/${workspaceId}`,
                {
                    id: memberId,
                    schGrade: gradeInt, 
                    schClass: classNumInt, 
                    schNumber: numberInt, 
                }
            );
            alert('학생 정보가 성공적으로 수정되었습니다.');
            onClose();
            console.log(res.data);
        } catch (err) {
            console.error('학생 정보 수정 실패:', err);
            alert('학생 정보 수정에 실패했습니다.');
        }
    };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <S.StudentInfoMain onClick={onClose}>
            <S.StudentInfoDiv onClick={handleModalClick}>
                <S.InfoHeader>
                    <S.Title>학생 정보 수정</S.Title>
                    <S.Button
                        onClick={handlePatchMember}
                        disabled={permission !== 'STUDENT'}
                    >
                        수정
                    </S.Button>
                </S.InfoHeader>
                <S.StudentInfoContainer>
                    <S.Frame>
                        <S.Subtitle>학년</S.Subtitle>
                        <Dropdown
                            options={gradeOptions}
                            value={grade}
                            onChange={setGrade}
                            disabled={permission !== 'STUDENT'}
                        />
                    </S.Frame>
                    <S.Frame>
                        <S.Subtitle>반</S.Subtitle>
                        <Dropdown
                            options={classOptions}
                            value={classNum}
                            onChange={setClassNum}
                            disabled={permission !== 'STUDENT'} 
                        />
                    </S.Frame>
                    <S.Frame>
                        <S.Subtitle>번호</S.Subtitle>
                        <Dropdown
                            options={numberOptions}
                            value={number}
                            onChange={setNumber}
                            disabled={permission !== 'STUDENT'}
                        />
                    </S.Frame>
                </S.StudentInfoContainer>
            </S.StudentInfoDiv>
        </S.StudentInfoMain>
    );
};

export default StudentInfo;
