import * as S from "../Login/login.style"

import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AppleLogin from "react-apple-login";

const login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    try {
            const response = await axios.post("", {
                email: email,
                password: password,
            });
            console.log(response);
            if (response.status === 200) {
                navigate("/main")
            }
        } catch (error) {
            console.log(error);
        }
  }

  return (
    <div className='Loginview'>
      <div className="Frame124">
        <div className='Frame126'>
          <img src="src/assets/image/seugilogo.svg"/> <a className="Title2"> 반가워요! </a>
        </div>
      </div>
      <div className='Frame318'>
        <div className='Frame300'>
          <div className='Frame121'>
            <div className="Subtitle2">이메일 <a className="redstar">*</a></div>
            <input 
              onChange={(e) => setEmail(e.target.value)}
              className="txtField"
              placeholder="이메일을 입력해주세요" 
              type="email"
            />
          </div>
          <div className='Frame121'>
            <div className="Subtitle2">비밀번호 <a className="redstar">*</a></div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="txtField"
              placeholder="비밀번호를 입력해주세요"
              type="password"
            />
          </div>
        </div>
        <div className='Frame299'>
          <button className="loginbtn" onClick={handleLogin}>로그인</button>
            <p className="Body1">계정이 없으시다면? <a href="http://localhost:5173/selectjob" className="Gosignup">가입하기</a> </p>
        </div>
        <div className='fm124'>
          <div className="Caption1">또는</div>
        </div>
        <div className='Frame1242'>
          <AppleLogin
            clientId="com.example.app" //clientId:  애플 개발자 계정에서 생성한 앱의 고유 식별자입니다. 'com.example.app'은 실제 애플 개발자 계정에서 발급받은 앱 ID로 변경해야 합니다.
            redirectURI="https://example.com/auth/apple/callback" // redirectURI: 사용자가 애플 로그인을 성공적으로 완료한 후 리디렉션될 웹 페이지의 URL입니다. 실제 서비스의 리디렉션 URL로 교체해야 합니다.
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className='applebtn'>
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default login;
