import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../api.config';

const axiosInstance = axios.create({
  baseURL: config.api.URL,
  headers: {},
});

export const SendAsyncV2 = <T>(
  request: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .request(request)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

axiosInstance.interceptors.request.use(async (request) => {
  // request.headers = {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  // };

  request.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  if (request.data && request.data.files) {
    request.headers['Content-Type'] = 'multipart/form-data';
  }

  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject(error?.response?.data);
  },
);
