import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/Constants/paths';
import { getMyWorkspaces } from '@/Api/workspace';
import Cookies from 'js-cookie';

const index = () => {
    const navigate = useNavigate();
    const token = Cookies.get('accessToken');

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    const handleWaitingJoin = async () => {
        try {
            await getMyWorkspaces();
            navigate(paths.home);
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