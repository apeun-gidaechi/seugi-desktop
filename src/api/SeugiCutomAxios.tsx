import axios, { AxiosInstance } from 'axios';
import config from '@/constants/config/config.json';

const token = window.localStorage.getItem("accessToken");

export const SeugiCustomAxios: AxiosInstance = axios.create({
    baseURL: `${config.serverurl}`, 
    headers: {
        Authorization: `${token}`,
      },
});