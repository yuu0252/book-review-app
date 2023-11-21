import axios from 'axios';

export const EditUser = () => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/user`)
    .then((res) => console.log(res.data));
  return <div>Edit User</div>;
};
