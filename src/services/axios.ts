// src/services/axios.ts

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // ✅ URL do backend
  timeout: 10000, // ⏱️ 10 segundos de tempo limite
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // necessário se backend usa sessão/cookie
});

export default api;