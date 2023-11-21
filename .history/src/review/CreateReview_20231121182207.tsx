import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReviewForm } from '../components/form/ReviewForm';

type data = {
  title: string;
  url: string;
  detail: string;
  review: string;
};

export const CreateReview = () => {
  const [cookies] = useCookies();
  const navigate = useNavigate();

  const onSubmitCreate = (data: data) =>
    axios
      .post(`${process.env.REACT_APP_API_URL}/books`, data, {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then(() => navigate('/'))
      .catch(() => alert('投稿に失敗しました。'));

  return (
    <StyledCreateReview>
      <ReviewForm onSubmit={onSubmitCreate} />;
    </StyledCreateReview>
  );
};

const StyledCreateReview = styled.div`
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
