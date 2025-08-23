import axios from 'axios';

const BASE_URL_API = 'https://test-fe.mysellerpintar.com/api';

const api = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
