import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ReviewForm } from '../components/form/ReviewForm';

export const EditReview = () => {
  const location = useLocation();
  const onSubmitEdit = () => {};
  return (
    <StyledEditReview>
      <h1>レビュー編集</h1>
      <ReviewForm onSubmit={onSubmitEdit} />
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
