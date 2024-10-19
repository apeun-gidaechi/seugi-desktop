// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
importScripts("swEnv.js");

const apiKey = swEnv.VITE_FIREBASE_API_KEY
const authDomain = swEnv.VITE_FIREBASE_AUTH_DOMAIN;
const projectId = swEnv.VITE_FIREBASE_PROJECT_ID;
const storageBucket = swEnv.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = swEnv.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = swEnv.VITE_FIREBASE_APP_ID;
const measurementId = swEnv.VITE_FIREBASE_MEASUREMENT_ID;

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});