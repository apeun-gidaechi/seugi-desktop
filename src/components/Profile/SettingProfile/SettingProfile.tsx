import React from 'react'
import * as S from '@/components/Profile/SettingProfile/SettingProfile.style';

import ProfileImg from '@/assets/image/Profile/settingprofile.svg';
import CorrectionImg from '@/assets/image/Profile/CorrectionImg.svg';
import Arrow from '@/assets/image/Profile/arrow.svg';
import Divider from '@/assets/image/Profile/ProflieDivider.svg';

interface SettingProfileProps {
    onClose: () => void;
}

const SettingProfile: React.FC<SettingProfileProps> = ({ onClose }) => {
    return (
        <S.SettingProfile>
            <S.ProfileContainer>
                <S.ProfileImgContainer>
                    <S.ProfileImg src={ProfileImg} /> {/* 수정 */}
                </S.ProfileImgContainer>
                <S.ProfileNameContainer>
                    <S.NameBox>
                        <S.Name>노영재</S.Name>
                        <S.CorrectionButton>
                            <S.CorrectionButtonImg src={CorrectionImg} />
                        </S.CorrectionButton>
                    </S.NameBox>
                </S.ProfileNameContainer>
            </S.ProfileContainer>
            <S.TextContainer>
                <S.ListItem>
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
    )
}

export default SettingProfile