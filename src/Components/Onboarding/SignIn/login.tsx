import * as S from "./login.style";
import React from "react";
import LoginButton from "@/Components/Button/Button";
import TextField from "@/Components/common/TextField/TextField";
import CustomAlert from "@/Components/Alert/Alert";
import seugiImg from "@/assets/image/onbording/Start/seugilogo.svg";
import showPasswordimg from "@/assets/image/onbording/show_fill.svg";
import hidePasswordimg from "@/assets/image/onbording/hide_fill.svg";
import AppleLogo from "@/assets/image/onbording/Start/apple.svg";
import GoogleLogo from "@/assets/image/onbording/Start/googlelogo.svg";
import Cloud1 from "@/assets/image/onbording/Start/LoginCloud1.svg";
import Cloud2 from "@/assets/image/onbording/Start/LoginCloud2.svg";
import Sun from "@/assets/image/onbording/Start/LoginSun.svg";
import Divider from "@/assets/image/onbording/Start/Divider.svg";

import useLogin from '@/Hooks/OnBording/LoginHook/index';

const Login = () => {
  const { ...Login } = useLogin();

  return (
    <S.LoginMain>
      <S.Cloud1 src={Cloud1} />
      <S.Cloud2 src={Cloud2} />
      <S.Sun src={Sun} />
      <S.LoginFirstWrap>
        <S.Fheader>
          <S.Header>
            <S.SeugiImg data={seugiImg} />
            <S.Title2> 반가워요! </S.Title2>
          </S.Header>
        </S.Fheader>
        <S.Inputarea>
          <S.Inputpart>
            <S.Enterinfo>
              <S.Subtitle2>
                이메일 <S.Redstar>*</S.Redstar>
              </S.Subtitle2>
              <S.InputContainer>
                <TextField
                  value={Login.email}
                  type="email"
                  onChange={(e) => Login.setEmail(e.target.value)}
                  placeholder="이메일을 입력해주세요"
                  onKeyDown={Login.handleKeyDown}
                  style={{ border: "none" }}
                />
              </S.InputContainer>
            </S.Enterinfo>
            <S.Enterinfo>
              <S.Subtitle2>
                비밀번호 <S.Redstar>*</S.Redstar>
              </S.Subtitle2>
              <S.InputContainer>
                <TextField
                  value={Login.password}
                  type={Login.showPassword ? "text" : "password"}
                  onChange={(e) => Login.setPassword(e.target.value)}
                  placeholder="비밀번호를 입력해주세요"
                  onKeyDown={Login.handleKeyDown}
                  style={{ border: "none" }}
                />
                <S.Btnview onClick={() => Login.setShowPassword(!Login.showPassword)}>
                  {Login.showPassword ? (
                    <img src={hidePasswordimg} alt="숨기기" />
                  ) : (
                    <img src={showPasswordimg} alt="보이기" />
                  )}
                </S.Btnview>
              </S.InputContainer>
            </S.Enterinfo>
          </S.Inputpart>
          <S.Buttonpart>
            <LoginButton text="로그인" onClick={Login.handleLogin} />
            <S.Body1>
              계정이 없으시다면?{" "}
              <S.Gosignup href="http://localhost:5173/emailsignup">
                가입하기
              </S.Gosignup>{" "}
            </S.Body1>
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
            <S.Authlogin onClick={Login.handleGoogleLogin}>
              <S.LogoImg src={GoogleLogo} />
            </S.Authlogin>
          </S.Oauthpart>
        </S.Inputarea>
      </S.LoginFirstWrap>
      {Login.showAlert && (
        <CustomAlert
          position=""
          titletext="로그인 에러"
          subtext={Login.alertMessage}
          onClose={Login.handleCloseAlert}
        />
      )}
    </S.LoginMain>
  );
};

export default Login;
