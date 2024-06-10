import * as S from '@/components/CodeTextField/CodeTextField.style';
import React, { useState, useRef } from 'react';

interface CodeTextFieldProps {
    onChange: (index: number, value: string) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CodeTextField: React.FC<CodeTextFieldProps> = () => {
    const [inputValues, setInputValues] = useState<string[]>(Array(6).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        const updatedValues = [...inputValues];
        if (value.length <= 1) {
            updatedValues[index] = value;
            setInputValues(updatedValues);
            if (value && index < 5 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1]!.focus();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !inputValues[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1]!.focus();
        }
    };

    return (
        <>
            {inputValues.map((value, index) => (
                <S.InputCode
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    maxLength={1}
                />
            ))}
        </>
    );
};

export default CodeTextField;
