import { ReviewList } from './components/ReviewList';
import { ReviewListNoneAuth } from './components/ReviewListNoneAuth';
import { useSelector } from 'react-redux';
import { selectLogin } from './user/loginSlice';

export const Home = () => {
  const isLogin = useSelector(selectLogin);
  console.log(isLogin);
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
