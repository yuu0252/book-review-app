import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { AuthFormWithName } from '../components/AuthFormWithNameAndIcon';
import { API_BASEURL } from '../constants';
import { Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

export const Signup = () => {
  const navigate = useNavigate();
  const [isFailured, setIsFailured] = useState<boolean>();
  const [iconFile, setIconFile] = useState<FormData>();
  const cookie = new Cookies();
  const dispatch = useDispatch();

  const onSubmitSignup = (name: string, email: string, password: string) => {
    axios
      .post(`${API_BASEURL}/users`, {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        if (iconFile) {
          axios
            .post(`${API_BASEURL}/uploads`, iconFile, {
              headers: {
                authorization: `Bearer ${res.data.token}`,
              },
            })
            .then(() => {
              cookie.set('token', `Bearer ${res.data.token}`, { maxAge: 1800 });
              dispatch(login());
              navigate('/');
            })
            .catch(() => {
              setIsFailured(true);
            });
        } else {
          cookie.set('token', `Bearer ${res.data.token}`, { maxAge: 1800 });
          navigate('/');
        }
      })
      .catch(() => {
        setIsFailured(true);
      });
  };
  return (
    <>
      {isFailured && <StyledError>ユーザー登録に失敗しました。</StyledError>}
      <StyledForm>
        <h1>ユーザー登録</h1>
        <AuthFormWithName onSubmit={onSubmitSignup} setIconFile={setIconFile} />
        <Link to="/login">ログイン画面</Link>
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
  padding: 30px 60px;
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
      margin: 30px auto 0;
    }
  }

  div:last-of-type {
    margin-top: 30px;
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
