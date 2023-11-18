import axios from 'axios';
import { API_BASEURL } from '../constants';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

export const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState('');

  const onClickLogout = () => {};

  axios
    .get(`${API_BASEURL}/users`, {
      headers: {
        Authorization: cookies.token,
      },
    })
    .then((res) => {
      setUsername(res.data.name);
    });
  return (
    <header>
      <div>
        <h1>書籍レビューアプリ</h1>
        <p>ユーザーネーム : {username}</p>
      </div>
      <button onClick={onClickLogout}>ログアウト</button>
    </header>
  );
};
