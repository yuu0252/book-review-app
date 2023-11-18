import axios from 'axios';
import { API_BASEURL } from '../constants';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosLogOut } from 'react-icons/io';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const onClickLogin = () => {
    removeCookie('token');
    navigate('/login');
  };

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>書籍レビューアプリ</h1>
          <p>ユーザーネーム : {username}</p>
        </Link>
      </div>
      <button onClick={onClickLogout}>
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
    }
  }
`;
