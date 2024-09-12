import React, { useEffect, useState } from 'react';
import { SeugiCustomAxios } from '@/api/SeugiCutomAxios';

import * as S from '@/components/Profile/SettingProfile/SettingProfile.style';
import Correction from '@/components/Profile/Correction/Correction';

import ProfileImg from '@/assets/image/profile/settingprofile.svg';
import CorrectionImg from '@/assets/image/profile/CorrectionImg.svg';
import Arrow from '@/assets/image/profile/arrow.svg';
import Divider from '@/assets/image/profile/ProflieDivider.svg';

interface SettingProfileProps {
    onClose: () => void;
    onNameChange: (newName: string) => void;
}

const SettingProfile: React.FC<SettingProfileProps> = ({ onClose, onNameChange }) => {
    const workspaceId = window.localStorage.getItem('workspaceId');
    const token = window.localStorage.getItem('accessToken');
    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const startEditing = (field: any) => {
        setIsEditing(field);
    };

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const res = await SeugiCustomAxios.get(`/profile/me?workspaceId=${workspaceId}`);
                console.log(res.data);

                setName(res.data.data.member.name);
            } catch (error) {
                console.error('프로필 데이터를 가져오는데 실패했습니다.', error);
            }
        };
        fetchProfileData();
    }, [workspaceId, token]);

    const handleLogout = () => {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('workspaceId');
        window.location.href = '/';
    };

    const handleSave = async (newName: string) => {
        try {
            await SeugiCustomAxios.patch(`/profile/${workspaceId}`, { nick: newName });

            setName(newName);
            setIsEditing(false);
            onNameChange(newName); 
        } catch (error) {
            console.error('이름 저장 실패', error);
        }
    };

    const handleSecession = async () => {
        try {
            await SeugiCustomAxios.delete(`/member/remove`);
            localStorage.clear();
            window.location.href = '/';
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.SettingProfile>
            {isEditing ? (
                <Correction
                    value="nick"
                    content={name}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <>
                    <S.ProfileContainer>
                        <S.ProfileImgContainer>
                            <S.ProfileImgButton>
                                <S.ProfileImg src={ProfileImg} />
                            </S.ProfileImgButton>
                        </S.ProfileImgContainer>
                        <S.ProfileNameContainer>
                            <S.NameBox>
                                <S.Name>{name}</S.Name>
                                <S.CorrectionButton onClick={() => startEditing('nick')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.NameBox>
                        </S.ProfileNameContainer>
                    </S.ProfileContainer>
                    <S.TextContainer>
                        <S.ListItem onClick={handleLogout}>
                            <S.Text> 로그아웃 </S.Text>
                            <S.ArrowButton>
                                <S.ArrowButtonImg src={Arrow} />
                            </S.ArrowButton>
                        </S.ListItem>
                        <S.ListItem onClick={handleSecession}>
                            <S.RText> 회원탈퇴 </S.RText>
                            <S.ArrowButton>
                                <S.ArrowButtonImg src={Arrow} />
                            </S.ArrowButton>
                        </S.ListItem>
                        <S.Divider src={Divider} />
                        <S.ListItem>
                            <S.Text> 개인정보 처리 방침 </S.Text>
                            <S.ArrowButton>
                                <S.ArrowButtonImg src={Arrow} />
                            </S.ArrowButton>
                        </S.ListItem>
                        <S.ListItem>
                            <S.Text> 서비스 운영 정책 </S.Text>
                            <S.ArrowButton>
                                <S.ArrowButtonImg src={Arrow} />
                            </S.ArrowButton>
                        </S.ListItem>
                    </S.TextContainer>
                </>
            )}
        </S.SettingProfile>
    );
};

export default SettingProfile;
