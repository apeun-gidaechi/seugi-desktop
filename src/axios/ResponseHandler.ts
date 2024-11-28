import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { paths } from '@/Constants/paths';

const ResponseHandler = async (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
        Cookies.remove('accessToken');

        window.location.href = paths.login;

        return Promise.reject(error);
    }

    if (error.response?.status === 403) {
        Cookies.remove('accessToken');

        window.location.href = paths.login;

        return Promise.reject(error);
    }

    return Promise.reject(error);
};

export default ResponseHandler;