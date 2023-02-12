import { QueryOptionsType, Product } from '@framework/types';
//import http from '@framework/utils/http';
//import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import axios from 'axios';
export const fetchSearchedProducts = async ({ queryKey }: any) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  });
  const [_key, _params] = queryKey;

  const { data } = await api.get('products');

  function searchProduct(product: any) {
    return product.name.toLowerCase().indexOf(_params.text.toLowerCase()) > -1;
  }

  return data.filter(searchProduct);
};
export const useSearchQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>(
    ['https://rudicloud.vercel.app/api/v1/products', options],
    fetchSearchedProducts
  );
};
