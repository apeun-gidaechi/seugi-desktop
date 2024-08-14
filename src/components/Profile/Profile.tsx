import React, { useState } from 'react'
import * as S from '@/components/Profile/profile.style';

import SettingImg from '@/assets/image/Profile/profilesetting_fill.svg';
import ProfileImg from '@/assets/image/Profile/proflie.svg';
import CorrectionImg from '@/assets/image/Profile/CorrectionImg.svg';
import ProfileDivider from '@/assets/image/Profile/ProflieDivider.svg';
import Divider from '@/assets/image/Profile/Divider.svg';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleCorrectionClick = () => {
        setIsEditing(true);
    };

    return (
        <S.MyProfileDialog>
            <S.MyinfoDiv>
                <S.MyProfileDiv>
                    <S.ProfileImg src={ProfileImg} />
                    <S.ProfileName>노영재</S.ProfileName>
                </S.MyProfileDiv>
                <S.SettingButton>
                    <S.SettingButtonImg src={SettingImg}/>
                </S.SettingButton>
            </S.MyinfoDiv>
            <S.DividerImg src={ProfileDivider}/>
            <S.ComponentDiv>
                <S.TitleDiv>
                    <S.STitle>상태메세지</S.STitle>
                    <S.CorrectionButton onClick={handleCorrectionClick}>
                        <S.CorrectionButtonImg src={CorrectionImg}/>
                    </S.CorrectionButton>
                </S.TitleDiv>
                <S.ContentDiv>
                    <S.ScontentTextBox>
                        <S.SContent>대소고 어딘가</S.SContent>
                    </S.ScontentTextBox>
                </S.ContentDiv>
                <S.DividerDiv>
                    <S.DividerImg src={Divider}/>
                </S.DividerDiv>
            </S.ComponentDiv>

            <S.ComponentDiv>
                <S.TitleDiv>
                    <S.STitle>직위</S.STitle>
                    <S.CorrectionButton>
                        <S.CorrectionButtonImg src={CorrectionImg} />
                    </S.CorrectionButton>
                </S.TitleDiv>
                <S.ContentDiv>
                    <S.ScontentTextBox>
                        <S.SContent>제갈 여친</S.SContent>
                    </S.ScontentTextBox>
                </S.ContentDiv>
                <S.DividerDiv>
                    <S.DividerImg src={Divider} />
                </S.DividerDiv>
            </S.ComponentDiv>

            <S.ComponentDiv>
                <S.TitleDiv>
                    <S.STitle>소속</S.STitle>
                    <S.CorrectionButton>
                        <S.CorrectionButtonImg src={CorrectionImg} />
                    </S.CorrectionButton>
                </S.TitleDiv>
                <S.ContentDiv>
                    <S.ScontentTextBox>
                        <S.SContent>마케팅</S.SContent>
                    </S.ScontentTextBox>
                </S.ContentDiv>
                <S.DividerDiv>
                    <S.DividerImg src={Divider} />
                </S.DividerDiv>
            </S.ComponentDiv>

            <S.ComponentDiv>
                <S.TitleDiv>
                    <S.STitle>휴대전화번호</S.STitle>
                    <S.CorrectionButton>
                        <S.CorrectionButtonImg src={CorrectionImg} />
                    </S.CorrectionButton>
                </S.TitleDiv>
                <S.ContentDiv>
                    <S.ScontentTextBox>
                        <S.SContent>010-1231-2312</S.SContent>
                    </S.ScontentTextBox>
                </S.ContentDiv>
                <S.DividerDiv>
                    <S.DividerImg src={Divider} />
                </S.DividerDiv>
            </S.ComponentDiv>

            <S.ComponentDiv>
                <S.TitleDiv>
                    <S.STitle>유선전화번호</S.STitle>
                    <S.CorrectionButton>
                        <S.CorrectionButtonImg src={CorrectionImg} />
                    </S.CorrectionButton>
                </S.TitleDiv>
                <S.ContentDiv>
                    <S.ScontentTextBox>
                        <S.SContent>02-1232-1233</S.SContent>
                    </S.ScontentTextBox>
                </S.ContentDiv>
                <S.DividerDiv>
                    <S.DividerImg src={Divider} />
                </S.DividerDiv>
            </S.ComponentDiv>

            <S.ComponentDiv>
                <S.TitleDiv>
                    <S.STitle>근무 위치</S.STitle>
                    <S.CorrectionButton>
                        <S.CorrectionButtonImg src={CorrectionImg} />
                    </S.CorrectionButton>
                </S.TitleDiv>
                <S.ContentDiv>
                    <S.ScontentTextBox>
                        <S.SContent>대소고</S.SContent>
                    </S.ScontentTextBox>
                </S.ContentDiv>
            </S.ComponentDiv>
        </S.MyProfileDialog>
    )
}

export default Profile