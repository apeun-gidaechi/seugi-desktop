
import Login from '../pages/Login/index';
import Selectingjob from '../pages/Selectjob/index';
import ChatMain from '../pages/chat/chat' 
import Oauthsignup from './Signup/OAuthsignup/oauthsignup';
import Emailsignup from './Signup/Emailsignup/emailsignup';
import SelectSchool from '../pages/Selectschool/index';
import SchoolCode from './SchoolCode/SchoolCode';
import JoinSuccess from './JoinSuccess/JoinSuccess';

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
            </Routes>
        </BrowserRouter>
    )
}

export default Router;