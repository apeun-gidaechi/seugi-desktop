import axios, { AxiosInstance } from 'axios';
import config from '@/constants/config/config.json';


export const SeugiCustomAxios: AxiosInstance = axios.create({
  baseURL: `${config.serverurl}`,
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


const prevToken = window.localStorage.getItem("accessToken");
if (prevToken !== null) {
  setAccessToken(prevToken);
}

// SeugiCustomAxios.interceptors.response.use(
//   function (res) {
//     return res;
//   },
//   function (error) {
//     if (error.response && error.response.status) {
//       switch (error.response.status) {
//         case 401:
//           window.location.href = '/login';
//           break;
//         default:
//           return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   },
// );
