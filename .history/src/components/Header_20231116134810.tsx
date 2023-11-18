import axios from "axios";
import { API_BASEURL } from "../constants";

export const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  axios.get(`${API_BASEURL}/users`, {
    headers: {
      Authorization: 
    }
  })
  return (
    <header>
      <h1>書籍レビューアプリ</h1>
    </header>
  );
};
