import axios from 'axios';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

type review = {
  title: string;
  url: string;
  detail: string;
  review: string;
};

export const DetailReview = () => {
  const [review, setReview] = useState<review>();
  const navigate = useNavigate();
  const { id } = useParams();
  const [cookies] = useCookies();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books/${id}`, {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setReview(res.data);
      })
      .catch(() => {
        alert('レビュー詳細の取得に失敗しました。');
        navigate('/');
      });
  });
  return (
    review && (
      <StyledDetailReview>
        <h1>{review.title}</h1>
        <div>
          <span>URL : </span>
          <a target="_blank" href={review.url}>
            {review.url}
          </a>
        </div>
      </StyledDetailReview>
    )
  );
};

const StyledDetailReview = styled.div`
  a {
    text-decoration: underline;
  }
`;
