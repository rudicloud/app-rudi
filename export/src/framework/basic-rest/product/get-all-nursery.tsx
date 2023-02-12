import { QueryOptionsType, Product } from '@framework/types';
import shuffle from 'lodash/shuffle';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
type PaginatedProduct = {
  data: Product[];
  paginatorInfo: any;
};
const fetchNursery = async ({ queryKey }: any) => {
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
    fetchNursery,
    {
      getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    }
  );
};

export { useProductsQuery, fetchNursery };
