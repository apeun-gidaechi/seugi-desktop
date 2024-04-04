import styled from "styled-components";

export const BtnWrapper = styled.div`
    display: flex;
    z-index: 0;
    padding: 20px;
`;

export const CheckBox = styled.input`
    display: none;
`;

export const ButtonLabel = styled.label<{ latestSort: boolean }>`
    z-index: 10;
    width: 51px;
    height: 31px;
    position: relative;
    cursor: pointer;
    border: #1E93F2;
    border-radius: calc(31px / 2);
    transition: left 0.3s, background-color 0.3s;
    background-color: ${({ latestSort }) => (latestSort ? '#F1F1F1' : '#1E93F2')};
`;

export const ToggleIndicator = styled.div<{ latestSort: boolean }>`
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.06);
    
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ latestSort }) => (latestSort ? '2px' : 'calc(100% - 29px)')};
    width: 27px;
    height: 27px;
    background-color: #fff;
    border-radius: 50%;
    transition: left 0.3s;
    z-index: 1; 
`;
