import axios from 'axios';
import Cookies from 'js-cookie';
import SeugiCustomAxios from './SeugiCutomAxios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

let reqInterceptor: number | null = null;
export let accessToken: string | null = null;

export const setAccessToken = (newToken: string) => {
    accessToken = newToken;
    Cookies.set('accessToken', newToken);
    if (reqInterceptor !== null) {
        SeugiCustomAxios.interceptors.request.eject(reqInterceptor);
    }
    reqInterceptor = SeugiCustomAxios.interceptors.request.use((config) => {
        config.headers.Authorization = `${newToken}`;
        return config;
    }, (err) => Promise.reject(err));
};

export const clearAccessToken = () => {
    if (reqInterceptor !== null) {
        SeugiCustomAxios.interceptors.request.eject(reqInterceptor);
    }
    accessToken = null;
    reqInterceptor = null;
    Cookies.remove('accessToken');
};

export const refreshAccessToken = async (): Promise<string> => {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) {
        throw new Error('No refresh token available');
    }

    try {
        const res = await axios.post(`${SERVER_URL}/member/refresh`, { refreshToken });
        console.log(res.data);
        const newAccessToken = res.data.accessToken;
        setAccessToken(newAccessToken);
        return newAccessToken;
    } catch (error) {
        clearAccessToken();
        throw error;
    }
};

const prevToken = Cookies.get('accessToken');
if (prevToken) {
    setAccessToken(prevToken);
}

