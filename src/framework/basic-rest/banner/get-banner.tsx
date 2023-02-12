import { QueryOptionsType, Category } from '@framework/types';
import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchCategory = async ({ queryKey }: any) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  });
  const [_key, _params] = queryKey;
  const { data } = await api.get('categories');
  return { categories: { data } };
};
export const useCategoriesQuery = (options: QueryOptionsType) => {
  return useQuery<{ categories: { data: Category[] } }, Error>(
    ['https://rudicloud.vercel.app/api/v1/categories', options],
    fetchCategory
  );
};
