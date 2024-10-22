import axios, { AxiosRequestConfig } from "axios";
import ResponseHandler from "./ResponseHandler";
import requestHandler from "./RequestHandler";
import Cookies from "js-cookie";

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
});

export const SeugiV1AxiosSetAccessToken = (newToken: string) => {
  SeugiCustomAxios.defaults.headers.common['Authorization'] = `${newToken}`;
};

SeugiCustomAxios.interceptors.request.use(requestHandler as any, (response) => response);
SeugiCustomAxios.interceptors.response.use((response) => response, ResponseHandler);