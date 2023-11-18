import { useCookies } from 'react-cookie';

export const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  return <></>;
};
