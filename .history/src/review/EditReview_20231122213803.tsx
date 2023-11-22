import { useState, useEffect, Suspense } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ReviewForm } from '../components/form/ReviewForm';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Loading } from '../components/Loading';

type data = {
  title: string;
  url: string;
  detail: string;
  review: string;
};

const EditReviewFunction = ({
  review,
  setReview,
}: {
  review?: data;
  setReview?: React.Dispatch<React.SetStateAction<undefined>>;
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cookies] = useCookies();

  if (review && setReview) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books/${id}`, {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then((res) => {
        setReview(res.data);
      })
      .catch(() => {
        alert('レビュー詳細の取得に失敗しました。');
        navigate('/');
      });
  }

  const onSubmitEdit = (data: data) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/books/${id}`, data, {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then(() => navigate('/'))
      .catch(() => alert('投稿に失敗しました。'));
  };

  const onClickDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/books/${id}`, {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        alert('レビューの削除に失敗しました。');
      });
  };
  return (
    <StyledEditReview>
      <h1>レビュー編集</h1>
      <ReviewForm onSubmit={onSubmitEdit} review={review} />
      <button className="delete-btn" onClick={() => onClickDelete()}>
        削除
      </button>
      <Link to="/">ホームへ</Link>
    </StyledEditReview>
  );
};

export const EditReview = () => {
  const [review, setReview] = useState();

  return (
    <Suspense fallback={<Loading />}>
      <EditReviewFunction review={review} setReview={setReview} />
    </Suspense>
  );
};

const StyledEditReview = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
  margin: 60px auto;

  h1 {
    margin-bottom: 30px;
  }

  a {
    text-align: center;
  }

  .delete-btn {
    margin: -30px auto 15px;
    padding: 5px 15px;
    background-color: red;
    color: white;
  }
`;
