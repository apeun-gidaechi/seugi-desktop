import React from 'react';

import * as S from './selectingjob.style';
import Student from '@/assets/image/join-school/selectjob/student.svg';
import Teacher from '@/assets/image/join-school/selectjob/teacher.svg';
import Checkline from '@/assets/image/join-school/selectjob/check_line.svg';
import { clearAccessToken } from '@/Api/SeugiCutomAxios';
import Backimg from '@/assets/image/Backimg.svg';
import Session from '@/Util/TokenExpired/TokenExpired';

import useSelectJob from '@/Hooks/Workspace/SelectJob/index';

const SelectingJob: React.FC = () => {
    const { ...SelectJob } = useSelectJob();

    return (
        <S.SelectMain>
            <Session token={SelectJob.token} clearAccessToken={clearAccessToken} />
            <S.SelectFirstWrap>
                <S.BackButton onClick={SelectJob.Backclick}>
                    <S.BackImg src={Backimg} />
                </S.BackButton>
                <S.Selectjob>학생인가요 선생님인가요?</S.Selectjob>
                <S.PickContainer>
                    <S.PickJob onClick={SelectJob.handleStudentClick} style={{ borderColor: SelectJob.getBorderColor('STUDENT') }}>
                        <S.SubtitleContainer>
                            <S.Txtstudent
                                style={{
                                    color: SelectJob.getTextColor('STUDENT'),
                                    transform: SelectJob.selectedRole === 'STUDENT' ? 'translateX(-8px)' : 'translateX(0)',
                                    transition: 'transform 0.5s ease-in-out',
                                }}
                            >
                                학생
                                <S.StdCheckLine
                                    src={Checkline}
                                    style={{ display: SelectJob.selectedRole === 'STUDENT' ? 'block' : 'none', marginLeft: '8px' }}
                                />
                            </S.Txtstudent>
                        </S.SubtitleContainer>
                        <S.Stdimg src={Student} />
                    </S.PickJob>
                    <S.PickJob onClick={SelectJob.handleTeacherClick} style={{ borderColor: SelectJob.getBorderColor('TEACHER') }}>
                        <S.SubtitleContainer>
                            <S.TxtTeacher
                                style={{
                                    color: SelectJob.getTextColor('TEACHER'),
                                    transform: SelectJob.selectedRole === 'TEACHER' ? 'translateX(-8px)' : 'translateX(0)',
                                    transition: 'transform 0.5s ease-in-out',
                                }}
                            >
                                선생님
                                <S.TchCheckLine
                                    src={Checkline}
                                    style={{ display: SelectJob.selectedRole === 'TEACHER' ? 'block' : 'none', marginLeft: '8px' }}
                                />
                            </S.TxtTeacher>
                        </S.SubtitleContainer>
                        <S.Teacherimg src={Teacher} />
                    </S.PickJob>
                </S.PickContainer>
                <S.ButtonContainer>
                    <S.OutButton onClick={SelectJob.handleSelectedJob}>
                        <S.Button>계속하기</S.Button>
                    </S.OutButton>
                </S.ButtonContainer>
            </S.SelectFirstWrap>
        </S.SelectMain>
    );
};

export default SelectingJob;