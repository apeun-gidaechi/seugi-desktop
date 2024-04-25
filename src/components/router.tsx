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
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path='selectjob' element={<Selectingjob/>}/>
                <Route path='/chat' element={<ChatMain/>}/> 
                <Route path='/oauthsignup' element={<Oauthsignup/>}/>
                <Route path='/emailsignup' element={<Emailsignup/>}/>
                <Route path='/selectschool' element={<SelectSchool/>}/>
                <Route path='/schoolcode' element={<SchoolCode/>}/>
                <Route path='/joinsuccess' element={<JoinSuccess/>}/>
                <Route path='/createschool' element={<CreateSchool/>}/>
                <Route path='/emailauthentication' element={<Authentication/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router; 