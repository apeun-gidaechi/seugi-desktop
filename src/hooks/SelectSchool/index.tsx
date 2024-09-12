import React from 'react'
import { useNavigate } from 'react-router-dom';

const index = () => {
    const navigate = useNavigate();
    const handleJoinSchool = () => {
        navigate('/schoolcode')
    }
    const handleNewSchool = () => {
        navigate('/createschool')
    }
    const Backclick = () => {
        navigate('/home')
    }
    return {
        handleJoinSchool,
        handleNewSchool,
        Backclick
    }
}

export default index