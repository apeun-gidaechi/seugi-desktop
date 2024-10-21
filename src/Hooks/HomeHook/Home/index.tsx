import React, { useEffect } from 'react'
import { handleUserRole } from '@/Util/Role/WhatisYourRole';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/Constants/paths';
import Cookies from 'js-cookie';

const index = () => {
    const token = Cookies.get("accessToken");
    const navigate = useNavigate();
    const workspaceId = typeof window !== 'undefined' ? Cookies.get('workspaceId') : null;
    
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        if (workspaceId) {
            handleUserRole(workspaceId);
        } else {
            console.error('워크스페이스가 없어요');
        }
    }, [workspaceId]);

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