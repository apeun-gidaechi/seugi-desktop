import React, { useState } from 'react';
import * as S from '@/Components/Home/Meal/Meal.style';

import CafeteriaImg from "@/Assets/image/home/cafeteria.svg";
import ArrowImg from "@/Assets/image/home/arrow.svg";

import NoMeal from '@/Assets/image/home/NoMeal.svg';

interface MenuProps {
    id: number;
    workspaceId: string;
    mealType: string;
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
    const [selectedMeal, setSelectedMeal] = useState(() => {
        if (hour < 8 || (hour === 8 && minute <= 20)) {
            return 0;
        }
        else if ((hour === 8 && minute >= 21) || (hour > 8 && hour < 13) || (hour === 13 && minute <= 30)) {
            return 1;
        }
        else if ((hour === 13 && minute >= 31) || (hour > 13 && hour < 23) || (hour === 23 && minute <= 5)) {
            return 2;
        } else {
            return 3;
        }
    });

    const handleMealChange = (mealIndex: number) => {
        setSelectedMeal(mealIndex);
    };

    const selectedMenu = todayMenu?.[selectedMeal];

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

            {todayMenu && todayMenu.length > 0 ? (
                <>
                    <S.CafeteriaDiv>
                        <S.TimeButton onClick={() => handleMealChange(0)}>
                            <S.Meal
                                className={selectedMeal === 0 ? "selected" : ""}
                                style={{ color: selectedMeal === 0 ? "#000" : "#787878" }}
                            >
                                아침
                            </S.Meal>
                        </S.TimeButton>
                        <S.TimeButton onClick={() => handleMealChange(1)}>
                            <S.Meal
                                className={selectedMeal === 1 ? "selected" : ""}
                                style={{ color: selectedMeal === 1 ? "#000" : "#787878" }}
                            >
                                점심
                            </S.Meal>
                        </S.TimeButton>
                        <S.TimeButton onClick={() => handleMealChange(2)}>
                            <S.Meal
                                className={selectedMeal === 2 ? "selected" : ""}
                                style={{ color: selectedMeal === 2 ? "#000" : "#787878" }}
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
