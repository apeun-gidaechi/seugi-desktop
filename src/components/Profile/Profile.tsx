import React, { useState, useEffect } from 'react';
import * as S from '@/components/Profile/profile.style';
import Correction from '@/components/Profile/Correction/Correction';
import SettingProfile from '@/components/Profile/SettingProfile/SettingProfile';

import SettingImg from '@/assets/image/Profile/profilesetting_fill.svg';
import ProfileImg from '@/assets/image/Profile/proflie.svg';
import CorrectionImg from '@/assets/image/Profile/CorrectionImg.svg';
import ProfileDivider from '@/assets/image/Profile/ProflieDivider.svg';
import Divider from '@/assets/image/Profile/Divider.svg';

import axios from 'axios';
import config from '@/constants/config/config.json';

const Profile = () => {
    const token = window.localStorage.getItem("accessToken");
    const workspaceId = window.localStorage.getItem("workspaceId");
    const [isEditing, setIsEditing] = useState(null);
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const [name, setName] = useState('');
    const [profileData, setProfileData] = useState({
        status: "",
        spot: "",
        belong: "",
        phone: "",
        wire: "",
        location: ""
    });

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const res = await axios.get(`${config.serverurl}/profile/me?workspaceId=${workspaceId}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                console.log(res.data);

                setProfileData(res.data.data);
                setName(res.data.data.member.name);
            } catch (error) {
                console.error('Failed to fetch profile data.', error);
            }
        };
        fetchProfileData();
    }, [workspaceId, token]);

    const startEditing = (field: any) => {
        setIsEditing(field);
    };

    const saveProfileData = async (field: any, value: string) => {
        try {
            await axios.patch(`${config.serverurl}/profile/${workspaceId}`,
                {
                    status: field === "status" ? value : profileData.status,
                    spot: field === "spot" ? value : profileData.spot,
                    belong: field === "belong" ? value : profileData.belong,
                    phone: field === "phone" ? value : profileData.phone,
                    wire: field === "wire" ? value : profileData.wire,
                    location: field === "location" ? value : profileData.location,
                },
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );

            setProfileData(prevData => ({
                ...prevData,
                [field]: value
            }));

            setIsEditing(null);
        } catch (error) {
            console.error('프로필 저장 실패', error);
        }
    };



    const cancelEditing = () => {
        setIsEditing(null);
    };

    const toggleSetting = () => {
        setIsSettingOpen(prevState => !prevState);
    };

    return (
        <>
            <S.MyProfileDialog>
                <S.MyinfoDiv>
                    <S.MyProfileDiv>
                        <S.ProfileImg src={ProfileImg} />
                        <S.ProfileName>{name}</S.ProfileName>
                    </S.MyProfileDiv>
                    <S.SettingButton onClick={toggleSetting}>
                        <S.SettingButtonImg src={SettingImg} />
                    </S.SettingButton>
                </S.MyinfoDiv>
                <S.DividerImg src={ProfileDivider} />

                {isEditing ? (
                    <Correction
                        value={isEditing}
                        content={profileData[isEditing]}
                        onSave={(value) => saveProfileData(isEditing, value)}
                        onCancel={cancelEditing}
                    />
                ) : (
                    <>
                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>상태메세지</S.STitle>
                                <S.CorrectionButton onClick={() => startEditing('status')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                    <S.SContent>{profileData.status}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                            <S.DividerDiv>
                                <S.DividerImg src={Divider} />
                            </S.DividerDiv>
                        </S.ComponentDiv>

                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>직위</S.STitle>
                                <S.CorrectionButton onClick={() => startEditing('spot')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                    <S.SContent>{profileData.spot}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                            <S.DividerDiv>
                                <S.DividerImg src={Divider} />
                            </S.DividerDiv>
                        </S.ComponentDiv>

                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>소속</S.STitle>
                                <S.CorrectionButton onClick={() => startEditing('belong')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                    <S.SContent>{profileData.belong}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                            <S.DividerDiv>
                                <S.DividerImg src={Divider} />
                            </S.DividerDiv>
                        </S.ComponentDiv>

                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>휴대전화번호</S.STitle>
                                <S.CorrectionButton onClick={() => startEditing('phone')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                    <S.SContent>{profileData.phone}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                            <S.DividerDiv>
                                <S.DividerImg src={Divider} />
                            </S.DividerDiv>
                        </S.ComponentDiv>

                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>유선전화번호</S.STitle>
                                <S.CorrectionButton onClick={() => startEditing('wire')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                    <S.SContent>{profileData.wire}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                            <S.DividerDiv>
                                <S.DividerImg src={Divider} />
                            </S.DividerDiv>
                        </S.ComponentDiv>

                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>근무 위치</S.STitle>
                                <S.CorrectionButton onClick={() => startEditing('location')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                    <S.SContent>{profileData.location}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                        </S.ComponentDiv>
                    </>
                )}
            </S.MyProfileDialog>
            {isSettingOpen && (
                <S.SettingWrapper>
                    <SettingProfile onClose={toggleSetting} />
                </S.SettingWrapper>
            )}
        </>
    );
}

export default Profile;
