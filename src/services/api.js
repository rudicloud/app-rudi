import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/rsbase/v1',
});

export const getProducts = async () => {
  try {
    const response = await api.get('products');
    console.log('axios - products:', response);
    return response.data;
  } catch (error) {}
};
