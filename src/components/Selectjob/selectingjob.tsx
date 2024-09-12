import React from 'react';

import * as S from '@/components/Selectjob/selectingjob.style';
import Student from '@/assets/image/join-school/selectjob/student.svg';
import Teacher from '@/assets/image/join-school/selectjob/teacher.svg';
import Checkline from '@/assets/image/join-school/selectjob/check_line.svg';
import { clearAccessToken } from '@/api/SeugiCutomAxios';
import Backimg from '@/assets/image/Backimg.svg';
import Session from '@/util/TokenExpired/TokenExpired';

import useSelectJob from '@/hooks/SelectJob/index';


const SelectingJob: React.FC = () => {
    const {
        token, 
        selectedRole,
        handleStudentClick,
        handleTeacherClick,
        getTextColor,
        getBorderColor,
        handleSelectedJob,
        Backclick,
    } = useSelectJob();   
     
    return (
        <S.SelectMain>
            <Session token={token} clearAccessToken={clearAccessToken} />
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