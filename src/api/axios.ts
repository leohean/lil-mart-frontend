import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  const publicGetPaths = ['/product/', '/product'];
  const publicPostPaths = ['/auth/login', '/auth/register', '/auth/registerMarket'];

  const isPublic =
    (config.method === 'get' && publicGetPaths.some(path => config.url?.startsWith(path))) ||
    (config.method === 'post' && publicPostPaths.some(path => config.url?.startsWith(path)));

  if (token && !isPublic) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});


export default api;