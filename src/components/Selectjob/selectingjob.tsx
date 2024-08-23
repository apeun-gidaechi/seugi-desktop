import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import * as S from '@/components/Selectjob/selectingjob.style';
import Student from '@/assets/image/join-school/selectjob/student.svg';
import Teacher from '@/assets/image/join-school/selectjob/teacher.svg';
import Checkline from '@/assets/image/join-school/selectjob/check_line.svg';
import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';
import { isTokenExpired } from '@/util/tokenUtils';
import Backimg from '@/assets/image/Backimg.svg';

type Role = 'NONE' | 'STUDENT' | 'TEACHER';

const SelectingJob: React.FC = () => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem("accessToken");
    const [selectedRole, setSelectedRole] = useState<Role>('NONE');
    const location = useLocation();
    const { verificationCode, workspaceId } = location.state || {};

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    useEffect(() => {
        if (isTokenExpired(token)) {
            alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
            window.localStorage.removeItem('accessToken');
            navigate('/');
        }
    }, [token, navigate]);

    const handleStudentClick = () => {
        setSelectedRole('STUDENT');
    };

    const handleTeacherClick = () => {
        setSelectedRole('TEACHER');
    };

    const getTextColor = (role: Role) => {
        return selectedRole === role ? '#000000' : '#808080';
    };

    const getBorderColor = (role: Role) => {
        return selectedRole === role ? '#1D93F3' : '#E0E0E0';
    };

    const handleSelectedJob = async () => {
        if (selectedRole === 'NONE') {
            alert("학생/선생님 선택해주세요");
            return;
        }

        if (isTokenExpired(token)) {
            alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
            window.localStorage.removeItem('accessToken');
            navigate('/');
            return;
        }

        try {
            const res = await SeugiCustomAxios.post(`/workspace/join`, {
                workspaceId: workspaceId,
                workspaceCode: verificationCode,
                role: selectedRole,
            });

            if (res.status === 200) {
                navigate('/waitingjoin', { state: { token } });
            } else {
                console.error("워크스페이스 가입 실패:", res.data);
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    const Backclick = () => {
        navigate('/joinsuccess')
    }

    return (
        <S.SelectMain>
            <S.SelectFirstWrap>
                <S.BackButton onClick={Backclick}>
                    <S.BackImg src={Backimg} />
                </S.BackButton>
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