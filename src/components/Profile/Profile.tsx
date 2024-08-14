import React, { useState } from 'react';
import * as S from '@/components/Profile/profile.style';
import Correction from '@/components/Profile/Correction/Correction';

import SettingImg from '@/assets/image/Profile/profilesetting_fill.svg';
import ProfileImg from '@/assets/image/Profile/proflie.svg';
import CorrectionImg from '@/assets/image/Profile/CorrectionImg.svg';
import ProfileDivider from '@/assets/image/Profile/ProflieDivider.svg';
import Divider from '@/assets/image/Profile/Divider.svg';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(null);
    const [profileData, setProfileData] = useState({
        statusMessage: "",
        position: "",
        department: "",
        mobile: "",
        phone: "",
        location: ""
    });

    const startEditing = (field:any) => {
        setIsEditing(field);
    };

    const saveProfileData = (field:any, value:any) => {
        setProfileData(prevData => ({ ...prevData, [field]: value }));
        setIsEditing(null); 
    };

    const cancelEditing = () => {
        setIsEditing(null); 
    };

    return (
        <S.MyProfileDialog>
            <S.MyinfoDiv>
                <S.MyProfileDiv>
                    <S.ProfileImg src={ProfileImg} />
                    <S.ProfileName>노영재</S.ProfileName>
                </S.MyProfileDiv>
                <S.SettingButton>
                    <S.SettingButtonImg src={SettingImg} />
                </S.SettingButton>
            </S.MyinfoDiv>
            <S.DividerImg src={ProfileDivider} />

            {isEditing ? (
                <Correction
                    value={`${isEditing}`}
                    content={profileData[isEditing]}
                    onSave={(value:any) => saveProfileData(isEditing, value)}
                    onCancel={cancelEditing}
                />
            ) : (
                <>
                    <S.ComponentDiv>
                        <S.TitleDiv>
                            <S.STitle>상태메세지</S.STitle>
                            <S.CorrectionButton onClick={() => startEditing('statusMessage')}>
                                <S.CorrectionButtonImg src={CorrectionImg} />
                            </S.CorrectionButton>
                        </S.TitleDiv>
                        <S.ContentDiv>
                            <S.ScontentTextBox>
                                <S.SContent>{profileData.statusMessage}</S.SContent>
                            </S.ScontentTextBox>
                        </S.ContentDiv>
                        <S.DividerDiv>
                            <S.DividerImg src={Divider} />
                        </S.DividerDiv>
                    </S.ComponentDiv>

                    <S.ComponentDiv>
                        <S.TitleDiv>
                            <S.STitle>직위</S.STitle>
                            <S.CorrectionButton onClick={() => startEditing('position')}>
                                <S.CorrectionButtonImg src={CorrectionImg} />
                            </S.CorrectionButton>
                        </S.TitleDiv>
                        <S.ContentDiv>
                            <S.ScontentTextBox>
                                <S.SContent>{profileData.position}</S.SContent>
                            </S.ScontentTextBox>
                        </S.ContentDiv>
                        <S.DividerDiv>
                            <S.DividerImg src={Divider} />
                        </S.DividerDiv>
                    </S.ComponentDiv>

                    <S.ComponentDiv>
                        <S.TitleDiv>
                            <S.STitle>소속</S.STitle>
                            <S.CorrectionButton onClick={() => startEditing('department')}>
                                <S.CorrectionButtonImg src={CorrectionImg} />
                            </S.CorrectionButton>
                        </S.TitleDiv>
                        <S.ContentDiv>
                            <S.ScontentTextBox>
                                <S.SContent>{profileData.department}</S.SContent>
                            </S.ScontentTextBox>
                        </S.ContentDiv>
                        <S.DividerDiv>
                            <S.DividerImg src={Divider} />
                        </S.DividerDiv>
                    </S.ComponentDiv>

                    <S.ComponentDiv>
                        <S.TitleDiv>
                            <S.STitle>휴대전화번호</S.STitle>
                            <S.CorrectionButton onClick={() => startEditing('mobile')}>
                                <S.CorrectionButtonImg src={CorrectionImg} />
                            </S.CorrectionButton>
                        </S.TitleDiv>
                        <S.ContentDiv>
                            <S.ScontentTextBox>
                                <S.SContent>{profileData.mobile}</S.SContent>
                            </S.ScontentTextBox>
                        </S.ContentDiv>
                        <S.DividerDiv>
                            <S.DividerImg src={Divider} />
                        </S.DividerDiv>
                    </S.ComponentDiv>

                    <S.ComponentDiv>
                        <S.TitleDiv>
                            <S.STitle>유선전화번호</S.STitle>
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
    );
}

export default Profile;
