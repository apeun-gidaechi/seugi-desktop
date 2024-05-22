import React, { EventHandler } from 'react';
import * as S from "@/components/button/Button.style"

interface SeugiButtonProps {
  text?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}


const Button: React.FC<SeugiButtonProps> = ({ text = '계속하기', onClick }) => {
  return (
    <S.Continuebtn onClick={onClick}>
      {text}
    </S.Continuebtn>
  );
};

export default Button;