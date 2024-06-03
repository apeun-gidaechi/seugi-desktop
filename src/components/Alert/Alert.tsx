import React from 'react';
import * as S from '@/components/Alert/Alert.style';

interface SeugiAlertProps {
    titletext?: string;
    subtext?: string;
    buttontext?: string;
    onClose?: () => void;
    position: string;
}

const AlertContainer: React.FC<SeugiAlertProps> = ({ titletext = "Error", subtext, buttontext = "닫기", onClose, position }) => {
    return (
        <>
            <S.Dialog position='top-right'>
                <S.TextContainer>
                    <S.TitleText>{titletext}</S.TitleText>
                    <S.SubText>{subtext}</S.SubText>
                </S.TextContainer>
                <S.BtnContainer>
                    <S.Button onClick={onClose}>{buttontext}</S.Button>
                </S.BtnContainer>
            </S.Dialog>
        </>
    );
};

export default AlertContainer;
