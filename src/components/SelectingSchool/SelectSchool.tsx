import * as S from '@/components/SelectingSchool/SelectSchool.style';
import { useNavigate } from 'react-router-dom';

import JoinSchoolimg from '@/assets/image/join-school/JoinSchool.svg';
import CreateSchoolimg from '@/assets/image/join-school/JoinSchool/RoundedCircleImage.svg';

const SelectSchool = () => {
    const navigate = useNavigate();
    const handleJoinSchool = () => {
        navigate('/schoolcode')
    }
    const handleNewSchool = () => {
        navigate('/createschool')
    }
  return (
    <S.SelectschoolMain>
        <S.SelectschoolFirstWrap>
            <S.ContainerBox>
                <S.TitleContainer>
                    <S.Title>학교 가입 또는 생성</S.Title>
                </S.TitleContainer>
                <S.ButtonContainer1>
                    <S.ButtonContainer>
                          <S.Button onClick={handleJoinSchool}>
                            <S.ButtonImg src={JoinSchoolimg} />
                            </S.Button>
                        <S.Subtitle> 초대 코드로 가입 </S.Subtitle>
                    </S.ButtonContainer>
                    <S.ButtonContainer>
                        <S.Button onClick={handleNewSchool}>
                            <S.ButtonImg src={CreateSchoolimg}/>
                        </S.Button>
                        <S.Subtitle> 새 학교 등록 </S.Subtitle>
                    </S.ButtonContainer>
                </S.ButtonContainer1>
            </S.ContainerBox>
        </S.SelectschoolFirstWrap>
    </S.SelectschoolMain>
  )
}

export default SelectSchool