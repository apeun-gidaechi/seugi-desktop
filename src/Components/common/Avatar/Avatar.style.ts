import styled from "styled-components";

export const profileSize = {
    large: 60,
    medium: 36,
    small: 32,
};

interface ProfileImageProps {
    src: string;
    size?: keyof typeof profileSize;
}

export const ProfileImage = styled.img<ProfileImageProps>`
    width: ${({ size = 'medium' }) => profileSize[size]}px; 
    height: ${({ size = 'medium' }) => profileSize[size]}px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 990;
`;
