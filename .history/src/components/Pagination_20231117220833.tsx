import { useDispatch } from "react-redux"

export const Pagination = ({ isExistNext }: { isExistNext: boolean }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {currentPage !== 0 && <button onClick={() => dispatch(nextPage()))}>前へ</button>}
      {isExistNext && <button onClick={onClickNext}>次へ</button>}
    </div>
  );
};
