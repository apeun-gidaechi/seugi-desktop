import React, { useState, useEffect } from 'react';
import * as S from './Avatar.style';
import DefaultProfileImage from "@/Assets/image/profile/Avatar.svg";
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';
import { profileSize } from './Avatar.style';

interface AvatarProps {
  size?: keyof typeof profileSize;
}

const Avatar = ({ size = 'medium' }:AvatarProps) => {
  const [userProfileImage, setProfileImage] = useState(DefaultProfileImage);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const res = await SeugiCustomAxios.get(`/member/myInfo`);
        const fetchedImage = res.data.data.picture;

        if (fetchedImage) {
          setProfileImage(fetchedImage);
        }
      } catch (error) {
        console.error('프로필 이미지 가져오기 오류:', error);
      }
    };

    fetchProfileImage();
  }, [1000]);

  return (
    <>
      <S.ProfileImage src={userProfileImage} size={size} />
    </>
  );
};

export default Avatar;
