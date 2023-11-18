import { useCookies } from 'react-cookie';
import { ReviewList } from './components/ReviewList';
import { ReviewListNoneAuth } from './components/ReviewListNoneAuth';
import { useSelector } from 'react-redux';
import { selectLogin } from './user/loginSlice';

export const Home = () => {
  const isLogin = useSelector(selectLogin);
  return (
    <>
      {isLogin ? (
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
