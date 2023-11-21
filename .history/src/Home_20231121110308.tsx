import { ReviewList } from './post/ReviewList';
import { ReviewListNoneAuth } from './post/ReviewListNoneAuth';
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
