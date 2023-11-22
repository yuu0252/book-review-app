import { Suspense } from 'react';
import { ReviewList } from './review/ReviewList';
import { Loading } from './components/Loading';

export const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ReviewList />
    </Suspense>
  );
};
