export const isTokenExpired = (token: string | null): boolean => {
    if (!token) return true;
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp;
    const currentTime = Date.now() / 1000;
    return exp < currentTime;
};
