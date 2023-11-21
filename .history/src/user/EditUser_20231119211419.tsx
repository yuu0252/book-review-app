import axios from 'axios';
import { useCookies } from 'react-cookie';

export const EditUser = () => {
  const [cookies] = useCookies(['token']);
  axios
    .get(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        Authorization: cookies.token,
      },
    })
    .then((res) => console.log(res.data));
  return <div>Edit User</div>;
};
