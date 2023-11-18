import axios from 'axios';
import { API_BASEURL } from '../constants';
import { useCookies } from 'react-cookie';

export const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  axios
    .get(`${API_BASEURL}/users`, {
      headers: {
        Authorization: cookies.token,
      },
    })
    .then((res) => {
      console.log(res.data);
    });
  return (
    <header>
      <h1>書籍レビューアプリ</h1>
    </header>
  );
};
