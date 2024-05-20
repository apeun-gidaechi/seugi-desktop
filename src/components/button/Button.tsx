import React from 'react';
import * as S from "@/components/button/Button.style"

interface SeugiButtonProps {
  text?: string;
}

const button = ({ text = '계속하기' }: SeugiButtonProps) => {
  return (
    <>
      <S.Continuebtn>{text}</S.Continuebtn>
    </>
  )
}

export default button;