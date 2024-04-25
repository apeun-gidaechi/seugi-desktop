import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import * as S from '@/components/Signup/Selectjob/selectingjob.style';
import nselectstudent from "@/assets/image/onbording/selectjob/nstudent.svg";
import nselectteacher from "@/assets/image/onbording/selectjob/nteacher.svg";
import selectstudent from "@/assets/image/onbording/selectjob/selectstudent.svg";
import selectteacher from "@/assets/image/onbording/selectjob/selectteacher.svg";
import Cloud1 from '@/assets/image/onbording/selectjob/Cloud1.svg';
import Cloud2 from '@/assets/image/onbording/selectjob/Cloud2.svg';
import Sun from '@/assets/image/onbording/selectjob/Sun.svg';

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
            <S.Cloud1 src={Cloud1}/>
            <S.Cloud2 src={Cloud2} />
            <S.Sun src={Sun}/>
            <S.SelectFirstWrap>
                <S.Selectjob>학생인가요 선생님인가요?</S.Selectjob>
                <S.PickContainer>
                    <S.PickJob onClick={handleStudentClick} style={{ borderColor: getBorderColor('student') }}>
                        <S.Stdimg src={selectedRole === 'student' ? selectstudent : nselectstudent}/>
                        <S.Txtstudent style={{ color: getTextColor('student') }}>학생</S.Txtstudent>
                    </S.PickJob>
                    <S.PickJob onClick={handleTeacherClick} style={{ borderColor: getBorderColor('teacher') }}>
                        <S.Teacherimg src={selectedRole === 'teacher' ? selectteacher : nselectteacher}/>
                        <S.TxtTeacher style={{ color: getTextColor('teacher') }}>선생님</S.TxtTeacher>
                    </S.PickJob>
                </S.PickContainer>
                <S.ButtonContainer>
                    <S.OutButton>
                    <S.Button>계속하기</S.Button>
                    </S.OutButton>
                    <S.Haveemail href='http://localhost:5173/login'>이미 계정이 있으신가요?</S.Haveemail>
                </S.ButtonContainer>
            </S.SelectFirstWrap>
        </S.SelectMain>
    )
}

export default SelectingJob;
