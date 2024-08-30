import React, { useState, useEffect } from 'react';
import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';
import * as S from '@/components/Home/Meal/Meal.style';

import CafeteriaImg from "@/assets/image/home/cafeteria.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";

const Meal = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const date = `${year}${month}${day}`;
    const hour = today.getHours();

    const [selectedMeal, setSelectedMeal] = useState(() => {
        if (hour < 9) {
            return 0;
        } else if (hour < 13) {
            return 1;
        }
        return 2;
    });
    const [Menu, setMenu] = useState<string[]>([]);
    const [MealType, setMealType] = useState<string>('');
    const [Calorie, setCalorie] = useState<string>('');
    const workspaceId = window.localStorage.getItem('workspaceId');

    const getMenu = async (mealIndex: number) => {
        try {
            const res = await SeugiCustomAxios.get(`/meal?workspaceId=${workspaceId}&date=${date}`);
            const mealData = res.data.data[mealIndex];
            setMenu(mealData.menu || []);
            setMealType(mealData.mealType || '');
            setCalorie(mealData.calorie || '');
        } catch (error) {
            console.error("Error fetching menu:", error);
            setMenu([]); 
            setMealType('');
            setCalorie('');
        }
    };

    useEffect(() => {
        getMenu(selectedMeal);
    }, [selectedMeal]);

    const handleMealChange = (mealIndex: number) => {
        setSelectedMeal(mealIndex);
    };

    return (
        <S.CafeteriaContainer>
            <S.CafeteriaTitleBox>
                <S.CafeteriaTitleDiv>
                    <S.CafeteriaImg src={CafeteriaImg} />
                    <S.CafeteriaTitle>오늘의 급식</S.CafeteriaTitle>
                </S.CafeteriaTitleDiv>
                <S.ArrowLButton>
                    <S.CArrowLogo src={ArrowImg} />
                </S.ArrowLButton>
            </S.CafeteriaTitleBox>
            <S.CafeteriaDiv>
                <S.TimeButton onClick={() => handleMealChange(0)}>
                    <S.Meal
                        className={selectedMeal === 0 ? "selected" : ""}
                        style={{
                            color: selectedMeal === 0 ? "#000" : "#787878",
                        }}
                    >
                        아침
                    </S.Meal>
                </S.TimeButton>
                <S.TimeButton onClick={() => handleMealChange(1)}>
                    <S.Meal
                        className={selectedMeal === 1 ? "selected" : ""}
                        style={{
                            color: selectedMeal === 1 ? "#000" : "#787878",
                        }}
                    >
                        점심
                    </S.Meal>
                </S.TimeButton>
                <S.TimeButton onClick={() => handleMealChange(2)}>
                    <S.Meal
                        className={selectedMeal === 2 ? "selected" : ""}
                        style={{
                            color: selectedMeal === 2 ? "#000" : "#787878",
                        }}
                    >
                        저녁
                    </S.Meal>
                </S.TimeButton>
            </S.CafeteriaDiv>
            <S.MenuList>
                {Menu && Menu.length > 0 ? (
                    Menu.map((item, index) => (
                        <S.Menu key={index}>{item}</S.Menu>
                    ))
                ) : (
                    <S.NoMealMessage>급식이 없습니다.</S.NoMealMessage>
                )}
                <S.CalorieDiv>
                    <S.CalorieText>{Calorie}</S.CalorieText>
                </S.CalorieDiv>
            </S.MenuList>
        </S.CafeteriaContainer>
    );
};

export default Meal;
