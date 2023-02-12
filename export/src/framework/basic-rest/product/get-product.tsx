import { Product } from '@framework/types';
import { useQuery } from 'react-query';
import axios from 'axios';

export const fetchProduct = async (_slug: string) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  });
  const { data } = await api.get('products');
  return data;
};
export const useProductQuery = (slug: string) => {
  return useQuery<Product, Error>(
    ['https://rudicloud.vercel.app/api/v1/products', slug],
    () => fetchProduct(slug)
  );
};
