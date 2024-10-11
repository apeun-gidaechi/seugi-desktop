import React, { useEffect } from 'react'
import { handleUserRole } from '@/Util/Role/WhatisYourRole';

const index = () => {
    const token = window.localStorage.getItem("accessToken");
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

    return {
        token
    }
}

export default index