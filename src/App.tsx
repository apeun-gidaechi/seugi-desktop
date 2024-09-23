import React, { useEffect } from 'react';
import Router from '@/Components/router';
import './App.css';
import { UserContextProvider } from './Contexts/userContext';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import VapidKey from '@/Constants/firebase/VapidKey.json';
import config from '@/Constants/firebase/firebaseConfig.json';


const firebaseConfig = config;

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
            vapidKey: `${VapidKey.public}`,
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