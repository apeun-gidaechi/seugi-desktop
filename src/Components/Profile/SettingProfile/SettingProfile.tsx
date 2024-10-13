import React, { useEffect, useState } from 'react';
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';

import * as S from '@/Components/Profile/SettingProfile/SettingProfile.style';
import Correction from '@/Components/Profile/Correction/Correction';

import ProfileImg from '@/assets/image/profile/settingprofile.svg';
import CorrectionImg from '@/assets/image/profile/CorrectionImg.svg';
import Arrow from '@/assets/image/profile/arrow.svg';
import Divider from '@/assets/image/profile/ProflieDivider.svg';
import { fetchingProfile } from '@/Api/profile';


interface SettingProfileProps {
    onClose: () => void;
    onNameChange: (newName: string) => void;
}

const SettingProfile: React.FC<SettingProfileProps> = ({ onNameChange }) => {
    const workspaceId = typeof window !== 'undefined' ? window.localStorage.getItem('workspaceId') : null;
    const token = window.localStorage.getItem('accessToken');
    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const startEditing = (field: any) => {
        setIsEditing(field);
    };

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                if (workspaceId !== null) {
                    const profileRes = await fetchingProfile(workspaceId);

                    setName(profileRes.nick);
                }
            } catch (error) {
                console.error('프로필 데이터를 가져오는데 실패했습니다.', error);
            }
        };
        fetchProfileData();
    }, [workspaceId, token]);

    const handleLogout = async () => {
        const fcmToken = window.localStorage.getItem('fcmToken');

        if (!workspaceId) {
            console.error('워크스페이스가 없습니다.');
            return;
        }

        try {
            await SeugiCustomAxios.post(`/member/logout`, {
                fcmToken
            });
            window.localStorage.setItem('lastworkspace', workspaceId);
            window.localStorage.removeItem('accessToken');
            window.localStorage.removeItem('workspaceId');
            window.location.href = '/login';
        } catch (err) {
            console.error(err);
        }
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
            window.location.href = '/login';
        } catch (error) {
            console.error(error);
        }
    };

    const handleServiceOperation = () => {
        window.open("https://www.notion.so/byungjjun/5ba79e224f53439bbfa3607e581fe6bf", "_blank");
    };

    const handlePrivacyPolicy = () => {
        window.open("https://www.notion.so/byungjjun/58f95c1209fb48b4b74434701290f838", "_blank");
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
                        <S.ListItem onClick={handlePrivacyPolicy}>
                            <S.Text> 개인정보 처리 방침 </S.Text>
                            <S.ArrowButton>
                                <S.ArrowButtonImg src={Arrow} />
                            </S.ArrowButton>
                        </S.ListItem>
                        <S.ListItem onClick={handleServiceOperation}>
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
