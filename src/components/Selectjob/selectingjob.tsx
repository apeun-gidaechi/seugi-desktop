import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import * as S from '@/components/Selectjob/selectingjob.style';
import Student from '@/assets/image/join-school/selectjob/student.svg';
import Teacher from '@/assets/image/join-school/selectjob/teacher.svg';
import Checkline from '@/assets/image/join-school/selectjob/check_line.svg';

type Role = 'none' | 'student' | 'teacher';

const SelectingJob = () => {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState<Role>('none');

    const handleStudentClick = () => {
        setSelectedRole('student');
    };

    const handleTeacherClick = () => {
        setSelectedRole('teacher');
    };

    const getTextColor = (role: Role) => {
        return selectedRole === role ? '#000000' : '#808080';
    };

    const getBorderColor = (role: Role) => {
        return selectedRole === role ? '#1D93F3' : '#E0E0E0';
    };

    return (
        <S.SelectMain>
            <S.SelectFirstWrap>
                <S.Selectjob>학생인가요 선생님인가요?</S.Selectjob>
                <S.PickContainer>
                    <S.PickJob onClick={handleStudentClick} style={{ borderColor: getBorderColor('student') }}>
                        <S.SubtitleContainer>
                            <S.Txtstudent
                                style={{
                                    color: getTextColor('student'),
                                    transform: selectedRole === 'student' ? 'translateX(-8px)' : 'translateX(0)',
                                    transition: 'transform 0.5s ease-in-out',
                                }}
                            >
                                학생
                                <S.StdCheckLine
                                    src={Checkline}
                                    style={{ display: selectedRole === 'student' ? 'block' : 'none', marginLeft: '8px' }}
                                />
                            </S.Txtstudent>
                        </S.SubtitleContainer>
                        <S.Stdimg src={Student} />
                    </S.PickJob>
                    <S.PickJob onClick={handleTeacherClick} style={{ borderColor: getBorderColor('teacher') }}>
                        <S.SubtitleContainer>
                            <S.TxtTeacher
                                style={{
                                    color: getTextColor('teacher'),
                                    transform: selectedRole === 'teacher' ? 'translateX(-8px)' : 'translateX(0)',
                                    transition: 'transform 0.5s ease-in-out',
                                }}
                            >
                                선생님
                                <S.TchCheckLine
                                    src={Checkline}
                                    style={{ display: selectedRole === 'teacher' ? 'block' : 'none', marginLeft: '8px' }}
                                />
                            </S.TxtTeacher>
                        </S.SubtitleContainer>
                        <S.Teacherimg src={Teacher} />
                    </S.PickJob>
                </S.PickContainer>
                <S.ButtonContainer>
                    <S.OutButton>
                        <S.Button>계속하기</S.Button>
                    </S.OutButton>
                </S.ButtonContainer>
            </S.SelectFirstWrap>
        </S.SelectMain>
    )
}

export default SelectingJob;
