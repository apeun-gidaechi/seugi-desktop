import Login from '../pages/Login/login';
import Selectingjob from '../pages/Signup/selectingjob';
import ChatMain from '../pages/chat/chat'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path='selectjob' element={<Selectingjob/>}/>
                <Route path='/chat' element={<ChatMain/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;