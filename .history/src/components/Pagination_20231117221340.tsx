import { useSelector, useDispatch } from 'react-redux';
import { selectPage } from '../pageSlice';

export const Pagination = ({ isExistNext }: { isExistNext: boolean }) => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  return (
    <div>
      {currentPage !== 0 && (
        <button onClick={() => dispatch(nextPage())}>前へ</button>
      )}
      {isExistNext && <button onClick={onClickNext}>次へ</button>}
    </div>
  );
};
