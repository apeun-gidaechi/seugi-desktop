import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from './SettingHeader.style';
import OutImg from '@/Assets/image/adminsetting/close_ring_line.svg';
import { paths } from '@/Constants/paths';
import { useSelected } from '@/Hooks/Selected/useSelected';

const SettingHeader = () => {
    const navigate = useNavigate();
    const { setSelected } = useSelected();
    const handleOutClick = () => {
        setSelected('');
        navigate(paths.home);
    }

    return (
        <S.SettingHeader>
            <S.OutFrame>
                <S.Button onClick={handleOutClick}>
                    <S.OutImg src={OutImg} />
                </S.Button>
                <S.OutSpan>나가기</S.OutSpan>
            </S.OutFrame>
        </S.SettingHeader>
    )
}

export default SettingHeader