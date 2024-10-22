import { AxiosRequestConfig } from "axios";
import {
    ACCESS_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "@/Constants/token/token.constants";
import token from "@/Constants/token/token";

const requestHandler = (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (token.getToken(REFRESH_TOKEN_KEY) === undefined) {
        alert("세션 만료")
        window.location.href = "/login";
        return config;
    }

    config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
        [REQUEST_TOKEN_KEY]: `${token.getToken(ACCESS_TOKEN_KEY)}`,
    };

    return config;
};

export default requestHandler;