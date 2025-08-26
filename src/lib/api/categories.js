import api from '../axios';

export const getCategoriesAPI = async () => {
  const res = await api.get('/categories');
  return res;
};
