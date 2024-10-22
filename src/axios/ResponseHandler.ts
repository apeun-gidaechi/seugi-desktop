import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import token from "@/Constants/token/token";
import { SeugiCustomAxios } from "@/axios/SeugiCutomAxios";
import Cookies from "js-cookie";

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

//리프레쉬 작업중인지 아닌지를 구분하는 변수
let isRefreshing = false;
const refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribers.map((callback) => callback(accessToken));
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

        if (
            usingAccessToken !== undefined &&
            usingRefreshToken !== undefined &&
            status === 401
        ) {
            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    const res = await axios.get(`${SERVER_URL}/member/`, {
                        params: {
                            refreshToken: usingRefreshToken,
                        },
                    });
                    const newAccessToken = res.data.data.accessToken;

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
                        originalRequest.headers![
                            "Authorization"
                        ] = `${accessToken}`;
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