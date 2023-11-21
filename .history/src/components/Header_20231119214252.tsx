import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosLogOut } from 'react-icons/io';
import { FaUserEdit } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../user/loginSlice';

export const Header = () => {
  const [cookies, , removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickLogout = () => {
    removeCookie('token');
    dispatch(logout());
    navigate('/');
  };

  const onClickEditUser = () => {
    navigate('/profile');
  };

  axios
    .get(`${process.env.REACT_APP_API_URL}/users`, {
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
        <Link to="/">
          <h1>書籍レビューアプリ</h1>
          <p>ユーザーネーム : {username}</p>
        </Link>
      </div>
      <div>
        <button onClick={onClickEditUser}>
          <FaUserEdit />
        </button>
        <button onClick={onClickLogout}>
          <IoIosLogOut />
        </button>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
  & button {
    width: 60px;
    height: 60px;
    border: none;
    cursor: pointer;

    & > svg {
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
  }
`;
