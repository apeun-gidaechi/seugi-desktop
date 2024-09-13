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
        name,
        isEditing,
        profileData,
        isSettingOpen,
        startEditing,
        saveProfileData,
        cancelEditing,
        toggleSetting,
        handleNameChange
    } = useProfile();
    return (
        <>
            <S.MyProfileDialog>
                <S.MyinfoDiv>
                    <S.MyProfileDiv>
                        <S.ProfileImg src={ProfileImg} />
                        <S.ProfileName>{name}</S.ProfileName>
                    </S.MyProfileDiv>
                    <S.SettingButton onClick={toggleSetting} className='SettingButton'>
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
                    <SettingProfile onClose={toggleSetting} onNameChange={handleNameChange} />
                </S.SettingWrapper>
            )}
        </>
    );
}

export default Profile;
