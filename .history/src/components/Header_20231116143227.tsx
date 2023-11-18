import axios from 'axios';
import { API_BASEURL } from '../constants';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosLogOut } from 'react-icons/io';
import styled from 'styled-components';

export const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const onClickLogout = () => {
    removeCookie('token');
    navigate('/login');
  };

  axios
    .get(`${API_BASEURL}/users`, {
      headers: {
        Authorization: cookies.token,
      },
    })
    .then((res) => {
      setUsername(res.data.name);
    })
    .catch(() => {
      alert('ユーザー取得に失敗しました。');
    });
  return (
    <StyledHeader>
      <div>
        <h1>書籍レビューアプリ</h1>
        <p>ユーザーネーム : {username}</p>
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
  padding: 0 30px;
  background-color: #484848;

  & > button {
    width: 60px;
    height: 60px;
    border: none;

    & > svg {
      width: 100%;
      height: 100%;
    }
  }
`;
