import React, { useState, ChangeEvent, useEffect } from 'react';
import * as S from '@/components/CreateSchool/CreateSchool.style';
import Button from '@/components/Button/Button';
import TextField from '@/components/TextField/TextField';
import axios from 'axios';
import createSchoolImg from '@/assets/image/join-school/createshoolimg.svg';
import PlusButtonimg from '@/assets/image/join-school/plus.svg';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '@/util/tokenUtils';
import config from '@/constants/config/config.json';
import Backimg from '@/assets/image/Backimg.svg';

const CreateSchool = () => {
    const navigate = useNavigate();

    // 스크롤 막기
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);


    const [workspaceName, setWorkspaceName] = useState<string>('');
    const [workspaceImageUrl, setWorkspaceImageUrl] = useState<string | null>(null);
    const token = window.localStorage.getItem("accessToken");

    const isworkspaceImg = workspaceImageUrl ? workspaceImageUrl : createSchoolImg;

    useEffect(() => {
        if (isTokenExpired(token)) {
            alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
            window.localStorage.removeItem('accessToken');
            navigate('/login');
        }
    }, [token, navigate]);

    const handleTokenExpiration = () => {
        alert('토큰이 만료되었습니다. 다시 로그인 해주세요.');
        window.localStorage.removeItem('accessToken');
        navigate('/login');
    };

    const handleCreateSchool = async () => {
        if (!workspaceName.trim()) {
            alert('학교 이름을 입력해주세요.');
            return;
        }

        if (isTokenExpired(token)) {
            handleTokenExpiration();
            return;
        }

        try {
            const res = await axios.post(`${config.serverurl}/workspace`, {
                workspaceName,
                workspaceImageUrl,
            }, {
                headers: {
                    Authorization: `${token}`
                },
            });
            console.log('Code', res.data);
            navigate('/');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.status === 401) {
                    handleTokenExpiration();
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

        if (isTokenExpired(token)) {
            handleTokenExpiration();
            return;
        }

        try {
            const res = await axios.post(`${config.serverurl}/file/upload/IMG`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `${token}`
                },
            });
            console.log('Image uploaded', res.data);
            setWorkspaceImageUrl(res.data.message);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.status === 401) {
                    handleTokenExpiration();
                } else {
                    console.error('Error uploading image:', error.response?.data);
                }
            } else {
                console.error('Error:', error);
            }
        }
    };

    const Backclick = () => {
        navigate('/selectschool')
    }

    return (
        <S.CreateSchoolMain>
            <S.CreateSchoolContainer>
                <S.TitleContainer>
                    <S.BackButton onClick={Backclick}>
                        <S.BackImg src={Backimg} />
                    </S.BackButton>
                    <S.Title>새 학교 등록</S.Title>
                </S.TitleContainer>
                <S.ButtonContainer>
                    <S.UpLoadButtonLabel htmlFor="upload-button">
                        <S.ButtonImg src={isworkspaceImg} style={{ zIndex: workspaceImageUrl ? 2 : 1 }} />
                        <S.PlusButton src={PlusButtonimg} style={{ zIndex: workspaceImageUrl ? 1 : 2 }} />
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