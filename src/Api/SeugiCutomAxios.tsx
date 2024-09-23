import axios, { AxiosInstance } from 'axios';

interface Config {
  serverurl: string;
}

import configData from '@/constants/config/config.json';
const config = configData as Config;


export const SeugiCustomAxios: AxiosInstance = axios.create({
  baseURL: `${config.serverurl}`,
});


let reqInterceptor: number | null = null;

export const setAccessToken = (newToken: string) => {
  reqInterceptor = SeugiCustomAxios.interceptors.request.use((config) => {
    config.headers.Authorization = newToken;
    return config;
  }, (err) => err);
}

export const clearAccessToken = () => {
  SeugiCustomAxios.interceptors.request.eject(reqInterceptor!);
  reqInterceptor = null;
};


const prevToken = window.localStorage.getItem("accessToken");
if (prevToken !== null) {
  setAccessToken(prevToken);
}

SeugiCustomAxios.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          window.location.href = '/';
          break;
        default:
          return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);