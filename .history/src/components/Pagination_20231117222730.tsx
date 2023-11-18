import { useSelector, useDispatch } from 'react-redux';
import { selectPage } from '../pageSlice';
import { prevPage, nextPage } from '../pageSlice';

export const Pagination = ({ isExistNext }: { isExistNext: boolean }) => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  return (
    <div>
      {page !== 0 && <button onClick={() => dispatch(prevPage())}>前へ</button>}
      {isExistNext && (
        <button onClick={() => dispatch(nextPage())}>次へ</button>
      )}
    </div>
  );
};
