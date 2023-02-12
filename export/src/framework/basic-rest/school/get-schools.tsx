import { ShopsQueryOptionsType, Shop } from '@framework/types';
import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchSchools = async ({ queryKey }: any) => {
  const api = axios.create({
    baseURL: 'https://rsbase.fanitehub.com/api/v1',
  });
  const [_key, _params] = queryKey;
  const { data } = await api.get('shops');
  return { shop: { data } };
};

export const useSchoolsQuery = (options: ShopsQueryOptionsType) => {
  return useQuery<{ shop: { data: Shop[] } }, Error>(
    ['https://rsbase.fanitehub.com/api/v1/shops', options],
    fetchSchools
  );
};
