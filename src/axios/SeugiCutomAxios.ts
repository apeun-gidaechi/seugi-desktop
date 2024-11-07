import axios, { AxiosRequestConfig, AxiosError } from "axios";
import ResponseHandler from "./ResponseHandler";
import RequestHandler from "./RequestHandler";
import Cookies from "js-cookie";
import { paths } from "@/Constants/paths";

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const ACCESS_TOKEN = Cookies.get('accessToken');
  const baseConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `${ACCESS_TOKEN}`
    }
  };
  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const SeugiCustomAxios = createAxiosInstance({
  baseURL: SERVER_URL,
  headers: {
    "Authorization": `${Cookies.get("accessToken")}`,
  },
  timeout: 10000,
});

export const SeugiV1AxiosSetAccessToken = (newToken: string) => {
  SeugiCustomAxios.defaults.headers.common['Authorization'] = `${newToken}`;
  Cookies.set('accessToken', newToken);
};

SeugiCustomAxios.interceptors.request.use(
  RequestHandler,
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let refreshSubscribers: ((newToken: string) => void)[] = [];

SeugiCustomAxios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const refreshToken = Cookies.get('refreshToken');
    const accessToken = Cookies.get('accessToken');

    // 401 오류가 발생한 경우 처리
    if (error.response?.status === 401) {
      if (!accessToken && !refreshToken) {
        window.location.href = paths.login;
        alert('세션이 만료되었습니다.');
        return Promise.reject(error);
      }

      if (!accessToken && refreshToken) {
        if (!isRefreshing) {
          isRefreshing = true;
          try {
            const res = await axios.get(`${SERVER_URL}/member/refresh`, {
              params: { token: refreshToken.replace("Bearer ", "") }
            });
            const newAccessToken = res.data.data;
            Cookies.set('accessToken', newAccessToken);
            SeugiV1AxiosSetAccessToken(newAccessToken);

            refreshSubscribers.forEach(callback => callback(newAccessToken));
            refreshSubscribers = [];
            isRefreshing = false;

            if (error.config) {
              error.config.headers['Authorization'] = `${newAccessToken}`;
              return axios(error.config);
            }
          } catch (refreshError) {
            isRefreshing = false;
            return Promise.reject(refreshError);
          }
        }

        return new Promise((resolve) => {
          refreshSubscribers.push((newToken: string) => {
            if (error.config) {
              error.config.headers['Authorization'] = `${newToken}`;
              resolve(axios(error.config));
            }
          });
        });
      }

      if (accessToken && refreshToken) {
        try {
          const res = await axios.get(`${SERVER_URL}/member/refresh`, {
            params: { token: refreshToken.replace("Bearer ", "") }
          });
          const newAccessToken = res.data.data;
          Cookies.set('accessToken', newAccessToken);
          SeugiV1AxiosSetAccessToken(newAccessToken);

          if (error.config) {
            error.config.headers['Authorization'] = `${newAccessToken}`;
            return axios(error.config);
          }
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);

SeugiCustomAxios.interceptors.request.use(
  RequestHandler,
  (error) => Promise.reject(error)
);
 
// Refresh 토큰만 httpOnly 쿠키에 저장 (급한 건 아님)