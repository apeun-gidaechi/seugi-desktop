import * as S from '@/Components/Home/Subscribed/RegisterSchool/RegisterSchool.style';
import React from 'react';

import useHome from '@/Hooks/HomeHook/Home';

const RegisterSchool = () => {
    const { ...Home } = useHome();
    
    return (
        <S.RegisterSchoolContainer>
            <S.RegisterSchoolBox>
                <S.TextBox>
                    <S.RegisterSchoolText> 학교 등록하기  </S.RegisterSchoolText>
                    <S.Subtitle> 학교를 등록한 뒤 스기를 사용할 수 있어요 </S.Subtitle>
                </S.TextBox>
                <S.ButtonBox>
                    <S.NewSchoolButton onClick={Home.handleCreate}>
                        <S.NewSchoolButtonText> 새 학교 만들기 </S.NewSchoolButtonText>
                    </S.NewSchoolButton>
                    <S.JoinSchoolButton onClick={Home.handleJoin}>
                        <S.JoinSchoolButtonText> 기존 학교 가입 </S.JoinSchoolButtonText>
                    </S.JoinSchoolButton>
                </S.ButtonBox>
            </S.RegisterSchoolBox>
        </S.RegisterSchoolContainer>
    )
}

export default RegisterSchool;
