import * as S from './login.style';

import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import seugiImg from "../../assets/image/seugilogo.svg";



const login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    try {
            const response = await axios.post("http://localhost:5176-", {
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
      <S.FirstWrap> 
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
              <S.txtField 
                onChange={(e) => setEmail(e.target.value)}
                className="txtField"
                placeholder="이메일을 입력해주세요" 
                type="email"
              />
            </S.Enterinfo>
            <S.Enterinfo>
              <S.Subtitle2>비밀번호 <S.Redstar>*</S.Redstar></S.Subtitle2>
              <S.txtField
                onChange={(e) => setPassword(e.target.value)}
                className="txtField"
                placeholder="비밀번호를 입력해주세요"
                type="password"
              />
            </S.Enterinfo>
          </S.Inputpart>
          <S.Buttonpart>
            <S.Loginbtn className="loginbtn" onClick={handleLogin}>로그인</S.Loginbtn>
              <S.Body1>계정이 없으시다면? <S.Gosignup href="http://localhost:5173/selectjob">가입하기</S.Gosignup> </S.Body1>
          </S.Buttonpart>
          <S.Orpart>
            <S.Caption1>또는</S.Caption1>
              <S.Oauthpart>
                <S.Authlogin>
                  applelogin
                </S.Authlogin>
                <S.Authlogin>
                  googlelogin
                </S.Authlogin>
              </S.Oauthpart>
            </S.Orpart>
        </S.Inputarea>
      </S.FirstWrap>
  );
};

export default login;