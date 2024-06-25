import axios from 'axios';
import config from '@/config/config.json';

const SeugiAxios = axios.create({
    baseURL: config.serverurl,
    headers: {
        'Content-Type': 'application/json',
    },
});

SeugiAxios.interceptors.request.use((request) => {
    const token = window.localStorage.getItem("accessToken");
    if (token) {
        request.headers.Authorization = `${token}`;
    }
    return request;
}, (error) => {
    return Promise.reject(error);
});

SeugiAxios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.error('Error: ', error);
    return Promise.reject(error);
});

export default SeugiAxios;
