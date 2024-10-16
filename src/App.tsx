import React, { useEffect } from 'react';
import Router from '@/Components/router';
import './App.css';
import { UserContextProvider } from './Contexts/userContext';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { appleAuthHelpers, useScript } from 'react-apple-signin-auth';
import Cookies from 'js-cookie';

const VAPID_PUBLIC = import.meta.env.VITE_VAPID_PUBLIC as string;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const fapp = initializeApp(firebaseConfig);
const messaging = getMessaging(fapp);

function App() {
  useScript(appleAuthHelpers.APPLE_SCRIPT_SRC);
  useEffect(() => {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === 'granted') {
          console.log('알림 권한이 부여되었습니다.');

          // FCM 토큰 요청
          getToken(messaging, {
            vapidKey: VAPID_PUBLIC,
          })
            .then((currentToken) => {
              if (currentToken) {
                Cookies.set('fcmToken', currentToken);
              } else {
                console.log('사용 가능한 등록 토큰이 없습니다.');
              }
            })
            .catch((err) => {
              console.error('토큰을 검색하는 동안 오류가 발생했습니다.', err);
            });

          // FCM 메시지 수신 처리
          onMessage(messaging, (payload) => {
            console.log('메시지 수신됨: ', payload);
            // 알림 표시 등 추가 처리 로직
          });
        } else {
          console.log('알림 권한이 거부되었습니다.');
        }
      })
      .catch((err) => {
        console.error('Error occurred while requesting notification permission: ', err);
      });
  });

  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;
