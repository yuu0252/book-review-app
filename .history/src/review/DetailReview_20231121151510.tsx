import axios from 'axios';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';

export const DetailReview = () => {
  const [review, setReview] = useState();
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
        setReview(res.data);
      })
      .catch(() => {
        alert('レビュー詳細の取得に失敗しました。');
        navigate('/');
      });
  });
  return (
    review && (
      <div>
        <h1>{review.title}</h1>
      </div>
    )
  );
};
