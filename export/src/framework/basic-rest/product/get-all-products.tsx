import { QueryOptionsType, Product } from '@framework/types';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import shuffle from 'lodash/shuffle';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
type PaginatedProduct = {
  data: Product[];
  paginatorInfo: any;
};
const fetchProducts = async ({ queryKey }: any) => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  });
  const [_key, _params] = queryKey;
  const { data } = await api.get('products');
  return {
    data: shuffle(data) as Product[],
    paginatorInfo: {
      nextPageUrl: '',
    },
  };
};

const useProductsQuery = (options: QueryOptionsType) => {
  return useInfiniteQuery<PaginatedProduct, Error>(
    ['https://rudicloud.vercel.app/api/v1/products', options],
    fetchProducts,
    {
      getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    }
  );
};

export { useProductsQuery, fetchProducts };
