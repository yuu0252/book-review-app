import axios from 'axios';

export const EditUser = () => {
  axios.get(`${process.env.REACT_APP_API_URL}/user`);
  return <div>Edit User</div>;
};
