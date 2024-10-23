import { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const requestHandler = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const refreshToken = Cookies.get("refreshToken");
    if (refreshToken === undefined) {
        console.log("RequestHandler refreshToken :",refreshToken);
        // alert("세션 만료")
        window.location.href = "/login";
        return config;
    }

    config.headers = {    
        ...config.headers,
        "Content-Type": "application/json",
        "Authorization": `${Cookies.get("accessToken")}`,
    };

    return config;
};

export default requestHandler;