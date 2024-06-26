import axios from 'axios';
import config from '@/config/config.json';

const token = window.localStorage.getItem("accessToken");

const SeugiAxios = axios.create({
    baseURL: config.serverurl,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
    },
});

SeugiAxios.interceptors.request.use((request) => {
    if (token) {
        request.headers.Authorization = `${token}`;
    }
    return request;
}, (error) => {
    return Promise.reject(error);
});

SeugiAxios.interceptors.response.use((res) => {
    return res;
}, (error) => {
    console.error('Error: ', error);
    return Promise.reject(error);
});

export default SeugiAxios;
