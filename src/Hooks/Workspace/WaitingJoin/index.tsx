import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/Constants/paths';
import { getMyWorkspaces } from '@/Api/workspace';

const index = () => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem('accessToken');

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    const handleWaitingJoin = async () => {
        try {
            const workspaces = await getMyWorkspaces();
            if (workspaces.length > 0) {
                navigate(paths.home);
            } else {
                navigate(paths.unhome);
            }
        } catch (error) {
            console.log("Error fetching workspace:", error);
        }
    };
    return {
        token,
        handleWaitingJoin
    }
}

export default index