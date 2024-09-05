import SelectSchool from '@/pages/Selectschool/SelectSchoolPage';
import SchoolCode from '@/pages/SchoolcodePage/SchoolCodePage';
import JoinSuccess from '@/pages/JoinSuccessPage/JoinSuccessPage';
import Login from '@/pages/Login/LoginPage';
import Selectingjob from '@/pages/Selectjob/SelectJobPage';
import ChatMain from '@/pages/chat/chat'
import Oauthsignup from '@/pages/AuthSignup/AuthSignupPage';
import Emailsignup from '@/pages/EmailSignUp/EmailSignUpPage';
import CreateSchool from '@/pages/CreateSchoolPage/CreateSchoolPage';
import Authentication from '@/pages/EmailAuthentication/EmailAuthenticationPage';
import WaitingJoin from '@/pages/WaitingJoin/WaitingJoinPage';
import ComponentsStoryBook from '@/pages/Storybook'
import Home from '@/pages/Home/home'
import Chat from '@/pages/chat/chat'
import GroupChat from '@/pages/GroupChat/index'
import UnHome from '@/components/Home/NotSubscribed/UnHome';

import { BrowserRouter, Route, Routes } from "react-router-dom";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/selectjob' element={<Selectingjob />} />
                <Route path='/chat' element={<ChatMain />} />
                <Route path='/oauthsignup' element={<Oauthsignup />} />
                <Route path='/emailsignup' element={<Emailsignup />} />
                <Route path='/selectschool' element={<SelectSchool />} />
                <Route path='/schoolcode' element={<SchoolCode />} />
                <Route path='/joinsuccess' element={<JoinSuccess />} />
                <Route path='/createschool' element={<CreateSchool />} />
                <Route path='/emailauthentication' element={<Authentication />} />
                <Route path='/waitingjoin' element={<WaitingJoin />} />
                <Route path='/storybook' element={<ComponentsStoryBook />} />
                <Route path='/home' element={<Home />} />
                <Route path='/Chat' element={<Chat />} />
                <Route path='/GroupChat' element={<GroupChat />} />
                <Route path='/unhome' element={<UnHome />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router; 