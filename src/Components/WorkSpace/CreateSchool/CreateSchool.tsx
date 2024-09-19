import React from 'react';
import * as S from './CreateSchool.style';
import Button from '@/Components/Button/Button';
import TextField from '@/Components/common/TextField/TextField';
import Backimg from '@/assets/image/Backimg.svg';
import PlusButtonimg from '@/assets/image/join-school/plus.svg';
import Session from '@/Util/TokenExpired/TokenExpired';
import { clearAccessToken } from '@/Api/SeugiCutomAxios';

import useCreateSchool from '@/Hooks/Workspace/CreateSchool/index';

const CreateSchool = () => {
    const { ...CreateSchool } = useCreateSchool();

    return (
        <S.CreateSchoolMain>
            <Session token={CreateSchool.token} clearAccessToken={clearAccessToken} />
            <S.CreateSchoolContainer>
                <S.TitleContainer>
                    <S.BackButton onClick={CreateSchool.Backclick}>
                        <S.BackImg src={Backimg} />
                    </S.BackButton>
                    <S.Title>새 학교 등록</S.Title>
                </S.TitleContainer>
                <S.ButtonContainer>
                    <S.UpLoadButtonLabel htmlFor="upload-button">
                        <S.ButtonImg src={CreateSchool.isworkspaceImg} style={{ zIndex: CreateSchool.workspaceImageUrl ? 2 : 1 }} $isImageUploaded={!!CreateSchool.workspaceImageUrl} />
                        <S.PlusButton src={PlusButtonimg} />
                    </S.UpLoadButtonLabel>
                    <S.Input id="upload-button" type="file" onChange={CreateSchool.handleChangeImage} accept='image/png, image/jpeg, image/jpg' />
                </S.ButtonContainer>
                <S.InputContainer>
                    <S.InputBox>
                        <S.SubtitleContainer>
                            <S.Subtitle>학교 이름 <S.RedStar>*</S.RedStar></S.Subtitle>
                        </S.SubtitleContainer>
                        <TextField
                            style={{ border: "1px solid var(--Gray-Gray300, #E6E6E6)" }}
                            placeholder='학교 이름을 입력해주세요'
                            value={CreateSchool.workspaceName}
                            onChange={(e) => CreateSchool.setWorkspaceName(e.target.value)}
                        />
                    </S.InputBox>
                </S.InputContainer>
                <S.ButtonContainer>
                    <Button onClick={CreateSchool.handleCreateSchool} text='계속하기' />
                </S.ButtonContainer>
            </S.CreateSchoolContainer>
        </S.CreateSchoolMain>
    );
}

export default CreateSchool;
