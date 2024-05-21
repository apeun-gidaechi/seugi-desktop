import React from 'react';
import * as S from '@/components/TextField/TextField.style';

interface SeugiTextFieldProps {
    text?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const TextField: React.FC<SeugiTextFieldProps> = ({ onChange, placeholder, type = 'text', onKeyDown }) => {
    return (
        <S.TxtField
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            onKeyDown={onKeyDown}
        />
    );
}

export default TextField;
