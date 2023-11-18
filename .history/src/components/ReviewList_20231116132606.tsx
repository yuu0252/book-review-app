export const ReviewList = () => {
  return (
    <section>
      <ul className="review__container">
        {reviewList?.map((review) => (
          <li key={review.id} className="review">
            <Link to={`/books/${review.id}`} className="review__link">
              <h3 className="review__title">{review.title}</h3>
              <p className="review__text">{review.review}</p>
              <p className="review__reviewer">{review.reviewer}</p>
            </Link>
          </li>
        ))}
      </ul>
      {currentPage !== 0 && <button onClick={onClickPrev}>前へ</button>}
      {isExistNext && <button onClick={onClickNext}>次へ</button>}
    </section>
  );
  );
};
