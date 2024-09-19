import React from 'react'
import SchoolImg from "@/assets/image/home/school.svg";
import * as S from '@/Components/Home/Schools/Schools.style';
import Changeschool from '@/Components/Home/ChangeSchool/ChangeSchool';

import useSchools from '@/Hooks/HomeHook/Schools/index';

const Schools = () => {
    const { ...Schools } = useSchools();
    
    return (
        <S.UpContainer>
            {Schools.showChangeschool && (
                <div ref={Schools.ChangeSchoolRef}>
                    <Changeschool onClose={Schools.handleOnClicked} />
                </div>
            )}
            <S.SchoolTitleBox>
                <S.SchoolImg src={SchoolImg} />
                <S.MySchooliTitle>내 학교</S.MySchooliTitle>
            </S.SchoolTitleBox>
            <S.SchoolBox>
                <S.SchoolName>{Schools.workspaceName}</S.SchoolName>
                <S.ChangeSchool onClick={Schools.handleOnClicked} className='ChangeSchool'>전환</S.ChangeSchool>
            </S.SchoolBox>
        </S.UpContainer>
    )
}

export default Schools
