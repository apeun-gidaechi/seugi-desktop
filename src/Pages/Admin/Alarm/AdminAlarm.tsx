import React, { useState } from 'react';
import * as S from './AdminAlarm.style';
import Setting from '@/Pages/Admin/Setting/Setting';
import SettingHeader from '@/Pages/Admin/SettingHeader/SettingHeader';
import RightImg from '@/Assets/image/adminsetting/expand_right_line.svg';

const AdminGeneral = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggleChange = () => {
        setIsActive((prevState) => !prevState);
    };

    return (
        <S.AdminGeneralMain>
            <Setting />
            <S.SettingMain>
                <SettingHeader />
                <S.SettingContainer>
                    <S.TitleDiv>
                        <S.Title>알림 설정</S.Title>
                    </S.TitleDiv>
                    <S.OutSchoolDiv>
                        <S.OutSchool>전체 알림 허용</S.OutSchool>
                        <S.ToggleSwitch>
                            <S.CheckBox
                                type="checkbox"
                                checked={isActive}
                                onChange={handleToggleChange}
                            />
                            <S.ToggleSlider />
                        </S.ToggleSwitch>
                    </S.OutSchoolDiv>
                </S.SettingContainer>
            </S.SettingMain>
            <S.Right />
        </S.AdminGeneralMain>
    );
};

export default AdminGeneral;
