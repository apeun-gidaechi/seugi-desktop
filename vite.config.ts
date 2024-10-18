import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from 'fs'; // 파일 시스템 모듈을 사용하여 인증서 파일을 읽기 위함

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    host: '0.0.0.0',
    https: {
      key: fs.readFileSync(`${__dirname}/certificates/localhost-key.pem`),  // 로컬에서 HTTPS 키 파일 경로
      cert: fs.readFileSync(`${__dirname}/certificates/localhost.pem`),      // 로컬에서 HTTPS 인증서 파일 경로
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
    },
  },
});