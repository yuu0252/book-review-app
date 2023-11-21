import axios from 'axios';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import styled from 'styled-components';

type review = {
  title: string;
  url: string;
  detail: string;
  review: string;
  reviewer: string;
  isMine: boolean;
};

export const DetailReview = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState<review>();
  const navigate = useNavigate();
  const { id } = useParams();
  const [cookies] = useCookies();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/books/${id}`, {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then((res) => {
        setIsLoading(true);
        setReview(res.data);
      })
      .catch(() => {
        alert('レビュー詳細の取得に失敗しました。');
        navigate('/');
      });
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    review && (
      <StyledDetailReview>
        <h1>{review.title}</h1>
        <p>
          URL :&nbsp;
          <a target="_blank" href={review.url}>
            {review.url}
          </a>
        </p>
        <p>{review.detail}</p>
        <p>{review.review}</p>
        <p>{review.reviewer}</p>
        {review.isMine && (
          <button onClick={() => navigate('/edit')}>編集</button>
        )}
      </StyledDetailReview>
    )
  );
};

const StyledDetailReview = styled.div`
  a {
    text-decoration: underline;
  }
`;
