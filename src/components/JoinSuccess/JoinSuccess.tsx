import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@/components/Button/Button';
import * as S from '@/components/JoinSuccess/JoinSuccess.style';
import { useNavigate, useLocation } from 'react-router-dom';
import config from '@/config/config.json';

const JoinSuccess = () => {
  const navigate = useNavigate();
  const [schoolName, setSchoolName] = useState('');
  const [schoolInfo, setSchoolInfo] = useState('');
  const [schoolImgUrl, setSchoolImgUrl] = useState('');
  const token = window.localStorage.getItem("accessToken");
  const location = useLocation();
  const { verificationCode } = location.state || {};
  const handleJoinSuccess = () => {
    navigate('/selectjob');
  };

  useEffect(() => {
    const handleSchoolInfo = async () => {
      try {
        const res = await axios.get(`${config.serverurl}/workspace/${verificationCode}`, {
          headers: {
            Authorization: `${token}`
          },
        }
        );
        console.log(res.data.data.studentCount);
        setSchoolName(res.data.data.workspaceName);
        setSchoolInfo(`학생 ${res.data.data.studentCount}명 선생님 ${res.data.data.teacherCount}명`);
        setSchoolImgUrl(res.data.data.workspaceImageUrl);
      } catch (error) {
        console.error('Failed to fetch school information:', error);
      }
    };
    handleSchoolInfo();
  }, []);

  return (
    <S.SuccessMain>
      <S.Container>
        <S.SchoolImg src={schoolImgUrl} alt="error" />
        <S.SchoolInfoContainer>
          <S.SchoolName>{schoolName}</S.SchoolName>
          <S.SchoolInfo>{schoolInfo}</S.SchoolInfo>
        </S.SchoolInfoContainer>
        <S.ButtonContainer>
          <Button onClick={handleJoinSuccess} />
        </S.ButtonContainer>
      </S.Container>
    </S.SuccessMain>
  );
};

export default JoinSuccess;

