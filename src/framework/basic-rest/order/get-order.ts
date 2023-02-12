import { Order } from '@framework/types';
import { useQuery } from 'react-query';
import axios from 'axios';
export const fetchOrder = async (_id: string) => {
  const api = axios.create({
    baseURL: 'https://rudicloud.vercel.app/api/v1',
  });
  const { data } = await api.get(`orders`);
  return data;
};
export const useOrderQuery = (id: string) => {
  return useQuery<Order, Error>('https://rudicloud.vercel.app/api/v1/orders', () =>
    fetchOrder(id)
  );
};