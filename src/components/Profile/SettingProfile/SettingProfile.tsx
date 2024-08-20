import React, { useEffect, useState } from 'react';
import axios from 'axios';

import config from '@/constants/config/config.json';
import * as S from '@/components/Profile/SettingProfile/SettingProfile.style';

import ProfileImg from '@/assets/image/Profile/settingprofile.svg';
import CorrectionImg from '@/assets/image/Profile/CorrectionImg.svg';
import Arrow from '@/assets/image/Profile/arrow.svg';
import Divider from '@/assets/image/Profile/ProflieDivider.svg';

interface SettingProfileProps {
    onClose: () => void;
}

const SettingProfile: React.FC<SettingProfileProps> = ({ onClose }) => {
    const workspaceId = window.localStorage.getItem('workspaceId');
    const token = window.localStorage.getItem('accessToken');
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const res = await axios.get(`${config.serverurl}/profile/me?workspaceId=${workspaceId}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
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

    return (
        <S.SettingProfile>
            <S.ProfileContainer>
                <S.ProfileImgContainer>
                    <S.ProfileImgButton>
                        <S.ProfileImg src={ProfileImg} />
                    </S.ProfileImgButton>
                </S.ProfileImgContainer>
                <S.ProfileNameContainer>
                    <S.NameBox>
                        <S.Name>{name}</S.Name> 
                        <S.CorrectionButton>
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
                <S.ListItem>
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
        </S.SettingProfile>
    );
};

export default SettingProfile;
