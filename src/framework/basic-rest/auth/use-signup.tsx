import { useUI } from '@contexts/ui.context';
import Cookies from 'js-cookie';
import { useMutation } from 'react-query';

export interface SignUpInputType {
  email: string;
  password: string;
  password_confirm: string;
  firstname: string;
  lastname: string;
  remember_me: boolean;
}
async function signUp(input: SignUpInputType) {
  return {
    token: `${input.email}.${input.firstname}.${input.lastname}`
      .split('')
      .reverse()
      .join(''),
  };
}
console.log('signip debugger', signUp);

export const useSignUpMutation = () => {
  const { authorize, closeModal } = useUI();
  return useMutation((input: SignUpInputType) => signUp(input), {
    onSuccess: (data) => {
      Cookies.set('auth_token', data.token);
      authorize();
      closeModal();
    },
    onError: (data) => {
      console.log(data, 'login error response');
    },
  });
};
