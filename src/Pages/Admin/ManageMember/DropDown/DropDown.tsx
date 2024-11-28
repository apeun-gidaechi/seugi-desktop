import { SeugiColor } from '@/Design/color/SeugiColor';
import React from 'react';
import styled from 'styled-components';

interface DropdownProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

const DropdownContainer = styled.div`
    position: relative;
    width: 100%;
`;

const Select = styled.select<{ disabled?: boolean }>` 
    display: flex;
    width: 100%;
    height: 52px;
    padding: 12px 12px 12px 16px;
    justify-content: flex-end;
    align-items: center;
    gap: 335px;
    align-self: stretch;
    border-radius: 12px;
    border: #E6E6E6;
    background: ${SeugiColor.White};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; 
`;

const Dropdown = ({ options, value, onChange, disabled }: DropdownProps) => {
    return (
        <DropdownContainer>
            <Select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled} 
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </Select>
        </DropdownContainer>
    );
};

export default Dropdown;
