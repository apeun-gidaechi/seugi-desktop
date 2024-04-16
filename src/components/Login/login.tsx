import * as S from './login.style';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import seugiImg from "@/assets/image/onbording/Start/seugilogo.svg";
import showPasswordimg from '@/assets/image/onbording/show_fill.svg';
import hidePasswordimg from '@/assets/image//onbording/hide_fill.svg';
import AppleLogo from '@/assets/image//onbording/Start/applelogo.svg';
import GoogleLogo from '@/assets/image/onbording/Start/googlelogo.svg';
import Cloud1 from '@/assets/image/onbording/Start/LoginCloud1.svg';
import Cloud2 from '@/assets/image/onbording/Start/LoginCloud2.svg'
import Sun from '@/assets/image/onbording/Start/LoginSun.svg';
import Divider from '@/assets/image/onbording/Start/Divider.svg';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post("/login", {
        email: email,
        password: password,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.LoginMain>
      <S.Cloud1 src={Cloud1} />
      <S.Cloud2 src={Cloud2} />
      <S.Sun src={Sun}/>
      <S.LoginFirstWrap>
        <S.Fheader>
          <S.Header>
            <S.SeugiImg
              src={seugiImg}
            />
            <S.Title2> 반가워요! </S.Title2>
          </S.Header>
        </S.Fheader>
        <S.Inputarea>
          <S.Inputpart>
            <S.Enterinfo>
              <S.Subtitle2>이메일 <S.Redstar>*</S.Redstar></S.Subtitle2>
              <S.InputContainer>
                <S.TxtField
                  onChange={(e) => setEmail(e.target.value)}
                  className="txtField"
                  placeholder="이메일을 입력해주세요"
                  type="email"
                />
              </S.InputContainer>
            </S.Enterinfo>
            <S.Enterinfo>
              <S.Subtitle2>비밀번호 <S.Redstar>*</S.Redstar></S.Subtitle2>
              <S.InputContainer>
                <S.TxtField
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  className="txtField"
                  placeholder="비밀번호를 입력해주세요"
                />
                <S.Btnview onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <img src={hidePasswordimg} alt="숨기기" /> : <img src={showPasswordimg} alt="보이기" />}
                </S.Btnview>
              </S.InputContainer>
            </S.Enterinfo>
          </S.Inputpart>
          <S.Buttonpart>
            <S.Loginbtn className="loginbtn" onClick={handleLogin}>로그인</S.Loginbtn>
            <S.Body1>계정이 없으시다면? <S.Gosignup href="http://localhost:5173/emailsignup">가입하기</S.Gosignup> </S.Body1>
          </S.Buttonpart>
          <S.Orpart>
            <S.Dividerimg src={Divider}/>
              <S.Caption1>또는</S.Caption1>
            <S.Dividerimg src={Divider}/>
          </S.Orpart>
          <S.Oauthpart>
            <S.Authlogin>
              <S.LogoImg src={AppleLogo}/>
            </S.Authlogin>
            <S.Authlogin>
              <S.LogoImg src={GoogleLogo}/>
            </S.Authlogin>
          </S.Oauthpart>
        </S.Inputarea>
      </S.LoginFirstWrap>
     </S.LoginMain>
  );
};

export default Login;
