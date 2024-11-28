import { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const RequestHandler = async (config: InternalAxiosRequestConfig) => {
  const token = Cookies.get('accessToken');
  
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  
  return config;
};

export default RequestHandler;