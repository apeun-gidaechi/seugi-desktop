import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@/components/button/Button';
import * as S from '@/components/JoinSuccess/JoinSuccess.style';
import { useNavigate } from 'react-router-dom';
import config from '@/config/config.json';

const JoinSuccess = () => {
  const navigate = useNavigate();
  const [schoolName, setSchoolName] = useState('');
  const [schoolInfo, setSchoolInfo] = useState('');
  const [schoolImgUrl, setSchoolImgUrl] = useState('');

  const handleJoinSuccess = () => {
    navigate('/selectjob');
  };

  useEffect(() => {
    const handleSchoolInfo = async () => {
      try {
        const res = await axios.get(`${config.serverurl}/workspace/`);
        setSchoolName(res.data.workspaceName);
        setSchoolInfo(`학생 ${res.data.studentCount}명 선생님 ${res.data.teacherCount}명`);
        setSchoolImgUrl(res.data.workspaceImageUrl);
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

