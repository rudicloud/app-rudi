import { Shop } from '@framework/types';
import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchShop = async (_slug: string) => {
  const api = axios.create({
    baseURL: 'https://rsbase.fanitehub.com/api/v1',
  });
  const { data } = await api.get(`${'shops'}`);
  return data;
};
export const useSchoolQuery = (slug: string) => {
  return useQuery<Shop, Error>(
    ['https://rsbase.fanitehub.com/api/v1/shops', slug],
    () => fetchShop(slug)
  );
};
