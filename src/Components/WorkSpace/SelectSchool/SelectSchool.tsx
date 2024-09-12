import React from 'react';
import * as S from './SelectSchool.style';

import JoinSchoolimg from '@/assets/image/join-school/JoinSchool.svg';
import CreateSchoolimg from '@/assets/image/join-school/JoinSchool/RoundedCircleImage.svg';
import Backimg from '@/assets/image/Backimg.svg'

import useSelectSchool from '@/Hooks/SelectSchool/index';

const SelectSchool = () => {
    const {
        Backclick,
        handleJoinSchool,
        handleNewSchool,
    } = useSelectSchool();
    return (
        <S.SelectschoolMain>
            <S.SelectschoolFirstWrap>
                <S.ContainerBox>
                    <S.TitleContainer>
                        <S.BackButton onClick={Backclick}>
                            <S.BackImg src={Backimg} />
                        </S.BackButton>
                        <S.Title>학교 가입 또는 생성</S.Title>
                    </S.TitleContainer>
                    <S.ButtonContainer1>
                        <S.ButtonContainer>
                            <S.Button onClick={handleJoinSchool}>
                                <S.ButtonImg src={JoinSchoolimg} />
                            </S.Button>
                            <S.Subtitle> 초대 코드로 가입 </S.Subtitle>
                        </S.ButtonContainer>
                        <S.ButtonContainer>
                            <S.Button onClick={handleNewSchool}>
                                <S.ButtonImg src={CreateSchoolimg} />
                            </S.Button>
                            <S.Subtitle> 새 학교 등록 </S.Subtitle>
                        </S.ButtonContainer>
                    </S.ButtonContainer1>
                </S.ContainerBox>
            </S.SelectschoolFirstWrap>
        </S.SelectschoolMain>
    )
}

export default SelectSchool