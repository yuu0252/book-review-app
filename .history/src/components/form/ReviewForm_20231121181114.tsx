import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type data = {
  title: string;
  url: string;
  detail: string;
  review: string;
};

export const CreateReview = () => {
  const [cookies] = useCookies();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<data>({ mode: 'onChange' });

  const onSubmit = (data: data) =>
    axios
      .post(`${process.env.REACT_APP_API_URL}/books`, data, {
        headers: {
          Authorization: cookies.token,
        },
      })
      .then(() => navigate('/'))
      .catch(() => alert('投稿に失敗しました。'));

  return (
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
  );
};
