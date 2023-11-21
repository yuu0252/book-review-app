import { useState } from 'react';

export const CreateReview = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [detail, setDetail] = useState('');
  const [review, setReview] = useState('');

  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit}>
      <label>タイトル</label>
      <input required type="text" onChange={(e) => setTitle(e.target.value)} />
      <label>URL</label>
      <input required type="text" onChange={(e) => setUrl(e.target.value)} />
      <label>詳細</label>
      <input required type="text" onChange={(e) => setDetail(e.target.value)} />
      <label>レビュー</label>
      <textarea required onChange={(e) => setReview(e.target.value)} />
      <button type="submit">登録</button>
    </form>
  );
};
