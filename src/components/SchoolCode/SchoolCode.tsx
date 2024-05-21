import React from 'react';
import * as S from '@/components/SchoolCode/SchoolCode.style';
import Button from '@/components/button/Button';
import CodeTextFeild from '@/components/CodeTextField/CodeTextFeild';

const handleContinue = () => {

}
const SchoolCode = () => {
    return (
        <S.SchoolCodeMain>
            <S.F300>
                <S.F297>
                    <S.Header>
                        <S.Title>학교 코드를 입력해주세요</S.Title>
                    </S.Header>
                    <S.InputCodeContainer>
                        <CodeTextFeild></CodeTextFeild>
                        <CodeTextFeild></CodeTextFeild>
                        <CodeTextFeild></CodeTextFeild>
                        <CodeTextFeild></CodeTextFeild>
                        <CodeTextFeild></CodeTextFeild>
                        <CodeTextFeild></CodeTextFeild>
                    </S.InputCodeContainer>
                    <S.ButtonContainer>
                        <Button onClick={handleContinue}/>
                    </S.ButtonContainer>
                </S.F297>
            </S.F300>
        </S.SchoolCodeMain>
    )
}

export default SchoolCode;