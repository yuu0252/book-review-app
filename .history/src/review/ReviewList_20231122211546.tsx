import axios from 'axios';
import { useEffect, useState, Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Header } from '../components/Header';
import './reviewList.scss';
import { Pagination } from '../components/Pagination';
import { selectPage } from '../pageSlice';
import { selectLogin } from '../user/loginSlice';
import { useSelector } from 'react-redux/es/exports';
import { HeaderNoneAuth } from '../components/HeaderNoneAuth';
import { Loading } from '../components/Loading';

type obj = {
  id: 'string';
  title: 'string';
  url: 'string';
  detail: 'string';
  review: 'string';
  reviewer: 'string';
  isMine: true;
};

const ReviewListFunction = ({
  reviewList,
  setReviewList,
}: {
  reviewList?: Array<obj>;
  setReviewList?: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [cookies] = useCookies(['token']);
  const page = useSelector(selectPage);

  useEffect(() => {
    if (!reviewList || !setReviewList) return;
    if (isLogin) {
      throw axios
        .get(`${process.env.REACT_APP_API_URL}/books?offset=${page * 10}`, {
          headers: {
            authorization: cookies.token,
          },
        })
        .then((res) => {
          setReviewList(res.data);
          axios
            .get(
              `${process.env.REACT_APP_API_URL}/books?offset=${page * 10 + 10}`,
              {
                headers: { authorization: cookies.token },
              }
            )
            .then((res) => {
              res.data.length !== 0
                ? setIsExistNext(true)
                : setIsExistNext(false);
            })
            .catch(() => {
              alert('レビューリストの取得に失敗しました。');
            });
        })
        .catch(() => {
          alert('レビューリストの取得に失敗しました。');
        });
    } else {
      throw axios
        .get(
          `${process.env.REACT_APP_API_URL}/public/books?offset=${page * 10}`
        )
        .then((res) => setReviewList(res.data))
        .catch(() => {
          alert('レビューリストの取得に失敗しました。');
        });
    }
  }, [page]);
  return (
    <ul className="review__container">
      {reviewList?.map((review) => (
        <li key={review.id} className="review">
          <Link
            to={`/detail/${review.id}`}
            state={{ title: review.title }}
            className="review__link"
          >
            <h2 className="review__title">{review.title}</h2>
            <p className="review__url">URL : {review.url}</p>
            <p className="review__text">{review.review}</p>
            <p className="review__reviewer">{review.reviewer}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const ReviewList = () => {
  const [reviewList, setReviewList] = useState<Array<obj>>();
  const [isExistNext, setIsExistNext] = useState<boolean>(false);
  const isLogin = useSelector(selectLogin);
  const navigate = useNavigate();

  return (
    <>
      {isLogin ? <Header /> : <HeaderNoneAuth />}

      <section>
        {isLogin && (
          <div className="create-btn">
            <button onClick={() => navigate('/new')}>レビュー新規作成</button>
          </div>
        )}
        <Suspense fallback={<Loading />}>
          <ReviewListFunction
            reviewList={reviewList}
            setReviewList={setReviewList}
          />
        </Suspense>
        <Pagination isExistNext={isExistNext} />
      </section>
    </>
  );
};
