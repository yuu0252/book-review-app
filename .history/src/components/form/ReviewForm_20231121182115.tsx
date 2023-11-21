import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type data = {
  title: string;
  url: string;
  detail: string;
  review: string;
};

export const ReviewForm = ({
  onSubmit,
}: {
  onSubmit: (data: data) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<data>({ mode: 'onChange' });

  return (
    <StyledForm>
      <h1>レビュー作成</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">タイトル</label>
        <input
          type="text"
          {...register('title', {
            required: 'タイトルを入力してください',
          })}
        />
        <p>{errors.title?.message}</p>
        <label htmlFor="url">URL</label>
        <input
          type="text"
          {...register('url', {
            required: 'URLを入力してください',
          })}
        />
        <p>{errors.url?.message}</p>
        <label htmlFor="detail">詳細</label>
        <input
          type="text"
          {...register('detail', {
            required: '詳細を入力してください',
          })}
        />
        <p>{errors.detail?.message}</p>
        <label htmlFor="review">レビュー</label>
        <input
          type="text"
          {...register('review', {
            required: 'レビューを入力してください',
          })}
        />
        <p>{errors.review?.message}</p>
        <button type="submit">登録</button>
      </form>
      <Link to="/">ホームへ</Link>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  label {
    display: inline-block;
  }
  label:not(:first-of-type) {
    margin-top: 15px;
  }
  input {
    width: 100%;
    padding: 5px 15px;
    margin: 5px 0;
  }

  textarea {
    width: 100%;
    padding: 5px 15px;
    margin: 5px 0;
    resize: none;
  }

  p {
    color: red;
  }

  button {
    display: block;
    width: 70%;
    color: white;
    font-weight: bold;
    letter-spacing: 1em;
    text-indent: 1em;
    padding: 10px 0;
    background-color: slateblue;
    border: 1px solid light-gray;
    margin: 60px auto;
  }
`;
