import * as S from "@/components/Login/login.style";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "@/constants/config/config.json";
import LoginButton from "@/components/Button/Button";
import TextField from "@/components/TextField/TextField";
import CustomAlert from "@/components/Alert/Alert";
import seugiImg from "@/assets/image/onbording/Start/seugilogo.svg";
import showPasswordimg from "@/assets/image/onbording/show_fill.svg";
import hidePasswordimg from "@/assets/image/onbording/hide_fill.svg";
import AppleLogo from "@/assets/image/onbording/Start/apple.svg";
import GoogleLogo from "@/assets/image/onbording/Start/googlelogo.svg";
import Cloud1 from "@/assets/image/onbording/Start/LoginCloud1.svg";
import Cloud2 from "@/assets/image/onbording/Start/LoginCloud2.svg";
import Sun from "@/assets/image/onbording/Start/LoginSun.svg";
import Divider from "@/assets/image/onbording/Start/Divider.svg";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const getOneWorkspaceIdAndSet = async () => {
    const token = window.localStorage.getItem("accessToken");
    const res = await axios.get(`${config.serverurl}/workspace/`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    window.localStorage.setItem("workspaceId", res.data.data[0].workspaceId);
  };

  const importWorkspace = async () => {
    try {
      const token = window.localStorage.getItem("accessToken");
      const res = await axios.get(`${config.serverurl}/workspace/`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      console.log(res.data.data.length);

      if (res.data.data && res.data.data.length === 0) {
        navigate("/unhome");
      } else {
        getOneWorkspaceIdAndSet().then(() => {
          navigate("/home");
        });
      }
    } catch (error) {
      console.log("Error fetching workspace:", error);
      setAlertMessage("워크스페이스 정보를 가져오는 중 오류가 발생했습니다.");
      setShowAlert(true);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${config.serverurl}/member/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status !== 200) {
        return;
      }

      const { accessToken, refreshToken } = res.data.data;

      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("refreshToken", refreshToken);

      console.log(res);

      importWorkspace();
    } catch (error) {
      setAlertMessage(
        "등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다"
      );
      setShowAlert(true);
      console.log(error);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    flow: "auth-code",
    scope: "email profile",
    onSuccess: async ({ code }) => {
      try {
        const res = await axios.post(
          `${config.serverurl}/oauth/google/authenticate`,
          { code }
        );

        if (res.status !== 200) {
          return;
        }

        const { accessToken, refreshToken } = res.data.data;

        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("refreshToken", refreshToken);

        importWorkspace();
      } catch (error) {
        setAlertMessage(
          "구글 로그인 중 오류가 발생했습니다. 다시 시도해주세요."
        );
        setShowAlert(true);
        console.log(error);
      }
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

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
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해주세요"
                  onKeyDown={handleKeyDown}
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
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력해주세요"
                  onKeyDown={handleKeyDown}
                  style={{ border: "none" }}
                />
                <S.Btnview onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <img src={hidePasswordimg} alt="숨기기" />
                  ) : (
                    <img src={showPasswordimg} alt="보이기" />
                  )}
                </S.Btnview>
              </S.InputContainer>
            </S.Enterinfo>
          </S.Inputpart>
          <S.Buttonpart>
            <LoginButton text="로그인" onClick={handleLogin} />
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
            <S.Authlogin onClick={handleGoogleLogin}>
              <S.LogoImg src={GoogleLogo} />
            </S.Authlogin>
          </S.Oauthpart>
        </S.Inputarea>
      </S.LoginFirstWrap>
      {showAlert && (
        <CustomAlert
          position=""
          titletext="로그인 에러"
          subtext={alertMessage}
          onClose={handleCloseAlert}
        />
      )}
    </S.LoginMain>
  );
};

export default Login;
