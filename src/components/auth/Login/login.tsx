import React from "react";
import AppleLogin from "react-apple-login";
import './login.css';

const login = () => {
  return (
    <div>
      <div>
        <div>
          <img src="src/assets/image/seugi.png" className="seugilogo"/> <a> 반가워요! </a>
        </div>
        <div>
          <div>이메일 <a>*</a></div>
          <input 
            placeholder="이메일을 입력해주세요" 
            type="email"
          />
        </div>
        <div>
          <div>비밀번호 <a >*</a></div>
          <input
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
        </div>
        <button>로그인</button>
        <div >
          계정이 없으시다면? <a href="http://localhost:5173/signup">가입하기</a>
        </div>
        <div >또는</div>
        <AppleLogin
          clientId="com.example.app" //clientId:  애플 개발자 계정에서 생성한 앱의 고유 식별자입니다. 'com.example.app'은 실제 애플 개발자 계정에서 발급받은 앱 ID로 변경해야 합니다.
          redirectURI="https://example.com/auth/apple/callback" // redirectURI: 사용자가 애플 로그인을 성공적으로 완료한 후 리디렉션될 웹 페이지의 URL입니다. 실제 서비스의 리디렉션 URL로 교체해야 합니다.
          render={(renderProps) => (
            <button onClick={renderProps.onClick} >
              <img src="src/assets/image/applelogo.png"/>
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default login;
