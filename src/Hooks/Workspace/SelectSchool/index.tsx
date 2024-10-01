import React from 'react'
import { useNavigate } from 'react-router-dom';
import { paths } from '@/Constants/paths';

const index = () => {
    const navigate = useNavigate();
    const handleJoinSchool = () => {
        navigate(paths.schoolcode);
    }
    const handleNewSchool = () => {
        navigate(paths.createschool)
    }
    const Backclick = () => {
        navigate(paths.home)
    }
    return {
        handleJoinSchool,
        handleNewSchool,
        Backclick
    }
}

export default index