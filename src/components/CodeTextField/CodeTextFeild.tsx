import * as S from '@/components/CodeTextField/CodeTextField.style';
import React, { useState } from 'react';

type CodeTextFeildProps = {
    onChange: (value: string) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
};


const CodeTextFeild: React.FC<CodeTextFeildProps> = ({onChange}) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length > 1) {
            setInputText(inputValue.charAt(0));
        } else {
            setInputText(inputValue);
        }
        onChange(inputValue); 
    };

    return (
        <>
            <S.InputCode
                type="text"
                value={inputText}
                onChange={handleChange}
                maxLength={1} 
            />
        </>
    );
};

export default CodeTextFeild;
