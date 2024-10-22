import Cookies from "js-cookie";

class Token {
    public getToken(key: string): string | undefined {
        return Cookies.get(key);
    }

    public setToken(key: string, token: string): void {
        Cookies.set(key, token);
    }

    public clearToken() {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
    }
}

export default new Token();