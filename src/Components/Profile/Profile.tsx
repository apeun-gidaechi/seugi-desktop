import React from 'react';
import * as S from '@/Components/Profile/profile.style';
import Correction from '@/Components/Profile/Correction/Correction';
import SettingProfile from '@/Components/Profile/SettingProfile/SettingProfile';

import SettingImg from '@/assets/image/profile/profilesetting_fill.svg';
import ProfileImg from '@/assets/image/profile/proflie.svg';
import CorrectionImg from '@/assets/image/profile/CorrectionImg.svg';
import ProfileDivider from '@/assets/image/profile/ProflieDivider.svg';
import Divider from '@/assets/image/profile/Divider.svg';

import useProfile from '@/Hooks/Profile/index';

const Profile = () => {
    const {
        ...Profile
    } = useProfile();
    return (
        <>
            <S.MyProfileDialog>
                <S.MyinfoDiv>
                    <S.MyProfileDiv>
                        <S.ProfileImg src={ProfileImg} />
                        <S.ProfileName>{Profile.name}</S.ProfileName>
                    </S.MyProfileDiv>
                    <S.SettingButton onClick={Profile.toggleSetting} className='SettingButton'>
                        <S.SettingButtonImg src={SettingImg} />
                    </S.SettingButton>
                </S.MyinfoDiv>
                <S.DividerImg src={ProfileDivider} />

                {Profile.isEditing ? (
                    <Correction
                        value={Profile.isEditing}
                        content={Profile.profileData[Profile.isEditing]}
                        onSave={(value) => Profile.saveProfileData(Profile.isEditing, value)}
                        onCancel={Profile.cancelEditing}
                    />
                ) : (
                    <>
                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>상태메세지</S.STitle>
                                <S.CorrectionButton onClick={() => Profile.startEditing('status')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                    <S.SContent>{Profile.profileData.status}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                            <S.DividerDiv>
                                <S.DividerImg src={Divider} />
                            </S.DividerDiv>
                        </S.ComponentDiv>

                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>직위</S.STitle>
                                    <S.CorrectionButton onClick={() => Profile.startEditing('spot')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                        <S.SContent>{Profile.profileData.spot}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                            <S.DividerDiv>
                                <S.DividerImg src={Divider} />
                            </S.DividerDiv>
                        </S.ComponentDiv>

                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>소속</S.STitle>
                                    <S.CorrectionButton onClick={() => Profile.startEditing('belong')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                        <S.SContent>{Profile.profileData.belong}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                            <S.DividerDiv>
                                <S.DividerImg src={Divider} />
                            </S.DividerDiv>
                        </S.ComponentDiv>

                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>휴대전화번호</S.STitle>
                                    <S.CorrectionButton onClick={() => Profile.startEditing('phone')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                        <S.SContent>{Profile.profileData.phone}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                            <S.DividerDiv>
                                <S.DividerImg src={Divider} />
                            </S.DividerDiv>
                        </S.ComponentDiv>

                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>유선전화번호</S.STitle>
                                    <S.CorrectionButton onClick={() => Profile.startEditing('wire')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                        <S.SContent>{Profile.profileData.wire}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                            <S.DividerDiv>
                                <S.DividerImg src={Divider} />
                            </S.DividerDiv>
                        </S.ComponentDiv>

                        <S.ComponentDiv>
                            <S.TitleDiv>
                                <S.STitle>근무 위치</S.STitle>
                                    <S.CorrectionButton onClick={() => Profile.startEditing('location')}>
                                    <S.CorrectionButtonImg src={CorrectionImg} />
                                </S.CorrectionButton>
                            </S.TitleDiv>
                            <S.ContentDiv>
                                <S.ScontentTextBox>
                                        <S.SContent>{Profile.profileData.location}</S.SContent>
                                </S.ScontentTextBox>
                            </S.ContentDiv>
                        </S.ComponentDiv>
                    </>
                )}
            </S.MyProfileDialog>
            {Profile.isSettingOpen && (
                <S.SettingWrapper>
                    <SettingProfile onClose={Profile.toggleSetting} onNameChange={Profile.handleNameChange} />
                </S.SettingWrapper>
            )}
        </>
    );
}

export default Profile;
