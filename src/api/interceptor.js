import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://7cc2-103-171-59-75.ngrok.io',
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  },
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  },
);
