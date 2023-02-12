import { QueryOptionsType, Product } from '@framework/types';
import { useQuery } from 'react-query';
import axios from 'axios';
export const fetchRelatedProducts = async ({ queryKey }: any) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  });
  const [_key, _params] = queryKey;
  const { data } = await api.get('products');
  return data;
};
export const useRelatedProductsQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>(
    ['https://rudicloud.vercel.app/api/v1/products', options],
    fetchRelatedProducts
  );
};
