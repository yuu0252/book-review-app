import { useCookies } from 'react-cookie';
import { ReviewList } from './components/ReviewList';
import { ReviewListNoneAuth } from './components/ReviewListNoneAuth';
import { useSelector} from "react-redux"

export const Home = () => {
  const isLogin = 
  return (
    <>
      {cookies.token ? (
        <>
          <ReviewList />
        </>
      ) : (
        <>
          <ReviewListNoneAuth />
        </>
      )}
    </>
  );
};
