import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const CreateReview = () => {
  const [cookies] = useCookies();
  const navigate = useNavigate();

  // const onSubmit = () => {
  //   const data = {
  //     title: title,
  //     url: url,
  //     detail: detail,
  //     review: review,
  //   };

  //   axios
  //     .post(`${process.env.REACT_APP_API_URL}/books`, data, {
  //       headers: {
  //         Authorization: cookies.token,
  //       },
  //     })
  //     .then(() => navigate('/'))
  //     .catch(() => alert('投稿に失敗しました。'));
  // };

  return <StyledForm></StyledForm>;
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
  }

  a {
    margin-top: 30px;
  }
`;
