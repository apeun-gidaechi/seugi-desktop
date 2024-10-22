import Cookies from "js-cookie";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "@/Constants/token/token.constants";

class Token {
    public getToken(key: string): string | undefined {
        return Cookies.get(key);
    }

    public setToken(key: string, token: string): void {
        Cookies.set(key, token);
    }

    public clearToken() {
        Cookies.remove(ACCESS_TOKEN_KEY);
        Cookies.remove(REFRESH_TOKEN_KEY);
    }
}

export default new Token();