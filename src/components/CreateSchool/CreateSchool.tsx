import React, { useState, ChangeEvent, useEffect } from 'react';
import * as S from '@/components/CreateSchool/CreateSchool.style';
import Button from '@/components/Button/Button';
import TextField from '@/components/TextField/TextField';
import createSchoolImg from '@/assets/image/join-school/createshoolimg.svg';
import Backimg from '@/assets/image/Backimg.svg';
import PlusButtonimg from '@/assets/image/join-school/plus.svg';
import { useNavigate } from 'react-router-dom';
import config from '@/constants/config/config.json';

import Session from '@/util/TokenExpired/TokenExpired';
import { clearAccessToken, SeugiCustomAxios } from '@/api/SeugiCutomAxios';

const CreateSchool = () => {
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
            console.log('Image uploaded', res.data);
            setWorkspaceImageUrl(res.data.data);
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

    return (
        <S.CreateSchoolMain>
            <Session token={token} clearAccessToken={clearAccessToken} />
            <S.CreateSchoolContainer>
                <S.TitleContainer>
                    <S.BackButton onClick={Backclick}>
                        <S.BackImg src={Backimg} />
                    </S.BackButton>
                    <S.Title>새 학교 등록</S.Title>
                </S.TitleContainer>
                <S.ButtonContainer>
                    <S.UpLoadButtonLabel htmlFor="upload-button">
                        <S.ButtonImg src={isworkspaceImg} style={{ zIndex: workspaceImageUrl ? 2 : 1 }} $isImageUploaded={!!workspaceImageUrl} />
                        <S.PlusButton src={PlusButtonimg} />
                    </S.UpLoadButtonLabel>
                    <S.Input id="upload-button" type="file" onChange={handleChangeImage} accept='image/png, image/jpeg, image/jpg' />
                </S.ButtonContainer>
                <S.InputContainer>
                    <S.InputBox>
                        <S.SubtitleContainer>
                            <S.Subtitle>학교 이름 <S.RedStar>*</S.RedStar></S.Subtitle>
                        </S.SubtitleContainer>
                        <TextField
                            style={{ border: "1px solid var(--Gray-Gray300, #E6E6E6)" }}
                            placeholder='학교 이름을 입력해주세요'
                            value={workspaceName}
                            onChange={(e) => setWorkspaceName(e.target.value)}
                        />
                    </S.InputBox>
                </S.InputContainer>
                <S.ButtonContainer>
                    <Button onClick={handleCreateSchool} text='계속하기' />
                </S.ButtonContainer>
            </S.CreateSchoolContainer>
        </S.CreateSchoolMain>
    );
}

export default CreateSchool;
