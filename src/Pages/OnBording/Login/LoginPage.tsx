import Login from "@/Components/Onboarding/SignIn/login";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import config from "@/constants/config/config.json";
import React from 'react'

// config에 타입 선언
// const typedConfig = config as { "client-id": string };

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID as string;

const LoginPage = () => {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Login />
    </GoogleOAuthProvider>
  );
};

export default LoginPage;