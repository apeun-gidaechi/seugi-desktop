import Login from '../pages/Login/login';
import Selectingjob from '../pages/Signup/Selectjob/selectingjob';
import Oauthsignup from '../pages/Signup/OAuthsignup/oauthsignup';
import Emailsignup from '../pages/Signup/Emailsignup/emailsignup';

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path='/selectjob' element={<Selectingjob/>}/>
                <Route path='/oauthsignup' element={<Oauthsignup/>}/>
                <Route path='/emailsignup' element={<Emailsignup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;