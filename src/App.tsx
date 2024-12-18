import React, { useEffect } from 'react';
import Router from '@/Components/router';
import './App.css';
import { UserContextProvider } from './Contexts/userContext';
import { SelectedProvider } from './Hooks/Selected/useSelected';
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

// Firebase 앱 초기화
const fapp = initializeApp(firebaseConfig);
const messaging = getMessaging(fapp);

// 서비스 워커 등록 함수
const registerServiceWorker = async () => {
  const scriptURL = 'firebase-messaging-sw.js';
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(scriptURL);
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Service worker registration failed: ${error}`);
    }
  }
};

function App() {
  useScript(appleAuthHelpers.APPLE_SCRIPT_SRC);

  useEffect(() => {
    registerServiceWorker(); // 서비스 워커 등록

    // 알림 권한 요청
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');

        // FCM 토큰 요청
        getToken(messaging, { vapidKey: VAPID_PUBLIC }).then((currentToken) => {
          if (currentToken) {
            Cookies.set('fcmToken', currentToken);
          } else {
            console.log('No registration token available.');
          }
        }).catch((err) => {
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
    }).catch((err) => {
      console.error('Error occurred while requesting notification permission: ', err);
    });
  }, []);

  return (
    <SelectedProvider>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </SelectedProvider>
  );
}

export default App;