import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Header } from './Header';
import './reviewList.scss';
import { Pagination } from './Pagination';
import { selectPage } from '../pageSlice';
import { useSelector } from 'react-redux/es/exports';

export const ReviewList = () => {
  type obj = {
    id: 'string';
    title: 'string';
    url: 'string';
    detail: 'string';
    review: 'string';
    reviewer: 'string';
    isMine: true;
  };

  const [reviewList, setReviewList] = useState<Array<obj>>();
  const [isExistNext, setIsExistNext] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const page = useSelector(selectPage);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books?offset=${page * 10}`, {
        headers: {
          authorization: cookies.token,
        },
      })
      .then((res) => setReviewList(res.data))
      .catch(() => {
        alert('レビューリストの取得に失敗しました。');
      });

    axios
      .get(`${API_BASEURL}/books?offset=${page * 10 + 10}`, {
        headers: { authorization: cookies.token },
      })
      .then((res) => {
        res.data.length !== 0 ? setIsExistNext(true) : setIsExistNext(false);
      })
      .catch(() => {
        alert('レビューリストの取得に失敗しました。');
      });
  }, [page]);

  return (
    <>
      <Header />
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
        <Pagination isExistNext={isExistNext} />
      </section>
    </>
  );
};
