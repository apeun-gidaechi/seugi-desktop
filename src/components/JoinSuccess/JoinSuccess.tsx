import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@/components/Button/Button';
import * as S from '@/components/JoinSuccess/JoinSuccess.style';
import { useNavigate, useLocation } from 'react-router-dom';
import config from '@/config/config.json';

const JoinSuccess = () => {
  const navigate = useNavigate();
  const [workspaceName, setWorkspaceName] = useState('');
  const [schoolInfo, setSchoolInfo] = useState('');
  const [schoolImgUrl, setSchoolImgUrl] = useState('');
  const [workspaceId, setWorkspaceId] = useState('');
  const token = window.localStorage.getItem("accessToken");
  const location = useLocation();
  const { verificationCode } = location.state || {};

  const handleJoinSuccess = () => {
    navigate('/selectjob', { state: { verificationCode, workspaceId } });
  };

  useEffect(() => {
    const handleSchoolInfo = async () => {
      try {
        const res = await axios.get(`${config.serverurl}/workspace/${verificationCode}`, {
          headers: {
            Authorization: `${token}`
          },
        });
        const data = res.data.data;
        setWorkspaceName(data.workspaceName);
        setSchoolInfo(`학생 ${data.studentCount}명 선생님 ${data.teacherCount}명`);
        setSchoolImgUrl(data.workspaceImageUrl);
        setWorkspaceId(data.workspaceId);  
      } catch (error) {
        console.error('Failed to fetch school information:', error);
      }
    };
    handleSchoolInfo();
  }, [verificationCode, token]);

  return (
    <S.SuccessMain>
      <S.Container>
        <S.SchoolImg src={schoolImgUrl} alt="error" />
        <S.SchoolInfoContainer>
          <S.SchoolName>{workspaceName}</S.SchoolName>
          <S.SchoolInfo>{schoolInfo}</S.SchoolInfo>
        </S.SchoolInfoContainer>
        <S.ButtonContainer>
          <Button onClick={handleJoinSuccess} text="계속하기" />
        </S.ButtonContainer>
      </S.Container>
    </S.SuccessMain>
  );
};

export default JoinSuccess;
