import React, { useState } from 'react'
import * as S from './InviteMember.style';
import Setting from '@/Pages/Admin/Setting/Setting';
import SettingHeader from '@/Pages/Admin/SettingHeader/SettingHeader';

const InviteMember = () => {
    const [selectedOption, setSelectedOption] = useState<'teacher' | 'student'>('teacher');
    const [teachers, setTeachers] = useState<string[]>([]); // 선생님 목록 상태
    const [students, setStudents] = useState<string[]>([]); // 학생 목록 상태
    
    // 옵션 변경 핸들러
    const handleOptionChange = (option: 'teacher' | 'student') => {
        setSelectedOption(option);
    };


    return (
        <S.AdminGeneralMain>
            <Setting />
            <S.SettingMain>
                <SettingHeader />
                <S.CodeDiv>
                    <S.TitleDiv>
                        <S.Title>학교코드로 멤버를 초대할 수 있어요</S.Title>
                    </S.TitleDiv>
                    <S.CodeButton>
                        학교코드 확인 code/workspaceId
                    </S.CodeButton>
                </S.CodeDiv>
                <S.JoinPeople>
                    <S.JoinTitleDiv>
                        <S.JoinTitle>response.length명으로부터 가입 요청이 왔어요</S.JoinTitle>
                    </S.JoinTitleDiv>
                </S.JoinPeople>
                <S.ButtonDiv>
                    <S.SearchDiv>
                        <S.ToggleContainer>
                            <S.ToggleButton selectedOption={selectedOption} />
                            <S.Option
                                isSelected={selectedOption === 'teacher'}
                                onClick={() => handleOptionChange('teacher')}
                            >
                                선생님
                            </S.Option>
                            <S.Option
                                isSelected={selectedOption === 'student'}
                                onClick={() => handleOptionChange('student')}
                            >
                                학생
                            </S.Option>
                        </S.ToggleContainer>
                    </S.SearchDiv>
                    <S.ButtonContainer>
                        <S.AllowButton>수락</S.AllowButton>
                        <S.CancelButton>거절</S.CancelButton>
                    </S.ButtonContainer>
                </S.ButtonDiv>
                <S.MemberDiv>
                    {selectedOption === 'teacher' ? (
                        teachers.length > 0 ? (
                            teachers.map((teacher, index) => (
                                <S.MemberContent key={index}>{teacher}</S.MemberContent>
                            ))
                        ) : (
                            <S.MemberContent>선생님 목록이 없습니다.</S.MemberContent>
                        )
                    ) : (
                        students.length > 0 ? (
                            students.map((student, index) => (
                                <S.MemberContent key={index}>{student}</S.MemberContent>
                            ))
                        ) : (
                            <S.MemberContent>학생 목록이 없습니다.</S.MemberContent>
                        )
                    )}
                </S.MemberDiv>
            </S.SettingMain>
            <S.Right />
        </S.AdminGeneralMain>
    )
}

export default InviteMember