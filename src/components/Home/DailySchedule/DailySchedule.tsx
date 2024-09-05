import React, { useState, useEffect } from "react";
import initialConfig from "@/constants/Home/config.json";

import HomeBookImg from "@/assets/image/home/homebook.svg";
import ArrowImg from "@/assets/image/home/arrow.svg";

import * as S from '@/components/Home/DailySchedule/DailySchedule.style';

const DailySchedule = () => {
    const [config, setConfig] = useState(() => {
        const savedConfig = localStorage.getItem("config");
        return savedConfig ? JSON.parse(savedConfig) : initialConfig;
    });


    useEffect(() => {
        localStorage.setItem("config", JSON.stringify(config));
    }, [config]);

    const numberLoop = () => {
        const numbers = [];

        for (let i = 1; i < config.subject.length + 1; i++) {
            i === config.today
                ? numbers.push(<S.Number className="Today">{i}</S.Number>)
                : numbers.push(<S.Number>{i}</S.Number>);
        }

        return numbers;
    };

    const itemLoop = () => {
        const items = [];

        for (let i = 0; i < config.today; i++) {
            if (config.today === 1)
                items.push(
                    <S.Item className="First Today Last">{config.subject[i]}</S.Item>
                );
            else if (i === 0)
                items.push(<S.Item className="First">{config.subject[i]}</S.Item>);
            else if (i === config.today - 1)
                items.push(<S.Item className="Today Last">{config.subject[i]}</S.Item>);
            else items.push(<S.Item>{config.subject[i]}</S.Item>);
        }

        for (let i = config.today; i < config.subject.length; i++) {
            if (i === config.subject.length - 1)
                items.push(<S.Item className="After Last">{config.subject[i]}</S.Item>);
            else items.push(<S.Item className="After">{config.subject[i]}</S.Item>);
        }

        return items;
    };

  return (
      <S.HomeWrapper1UpContainer>
          <S.ScheduleTitleBox>
              <S.ScheduleTitleDiv>
                  <S.BookLogo src={HomeBookImg} />
                  <S.DailyScheduleTitle>오늘의 시간표</S.DailyScheduleTitle>
              </S.ScheduleTitleDiv>
              <S.ArrowLButton>
                  <S.ArrowLogo src={ArrowImg} />
              </S.ArrowLButton>
          </S.ScheduleTitleBox>
          <S.ScheduleDivBox>
              <S.NumberTable>{numberLoop()}</S.NumberTable>
              <S.ItemTable>{itemLoop()}</S.ItemTable>
          </S.ScheduleDivBox>
      </S.HomeWrapper1UpContainer>
  )
}

export default DailySchedule