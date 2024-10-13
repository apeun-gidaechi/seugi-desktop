import React, { useEffect } from 'react'
import { handleUserRole } from '@/Util/Role/WhatisYourRole';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/Constants/paths';

const index = () => {
    const token = window.localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const workspaceId = typeof window !== 'undefined' ? window.localStorage.getItem('workspaceId') : null;
    
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (workspaceId !== null) {
        handleUserRole(workspaceId);
    } else {
        console.error('워크스페이스가 없어요');
    }
    const handleCreate = () => {
        navigate(paths.createschool);
    }

    const handleJoin = () => {
        navigate(paths.schoolcode);
    }

    return {
        token,
        handleCreate,
        handleJoin
    }
}

export default index