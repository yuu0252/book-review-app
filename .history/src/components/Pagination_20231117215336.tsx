export const Pagination = () => {
  return (
    <div>
      {' '}
      {currentPage !== 0 && <button onClick={onClickPrev}>前へ</button>}
      {isExistNext && <button onClick={onClickNext}>次へ</button>}
    </div>
  );
};
