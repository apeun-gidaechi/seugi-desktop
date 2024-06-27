import React, { useState, ChangeEvent } from 'react';
import * as S from '@/components/CreateSchool/CreateSchool.style';
import Button from '@/components/Button/Button';
import TextField from '@/components/TextField/TextField';
// import SeugiAxios from '@/api/SeugiCutomAxios';
import axios from 'axios';
import createSchoolImg from '@/assets/image/join-school/createshoolimg.svg';
import PlusButtonimg from '@/assets/image/join-school/plus.svg';
import { useNavigate } from 'react-router-dom';

const CreateSchool = () => {
    const navigate = useNavigate();

    const [workspaceName, setWorkspaceName] = useState<string>('');
    const [workspaceImageUrl, setWorkspaceImageUrl] = useState<string | null>(null);
    const token = window.localStorage.getItem("accessToken");

    const isworkspaceImg = workspaceImageUrl ? workspaceImageUrl : createSchoolImg;

    const handleCreateSchool = async () => {
        if (!workspaceName.trim()) {
            alert('학교 이름을 입력해주세요.');
            return;
        }

        try {
            const res = await axios.post(`/workspace`, {
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
            console.error('Error sending code:', error);
        }
    };

    const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData();
        formData.append('type', 'IMG');
        formData.append('file', e.target.files[0]);

        try {
            const res = await axios.post(`/file/upload/IMG`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `${token}`
                },
            });
            console.log('Image uploaded', res.data);
            setWorkspaceImageUrl(res.data.message);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <S.CreateSchoolMain>
            <S.CreateSchoolContainer>
                <S.TitleContainer>
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
