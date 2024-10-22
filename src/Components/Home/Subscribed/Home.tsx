import React, { useState } from "react";
import * as S from "@/Components/Home/Subscribed/Home.style";

import Schools from '@/Components/Home/Schools/Schools';
import Meal from "@/Components/Home/Meal/Meal";
import CatSeugi from "@/Components/Home/CatSeugi/CatSeugi";
import Calendar from "@/Components/Home/Calendar/Calendar";
import Notification from '@/Components/Home/Notification/Notification';
import DailySchedule from "@/Components/Home/DailySchedule/DailySchedule";
import Assignment from "../Assignment/Assignment";
import RegisterSchool from "@/Components/Home/Subscribed/RegisterSchool/RegisterSchool";
import useSWR from "swr";
import { getMyWorkspaces, getMyWaitingWorkspace } from "@/Api/workspace";
import { getNotification, getTimeTable, getMenus, getSchedules, getTasks, getClassroomTasks } from "@/Api/Home";
import Cookies from "js-cookie";

const Home = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const date = `${year}-${month}-${day}`;

  const [page, setPage] = useState(0);
  const currentWorkspaceId = Cookies.get('workspaceId') ?? '';
  const [workspaceId, setWorkspaceId] = useState(currentWorkspaceId);

  const { data: workspaces } = useSWR('workspaces', getMyWorkspaces);
  const { data: pendingWorkspaces } = useSWR('pendingWorkspaces', getMyWaitingWorkspace);
  const { data: timeTable } = useSWR([workspaceId], (args) => getTimeTable(...args));
  const { data: notifications, mutate: mutateNotifications } = useSWR([workspaceId, page], (args) => getNotification(...args));
  const { data: menu } = useSWR([workspaceId, date], (args) => getMenus(...args));
  const { data: schedule } = useSWR([workspaceId, month], (args) => getSchedules(...args));
  const { data: tasks } = useSWR([workspaceId], (args) => getTasks(...args));
  const { data: classroomTasks } = useSWR('classroomTasks', getClassroomTasks);

  return (
    <S.HomeMain>
      <S.HomeTitle>홈</S.HomeTitle>

      <S.ComponentsBox>
        <S.HomeWrapper1>
          <DailySchedule timetable={timeTable} />
          <S.HomeWrapper1DownContainer>
            <Notification notifications={notifications} mutateNotifications={mutateNotifications} />
            <S.RightContainer>
              <Calendar schedules={schedule} />
              <Assignment tasks={tasks} classroomTasks={classroomTasks} />
            </S.RightContainer>
          </S.HomeWrapper1DownContainer>
        </S.HomeWrapper1>

        <S.HomeWrapper2>
          <Schools workspaces={workspaces} pendingWorkspaces={pendingWorkspaces} />
          <Meal todayMenu={menu} />
          <CatSeugi />
        </S.HomeWrapper2>
      </S.ComponentsBox>

      {(!workspaceId || workspaceId.length === 0) && (
        <S.Overlay>
          <RegisterSchool />
        </S.Overlay>
      )}
    </S.HomeMain>
  );
};

export default Home;
