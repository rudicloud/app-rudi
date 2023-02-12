import { QueryOptionsType, Order } from '@framework/types';
import { useQuery } from 'react-query';
import axios from 'axios';
const fetchOrders = async ({ queryKey }: any) => {
  const api = axios.create({
    baseURL: 'https://rsbase.fanitehub.com/api/v1',
  });
  const [_key, _params] = queryKey;
  const { data } = await api.get('orders');
  return {
    data: data,
  };
};

const useOrdersQuery = (options: QueryOptionsType) => {
  return useQuery(
    ['https://rsbase.fanitehub.com/api/v1/orders', options],
    fetchOrders
  );
};

export { useOrdersQuery, fetchOrders };
