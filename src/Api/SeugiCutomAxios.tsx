import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';
// import config from '@/constants/config/config.json';


const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export const SeugiCustomAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
});


let reqInterceptor: number | null = null;

export let accessToken: string | null = null;

export const setAccessToken = (newToken: string) => {
  reqInterceptor = SeugiCustomAxios.interceptors.request.use((config) => {
    accessToken = newToken;
    config.headers.Authorization = newToken;
    return config;
  }, (err) => err);
}

export const clearAccessToken = () => {
  if (reqInterceptor !== null) {
    SeugiCustomAxios.interceptors.request.eject(reqInterceptor);
  }
  accessToken = null;
  reqInterceptor = null;
};

const prevToken = Cookies.get("accessToken");
if (prevToken !== undefined && prevToken !== null) {
  setAccessToken(prevToken);
}
