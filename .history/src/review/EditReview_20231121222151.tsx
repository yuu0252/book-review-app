import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ReviewForm } from '../components/form/ReviewForm';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export const EditReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cookies] = useCookies();
  const [review, setReview] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books/${id}`, {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then((res) => {
        setReview(res.data);
        navigate('/');
      })
      .catch(() => {
        alert('レビュー詳細の取得に失敗しました。');
      });
  }, []);

  const onSubmitEdit = () => {};
  return (
    <StyledEditReview>
      <h1>レビュー編集</h1>
      <ReviewForm onSubmit={onSubmitEdit} review={} />
      <Link to="/">ホームへ</Link>
    </StyledEditReview>
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
`;
