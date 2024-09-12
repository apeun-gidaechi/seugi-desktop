import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';

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
            const res = await SeugiCustomAxios.get(`/workspace/`);
            if (res.data.data.length > 0) {
                navigate('/home');
            } else {
                navigate('/unhome');
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