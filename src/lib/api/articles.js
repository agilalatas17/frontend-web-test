import api from '../axios';
import { getCookie } from '../cookies';
import { jwtDecode } from 'jwt-decode';

export const getArticlesAPI = async (query = {}) => {
  const token = (await getCookie('token'))?.value;
  const role = (await getCookie('role'))?.value;

  let queryParams = {
    page: 1,
    limit: 10,
    sortBy: 'createdAt',
    sortOrder: 'desc',
    ...query,
  };

  if (token && role === 'Admin') {
    const userId = jwtDecode(token)?.userId;
    queryParams.userId = userId;
  }

  const res = await api.get('/articles', { params: queryParams });
  return res.data;
};

export const createArticleAPI = async (body) => {
  const res = await api.post(`/articles`, body);
  return res;
};

export const uploadImageAPI = async (body) => {
  const res = await api.post(`/upload`, body);
  return res;
};
