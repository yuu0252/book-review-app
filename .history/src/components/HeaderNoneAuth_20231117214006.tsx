import axios from 'axios';
import { API_BASEURL } from '../constants';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosLogOut } from 'react-icons/io';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderNoneAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate('/login');
  };

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>書籍レビューアプリ</h1>
          <p>ログインしていません</p>
        </Link>
      </div>
      <button onClick={onClickLogin}>
        <IoIosLogOut />
      </button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
  & > button {
    width: 60px;
    height: 60px;
    border: none;
    cursor: pointer;

    & > svg {
      width: 100%;
      height: 100%;
      background-color: inherit;
    }
  }
`;
