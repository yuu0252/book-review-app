import { useCookies } from 'react-cookie';
import { ReviewList } from './components/ReviewList';

export const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  return <>{cookies.token ? <ReviewList />}</>;
};
