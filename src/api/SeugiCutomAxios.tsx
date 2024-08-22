import axios, { AxiosInstance } from 'axios';
import config from '@/constants/config/config.json';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const token = window.localStorage.getItem("accessToken");

export const SeugiCustomAxios: AxiosInstance = axios.create({
    baseURL: `${config.serverurl}`, 
    headers: {
        Authorization: `${token}`,
      },
});

SeugiCustomAxios.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          navigate('/');
          break;
        default:
          return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);