import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleOAuth = () => {
  const clientId = '1030248081772-slq50ocntpteorj47l6qa90rnh08ukgj.apps.googleusercontent.com';

  const onSuccess = (credentialResponse: any) => {
    console.log('Login Success:', credentialResponse);
  };

  const onFailure = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleOAuth;