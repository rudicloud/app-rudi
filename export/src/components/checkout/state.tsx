import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  defaultShipping: 0,
  address: '',
  fullname: '',
  email: '',
  mobile: '',
});

export { useGlobalState, setGlobalState };
