import React from 'react';
import * as S from './selectingjob.style';
import student from "../../../assets/image/student.svg";
import teacher from "../../../assets/image/teacher.svg";

const selectingjob = () => {
  return (
    <S.Frame335>
        <S.Selectjob>학생인가요 선생님인가요?</S.Selectjob>
        <S.Frame334>
            <S.Frame232>
                <S.Stdimg src={student}/>
                <S.Txtstudent>학생</S.Txtstudent>
            </S.Frame232>
            <S.Frame232>
                <S.Teacherimg src={teacher}/>
                <S.TxtTeacher>선생님</S.TxtTeacher>
            </S.Frame232>
        </S.Frame334>
        <S.Frame300>
            <S.Continuebtn>계속하기</S.Continuebtn>
            <S.Haveemail href='http://localhost:5173/login'>이미 계정이 있으신가요?</S.Haveemail>
        </S.Frame300>
    </S.Frame335>
  )
}

export default selectingjob;