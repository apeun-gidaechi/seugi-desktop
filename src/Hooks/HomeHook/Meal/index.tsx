import React, { useState, useEffect } from 'react'
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';

const index = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const date = `${year}${month}${day}`;
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

    return {
        selectedMeal,
        Menu,
        Calorie,
        handleMealChange
    }
}

export default index