
import Login from '@/pages/Login/index';
import Selectingjob from '@/pages/Selectjob/index';
import ChatMain from '@/pages/chat/chat' 
import Oauthsignup from '@/components/Signup/OAuthsignup/oauthsignup';
import Emailsignup from '@/components/Signup/Emailsignup/emailsignup';
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