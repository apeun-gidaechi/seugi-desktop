import React, { useEffect } from 'react';
import Router from '@/Components/router';
import './App.css';
import { UserContextProvider } from './Contexts/userContext';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

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
  useEffect(() => {
    // 알림 권한 요청
    Notification.requestPermission()
      .then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');

          // FCM 토큰 요청
          getToken(messaging, {
            vapidKey: VAPID_PUBLIC,
          })
            .then((currentToken) => {
              if (currentToken) {
                window.localStorage.setItem('fcmToken', currentToken);
              } else {
                console.log('No registration token available.');
              }
            })
            .catch((err) => {
              console.error('An error occurred while retrieving token: ', err);
            });

          // FCM 메시지 수신 처리
          onMessage(messaging, (payload) => {
            console.log('Message received: ', payload);
            // 알림 표시 등 추가 처리 로직
          });
        } else {
          console.log('Notification permission denied.');
        }
      })
      .catch((err) => {
        console.error('Error occurred while requesting notification permission: ', err);
      });
  }, []);

  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;