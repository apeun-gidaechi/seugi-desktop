import React from 'react'
import * as S from './AdminGeneral.style';
import Setting from '@/Pages/Admin/Setting/Setting';
import SettingHeader from '@/Pages/Admin/SettingHeader/SettingHeader';
import RightImg from '@/Assets/image/adminsetting/expand_right_line.svg';
const AdminGeneral = () => {
  return (
    <S.AdminGeneralMain>
      <Setting />
      <S.SettingMain>
        <SettingHeader/>
        <S.SettingContainer>
          <S.TitleDiv>
            <S.Title>일반</S.Title>
          </S.TitleDiv>
          <S.OutSchoolDiv>
            <S.OutSchool>학교 나가기</S.OutSchool><S.RightImg src={RightImg}/>
          </S.OutSchoolDiv>
        </S.SettingContainer>
      </S.SettingMain>
      <S.Right>

      </S.Right>
    </S.AdminGeneralMain>
  )
}

export default AdminGeneral