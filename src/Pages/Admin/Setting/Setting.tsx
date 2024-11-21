import React from 'react'
import * as S from './Setting.style';
import SettingImg from '@/Assets/image/adminsetting/setting_fill.svg'
import PersonImg from '@/Assets/image/adminsetting/person_fill.svg';

const Setting = () => {
    return (
        <S.SettingMain>
            <S.LeftSetting>
            </S.LeftSetting>
            <S.SettingContainer>
                <S.SettingBox>
                    <S.ImgBox>
                        <S.SettingImg src={SettingImg} />
                    </S.ImgBox>
                    <S.Box>
                        <S.Font>일반</S.Font>
                    </S.Box>
                    <S.Box>
                        <S.Font>알림 설정</S.Font>
                    </S.Box>
                </S.SettingBox>
                <S.SettingBox>
                    <S.ImgBox>
                        <S.SettingImg src={PersonImg} />
                    </S.ImgBox>
                    <S.Box>
                        <S.Font>멤버 관리</S.Font>
                    </S.Box>
                    <S.Box>
                        <S.Font>멤버 초대</S.Font>
                    </S.Box>
                </S.SettingBox>
            </S.SettingContainer>
        </S.SettingMain>
    )
}

export default Setting