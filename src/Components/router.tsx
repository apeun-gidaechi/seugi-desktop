
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
import AdminGeneral from '@/Pages/Admin/General/AdminGeneral';
import AdminAlarm from '@/Pages/Admin/Alarm/AdminAlarm';
import ManageMember from '@/Pages/Admin/ManageMember/ManageMember';
import InviteMember from '@/Pages/Admin/InviteMember/InviteMember';
import Dialog from '@/Pages/Admin/ManageMember/Dialog/Dialog';

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
        <Route path={paths.admingeneral} element={<AdminGeneral />} />
        <Route path={paths.adminalarm} element={<AdminAlarm />} />
        <Route path={paths.managemember} element={<ManageMember />} />
        <Route path={paths.invitemember} element={<InviteMember />} />
        <Route path="/" element={<Shell />}>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.chat} element={<Chat />} />
          <Route path={paths.groupchat} element={<Groupchat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;