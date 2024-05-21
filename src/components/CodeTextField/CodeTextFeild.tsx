import * as S from '@/components/CodeTextField/CodeTextField.style';
import React, { useState } from 'react';

const CodeTextFeild: React.FC = () => {
    const [inputText, setInputText] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length > 1) {
            setInputText(inputValue.charAt(0));
        } else {
            setInputText(inputValue);
        }
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
