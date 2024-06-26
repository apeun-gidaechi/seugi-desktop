import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import * as S from '@/components/Selectjob/selectingjob.style';
import Student from '@/assets/image/join-school/selectjob/student.svg';
import Teacher from '@/assets/image/join-school/selectjob/teacher.svg';
import Checkline from '@/assets/image/join-school/selectjob/check_line.svg';
import SeugiAxios from '@/api/SeugiCutomAxios';

type Role = 'NONE' | 'STUDENT' | 'TEACHER';

const SelectingJob: React.FC = () => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem("accessToken");
    const [selectedRole, setSelectedRole] = useState<Role>('NONE');

    const handleStudentClick = () => {
        setSelectedRole('STUDENT');
    };

    const handleTeacherClick = () => {
        setSelectedRole('STUDENT');
    };

    const getTextColor = (role: Role) => {
        return selectedRole === role ? '#000000' : '#808080';
    };

    const getBorderColor = (role: Role) => {
        return selectedRole === role ? '#1D93F3' : '#E0E0E0';
    };

    const location = useLocation();
    const { verificationCode, workspaceId } = location.state || {};

    const handleSelectedJob = async () => {
        if (selectedRole === 'NONE') {
            alert("학생/선생님 선택해주세요");
            return;
        }
        console.log(workspaceId);
        try {
            const res = await SeugiAxios.post(`/workspace/join`, {
                workspaceId,
                workspaceCode: verificationCode,
                role: selectedRole,
            }, {
                headers: {
                    'Authorization': `${token}`,
                }
            });

            if (res.status === 200) {
                navigate('/waitingjoin', {state : {token, }}); 
            } else {
                console.error("워크스페이스 가입 실패:", res.data);
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    return (
        <S.SelectMain>
            <S.SelectFirstWrap>
                <S.Selectjob>학생인가요 선생님인가요?</S.Selectjob>
                <S.PickContainer>
                    <S.PickJob onClick={handleStudentClick} style={{ borderColor: getBorderColor('STUDENT') }}>
                        <S.SubtitleContainer>
                            <S.Txtstudent
                                style={{
                                    color: getTextColor('STUDENT'),
                                    transform: selectedRole === 'STUDENT' ? 'translateX(-8px)' : 'translateX(0)',
                                    transition: 'transform 0.5s ease-in-out',
                                }}
                            >
                                학생
                                <S.StdCheckLine
                                    src={Checkline}
                                    style={{ display: selectedRole === 'STUDENT' ? 'block' : 'none', marginLeft: '8px' }}
                                />
                            </S.Txtstudent>
                        </S.SubtitleContainer>
                        <S.Stdimg src={Student} />
                    </S.PickJob>
                    <S.PickJob onClick={handleTeacherClick} style={{ borderColor: getBorderColor('TEACHER') }}>
                        <S.SubtitleContainer>
                            <S.TxtTeacher
                                style={{
                                    color: getTextColor('TEACHER'),
                                    transform: selectedRole === 'TEACHER' ? 'translateX(-8px)' : 'translateX(0)',
                                    transition: 'transform 0.5s ease-in-out',
                                }}
                            >
                                선생님
                                <S.TchCheckLine
                                    src={Checkline}
                                    style={{ display: selectedRole === 'TEACHER' ? 'block' : 'none', marginLeft: '8px' }}
                                />
                            </S.TxtTeacher>
                        </S.SubtitleContainer>
                        <S.Teacherimg src={Teacher} />
                    </S.PickJob>
                </S.PickContainer>
                <S.ButtonContainer>
                    <S.OutButton onClick={handleSelectedJob}>
                        <S.Button>계속하기</S.Button>
                    </S.OutButton>
                </S.ButtonContainer>
            </S.SelectFirstWrap>
        </S.SelectMain>
    );
};

export default SelectingJob;
