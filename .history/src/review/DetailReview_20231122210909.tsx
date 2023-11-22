import axios from 'axios';
import { useState, Suspense } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import styled from 'styled-components';

type review = {
  id: string;
  title: string;
  url: string;
  detail: string;
  review: string;
  reviewer: string;
  isMine: boolean;
};

const DetailReviewFunction = ({
  review,
  setState,
}: {
  review?: review;
  setState?: React.Dispatch<React.SetStateAction<undefined>>;
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cookies] = useCookies();

  if (!review && setState) {
    throw axios
      .get(`${process.env.REACT_APP_API_URL}/books/${id}`, {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then((res) => {
        setState(res.data);
      })
      .catch(() => {
        alert('レビュー詳細の取得に失敗しました。');
        navigate('/');
      });
  }

  return (
    review && (
      <StyledDetailReview>
        <h1>{review.title}</h1>
        <p>
          URL :&nbsp;
          <a target="_blank" href={review.url}>
            {review.url}
          </a>
        </p>
        <p>詳細 : {review.detail}</p>
        <p>レビュー : {review.review}</p>
        <p>レビューワー : {review.reviewer}</p>
        {review.isMine && (
          <button
            onClick={() => navigate(`/edit/${review.id}`, { state: review })}
          >
            編集
          </button>
        )}
      </StyledDetailReview>
    )
  );
};

export const DetailReview = () => {
  const location = useLocation();
  console.log(location.state.title + 'が選択されました。');
  const [review, setReview] = useState();
  return (
    <Suspense fallback={<Loading />}>
      <DetailReviewFunction review={review} setState={setReview} />
    </Suspense>
  );
};

const StyledDetailReview = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 60px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
  margin: 60px auto;

  h1 {
    margin-bottom: 30px;
  }

  a {
    text-decoration: underline;
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 30px;
  }

  button {
    padding: 5px 15px;
    background-color: purple;
    border-radius: 5px;
    color: white;
  }
`;
