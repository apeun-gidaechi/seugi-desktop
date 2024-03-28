import Login from '../pages/Login/login';
import Selectingjob from '../pages/Signup/Selectjob/selectingjob';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path='selectjob' element={<Selectingjob/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;