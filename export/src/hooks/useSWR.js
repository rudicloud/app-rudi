import useSWR from 'swr';
import * as api from '../services/api';

export const useFetch = () => {
  return {
    GetProducts: () =>
      useSWR('getProducts', async () => {
        const response = await api.getProducts();
        return response;
      }),
  };
};
