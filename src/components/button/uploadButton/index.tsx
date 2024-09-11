import React from 'react'

import * as S from './index.style'

import FileIcon from '@/assets/image/chat/fileButton/file_line.svg';
import ImageIcon from '@/assets/image/chat/fileButton/image_line.svg';

const index = () => {
  return (
    <S.Container>
        <S.UploadButton>
            <S.IconImg src = {FileIcon}/>
            <S.ButtonText>파일 업로드</S.ButtonText>
        </S.UploadButton>
        <S.UploadButton>
            <S.IconImg src = {ImageIcon}/>
            <S.ButtonText>이미지 업로드</S.ButtonText>
        </S.UploadButton>
    </S.Container>
  )
}

export default index