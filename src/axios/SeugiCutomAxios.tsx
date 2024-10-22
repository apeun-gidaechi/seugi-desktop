import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "@/Constants/token/token.constants";
import token from "@/Constants/token/token";
import ResponseHandler from "./ResponseHandler";
import requestHandler from "./RequestHandler";

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
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
    [REQUEST_TOKEN_KEY]: `${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

export const alimoV1AxiosSetAccessToken = (newToken: string) => {
  SeugiCustomAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `${newToken}`;
};

SeugiCustomAxios.interceptors.request.use(requestHandler as any, (response) => response);
SeugiCustomAxios.interceptors.response.use((response) => response, ResponseHandler);