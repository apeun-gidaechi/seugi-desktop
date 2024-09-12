import React from 'react';
import * as S from './TextField.style';
import { CSSObject } from 'styled-components';

interface SeugiTextFieldProps {
    text?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    style: React.CSSProperties;
    value: string;
}

const TextField: React.FC<SeugiTextFieldProps> = ({ onChange, placeholder, type = 'text', onKeyDown, style }) => {
    return (
        <S.TxtField
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            onKeyDown={onKeyDown}
            style={style}
        />
    );
}

export default TextField;
