import * as S from '@/components/Login/login.style';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "@/config/config.json"
import LoginButton from "@/components/button/Button";
import seugiImg from "@/assets/image/onbording/Start/seugilogo.svg";
import showPasswordimg from '@/assets/image/onbording/show_fill.svg';
import hidePasswordimg from '@/assets/image//onbording/hide_fill.svg';
import AppleLogo from '@/assets/image//onbording/Start/applelogo.svg';
import GoogleLogo from '@/assets/image/onbording/Start/googlelogo.svg';
import Cloud1 from '@/assets/image/onbording/Start/LoginCloud1.svg';
import Cloud2 from '@/assets/image/onbording/Start/LoginCloud2.svg';
import Sun from '@/assets/image/onbording/Start/LoginSun.svg';
import Divider from '@/assets/image/onbording/Start/Divider.svg';
import TextField from '@/components/TextField/TextField';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = async () => {
    // TODO MAKE A CUSTOM AXIOS 
    try {
      const res = await axios.post(`${config.serverurl}/member/login`, {
        email: email,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status !== 200) {
        return;
      }

      const accessToken = res.data.data.accessToken;
      const refreshToken = res.data.data.refreshToken;

      // const isRegisteredToSchool = res.data.data.isRegisteredToSchool;

      //localStorage에 토큰 저장
      window.localStorage.setItem('accessToken', accessToken);
      window.localStorage.setItem('refreshToken', refreshToken);

      // 만약 학교 가입이 되어있다면 chat으로 아니라면 join school 로 보내야 할듯 
      // 일단 chat으로 보내기
      // if (isRegisteredToSchool) {
      navigate("/chat");
      // } else {
      //   navigate("/selectschool");
      // }

    } catch (error) {
      alert("등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다"); // 일단 alert 사용 -> 도담도담처럼..?
      console.log(error);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  }

  return (
    <S.LoginMain>
      <S.Cloud1 src={Cloud1} />
      <S.Cloud2 src={Cloud2} />
      <S.Sun src={Sun} />
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
                <TextField
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해주세요"
                  onKeyDown={handleKeyDown}
                />
              </S.InputContainer>
            </S.Enterinfo>
            <S.Enterinfo>
              <S.Subtitle2>비밀번호 <S.Redstar>*</S.Redstar></S.Subtitle2>
              <S.InputContainer>
                <TextField
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력해주세요"
                  onKeyDown={handleKeyDown}
                />
                <S.Btnview onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <img src={hidePasswordimg} alt="숨기기" /> : <img src={showPasswordimg} alt="보이기" />}
                </S.Btnview>
              </S.InputContainer>
            </S.Enterinfo>
          </S.Inputpart>
          <S.Buttonpart>
            <LoginButton text='로그인' onClick={handleLogin}/>
            <S.Body1>계정이 없으시다면? <S.Gosignup href="http://localhost:5173/emailsignup">가입하기</S.Gosignup> </S.Body1>
          </S.Buttonpart>
          <S.Orpart>
            <S.Dividerimg src={Divider} />
            <S.Caption1>또는</S.Caption1>
            <S.Dividerimg src={Divider} />
          </S.Orpart>
          <S.Oauthpart>
            <S.Authlogin>
              <S.LogoImg src={AppleLogo} />
            </S.Authlogin>
            <S.Authlogin>
              <S.LogoImg src={GoogleLogo} />
            </S.Authlogin>
          </S.Oauthpart>
        </S.Inputarea>
      </S.LoginFirstWrap>
    </S.LoginMain>
  );
};

export default Login;