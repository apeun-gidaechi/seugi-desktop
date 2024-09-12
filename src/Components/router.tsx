
import SelectSchool from '@/Pages/Selectschool/SelectSchoolPage';
import SchoolCode from '@/Pages/SchoolcodePage/SchoolCodePage';
import JoinSuccess from '@/Pages/JoinSuccessPage/JoinSuccessPage';
import Login from '@/Pages/Login/LoginPage';
import Selectingjob from '@/Pages/Selectjob/SelectJobPage';
import ChatMain from '@/Pages/Chat/chat'
import Oauthsignup from '@/pages/AuthSignup/AuthSignupPage';
import Emailsignup from '@/Pages/EmailSignUp/EmailSignUpPage';
import CreateSchool from '@/Pages/CreateSchoolPage/CreateSchoolPage';
import Authentication from '@/Pages/EmailAuthentication/EmailAuthenticationPage';
import WaitingJoin from '@/Pages/WaitingJoin/WaitingJoinPage';
import Home from '@/Pages/Home/home'
import Chat from '@/Pages/Chat/chat'
import GroupChat from '@/Pages/GroupChat/index'
import UnHome from '@/Components/Home/NotSubscribed/UnHome';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/selectjob" element={<Selectingjob />} />
        <Route path="/chat" element={<ChatMain />} />
        <Route path="/emailsignup" element={<Emailsignup />} />
        <Route path="/selectschool" element={<SelectSchool />} />
        <Route path="/schoolcode" element={<SchoolCode />} />
        <Route path="/joinsuccess" element={<JoinSuccess />} />
        <Route path="/createschool" element={<CreateSchool />} />
        <Route path="/emailauthentication" element={<Authentication />} />
        <Route path="/waitingjoin" element={<WaitingJoin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/GroupChat" element={<GroupChat />} />
        <Route path="/unhome" element={<UnHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
