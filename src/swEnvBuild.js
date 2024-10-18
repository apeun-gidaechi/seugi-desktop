// swEnvBuild.js
const fs = require("fs");
// This dotenv is the one used inside React.
// Load dotenv Intentionally because build process does not have access to .env file yet.
const dotenv = require("dotenv");
dotenv.config();
const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID,
  VITE_FIREBASE_MEASUREMENT_ID,
} = process.env;
const content = `const swEnv = {
    VITE_FIREBASE_API_KEY: '${VITE_FIREBASE_API_KEY}',
    VITE_FIREBASE_AUTH_DOMAIN: '${VITE_FIREBASE_AUTH_DOMAIN}',
    VITE_FIREBASE_PROJECT_ID: '${VITE_FIREBASE_PROJECT_ID}',
    VITE_FIREBASE_STORAGE_BUCKET: '${VITE_FIREBASE_STORAGE_BUCKET}',
    VITE_FIREBASE_MESSAGING_SENDER_ID: '${VITE_FIREBASE_MESSAGING_SENDER_ID}',
    VITE_FIREBASE_APP_ID: '${VITE_FIREBASE_APP_ID}',
    VITE_FIREBASE_MEASUREMENT_ID: '${VITE_FIREBASE_MEASUREMENT_ID}'
 }`;
fs.writeFileSync("./public/swEnv.js", content);