import axios from 'axios';
import { API_BASEURL } from '../constants';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

export const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState('');

  axios
    .get(`${API_BASEURL}/users`, {
      headers: {
        Authorization: cookies.token,
      },
    })
    .then((res) => {
      console.log(res.data.name);
    });
  return (
    <header>
      <h1>書籍レビューアプリ</h1>
    </header>
  );
};
