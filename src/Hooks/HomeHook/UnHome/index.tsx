import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getMyWorkspaces } from '@/Api/workspace';
import { paths } from '@/Constants/paths';

const index = () => {
    const navigate = useNavigate();
    const [showChangeschool, setShowChangeschool] = useState(false);
    const token = window.localStorage.getItem("accessToken");

    const checkWorkspaceSubscription = async () => {
        try {
            const checkWorkspaces = await getMyWorkspaces();
            const workspaces = checkWorkspaces;
            window.localStorage.setItem("workspaceId", workspaces[0].workspaceId);
            if (workspaces.length > 0) {
                navigate(paths.home);
            }
            return null;
        } catch (error) {
            console.error('워크스페이스 확인 중 오류 발생:', error);
            return null;
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const intervalId = setInterval(async () => {
            const workspaceId = await checkWorkspaceSubscription();
            if (workspaceId) {
                clearInterval(intervalId);
                navigate(`/home`);
            }
        }, 1000);

        return () => {
            document.body.style.overflow = "auto";
            clearInterval(intervalId);
        };
    }, []);

    const handleOnClicked = () => {
        setShowChangeschool(!showChangeschool);
    };

    const handleCreate = () => {
        navigate(paths.createschool);
    }

    const handleJoin = () => {
        navigate(paths.schoolcode);
    }

    return {
        showChangeschool,
        token,
        checkWorkspaceSubscription,
        handleOnClicked,
        handleCreate,
        handleJoin
    }
}

export default index