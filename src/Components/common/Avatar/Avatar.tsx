import React, {useState, useEffect} from 'react';
import * as S from './Avatar.style';
import DefaultProfileImage from "@/Assets/image/profile/Avatar.svg";
import {profileSize} from './Avatar.style';
import {getMyInfos} from "@/Api/profile";

interface AvatarProps {
  size?: keyof typeof profileSize;
}

const Avatar = ({size = 'medium'}: AvatarProps) => {
  const [userProfileImage, setProfileImage] = useState(DefaultProfileImage);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const res = await getMyInfos();
        const fetchedImage = res.picture;

        if (fetchedImage) {
          setProfileImage(fetchedImage);
        } else {
          setProfileImage(DefaultProfileImage);
        }
      } catch (error) {
        console.error('프로필 이미지 가져오기 오류:', error);
      }
    };

    fetchProfileImage();
    // const intervalId = setInterval(fetchProfileImage, 10000);

    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  return (
    <>
      <S.ProfileImage src={userProfileImage} size={size}/>
    </>
  );
};

export default Avatar;
