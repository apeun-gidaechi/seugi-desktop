import React from 'react'
import * as S from './CreateTimetable.style';
import CancleImg from '@/Assets/image/profile/CancleImg.svg';
import MinusImg from '@/Assets/image/home/minus_line.svg';
import PlusImg from '@/Assets/image/home/add_line.svg';
const CreateTimetable = () => {
    return (
        <S.CreateDiv>
            <S.TitleDiv>
                <S.TitleSpan>시간표 만들기</S.TitleSpan>
                <S.CompleteButton>완료</S.CompleteButton>
            </S.TitleDiv>
            <S.InputDiv>
                <S.InputTag placeholder='과목 이름을 입력해주세요' />
                <S.CancleButton>
                    <S.ButtonImg src={CancleImg} />
                </S.CancleButton>
            </S.InputDiv>
            <S.ButtonDiv>
                <S.DropDown>
                    <S.MinusButton>
                        <S.MinusImg src={MinusImg} />
                    </S.MinusButton>
                    <S.TimeSpan>
                        교시
                    </S.TimeSpan>
                    <S.PlusButton>
                        <S.PlusButtonImg src={PlusImg} />
                    </S.PlusButton>
                </S.DropDown>
                <S.DropDown>
                    <S.MinusButton>
                        <S.MinusImg src={MinusImg} />
                    </S.MinusButton>
                    <S.TimeSpan>
                        학년
                    </S.TimeSpan>
                    <S.PlusButton>
                        <S.PlusButtonImg src={PlusImg} />
                    </S.PlusButton>
                </S.DropDown>
                <S.DropDown>
                    <S.MinusButton>
                        <S.MinusImg src={MinusImg} />
                    </S.MinusButton>
                    <S.TimeSpan>
                        반
                    </S.TimeSpan>
                    <S.PlusButton>
                        <S.PlusButtonImg src={PlusImg} />
                    </S.PlusButton>
                </S.DropDown>
            </S.ButtonDiv>
        </S.CreateDiv>
    )
}

export default CreateTimetable