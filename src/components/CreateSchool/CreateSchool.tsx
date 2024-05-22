import React from 'react';
import * as S from '@/components/CreateSchool/CreateSchool.style';
import Button from '@/components/button/Button';
import TextField from '@/components/TextField/TextField';

const handleCreateSchool = () => {

}
const CreateSchool = () => {
    return (
        <S.CreateSchoolMain>
            <S.CreateSchoolContainer>
                <S.TitleContainer>
                    <S.Title>새 학교 등록</S.Title>
                </S.TitleContainer>
                <S.InputImg></S.InputImg>
                <S.InputContainer>
                    <S.InputBox>
                        <S.SubtitleContainer>
                            <S.Subtitle>학교 이름 <S.RedStar>*</S.RedStar></S.Subtitle>
                        </S.SubtitleContainer>
                        <TextField style={{ border: "1px solid var(--Gray-Gray300, #E6E6E6)" }} placeholder='학교 이름을 입력해주세요' />
                    </S.InputBox>
                </S.InputContainer>
                <S.ButtonContainer>
                    <Button onClick={handleCreateSchool} />
                </S.ButtonContainer>
            </S.CreateSchoolContainer>
        </S.CreateSchoolMain>
    )
}

export default CreateSchool;