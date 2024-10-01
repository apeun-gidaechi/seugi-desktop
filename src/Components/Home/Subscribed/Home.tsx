import React, { useState } from "react";

import * as S from "@/Components/Home/Subscribed/Home.style";
import Navbar from "@/Components/common/Navbar/Navbar";

import Schools from '@/Components/Home/Schools/Schools';
import Meal from "@/Components/Home/Meal/Meal";
import CatSeugi from "@/Components/Home/CatSeugi/CatSeugi";
import Calendar from "@/Components/Home/Calendar/Calendar";
import Notification from '@/Components/Home/Notification/Notification';
import DailySchedule from "@/Components/Home/DailySchedule/DailySchedule";
import Assignment from "../Assignment/Assignment";

import useHome from '@/Hooks/HomeHook/Home/index';
import useSWR from "swr";
import { getMyWorkspaces, getMyWaitingWorkspace } from "@/Api/workspace";
import { getNotification, getTimeTable, getMenus } from "@/Api/Home";

const Home = () => {
  const { ...Home } = useHome();
  // key : 해당 useSWR을 식별하기위한 문자열(혹은 함수, 배열, null)이다. 같은 key를 사용하는 useSWR들은 모두 같은 요청을 보내는 것으로 간주하고 최적화를 적용한다.
  // data : 매개변수로 key를 받는 함수  
  // option : 해당 useSWR의 옵션을 담은 객체다

  // key 인자는 최신화하고자 하는 useSWR의 key이다.
  // data 인자는 해당 useSWR을 최신화하기 위한 data다.정확히는 해당 useSWR의 cache를 data로 바꾸는 것이다.
  // option 인자는 해당 mutate의 옵션 객체다.
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const date = `${year}${month}${day}`;

  const [page, setPage] = useState(0);
  const currentWorkspaceId = window.localStorage.getItem('workspaceId') ?? '';
  const [workspaceId, setWorkspaceId] = useState(currentWorkspaceId);

  const { data: workspaces } = useSWR('workspaces', getMyWorkspaces);
  const { data: pendingWorkspaces } = useSWR('pendingWorkspaces', getMyWaitingWorkspace);
  const { data: timeTable } = useSWR([workspaceId, 'timetable'], (args) => getTimeTable(...args));
  const { data: notifications, mutate: mutateNotifications } = useSWR([workspaceId, page], (args) => getNotification(...args));
  const { data: menu } = useSWR([workspaceId, date], (args) => getMenus(...args));

  return (
    <S.HomeMain>
      <S.HomeTitle>홈</S.HomeTitle>
      <S.ComponentsBox>
        <S.HomeWrapper1>
          <DailySchedule timetable={timeTable} />
          <S.HomeWrapper1DownContainer>
            <Notification notifications={notifications} mutateNotifications={mutateNotifications} />
            <S.RightContainer>
              <Calendar />
              <CatSeugi />
            </S.RightContainer>
          </S.HomeWrapper1DownContainer>
        </S.HomeWrapper1>

        <S.HomeWrapper2>
          <Schools workspaces={workspaces} pendingWorkspaces={pendingWorkspaces}/>
          <Meal todayMenu={menu} />
          <Assignment />
        </S.HomeWrapper2>
      </S.ComponentsBox>
    </S.HomeMain>
  );
};

export default Home;
