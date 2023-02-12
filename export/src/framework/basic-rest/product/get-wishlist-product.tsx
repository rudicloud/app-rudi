import { QueryOptionsType, Product } from '@framework/types';
import axios from 'axios';
import { useQuery } from 'react-query';

export const fetchWishlistProducts = async ({ queryKey }: any) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  });
  const [_key, _params] = queryKey;
  const { data } = await api.get('products');
  return data;
};
export const useWishlistProductsQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>(
    ['https://rudicloud.vercel.app/api/v1/products', options],
    fetchWishlistProducts
  );
};
