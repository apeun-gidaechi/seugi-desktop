// firebase-messaging-sw.js (Firebase 8.x)
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const params = new URL(location).searchParams;
const apiKey = params.get("apiKey");
const authDomain = params.get("authDomain");
const projectId = params.get("projectId");
const storageBucket = params.get("storageBucket");
const messagingSenderId = params.get("messagingSenderId");
const appId = params.get("appId");
const measurementId = params.get("measurementId");

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