import { ReviewList } from './review/ReviewList';
import { ReviewListNoneAuth } from './review/ReviewListNoneAuth';
import { useSelector } from 'react-redux';
import { selectLogin } from './user/loginSlice';

export const Home = () => {
  const isLogin = useSelector(selectLogin);
  return (
    <>
      <ReviewList />
    </>
  );
};
