import React, { useState, useRef, useEffect } from 'react';
import * as S from '@/components/CodeTextField/CodeTextField.style';

interface CodeTextFieldProps {
    onChange: (value: string[]) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CodeTextField: React.FC<CodeTextFieldProps> = ({ onChange, onKeyDown }) => {
    const [inputValues, setInputValues] = useState<string[]>(Array(6).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            const pasteText = e.clipboardData?.getData('text');
            if (pasteText) {
                const newValues = pasteText.split('').slice(0, 6).filter(char => char !== ' ');
                setInputValues(newValues);
                onChange(newValues);
            }
        };

        document.addEventListener('paste', handlePaste);

        return () => {
            document.removeEventListener('paste', handlePaste);
        };
    }, [onChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (value === ' ') return; // Prevent space character

        const updatedValues = [...inputValues];
        if (value.length <= 1) {
            updatedValues[index] = value;
            setInputValues(updatedValues);
            onChange(updatedValues);
            if (value && index < 5 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1]!.focus();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            if (!inputValues[index] && index > 0 && inputRefs.current[index - 1]) {
                inputRefs.current[index - 1]!.focus();
            }
        }
        onKeyDown(e);
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
