import { useState } from 'react';
import styled from 'styled-components';

export const CreateReview = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [detail, setDetail] = useState('');
  const [review, setReview] = useState('');

  const onSubmit = () => {
    console.log(title, url, detail, review);
  };

  return (
    <StyledCreateReview>
      <h2>レビュー新規作成</h2>
      <form onSubmit={onSubmit}>
        <label>タイトル</label>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>URL</label>
        <input required type="text" onChange={(e) => setUrl(e.target.value)} />
        <label>詳細</label>
        <input
          required
          type="text"
          onChange={(e) => setDetail(e.target.value)}
        />
        <label>レビュー</label>
        <textarea required onChange={(e) => setReview(e.target.value)} />
        <button type="submit">登録</button>
      </form>
    </StyledCreateReview>
  );
};

const StyledCreateReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
