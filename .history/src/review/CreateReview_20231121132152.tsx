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
    <StyledForm>
      <h1>レビュー新規作成</h1>
      <form onSubmit={onSubmit}>
        <label>▶ タイトル</label>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>▶ URL</label>
        <input required type="text" onChange={(e) => setUrl(e.target.value)} />
        <label>▶ 詳細</label>
        <input
          required
          type="text"
          onChange={(e) => setDetail(e.target.value)}
        />
        <label>▶ レビュー</label>
        <textarea required onChange={(e) => setReview(e.target.value)} />
        <button type="submit">登録</button>
      </form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
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

  form {
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
      resize: nonel;
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
  }

  a {
    margin-top: 30px;
  }
`;
