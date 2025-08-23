import api from '../axios';

export const registerAPI = async (credentials) => {
  const res = await api.post('/auth/register', credentials);
  return res;
};

export const loginAPI = async (credentials) => {
  const res = await api.post('/auth/login', credentials);
  return res;
};
