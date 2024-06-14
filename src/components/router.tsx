import SelectSchool from '@/pages/Selectschool/SelectSchoolPage';
import SchoolCode from '@/pages/SchoolcodePage/SchoolCodePage';
import JoinSuccess from '@/pages/JoinSuccessPage/JoinSuccessPage';
import Login from '@/pages/Login/LoginPage';
import Selectingjob from '@/pages/Selectjob/SelectJobPage';
import ChatMain from '@/pages/Chat/chat'
import Oauthsignup from '@/pages/AuthSignup/AuthSignupPage';
import Emailsignup from '@/pages/EmailSignUp/EmailSignUpPage';
import CreateSchool from '@/pages/CreateSchoolPage/CreateSchoolPage';
import Authentication from '@/pages/EmailAuthentication/EmailAuthenticationPage';
import WaitingJoin from '@/pages/WaitingJoin/WaitingJoinPage';
import ComponentsStoryBook from '@/pages/Storybook'


import { BrowserRouter, Route, Routes } from "react-router-dom";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login />} />
                <Route path='/selectjob' element={<Selectingjob />} />
                <Route path='/chat' element={<ChatMain />} />
                <Route path='/oauthsignup' element={<Oauthsignup />} />
                <Route path='/emailsignup' element={<Emailsignup />} />
                <Route path='/selectschool' element={<SelectSchool />} />
                <Route path='/schoolcode' element={<SchoolCode />} />
                <Route path='/joinsuccess' element={<JoinSuccess />} />
                <Route path='/createschool' element={<CreateSchool />} />
                <Route path='/emailauthentication' element={<Authentication />} />
                <Route path='/waitingacceptance' element={<WaitingJoin/>}/>
                <Route path='/storybook' element={<ComponentsStoryBook/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router; 