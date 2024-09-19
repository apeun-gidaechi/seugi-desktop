import React from 'react';
import * as S from '@/Components/Home/Meal/Meal.style';

import CafeteriaImg from "@/assets/image/home/cafeteria.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";

import useMeal from '@/Hooks/HomeHook/Meal/index';

const Meal = () => {
    const { ...Meal } = useMeal();
    return (
        <S.CafeteriaContainer>
            <S.CafeteriaTitleBox>
                <S.CafeteriaTitleDiv>
                    <S.CafeteriaImg src={CafeteriaImg} />
                    <S.CafeteriaTitle>오늘의 급식</S.CafeteriaTitle>
                </S.CafeteriaTitleDiv>
                {/* <S.ArrowLButton>
                    <S.CArrowLogo src={ArrowImg} />
                </S.ArrowLButton> */}
            </S.CafeteriaTitleBox>
            <S.CafeteriaDiv>
                <S.TimeButton onClick={() => Meal.handleMealChange(0)}>
                    <S.Meal
                        className={Meal.selectedMeal === 0 ? "selected" : ""}
                        style={{
                            color: Meal.selectedMeal === 0 ? "#000" : "#787878",
                        }}
                    >
                        아침
                    </S.Meal>
                </S.TimeButton>
                <S.TimeButton onClick={() => Meal.handleMealChange(1)}>
                    <S.Meal
                        className={Meal.selectedMeal === 1 ? "selected" : ""}
                        style={{
                            color: Meal.selectedMeal === 1 ? "#000" : "#787878",
                        }}
                    >
                        점심
                    </S.Meal>
                </S.TimeButton>
                <S.TimeButton onClick={() => Meal.handleMealChange(2)}>
                    <S.Meal
                        className={Meal.selectedMeal === 2 ? "selected" : ""}
                        style={{
                            color: Meal.selectedMeal === 2 ? "#000" : "#787878",
                        }}
                    >
                        저녁
                    </S.Meal>
                </S.TimeButton>
            </S.CafeteriaDiv>
            <S.MenuList>
                {Meal.Menu && Meal.Menu.length > 0 ? (
                    Meal.Menu.map((item, index) => (
                        <S.Menu key={index}>{item}</S.Menu>
                    ))
                ) : (
                    <S.NoMealMessage>급식이 없습니다.</S.NoMealMessage>
                )}
                <S.CalorieDiv>
                    <S.CalorieText>{Meal.Calorie}</S.CalorieText>
                </S.CalorieDiv>
            </S.MenuList>
        </S.CafeteriaContainer>
    );
};

export default Meal;
