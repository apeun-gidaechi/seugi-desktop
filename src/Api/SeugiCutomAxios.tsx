import axios, { AxiosInstance } from 'axios';
import config from '@/constants/config/config.json';


const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export const SeugiCustomAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
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
