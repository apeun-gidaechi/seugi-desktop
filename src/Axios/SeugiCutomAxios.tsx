import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';
import { refreshAccessToken, setAccessToken } from './refreshHandler';

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export const SeugiCustomAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
});

SeugiCustomAxios.interceptors.response.use((res) => res, refreshAccessToken);

const prevToken = Cookies.get('accessToken');
if (prevToken) {
  setAccessToken(prevToken);
}

export default SeugiCustomAxios;