import React, { useState, ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { clearAccessToken, SeugiCustomAxios } from '@/Api/SeugiCutomAxios';
import createSchoolImg from '@/assets/image/join-school/createshoolimg.svg';

const index = () => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem("accessToken");
    const [workspaceName, setWorkspaceName] = useState<string>('');
    const [workspaceImageUrl, setWorkspaceImageUrl] = useState<string | null>(null);

    const isworkspaceImg = workspaceImageUrl ? workspaceImageUrl : createSchoolImg;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleCreateSchool = async () => {
        if (!workspaceName.trim()) {
            alert('학교 이름을 입력해주세요.');
            return;
        }

        try {
            const res = await SeugiCustomAxios.get(`/workspace/`);
            console.log(res);

            if (res.data.data.length > 0) {
                navigate('/home');
            } else {
                navigate('/unhome');
            }
        } catch (error) {
            if (isAxiosError(error)) {
                if (error.response && error.response.status === 401) {
                    clearAccessToken();
                    navigate('/');
                } else {
                    console.error('Error sending code:', error.response?.data);
                }
            } else {
                console.error('Error:', error);
            }
        }
    };

    const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) {
            console.warn('No files selected');
            return;
        }

        const formData = new FormData();
        formData.append('type', 'IMG');
        formData.append('file', e.target.files[0]);

        try {
            const res = await SeugiCustomAxios.post(`/file/upload/IMG`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setWorkspaceImageUrl(res.data.data.url);
        } catch (error) {
            if (isAxiosError(error)) {
                if (error.response && error.response.status === 401) {
                    clearAccessToken();
                    navigate('/');
                } else {
                    console.error('Error uploading image:', error.response?.data);
                }
            } else {
                console.error('Error:', error);
            }
        }
    };

    const isAxiosError = (error: unknown): error is { response: { status: number, data: any } } => {
        return (error as any).isAxiosError === true;
    };

    const Backclick = () => {
        navigate('/selectschool');
    };

    return {
        token,
        workspaceName,
        workspaceImageUrl,
        isworkspaceImg,
        setWorkspaceName,
        handleCreateSchool,
        handleChangeImage,
        Backclick,
    }
}

export default index