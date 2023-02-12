import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import axios from 'axios';
const fetchAddress = async () => {
  const api = axios.create({
    baseURL: 'https://rsbase.fanitehub.com/api',
    headers: { 'Access-Control-Allow-Origin': '*' },
  });
  //const [_key, _params] = queryKey;
  const { data } = await api.get('address');
  return {
    data: data,
  };
  //
  //const { data } = await http.get('https://rsbase.fanitehub.com/api/address');
  // return {
  //   data: data,
  // };
};

const useAddressQuery = () => {
  return useQuery('https://rsbase.fanitehub.com/api/address', fetchAddress);
};

export { useAddressQuery, fetchAddress };
