import type {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {PLATFORM_OS_NAME} from 'src/configs/consts';
import axios from 'axios';

const ContentType = 'Content-Type';

export const httpConfig: AxiosRequestConfig = {
  // baseURL: APP_SERVER_URL,
  headers: {
    [ContentType]: 'application/json',
  },
};

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // const token = localStorageService.getAccessToken();
    // if (token) {
    //   config.headers.Authorization = 'Bearer ' + token;
    // }
    config.headers = {
      ...config.headers,
      'X-Requested-By': PLATFORM_OS_NAME,
      'X-Device-OS': PLATFORM_OS_NAME,
      'Content-Type': 'application/json',
    };

    return config;
  },
  async error => {
    await Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error?.response?.status) {
      switch (error?.response?.status) {
        case 502:
          break;

        case 500:
          break;

        case 401:
          break;

        default:
          break;
      }
    }
    return Promise.reject(error);
  },
);
