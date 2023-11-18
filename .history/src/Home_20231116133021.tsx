import { useCookies } from 'react-cookie';
import { ReviewList } from './components/ReviewList';
import './home.scss';

export const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  return <>{cookies.token ? <ReviewList /> : <ReviewList />}</>;
};
