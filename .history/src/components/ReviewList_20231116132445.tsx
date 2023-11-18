export const ReviewList = () => {
  return (
    <>
      {reviewList?.map((review) => (
        <li key={review.id} className="review">
          <Link to={`/books/${review.id}`} className="review__link">
            <h3 className="review__title">{review.title}</h3>
            <p className="review__text">{review.review}</p>
            <p className="review__reviewer">{review.reviewer}</p>
          </Link>
        </li>
      ))}
    </>
  );
};
