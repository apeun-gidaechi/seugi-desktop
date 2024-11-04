import React, { useState } from 'react';
import * as S from '@/Components/Home/Meal/Meal.style';

import CafeteriaImg from "@/Assets/image/home/cafeteria.svg";
import NoMeal from '@/Assets/image/home/NoMeal.svg';

interface MenuProps {
    id: number;
    workspaceId: string;
    mealType: "조식" | "중식" | "석식";
    menu: string[];
    calorie: string;
    mealInfo: string[];
    mealDate: string;
}

interface Props {
    todayMenu: MenuProps[];
}

const Meal = ({ todayMenu }: Props) => {
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();

    const mealTypeMapping: { 조식: number; 중식: number; 석식: number } = {
        조식: 0,
        중식: 1,
        석식: 2
    };

    const [selectedMeal, setSelectedMeal] = useState(() => {
        if (hour < 8 || (hour === 8 && minute <= 20)) {
            return mealTypeMapping["조식"];
        } else if ((hour === 8 && minute >= 21) || (hour > 8 && hour < 13) || (hour === 13 && minute <= 30)) {
            return mealTypeMapping["중식"];
        } else if ((hour === 13 && minute >= 31) || (hour > 13 && hour < 23) || (hour === 23 && minute <= 5)) {
            return mealTypeMapping["석식"];
        } else {
            return -1;
        }
    });

    const handleMealChange = (mealType: "조식" | "중식" | "석식") => {
        setSelectedMeal(mealTypeMapping[mealType]);
    };

    const selectedMenu = todayMenu?.find(menu => menu.mealType === Object.keys(mealTypeMapping)[selectedMeal]);

    return (
        <S.CafeteriaContainer>
            <S.CafeteriaTitleBox>
                <S.CafeteriaTitleDiv>
                    <S.CafeteriaImg src={CafeteriaImg} />
                    <S.CafeteriaTitle>오늘의 급식</S.CafeteriaTitle>
                </S.CafeteriaTitleDiv>
            </S.CafeteriaTitleBox>

            {todayMenu && todayMenu.length > 0 ? (
                <>
                    <S.CafeteriaDiv>
                        <S.TimeButton onClick={() => handleMealChange("조식")}>
                            <S.Meal
                                className={selectedMeal === mealTypeMapping["조식"] ? "selected" : ""}
                                style={{ color: selectedMeal === mealTypeMapping["조식"] ? "#000" : "#787878" }}
                            >
                                아침
                            </S.Meal>
                        </S.TimeButton>
                        <S.TimeButton onClick={() => handleMealChange("중식")}>
                            <S.Meal
                                className={selectedMeal === mealTypeMapping["중식"] ? "selected" : ""}
                                style={{ color: selectedMeal === mealTypeMapping["중식"] ? "#000" : "#787878" }}
                            >
                                점심
                            </S.Meal>
                        </S.TimeButton>
                        <S.TimeButton onClick={() => handleMealChange("석식")}>
                            <S.Meal
                                className={selectedMeal === mealTypeMapping["석식"] ? "selected" : ""}
                                style={{ color: selectedMeal === mealTypeMapping["석식"] ? "#000" : "#787878" }}
                            >
                                저녁
                            </S.Meal>
                        </S.TimeButton>
                    </S.CafeteriaDiv>

                    {selectedMenu && selectedMenu.menu.length > 0 ? (
                        <S.MenuList>
                            {selectedMenu.menu.map((item, index) => (
                                <S.Menu key={index}>{item}</S.Menu>
                            ))}
                            <S.CalorieDiv>
                                <S.CalorieText>{selectedMenu.calorie}</S.CalorieText>
                            </S.CalorieDiv>
                        </S.MenuList>
                    ) : (
                        <S.MenuList>
                            <S.NoMealMessage>급식이 없습니다.</S.NoMealMessage>
                        </S.MenuList>
                    )}
                </>
            ) : (
                <S.NoMealDiv>
                    <S.NoMealImg src={NoMeal} />
                    <S.NoMealMessage>급식이 없습니다.</S.NoMealMessage>
                </S.NoMealDiv>
            )}
        </S.CafeteriaContainer>
    );
};

export default Meal;
