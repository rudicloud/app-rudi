import { CategoriesQueryOptionsType, Category } from '@framework/types';
import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchCategories = async ({ queryKey }: any) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  });
  const [_key, _params] = queryKey;
  const { data } = await api.get('categories');
  return { categories: { data: data.data as Category[] } };
};

export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  return useQuery<{ categories: { data: Category[] } }, Error>(
    ['https://rudicloud.vercel.app/api/v1/categories', options],
    fetchCategories
  );
};
///
