import { useUI } from '@contexts/ui.context';
import Cookies from 'js-cookie';
import { useMutation } from 'react-query';

import Router from 'next/router';
export interface LoginInputType {
  email: string;
  password: string;
}
async function login(input: LoginInputType) {
  return {
    token: `${input.email}`.split('').reverse().join(''),
  };
}
export const useLoginMutation = () => {
  const { authorize, closeModal, unauthorize } = useUI();
  return useMutation((input: LoginInputType) => login(input), {
    onSuccess: (data) => {
      localStorage.setItem('success log use login', JSON.stringify(data));

      Cookies.set('auth_token', data.token);
      authorize();
      closeModal();
    },
    onError: (data) => {
      localStorage.setItem('error log use login', JSON.stringify(data));

      Cookies.remove('auth_token');
      unauthorize();
      Router.push('/');
      console.log(data, 'login error response');
    },
  });
};
