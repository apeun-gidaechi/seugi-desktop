import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import token from "@/Constants/token/token";
import { SeugiCustomAxios } from "@/axios/SeugiCutomAxios";
import Cookies from "js-cookie";

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

//리프레쉬 작업중인지 아닌지를 구분하는 변수
let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribers.forEach((callback) => callback(accessToken));
    refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
    refreshSubscribers.push(callback);
};

const errorResponseHandler = async (error: AxiosError) => {
    if (error.response) {
        const {
            config: originalRequest,
            response: { status },
        } = error;
        const usingAccessToken = Cookies.get("accessToken");
        const usingRefreshToken = Cookies.get("refreshToken");

        // 액세스 토큰이 undefined라면 리프레시 토큰이 존재하는지 확인
        if (!usingAccessToken) {
            if (!usingRefreshToken) {
                // 리프레시 토큰이 없으므로 로그인 페이지로 리디렉션
                token.clearToken();
                window.location.href = "/login";
                return Promise.reject("No refresh token available, redirecting to login.");
            }
        }

        if (usingRefreshToken && (status === 401 || !usingAccessToken)) {
            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    const res = await axios.get(`${SERVER_URL}/member/refresh`, {
                        params: {
                            token: usingRefreshToken,
                        },
                    });
                    console.log(res.data.data);
                    const newAccessToken = res.data.data;

                    Cookies.set("accessToken", newAccessToken);
                    isRefreshing = false;
                    onTokenRefreshed(newAccessToken);
                } catch (error) {
                    token.clearToken();
                    window.location.href = "/login";
                }
            }

            return new Promise((resolve, reject) => {
                addRefreshSubscriber((accessToken: string) => {
                    if (originalRequest) {
                        originalRequest.headers!["Authorization"] = `${accessToken}`;
                        resolve(SeugiCustomAxios(originalRequest));
                    } else {
                        reject("originalRequest is undefined");
                    }
                });
            });
        }
    }

    return Promise.reject(error);
};


export default errorResponseHandler;