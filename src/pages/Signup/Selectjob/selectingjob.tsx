import React, { useState } from 'react';
import * as S from './selectingjob.style';
import nselectstudent from "../../../assets/image/nstudent.svg";
import nselectteacher from "../../../assets/image/nteacher.svg";
import selectstudent from "../../../assets/image/selectstudent.svg";
import selectteacher from "../../../assets/image/selectteacher.svg";

type Role = 'none' | 'student' | 'teacher';

const SelectingJob:React.FC = () => {
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
        <S.SelectFirstWrap>
            <S.Selectjob>학생인가요 선생님인가요?</S.Selectjob>
            <S.Frame334>
                <S.Frame232 onClick={handleStudentClick} style={{ borderColor: getBorderColor('student') }}>
                    <S.Stdimg src={selectedRole === 'student' ? selectstudent : nselectstudent}/>
                    <S.Txtstudent style={{ color: getTextColor('student') }}>학생</S.Txtstudent>
                </S.Frame232>
                <S.Frame232 onClick={handleTeacherClick} style={{ borderColor: getBorderColor('teacher') }}>
                    <S.Teacherimg src={selectedRole === 'teacher' ? selectteacher : nselectteacher}/>
                    <S.TxtTeacher style={{ color: getTextColor('teacher') }}>선생님</S.TxtTeacher>
                </S.Frame232>
            </S.Frame334>
            <S.Frame300>
                <S.Continuebtn>계속하기</S.Continuebtn>
                <S.Haveemail href='http://localhost:5173/login'>이미 계정이 있으신가요?</S.Haveemail>
            </S.Frame300>
        </S.SelectFirstWrap>
    )
}

export default SelectingJob;
