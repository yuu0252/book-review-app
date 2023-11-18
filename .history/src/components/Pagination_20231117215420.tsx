export const Pagination = () => {
  const onClickPrev = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
    setOffset(offset - 10);
  };

  const onClickNext = () => {
    setCurrentPage(currentPage + 1);
    setOffset(offset + 10);
  };
  return (
    <div>
      {currentPage !== 0 && <button onClick={onClickPrev}>前へ</button>}
      {isExistNext && <button onClick={onClickNext}>次へ</button>}
    </div>
  );
};
