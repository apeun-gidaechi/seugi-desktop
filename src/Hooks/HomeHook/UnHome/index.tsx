import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';

const index = () => {
    const navigate = useNavigate();
    const [showChangeschool, setShowChangeschool] = useState(false);
    const token = window.localStorage.getItem("accessToken");

    const checkWorkspaceSubscription = async () => {
        try {
            const res = await SeugiCustomAxios.get('/workspace/');
            const workspaces = res.data.data;
            window.localStorage.setItem("workspaceId", workspaces[0].workspaceId);
            if (workspaces.length > 0) {
                navigate('/home');
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
        navigate('/createschool');
    }

    const handleJoin = () => {
        navigate('/schoolcode ');
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