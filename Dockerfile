FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm ci

# 빌드

COPY . .

# out 파일 폴더 어딘가에 복사

# 복사한 폴더를 nginx로 서빙

EXPOSE 8080

CMD ["npm", "start"]