import React from 'react'
import * as S from './AdminGeneral.style';
import Setting from '@/Pages/Admin/Setting/Setting';
import SettingHeader from '@/Pages/Admin/SettingHeader/SettingHeader';

const AdminGeneral = () => {
  return (
    <S.AdminGeneralMain>
      <Setting />
      <S.SettingMain>
        <SettingHeader/>
      </S.SettingMain>
      <S.Right>

      </S.Right>
    </S.AdminGeneralMain>
  )
}

export default AdminGeneral