import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { API_BASEURL } from '../constants';
import { useCookies } from 'react-cookie';

export const Login: React.FC = () => {
  const [isFailured, setIsFailured] = useState<boolean>();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const onSubmitLogin = (email: string, password: string) => {
    axios
      .post(`${API_BASEURL}/signin`, { email: email, password: password })
      .then((res) => {
        setCookie('token', `Bearer ${res.data.token}`, { maxAge: 1 });
        navigate('/');
      })
      .catch(() => {
        setIsFailured(true);
      });
  };
  return (
    <>
      {isFailured && <StyledError>ログインに失敗しました。</StyledError>}
      <StyledForm>
        <h1>ログイン</h1>
        <AuthForm onSubmit={onSubmitLogin} />
        <Link to="/signup">ユーザー登録</Link>
      </StyledForm>
    </>
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

const StyledError = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  color: white;
  text-align: center;
  padding: 15px 0;
  background-color: red;
`;
