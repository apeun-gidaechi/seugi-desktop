
import SelectSchool from '@/Pages/Workspace/Selectschool/SelectSchoolPage';
import SchoolCode from '@/Pages/Workspace/Schoolcode/SchoolCodePage';
import JoinSuccess from '@/Pages/Workspace/JoinSuccess/JoinSuccessPage';
import Login from '@/Pages/OnBording/Login/LoginPage';
import Selectingjob from '@/Pages/Workspace/Selectjob/SelectJobPage';
import Emailsignup from '@/Pages/OnBording/EmailSignUp/EmailSignUpPage';
import CreateSchool from '@/Pages/Workspace/CreateSchool/CreateSchoolPage';
import Authentication from '@/Pages/OnBording/EmailAuthentication/EmailAuthenticationPage';
import WaitingJoin from '@/Pages/Workspace/WaitingJoin/WaitingJoinPage';
import Home from '@/Pages/Home/home'
import Chat from '@/Pages/chat/chat'
import Groupchat from '@/Pages/GroupChat/index'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from '@/Constants/paths';
import Shell from './Shell/Shell';
import PopOver from './DetailTimetable/PopOver/PopOver';
import ModifyTimetable from './DetailTimetable/ModifyTimetable/ModifyTimetable';
import CreateTimeTable from './DetailTimetable/CreateTimetable/CreateTimetable';
import DeleteTimeTable from './DetailTimetable/DeleteTimetable/DeleteTimetable';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<Emailsignup />} />
        <Route path={paths.auth} element={<Authentication />} />
        <Route path={paths.selectjob} element={<Selectingjob />} />
        <Route path={paths.schoolcode} element={<SchoolCode />} />
        <Route path={paths.joinsuccess} element={<JoinSuccess />} />
        <Route path={paths.selectschool} element={<SelectSchool />} />
        <Route path={paths.createschool} element={<CreateSchool />} />
        <Route path={paths.waitingjoin} element={<WaitingJoin />} />
        <Route path="/" element={<Shell />}>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.chat} element={<Chat />} />
          <Route path={paths.groupchat} element={<Groupchat />} />
        </Route>
        <Route path='popover' element={<PopOver />} />
        <Route path='modifytimetable' element={<ModifyTimetable />} />
        <Route path='createtimetable' element={<CreateTimeTable />} />
        <Route path='deletetimetable' element={<DeleteTimeTable />} />
      </Routes>

    </BrowserRouter>
  );
};

export default Router;