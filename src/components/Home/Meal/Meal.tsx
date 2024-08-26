import React, { useState } from 'react'
import * as S from '@/components/Home/Meal/Meal.style';

import CafeteriaImg from "@/assets/image/home/cafeteria.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";

const Meal = () => {
    const [selectedMeal, setSelectedMeal] = useState("아침");
    const getMenu = () => {
        switch (selectedMeal) {
            case "아침":
                return (
                    <>
                        <S.Menu> 쇠고기야채죽 </S.Menu>
                        <S.Menu> 연유프렌치토스트 </S.Menu>
                        <S.Menu> 배추김치 </S.Menu>
                        <S.Menu> 포도 </S.Menu>
                        <S.Menu> 허쉬초코크런치시리얼+우유 </S.Menu>
                    </>
                );
            case "점심":
                return (
                    <>
                        <S.Menu> 추가밥 </S.Menu>
                        <S.Menu> 메콤로제해물파스타 </S.Menu>
                        <S.Menu> #브리오슈수제버거 </S.Menu>
                        <S.Menu> 모둠야채피클 </S.Menu>
                        <S.Menu> 맥케인 </S.Menu>
                        <S.Menu> 망고사고 </S.Menu>
                    </>
                );
            case "저녁":
                return (
                    <>
                        <S.Menu> 현미밥 </S.Menu>
                        <S.Menu> 돼지국밥 </S.Menu>
                        <S.Menu> 삼색나물무침 </S.Menu>
                        <S.Menu> -오징어야채볶음 </S.Menu>
                        <S.Menu> 석박지 </S.Menu>
                    </>
                );
            default:
                return null;
        }
    };
    return (
        <S.DownContainer>
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
                <S.TimeButton onClick={() => setSelectedMeal("아침")}>
                    <S.Meal
                        className={selectedMeal === "아침" ? "selected" : ""}
                        style={{
                            color: selectedMeal === "아침" ? "#000" : "#787878",
                        }}
                    >
                        아침
                    </S.Meal>
                </S.TimeButton>
                <S.TimeButton onClick={() => setSelectedMeal("점심")}>
                    <S.Meal
                        className={selectedMeal === "점심" ? "selected" : ""}
                        style={{
                            color: selectedMeal === "점심" ? "#000" : "#787878",
                        }}
                    >
                        점심
                    </S.Meal>
                </S.TimeButton>
                <S.TimeButton onClick={() => setSelectedMeal("저녁")}>
                    <S.Meal
                        className={selectedMeal === "저녁" ? "selected" : ""}
                        style={{
                            color: selectedMeal === "저녁" ? "#000" : "#787878",
                        }}
                    >
                        저녁
                    </S.Meal>
                </S.TimeButton>
            </S.CafeteriaDiv>
            <S.MenuList>{getMenu()}</S.MenuList>
        </S.DownContainer>
    )
}

export default Meal;
