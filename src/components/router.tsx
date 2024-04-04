
import Login from '../pages/Login/login';
import Selectingjob from '../pages/Signup/selectingjob';
import ChatMain from '../pages/chat/chat' 
import Selectingjob from '../pages/Selectjob/index';
import Oauthsignup from './Signup/OAuthsignup/oauthsignup';
import Emailsignup from './Signup/Emailsignup/emailsignup';
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
            </Routes>
        </BrowserRouter>
    )
}

export default Router;